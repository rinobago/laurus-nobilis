import { authSecret } from "@/lib/auth/options";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function adminGuard(req: NextRequest) {
    const token = await getToken({
        req,
        secret: authSecret,
    });

    if (!token) {
        const signInUrl = new URL("/api/auth/signin", req.url);
        signInUrl.searchParams.set("callbackUrl", req.nextUrl.href);
        return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
}
