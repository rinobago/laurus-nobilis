"use client";

import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import { usePaymentUi } from "./PaymentUiContext";

type FinalStatus = "succeeded" | "canceled" | "requires_payment_method";

function isFinalStatus(s: string): s is FinalStatus {
    return s === "succeeded" || s === "canceled" || s === "requires_payment_method";
}

async function sleep(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
}

export default function FormPayment() {
    const stripe = useStripe();
    const elements = useElements();
    const searchParams = useSearchParams();
    const router = useRouter();

    const { ui, setUi } = usePaymentUi();

    const qs = useMemo(() => searchParams.toString(), [searchParams]);

    async function pollUntilFinal(paymentIntentId: string, clientSecret: string) {
        // poll up to ~45 seconds
        const maxTries = 60;
        for (let i = 0; i < maxTries; i++) {
            const res = await fetch("/api/stripe/payment-intent-status", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    payment_intent: paymentIntentId,
                    client_secret: clientSecret,
                }),
            });

            if (!res.ok) throw new Error("Failed to fetch payment intent status");
            const data: { status: string } = await res.json();

            if (isFinalStatus(data.status)) return data.status;
            await sleep(1500);
        }
        // if it never becomes final, treat as error (your choice)
        throw new Error("Timed out waiting for payment to complete");
    }

    async function goComplete(params: Record<string, string>) {
        const sp = new URLSearchParams(qs);
        for (const [k, v] of Object.entries(params)) sp.set(k, v);
        router.push(`/checkout/complete?${sp.toString()}`);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!stripe || !elements) return;

        setUi("processing");

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: { return_url: `${window.location.origin}/checkout/complete?${qs}` },
            redirect: "if_required",
        });

        if (error) {
            setUi("idle");
            await goComplete({ status: "error" });
            return;
        }

        if (!paymentIntent?.id || !paymentIntent.client_secret) {
            setUi("idle");
            await goComplete({ status: "error" });
            return;
        }

        const id = paymentIntent.id;
        const clientSecret = paymentIntent.client_secret;
        const status = paymentIntent.status;

        // ✅ succeeded immediately
        if (status === "succeeded") {
            await fetch("/api/checkout/progress", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ step: "complete" }),
            });

            setUi("idle");
            await goComplete({
                status: "succeeded",
                payment_intent: id,
            });
            return;
        }

        // ✅ immediate final fail states
        if (status === "canceled" || status === "requires_payment_method") {
            setUi("idle");
            await goComplete({
                status,
                payment_intent: id,
            });
            return;
        }

        // ✅ non-final: stay on page, keep button disabled + spinner, poll until final
        try {
            const finalStatus = await pollUntilFinal(id, clientSecret);

            if (finalStatus === "succeeded") {
                await fetch("/api/checkout/progress", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ step: "complete" }),
                });
            }

            setUi("idle");
            await goComplete({
                status: finalStatus,
                payment_intent: id,
            });
        } catch {
            setUi("idle");
            await goComplete({ status: "error" });
        }
    }

    return (
        <form
            action="post"
            id="payment-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-24 w-full md:w-101 items-start justify-center">
            <div className="w-full flex flex-col justify-center items-start gap-8">
                <label
                    htmlFor="cardName"
                    className="formLabel">
                    Name on card
                </label>
                <input
                    type="text"
                    name="cardName"
                    id="cardName"
                    autoComplete="cc-name"
                    required
                    className="w-full bg-beige-dark border border-beige-darker px-3.5 py-2.5 rounded-md text-black text-16 leading-150"
                    disabled={ui === "processing"}
                />
            </div>
            <div className="w-full">
                <PaymentElement
                    options={{
                        layout: { type: "tabs", defaultCollapsed: false },
                        wallets: { link: "never" },
                    }}
                />
            </div>
        </form>
    );
}
