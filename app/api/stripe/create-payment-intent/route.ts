import { fromYMD, nightsBetween, pricePerNight } from "@/lib/dateParams";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { check_in, check_out } = await req.json();

    const checkIn = check_in ? fromYMD(check_in) : undefined;
    const checkOut = check_out ? fromYMD(check_out) : undefined;

    if (!checkIn || !checkOut) {
        return NextResponse.json({ error: "Missing dates" }, { status: 400 });
    }

    const nights = nightsBetween(checkIn, checkOut);
    const nightly = pricePerNight(checkOut);
    const cleaningFee = 50;

    const total = nights * nightly + cleaningFee;

    const intent = await stripe.paymentIntents.create({
        amount: total * 100, // convert € -> cents
        currency: "eur",
        automatic_payment_methods: { enabled: true },
        metadata: {
            check_in,
            check_out,
            nights: String(nights),
        },
    });

    return NextResponse.json({ clientSecret: intent.client_secret });
}
