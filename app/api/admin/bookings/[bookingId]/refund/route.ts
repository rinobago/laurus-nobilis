import { authOptions, isAdminEmail } from "@/lib/auth/options";
import { refundBooking } from "@/lib/db/refundBooking";
import { stripe } from "@/lib/stripe";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED_REFUND_PERCENTS = [50, 90, 100] as const;

function isAllowedPercent(value: unknown): value is (typeof ALLOWED_REFUND_PERCENTS)[number] {
    return ALLOWED_REFUND_PERCENTS.includes(value as any);
}

export async function POST(req: NextRequest) {
    try {
        // 1) Require logged-in admin
        const session = await getServerSession(authOptions);
        const email = session?.user?.email ?? null;

        if (!isAdminEmail(email)) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // 2) Optional same-origin check (extra layer, not primary security)
        const host = req.headers.get("host");
        const origin = req.headers.get("origin");

        if (origin && host && new URL(origin).host !== host) {
            return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
        }

        // 3) Parse and validate input
        const body = await req.json();
        const paymentIntentId: string | null = body?.paymentIntentId ?? null;
        const percent = body?.percent;
        const bookingId = body?.bookingId;

        if (typeof bookingId !== "string" || !bookingId.trim()) {
            return NextResponse.json({ error: "Invalid bookingId" }, { status: 400 });
        }

        if (typeof paymentIntentId !== "string" || !paymentIntentId.startsWith("pi_")) {
            return NextResponse.json({ error: "Invalid paymentIntentId" }, { status: 400 });
        }

        if (!isAllowedPercent(percent)) {
            return NextResponse.json({ error: "Invalid refund percent" }, { status: 400 });
        }

        // 4) Get payment intent from Stripe
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        if (paymentIntent.status !== "succeeded") {
            return NextResponse.json(
                { error: `Payment is not refundable. Status: ${paymentIntent.status}` },
                { status: 400 },
            );
        }

        // 5) Prevent over-refunding
        const chargeId =
            typeof paymentIntent.latest_charge === "string"
                ? paymentIntent.latest_charge
                : paymentIntent.latest_charge?.id;

        if (!chargeId) {
            return NextResponse.json(
                { error: "No charge found for this payment" },
                { status: 400 },
            );
        }

        const charge = await stripe.charges.retrieve(chargeId);

        const originalAmount = paymentIntent.amount;
        const alreadyRefunded = charge.amount_refunded ?? 0;
        const remainingRefundable = originalAmount - alreadyRefunded;

        if (remainingRefundable <= 0) {
            return NextResponse.json({ error: "Payment already fully refunded" }, { status: 400 });
        }

        const refundAmount = Math.round(originalAmount * (percent / 100));

        if (refundAmount > remainingRefundable) {
            return NextResponse.json(
                {
                    error: "Requested refund is greater than remaining refundable amount",
                    remainingRefundable,
                },
                { status: 400 },
            );
        }

        // 6) Create refund
        const refund = await stripe.refunds.create({
            payment_intent: paymentIntentId,
            amount: refundAmount,
            metadata: {
                requested_by: email ?? "",
                refund_percent: String(percent),
            },
        });

        await refundBooking(body?.bookingId);

        console.log(`Refund amount: ${refundAmount / 100}`);

        return NextResponse.json({ ok: true });
    } catch (err) {
        return NextResponse.json(
            {
                error: "Failed to refund booking",
                details:
                    process.env.NODE_ENV === "production"
                        ? undefined
                        : err instanceof Error
                          ? err.message
                          : String(err),
            },
            { status: 500 },
        );
    }
}
