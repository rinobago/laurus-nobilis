import { fromYMD, nightsBetween, pricePerNight } from "@/lib/dateParams";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = (await req.json()) as { check_in?: string; check_out?: string; firstName?: string; lastName?: string; email?: string; phone?: string; guests?: string | number };

    const check_in = body?.check_in;
    const check_out = body?.check_out;
    const firstName = (body?.firstName || "").trim();
    const lastName = (body?.lastName || "").trim();
    const email = (body?.email || "").trim();
    const phone = (body?.phone || "").trim();
    const guestsRaw = body?.guests ?? "";
    const guestsCount = Number.parseInt(String(guestsRaw), 10);

    const checkIn = check_in ? fromYMD(check_in) : undefined;
    const checkOut = check_out ? fromYMD(check_out) : undefined;

    if (!checkIn || !checkOut || !check_in || !check_out) {
        return NextResponse.json({ error: "Missing dates" }, { status: 400 });
    }

    if (!firstName || !lastName || !email || !phone) {
        return NextResponse.json({ error: "Missing customer details" }, { status: 400 });
    }

    if (!Number.isInteger(guestsCount) || guestsCount < 1 || guestsCount > 7) {
        return NextResponse.json({ error: "Invalid guests count" }, { status: 400 });
    }

    const nights = nightsBetween(checkIn, checkOut);
    const nightly = pricePerNight(checkOut);
    const cleaningFee = 50;

    const total = nights * nightly + cleaningFee;

    const intent = await stripe.paymentIntents.create({
        amount: total * 100, // convert € -> cents
        currency: "eur",
        payment_method_types: ["card"],
        metadata: { check_in, check_out, nights: String(nights), guests: String(guestsCount), first_name: firstName, last_name: lastName, email, phone },
    });

    return NextResponse.json({ clientSecret: intent.client_secret });
}
