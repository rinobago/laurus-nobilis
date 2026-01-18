"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function StripeElementsProvider({ children }: { children: React.ReactNode }) {
    const sp = useSearchParams();
    const [clientSecret, setClientSecret] = useState<string | null>(null);

    useEffect(() => {
        const check_in = sp.get("check_in");
        const check_out = sp.get("check_out");

        if (!check_in || !check_out) return;

        fetch("/api/stripe/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ check_in, check_out }),
        })
            .then((r) => r.json())
            .then((d) => setClientSecret(d.clientSecret));
    }, [sp]);

    if (!clientSecret) return null;

    return (
        <Elements
            stripe={stripePromise}
            options={{
                clientSecret,
                appearance: { theme: "stripe" },
            }}
        >
            {children}
        </Elements>
    );
}
