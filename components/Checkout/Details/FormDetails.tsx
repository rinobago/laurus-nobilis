"use client";

import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { PreviousButton } from "../../svg_icons/ChevronButtons";

export default function FormDetails() {
    const t = useTranslations("Details");

    const router = useRouter();
    const searchParams = useSearchParams();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const sp = new URLSearchParams(searchParams.toString());
        const fd = new FormData(e.currentTarget);

        const setOrDelete = (key: string, value: string) => {
            const v = value.trim();
            if (v) sp.set(key, v);
            else sp.delete(key);
        };

        setOrDelete("firstName", String(fd.get("firstName") || ""));
        setOrDelete("lastName", String(fd.get("lastName") || ""));
        setOrDelete("email", String(fd.get("email") || ""));
        setOrDelete("phone", String(fd.get("phone") || ""));
        setOrDelete("guests", String(fd.get("guests") || ""));

        await fetch("/api/checkout/progress", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ step: "payment" }),
        });
        document.cookie = "checkout-details-complete=true; path=/";

        const qs = sp.toString();
        router.push(`/checkout/payment?${qs}`);
    }

    return (
        <form
            action="post"
            id="details-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-24 w-full md:w-101 items-start justify-center">
            <div className="flex gap-[clamp(8px,2.08vw,16px)] justify-center items-center w-full">
                <div className="w-full flex flex-col justify-center items-start gap-8">
                    <label
                        htmlFor="firstName"
                        className="formLabel">
                        {t("FirstName")}
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        required
                        defaultValue={searchParams.get("firstName") ?? ""}
                        className="w-full bg-beige-dark border border-beige-darker px-3.5 py-2.5 rounded-md text-black text-16 leading-150"
                    />
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-8">
                    <label
                        htmlFor="lastName"
                        className="formLabel">
                        {t("LastName")}
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        required
                        defaultValue={searchParams.get("lastName") ?? ""}
                        className="w-full bg-beige-dark border border-beige-darker px-3.5 py-2.5 rounded-md text-black text-16 leading-150"
                    />
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-8">
                <label
                    htmlFor="email"
                    className="formLabel">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    defaultValue={searchParams.get("email") ?? ""}
                    className="w-full bg-beige-dark border border-beige-darker px-3.5 py-2.5 rounded-md text-black text-16 leading-150"
                />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-8">
                <label
                    htmlFor="phone"
                    className="formLabel">
                    {t("PhoneNumber")}
                </label>
                <input
                    type="tel"
                    inputMode="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    required
                    defaultValue={searchParams.get("phone") ?? ""}
                    className="w-full bg-beige-dark border border-beige-darker px-3.5 py-2.5 rounded-md text-black text-16 leading-150"
                />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-8">
                <label
                    htmlFor="guests"
                    className="formLabel">
                    {t("Guests")}
                </label>
                <div className="relative flex items-center justify-center">
                    <select
                        id="guests"
                        name="guests"
                        autoComplete="off"
                        required
                        defaultValue={searchParams.get("guests") ?? "1"}
                        className="cursor-pointer appearance-none w-17 flex bg-beige-dark border border-beige-darker px-3.5 py-2.5 rounded-md text-black text-16 leading-150">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none flex w-24 aspect-square justify-center items-center">
                        <PreviousButton className="pointer-events-none w-1.5 aspect-1/2 fill-none stroke-black -rotate-90" />
                    </div>
                </div>
            </div>
        </form>
    );
}
