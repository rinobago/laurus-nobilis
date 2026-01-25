import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "site_consent";

export async function POST(req: NextRequest) {
    const body = await req.json().catch(() => null);

    const analytics = typeof body?.analytics === "boolean" ? body.analytics : false;
    const functional = typeof body?.functional === "boolean" ? body.functional : false;

    const consent = {
        essential: true,
        analytics,
        functional,
        updatedAt: Date.now(),
    };

    const res = NextResponse.json({ ok: true });

    res.cookies.set(COOKIE_NAME, JSON.stringify(consent), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 180,
    });

    return res;
}

export async function GET(req: NextRequest) {
    const cookie = req.cookies.get(COOKIE_NAME)?.value;

    if (!cookie) {
        return NextResponse.json({ consent: null });
    }

    try {
        const consent = JSON.parse(cookie);
        return NextResponse.json({ consent });
    } catch {
        return NextResponse.json({ consent: null });
    }
}
