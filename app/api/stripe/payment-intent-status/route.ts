import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as { payment_intent?: string };
        const payment_intent = body?.payment_intent as string | undefined;

        if (!payment_intent) {
            return NextResponse.json({ error: "Missing payment_intent" }, { status: 400 });
        }

        const pi = await stripe.paymentIntents.retrieve(payment_intent);
        return NextResponse.json({ status: pi.status });
    } catch {
        return NextResponse.json({ error: "Failed to retrieve PaymentIntent" }, { status: 500 });
    }
}
