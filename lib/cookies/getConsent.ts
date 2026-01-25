"use server";

import { cookies } from "next/headers";

export async function getConsent() {
    const consent = (await cookies()).get("site_consent")?.value;

    if (!consent) {
        return null;
    }

    try {
        return JSON.parse(consent);
    } catch {
        return null;
    }
}
