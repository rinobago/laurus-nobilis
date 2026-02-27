import { useTranslations } from "next-intl";
import { Suspense } from "react";
import BackToBookingButton from "./BackToBookingButton";
import FormPayment from "./FormPayment";
import PaymentCard from "./PaymentCard";
import StripeElementsProvider from "./StripeElementsProvider";

export default function CheckoutPayment() {
    const t = useTranslations("Payment");

    return (
        <section className="flex flex-col items-center bg-beige">
            <div className="flex flex-col gap-64 min-[960px]:gap-24 container items-center text-black">
                <Suspense fallback={null}>
                    <BackToBookingButton />
                </Suspense>
                <div className="flex flex-col min-[960px]:flex-row gap-30 w-full justify-center items-center min-[960px]:items-start">
                    <div className="flex flex-col min-[960px]:max-w-129.5 items-center min-[960px]:items-start justify-center gap-[80px] min-[960px]:gap-64">
                        <div className="flex flex-col items-start justify-center gap-12">
                            <h1 className="text-left font-bold leading-120 text-[clamp(2.25rem,6vw,3rem)]">
                                {t("Title")}
                            </h1>
                            <p className="text-left leading-150 text-[clamp(1rem,2.34vw,1.125rem)]">
                                {t("Description")}
                            </p>
                        </div>
                        <StripeElementsProvider>
                            <FormPayment />
                        </StripeElementsProvider>
                    </div>
                    <Suspense fallback={null}>
                        <PaymentCard />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
