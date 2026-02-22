import { formatDMY, fromYMD } from "@/lib/dateParams";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type SendEmailBody = {
    email: string;
    firstName: string;
    lastName: string;
    check_in: string;
    check_out: string;
};

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as Partial<SendEmailBody>;

        const email = body.email?.trim() ?? "";
        const firstName = body.firstName?.trim() ?? "";
        const lastName = body.lastName?.trim() ?? "";
        const check_in = body.check_in?.trim() ?? "";
        const check_out = body.check_out?.trim() ?? "";

        if (!email || !isValidEmail(email))
            return NextResponse.json({ error: "Invalid email" }, { status: 400 });

        if (!firstName || !lastName || !check_in || !check_out)
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

        const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
        const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;

        if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
            return NextResponse.json({ error: "Mailgun not configured" }, { status: 500 });
        }

        const from = "Laurus Nobilis <hello@laurusnobilisrent.com>";
        const subject = "Booking confirmation — Laurus Nobilis";

        const inPretty = formatDMY(fromYMD(check_in));
        const outPretty = formatDMY(fromYMD(check_out));

        const text = `
Hello ${firstName},

Thank you for booking the apartment Laurus Nobilis!

Your stay:
${inPretty} - ${outPretty}

We look forward to welcoming you.
If you have any questions, simply reply to this email.

Kind regards,
Laurus Nobilis Rent
`.trim();

        const form = new FormData();
        form.append("from", from);
        form.append("to", email);
        form.append("subject", subject);
        form.append("text", text);
        form.append("o:testmode", "yes"); // Remove this line to send real emails

        const res = await fetch(`https://api.eu.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
            method: "POST",
            headers: {
                Authorization: "Basic " + Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64"),
            },
            body: form,
        });

        if (!res.ok) {
            const err = await res.text();
            return NextResponse.json(
                { error: "Mailgun send failed", details: err },
                { status: 502 },
            );
        }

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
}
