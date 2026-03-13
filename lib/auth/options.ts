import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authSecret = process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET;

if (process.env.NODE_ENV === "production" && !authSecret) {
    throw new Error("Missing auth secret. Set NEXTAUTH_SECRET (or AUTH_SECRET) in production.");
}

export const adminEmails = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

export function isAdminEmail(email?: string | null) {
    if (!email) return false;
    return adminEmails.includes(email.toLowerCase());
}

export const authOptions: NextAuthOptions = {
    secret: authSecret,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ profile }) {
            return isAdminEmail(profile?.email);
        },
    },
};
