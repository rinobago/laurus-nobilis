"use client";

import { CompleteCheck } from "@/components/svg_icons/Check";
import Spinner from "@/components/svg_icons/Spinner";
import Xicon from "@/components/svg_icons/Xicon";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type View = "success" | "canceled" | "requires_payment_method" | "error" | "processing";

function pickViewFromStatus(s?: string | null): View | null {
    if (!s) return null;
    if (s === "succeeded") return "success";
    if (s === "canceled") return "canceled";
    if (s === "requires_payment_method") return "requires_payment_method";
    if (s === "error") return "error";
    return null;
}

export default function CheckoutComplete() {
    const sp = useSearchParams();
    const router = useRouter();

    const [view, setView] = useState<View>("processing");
    const finalizedRef = useRef(false);

    const backToPaymentQs = useMemo(() => {
        const q = new URLSearchParams(sp.toString());
        q.delete("status");
        q.delete("redirect_status");
        q.delete("payment_intent");
        q.delete("payment_intent_client_secret");

        return q.toString();
    }, [sp]);

    useEffect(() => {
        let cancelled = false;

        async function resolve() {
            // 1) Prefer your explicit status=...
            const explicit = pickViewFromStatus(sp.get("status"));
            if (explicit) {
                if (!cancelled) setView(explicit);
                return;
            }

            // 2) Stripe redirect param is usually redirect_status
            const redirectStatus = sp.get("redirect_status");
            const fromRedirect = pickViewFromStatus(redirectStatus);
            if (fromRedirect) {
                if (!cancelled) setView(fromRedirect);
                return;
            }

            // 3) If we have PI + client_secret, ask backend for true status
            const paymentIntent = sp.get("payment_intent");

            if (paymentIntent) {
                try {
                    const res = await fetch("/api/stripe/payment-intent-status", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            payment_intent: paymentIntent,
                        }),
                    });

                    if (!res.ok) throw new Error("status fetch failed");
                    const data: { status: string } = await res.json();

                    const v = pickViewFromStatus(data.status) ?? "error";
                    if (!cancelled) setView(v);
                    return;
                } catch {
                    if (!cancelled) setView("error");
                    return;
                }
            }

            // 4) Fallback
            if (!cancelled) setView("error");
        }

        resolve();
        return () => {
            cancelled = true;
        };
    }, [sp]);

    useEffect(() => {
        if (view === "processing") return;

        const t = window.setTimeout(() => {
            if (view === "success") {
                router.replace("/");
            } else {
                router.replace(`/checkout/payment${backToPaymentQs ? `?${backToPaymentQs}` : ""}`);
            }
        }, 5000);

        return () => window.clearTimeout(t);
    }, [view, router, backToPaymentQs]);

    useEffect(() => {
        if (view !== "success" || finalizedRef.current) return;

        const paymentIntent = sp.get("payment_intent");
        if (!paymentIntent) return;

        finalizedRef.current = true;

        fetch("/api/stripe/finalize-booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ payment_intent: paymentIntent }),
        }).catch((err) => {
            // Silent fail: booking can be retried via webhook or admin tooling.
            console.log(err);
        });
    }, [view, sp]);

    const content = useMemo(() => {
        switch (view) {
            case "success":
                return {
                    Icon: (
                        <CompleteCheck className="w-[clamp(120px,18.23vw,140px)] aspect-square stroke-green-confirm stroke-6" />
                    ),
                    title: "Payment complete",
                    body: "Your booking is confirmed. We will be in touch shortly.",
                };
            case "canceled":
                return {
                    Icon: (
                        <Xicon className="w-[clamp(120px,18.23vw,140px)] aspect-square fill-badge-red-fg" />
                    ),
                    title: "Payment canceled",
                    body: "You can try again. You'll be redirected back to payment shortly.",
                };
            case "requires_payment_method":
                return {
                    Icon: (
                        <Xicon className="w-[clamp(120px,18.23vw,140px)] aspect-square fill-badge-red-fg" />
                    ),
                    title: "Payment failed",
                    body: "Please use a different payment method. You'll be redirected shortly.",
                };
            case "error":
                return {
                    Icon: (
                        <Xicon className="w-[clamp(120px,18.23vw,140px)] aspect-square fill-badge-red-fg" />
                    ),
                    title: "Something went wrong",
                    body: "Please try again. You'll be redirected shortly.",
                };
            default:
                return {
                    Icon: <Spinner />,
                    title: "Finalizing payment…",
                    body: "Please wait.",
                };
        }
    }, [view]);

    return (
        <section className="flex flex-col items-center bg-beige h-[80vh]">
            <div className="h-full flex flex-col gap-12 container items-center justify-center text-black">
                {content.Icon}
                <h1 className="w-full text-center font-bold leading-120 text-[clamp(2rem,6.25vw,3rem)] max-[368px]:text-28 max-[328px]:text-[1.5rem]">
                    {content.title}
                </h1>
                <p className="w-full text-center leading-150 text-[clamp(0.875rem,2.34vw,1.125rem)] max-[328px]:text-12">
                    {content.body}
                </p>
            </div>
        </section>
    );
}
