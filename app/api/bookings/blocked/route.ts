import { createSupabaseServerClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const supabase = createSupabaseServerClient();
        const { data, error } = await supabase
            .from("bookings")
            .select("checkin_date, checkout_date")
            .eq("status", "active");

        if (error) {
            return NextResponse.json({ error: "Failed to load bookings" }, { status: 500 });
        }

        return NextResponse.json({ ranges: data || [] });
    } catch (err) {
        return NextResponse.json(
            {
                error: "Failed to load bookings",
                details:
                    process.env.NODE_ENV === "production"
                        ? undefined
                        : err instanceof Error
                          ? err.message
                          : String(err),
            },
            { status: 500 },
        );
    }
}
