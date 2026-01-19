"use client";

import { Elements } from "@stripe/react-stripe-js";
import type { Appearance } from "@stripe/stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const appearance: Appearance = {
    theme: "stripe",
    inputs: "spaced",
    labels: "above",
    variables: {
        fontFamily: "Montserrat, system-ui, sans-serif",
        fontWeightNormal: "400",
        borderRadius: "6px",
        colorBackground: "#eae6d8",
        colorPrimary: "#000000",
        colorText: "#000000",
        colorTextPlaceholder: "#a9a9ac",
        tabIconSelectedColor: "#fff",
        gridRowSpacing: "24px",
        gridColumnSpacing: "16px",
    },
    rules: {
        ".Input, .Label": {
            fontSize: "1rem",
            lineHeight: "1.5",
        },
        ".Input": {
            width: "100%",
            border: "solid",
            borderWidth: "1px",
            borderColor: "#dcd7c4",
        },
    },
};

export default function StripeElementsProvider({ children }: { children: React.ReactNode }) {
    const sp = useSearchParams();
    const [clientSecret, setClientSecret] = useState<string | null>(null);

    const stripeLocale = "en";

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
                appearance,
                locale: stripeLocale,
                fonts: [
                    {
                        cssSrc: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
                    },
                ],
            }}
        >
            {children}
        </Elements>
    );
}
