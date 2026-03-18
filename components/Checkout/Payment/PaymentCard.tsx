"use client";

import Spinner from "@/components/svg_icons/Spinner";
import { formatDMY, fromYMD, nightsBetween, pricePerNight } from "@/lib/dateParams";
import { formatDecimal } from "@/lib/numberFormat";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import RequiredCheckbox from "../../Interactive/RequiredCheckbox";
import { usePaymentUi } from "./PaymentUiContext";

export default function PaymentCard() {
    const t = useTranslations("Payment");
    const s = useTranslations("Details");
    const h = useTranslations("Footer");

    const searchParams = useSearchParams();

    const { ui } = usePaymentUi();
    const isProcessing = ui === "processing";

    const checkInStr = searchParams.get("check_in");
    const checkOutStr = searchParams.get("check_out");

    const checkIn = checkInStr ? fromYMD(checkInStr) : undefined;
    const checkOut = checkOutStr ? fromYMD(checkOutStr) : undefined;

    const checkInText = checkIn ? formatDMY(checkIn) : "-";
    const checkOutText = checkOut ? formatDMY(checkOut) : "-";

    const nights = nightsBetween(checkIn, checkOut);

    const priceNight = nights >= 7 ? pricePerNight(checkOut) * 0.95 : pricePerNight(checkOut);

    const rentPrice = nights * priceNight;
    const cleaningFee = 50;
    const totalPrice = rentPrice + cleaningFee;

    return (
        <div
            className="max-w-107.5 w-full bg-beige rounded-2xl overflow-hidden"
            style={{ boxShadow: "0px 6px 16px 4px rgba(0, 0, 0, 0.12)" }}>
            <div className="flex flex-col gap-24 items-start justify-center px-24 py-16 w-full text-black">
                <p className="font-semibold leading-120 text-h3 text-left pb-4 border-b border-beige-darkest w-full">
                    Laurus Nobilis
                </p>
                <div className="flex flex-col w-full items-start justify-center">
                    <div className="flex max-w-65 w-full justify-start items-center gap-0">
                        <div className="flex flex-col justify-center items-start gap-0.5 w-full">
                            <p className="leading-150 font-semibold text-12 text-left w-full">
                                {s("CheckIn")}
                            </p>
                            <div className="flex justify-start items-center w-full px-12 py-2.5 rounded-l-md bg-beige-dark border border-beige-darker">
                                <p className="leading-150 text-14 text-left">{checkInText}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-0.5 w-full">
                            <p className="leading-150 font-semibold text-12 text-left w-full">
                                {s("CheckOut")}
                            </p>
                            <div className="flex justify-start items-center w-full px-12 py-2.5 rounded-r-md bg-beige-dark border border-l-0 border-beige-darker">
                                <p className="leading-150 text-14 text-left">{checkOutText}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full h-px border-0 bg-beige-darkest" />
                <div className="flex flex-col justify-start items-center gap-8 w-full">
                    <p className="font-medium w-full text-14 leading-150 text-left">
                        {s("PriceDetails")}
                    </p>
                    <div className="flex justify-between items-start w-full leading-150 text-14 text-left ">
                        <div className="flex flex-col justify-start items-center">
                            <p className="w-full">
                                {nights} {s("Nights")} x € {formatDecimal(priceNight)}
                            </p>
                            <p className="w-full">{s("CleaningFee")}</p>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <p className="w-full">€ {formatDecimal(rentPrice)}</p>
                            <p className="w-full">€ {formatDecimal(cleaningFee)}</p>
                        </div>
                    </div>
                </div>
                <hr className="w-full h-px border-0 bg-beige-darkest" />
                <div className="flex flex-col justify-start items-center gap-8 w-full">
                    <p className="text-14 text-left w-full leading-150 font-medium">{s("Total")}</p>
                    <p className="text-18 font-semibold leading-150 w-full text-left">
                        € {formatDecimal(totalPrice)}
                    </p>
                </div>
                <label
                    htmlFor="terms-payment"
                    className="flex justify-start items-center w-full gap-8 cursor-pointer">
                    <RequiredCheckbox
                        id="terms-payment"
                        name="terms-payment"
                    />
                    <p className="text-12 leading-150">
                        {t("Agree")}
                        <a
                            href="/cancellation-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                            onClick={(e) => e.stopPropagation()}>
                            {h("CancelationPolicy")}
                        </a>
                        {t("And")}
                        <a
                            href="/terms-of-service"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                            onClick={(e) => e.stopPropagation()}>
                            {h("TermsOfService")}
                        </a>
                    </p>
                </label>
                <div className="flex flex-col justify-center items-center gap-4 w-full">
                    <button
                        type="submit"
                        form="payment-form"
                        className="btn-brown"
                        disabled={isProcessing}
                        aria-busy={isProcessing}>
                        {isProcessing ? <Spinner /> : t("PayConfirm")}
                    </button>
                    <p className="w-full text-center text-10 leading-150">{t("Stripe")}</p>
                </div>
            </div>
        </div>
    );
}
