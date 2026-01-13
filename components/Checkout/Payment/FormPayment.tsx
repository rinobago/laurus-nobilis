"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function FormPayment() {
    const [cardNumber, setCardNumber] = useState("");
    const [valueExp, setValueExp] = useState("");
    const [valueCVC, setValueCVC] = useState("");
    const router = useRouter();

    function formatCardNumber(e: React.ChangeEvent<HTMLInputElement>) {
        const digits = e.target.value.replace(/\D/g, "");
        const limited = digits.slice(0, 16);
        setCardNumber(limited.replace(/(.{4})/g, "$1 ").trim());
    }

    function handleChangeExp(e: React.ChangeEvent<HTMLInputElement>) {
        let v = e.target.value;

        v = v.replace(/\D/g, "");

        if (v.length > 4) v = v.slice(0, 4);

        if (v.length >= 3) {
            v = `${v.slice(0, 2)}/${v.slice(2)}`;
        }

        setValueExp(v);
    }

    function handleChangeCVC(e: React.ChangeEvent<HTMLInputElement>) {
        let v = e.target.value;

        v = v.replace(/\D/g, "");
        setValueCVC(v);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        await fetch("/api/checkout/progress", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ step: "complete" }),
        });
        document.cookie = "checkout-payment-complete=true; path=/";
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
                    value={cardNumber}
                    onChange={formatCardNumber}
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
                        value={valueExp}
                        onChange={handleChangeExp}
                        inputMode="numeric"
                        name="expiry"
                        id="expiry"
                        autoComplete="cc-exp"
                        required
                        placeholder="MM/YY"
                        className="w-full bg-beige-dark border border-beige-darker px-3.5 py-2.5 rounded-md text-black placeholder:text-placeholder-text text-16 leading-150"
                    />
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-8">
                    <label htmlFor="cvc" className="formLabel">
                        CVC
                    </label>
                    <input
                        type="password"
                        value={valueCVC}
                        onChange={handleChangeCVC}
                        inputMode="numeric"
                        pattern="[0-9]{3}"
                        maxLength={3}
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
