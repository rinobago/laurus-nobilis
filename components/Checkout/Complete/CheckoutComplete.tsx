import { CompleteCheck } from "@/components/svg_icons/Check";

export default function CheckoutComplete() {
    return (
        <section className="flex flex-col items-center bg-beige h-[80vh]">
            <div className="h-full flex flex-col gap-12 container items-center justify-center text-black">
                <CompleteCheck className="w-[clamp(120px,18.23vw,140px)] aspect-square stroke-green-confirm stroke-6" />
                <h1 className="w-full text-center font-bold leading-120 text-[clamp(2rem,6.25vw,3rem)] max-[368px]:text-28 max-[328px]:text-[1.5rem]">Payment complete</h1>
                <p className="w-full text-center leading-150 text-[clamp(0.875rem,2.34vw,1.125rem)] max-[328px]:text-12">Your booking is confirmed. We will be in touch shortly.</p>
            </div>
        </section>
    );
}
