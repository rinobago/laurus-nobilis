import { formatDMY, fromYMD } from "@/lib/dateParams";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type SendEmailBody = {
    email: string;
    phoneNumber?: string;
    firstName: string;
    lastName: string;
    check_in: string;
    check_out: string;
};

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;

//Email sending logic
async function sendEmail(to: string, subject: string, text: string) {
    const form = new FormData();
    form.append("from", "Laurus Nobilis <hello@laurusnobilisrent.com>");
    form.append("to", to);
    form.append("subject", subject);
    form.append("text", text);
    // Testing: uncomment to enable sending emails
    form.append("o:testmode", "yes");

    const res = await fetch(`https://api.eu.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
        method: "POST",
        headers: {
            Authorization: "Basic " + Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64"),
        },
        body: form,
    });

    if (!res.ok) {
        const err = await res.text();
        console.error("Mailgun error:", err);
        throw new Error("Mailgun send failed");
    }
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as Partial<SendEmailBody>;

        const email = body.email?.trim() ?? "";
        const phoneNumber = body.phoneNumber?.trim() ?? "";
        const firstName = body.firstName?.trim() ?? "";
        const lastName = body.lastName?.trim() ?? "";
        const check_in = body.check_in?.trim() ?? "";
        const check_out = body.check_out?.trim() ?? "";

        if (!email || !isValidEmail(email))
            return NextResponse.json({ error: "Invalid email" }, { status: 400 });

        if (!firstName || !lastName || !check_in || !check_out)
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

        const OWNER_EMAIL = "zeljko.bago@gmail.com";

        if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
            return NextResponse.json({ error: "Mailgun not configured" }, { status: 500 });
        }

        const from = "Laurus Nobilis <hello@laurusnobilisrent.com>";

        const inPretty = formatDMY(fromYMD(check_in));
        const outPretty = formatDMY(fromYMD(check_out));

        const guestSubject = "Booking confirmation — Laurus Nobilis";
        const guestText = `
Hello ${firstName},

Thank you for booking the apartment Laurus Nobilis!

📅 Your stay:
Check-in: ${inPretty}
Check-out: ${outPretty}

We look forward to welcoming you.
If you have any questions, simply reply to this email.

Kind regards,
Laurus Nobilis
`.trim();

        await sendEmail(email, guestSubject, guestText);

        /* -------------------- OWNER EMAIL -------------------- */

        const ownerSubject = "Nova rezervacija — Laurus Nobilis";

        const ownerText = `
Zaprimljena je nova rezervacija za objekt Laurus Nobilis.

Podaci o gostu:
Ime i prezime: ${firstName} ${lastName}
Email: ${email}
Telefon: ${phoneNumber || "Nije naveden"}

Termin boravka:
Dolazak: ${inPretty}
Odlazak: ${outPretty}

Molimo provjerite dostupnost i pripremite objekt za navedeni period.
`.trim();

        await sendEmail(OWNER_EMAIL, ownerSubject, ownerText);

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
}
