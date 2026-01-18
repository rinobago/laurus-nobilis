"use client";

import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function FormPayment() {
    const stripe = useStripe();
    const elements = useElements();
    const searchParams = useSearchParams();
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!stripe || !elements) return;

        const qs = searchParams.toString();

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/checkout/complete?${qs}`,
            },
            redirect: "if_required",
        });

        if (error) {
            // show error.message in UI
            return;
        }

        router.push(`/checkout/complete`);
    }

    return (
        <form action="post" id="payment-form" onSubmit={handleSubmit} className="flex flex-col gap-24 w-full md:w-101 items-start justify-center">
            <div className="w-full flex flex-col justify-center items-start gap-8">
                <label htmlFor="cardName" className="formLabel">
                    Name on card
                </label>
                <input
                    type="text"
                    name="cardName"
                    id="cardName"
                    autoComplete="cc-name"
                    required
                    className="w-full bg-beige-dark border border-beige-darker px-3.5 py-2.5 rounded-md text-black text-16 leading-150"
                />
            </div>
            <div className="flex w-full justify-center items-start">
                <PaymentElement />
            </div>
        </form>
    );
}
