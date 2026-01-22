"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type UiState = "idle" | "processing";

type Ctx = {
    ui: UiState;
    setUi: React.Dispatch<React.SetStateAction<UiState>>;
};

const PaymentUiContext = createContext<Ctx | null>(null);

export function PaymentUiProvider({ children }: { children: React.ReactNode }) {
    const [ui, setUi] = useState<UiState>("idle");
    const value = useMemo(() => ({ ui, setUi }), [ui]);
    return <PaymentUiContext.Provider value={value}>{children}</PaymentUiContext.Provider>;
}

export function usePaymentUi() {
    const ctx = useContext(PaymentUiContext);
    if (!ctx) throw new Error("usePaymentUi must be used inside PaymentUiProvider");
    return ctx;
}
