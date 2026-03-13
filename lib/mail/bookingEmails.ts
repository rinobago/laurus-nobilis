import { formatDMY, fromYMD } from "@/lib/dateParams";

type BookingEmailInput = {
    email: string;
    phoneNumber?: string;
    firstName: string;
    lastName: string;
    checkIn: string;
    checkOut: string;
};

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendEmail(to: string, subject: string, text: string) {
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
        throw new Error("Mailgun not configured");
    }

    const form = new FormData();
    form.append("from", "Laurus Nobilis <hello@laurusnobilisrent.com>");
    form.append("to", to);
    form.append("subject", subject);
    form.append("text", text);

    const res = await fetch(`https://api.eu.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
        method: "POST",
        headers: {
            Authorization: "Basic " + Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64"),
        },
        body: form,
    });

    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Mailgun send failed: ${err}`);
    }
}

export async function sendBookingEmails(input: BookingEmailInput) {
    const email = input.email.trim();
    const phoneNumber = input.phoneNumber?.trim() ?? "";
    const firstName = input.firstName.trim();
    const lastName = input.lastName.trim();
    const checkIn = input.checkIn.trim();
    const checkOut = input.checkOut.trim();

    if (!email || !isValidEmail(email)) {
        throw new Error("Invalid email");
    }

    if (!firstName || !lastName || !checkIn || !checkOut) {
        throw new Error("Missing required fields for booking email");
    }

    const OWNER_EMAIL = "zeljko.bago@gmail.com";

    const inPretty = formatDMY(fromYMD(checkIn));
    const outPretty = formatDMY(fromYMD(checkOut));

    const guestSubject = "Booking confirmation - Laurus Nobilis";
    const guestText = `
Hello ${firstName},

Thank you for booking the apartment Laurus Nobilis!

Your stay:
Check-in: ${inPretty}
Check-out: ${outPretty}

We look forward to welcoming you.
If you have any questions, simply reply to this email.

Kind regards,
Laurus Nobilis
`.trim();

    await sendEmail(email, guestSubject, guestText);

    const ownerSubject = "Nova rezervacija - Laurus Nobilis";
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
}
