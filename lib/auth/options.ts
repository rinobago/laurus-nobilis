import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const adminEmails = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

export function isAdminEmail(email?: string | null) {
    if (!email) return false;
    return adminEmails.includes(email.toLowerCase());
}

export const authOptions: NextAuthOptions = {
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
