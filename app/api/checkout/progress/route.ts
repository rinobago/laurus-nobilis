import { NextResponse } from "next/server";

type Step = "payment" | "complete";

export async function POST(req: Request) {
    const { step } = (await req.json()) as { step?: Step };

    if (step !== "payment" && step !== "complete") {
        return NextResponse.json({ ok: false, error: "Invalid step" }, { status: 400 });
    }

    const res = NextResponse.json({ ok: true });

    res.cookies.set("checkout_step", step, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 30, // 30 minutes
    });

    return res;
}
