"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function FormPayment() {
    const router = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        // validate / save form data here
        // (context, server action, localStorage, etc.)

        router.push("/checkout/complete");
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
            <div className="w-full flex flex-col justify-center items-start gap-8">
                <label htmlFor="cardNumber" className="formLabel">
                    Card number
                </label>
                <input
                    type="text"
                    inputMode="numeric"
                    name="cardNumber"
                    id="cardNumber"
                    autoComplete="cc-number"
                    required
                    placeholder="1234 5678 9012 3456"
                    className="w-full bg-beige-dark border border-beige-darker px-3.5 py-2.5 rounded-md text-black placeholder:text-placeholder-text text-16 leading-150"
                />
            </div>
            <div className="flex gap-[clamp(8px,2.08vw,16px)] justify-center items-center w-full">
                <div className="w-full flex flex-col justify-center items-start gap-8">
                    <label htmlFor="expiry" className="formLabel">
                        Expiration date
                    </label>
                    <input
                        type="text"
                        inputMode="numeric"
                        name="expiry"
                        id="expiry"
                        autoComplete="cc-exp"
                        required
                        placeholder="MM / YY"
                        className="w-full bg-beige-dark border border-beige-darker px-3.5 py-2.5 rounded-md text-black placeholder:text-placeholder-text text-16 leading-150"
                    />
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-8">
                    <label htmlFor="cvc" className="formLabel">
                        CVC
                    </label>
                    <input
                        type="password"
                        inputMode="numeric"
                        name="cvc"
                        id="cvc"
                        autoComplete="cc-csc"
                        required
                        placeholder="123"
                        className="w-full bg-beige-dark border border-beige-darker px-3.5 py-2.5 rounded-md text-black placeholder:text-placeholder-text text-16 leading-150"
                    />
                </div>
            </div>
        </form>
    );
}
