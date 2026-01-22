import { stripe } from "@/lib/stripe";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

type FinalizeBody = { payment_intent?: string };

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as FinalizeBody;
        const payment_intent = body?.payment_intent;

        if (!payment_intent) {
            return NextResponse.json({ error: "Missing payment_intent" }, { status: 400 });
        }

        const pi = await stripe.paymentIntents.retrieve(payment_intent);

        if (pi.status !== "succeeded") {
            return NextResponse.json({ error: "Payment not complete" }, { status: 409 });
        }

        const supabase = createSupabaseServerClient();

        const { data: existingPayment, error: existingError } = await supabase
            .from("payments")
            .select("id")
            .eq("stripe_payment_intent_id", payment_intent)
            .limit(1)
            .maybeSingle();

        if (existingError) {
            return NextResponse.json(
                {
                    error: "Failed to check payment",
                    details:
                        process.env.NODE_ENV === "production" ? undefined : existingError.message,
                },
                { status: 500 },
            );
        }

        if (existingPayment) {
            return NextResponse.json({ ok: true, alreadyRecorded: true });
        }

        const md = pi.metadata || {};
        const firstName = (md.first_name || "").trim();
        const lastName = (md.last_name || "").trim();
        const email = (md.email || "").trim();
        const phone = (md.phone || "").trim();
        const checkIn = (md.check_in || "").trim();
        const checkOut = (md.check_out || "").trim();
        const guestsCount = Number.parseInt(String(md.guests || ""), 10);

        if (
            !firstName ||
            !lastName ||
            !email ||
            !phone ||
            !checkIn ||
            !checkOut ||
            !Number.isInteger(guestsCount)
        ) {
            return NextResponse.json({ error: "Missing booking metadata" }, { status: 400 });
        }

        const { data: existingCustomer, error: findErr } = await supabase
            .from("customers")
            .select("id")
            .ilike("email", email)
            .limit(1)
            .maybeSingle();

        if (findErr) {
            return NextResponse.json({ error: "Failed to find customer" }, { status: 500 });
        }

        let customer = existingCustomer?.id;

        if (!customer) {
            const { data: newCustomer, error: insertErr } = await supabase
                .from("customers")
                .insert({ first_name: firstName, last_name: lastName, email, phone })
                .select("id")
                .single();

            if (insertErr || !newCustomer) {
                return NextResponse.json({ error: "Failed to create customer" }, { status: 500 });
            }

            customer = newCustomer.id;
        }

        const { data: booking, error: bookingError } = await supabase
            .from("bookings")
            .insert({
                customer_id: customer,
                checkin_date: checkIn,
                checkout_date: checkOut,
                guests_count: guestsCount,
                status: "active",
            })
            .select("id")
            .single();

        if (bookingError || !booking) {
            return NextResponse.json(
                {
                    error: "Failed to create booking",
                    details:
                        process.env.NODE_ENV === "production" ? undefined : bookingError?.message,
                },
                { status: 500 },
            );
        }

        const { error: paymentError } = await supabase.from("payments").insert({
            booking_id: booking.id,
            stripe_payment_intent_id: payment_intent,
            total_amount_cents: pi.amount,
        });

        if (paymentError) {
            return NextResponse.json(
                {
                    error: "Failed to create payment",
                    details:
                        process.env.NODE_ENV === "production" ? undefined : paymentError.message,
                },
                { status: 500 },
            );
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Finalize booking failed", err);
        return NextResponse.json(
            {
                error: "Failed to finalize booking",
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
