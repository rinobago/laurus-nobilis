import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const COOKIE = "checkout_step";

export function proxy(req: NextRequest) {
    const { pathname, searchParams } = req.nextUrl;

    const step = req.cookies.get(COOKIE)?.value; // "payment" | "complete" | undefined

    // ✅ Require dates for payment
    if (pathname === "/checkout/payment") {
        const checkIn = searchParams.get("check_in");
        const checkOut = searchParams.get("check_out");

        if (!checkIn || !checkOut) {
            // send them back
            return NextResponse.redirect(new URL("/checkout/details", req.url));
        }
    }

    // Always allow entering details
    if (pathname === "/checkout/details") {
        return NextResponse.next();
    }

    // Protect payment
    if (pathname === "/checkout/payment") {
        if (step !== "payment" && step !== "complete") {
            return NextResponse.redirect(new URL("/checkout/details", req.url));
        }
        return NextResponse.next();
    }

    // Protect complete + clear cookie after you reach it
    if (pathname === "/checkout/complete") {
        if (step !== "complete") {
            return NextResponse.redirect(new URL(step === "payment" ? "/checkout/payment" : "/", req.url));
        }

        const res = NextResponse.next();
        res.cookies.delete(COOKIE);
        return res;
    }
    if (pathname === "/checkout/failed") {
        if (step !== "complete") {
            const res = NextResponse.redirect(new URL("/", req.url));
            res.cookies.delete(COOKIE);
            return res;
        }
        return NextResponse.next();
    }

    // Any other /checkout pages: allow
    return NextResponse.next();
}

export const config = {
    matcher: ["/checkout/:path*"],
};
