export default function PricingTable() {
    return (
        <div className="grid grid-cols-2 grid-rows-3">
            <div className="flex justify-center items-center border-r-2 border-b-2 border-brown-100 px-[clamp(24px,4vw,58px)] py-[clamp(10px,2vw,26px)]">
                <p className="text-black text-[clamp(24px,2.8vw,40px)] font-semibold text-center leading-tight">Low season</p>
            </div>

            <div className="flex justify-center items-center border-b-2 border-brown-100 px-[clamp(24px,4vw,58px)] py-[clamp(10px,2vw,26px)]">
                <p className="text-black text-[clamp(24px,2.8vw,40px)] font-semibold text-center leading-tight">€XXX / night</p>
            </div>

            <div className="flex justify-center items-center border-r-2 border-b-2 border-brown-100 px-[clamp(24px,4vw,58px)] py-[clamp(10px,2vw,26px)]">
                <p className="text-black text-[clamp(24px,2.8vw,40px)] font-semibold text-center leading-tight">Mid season</p>
            </div>

            <div className="flex justify-center items-center border-b-2 border-brown-100 px-[clamp(24px,4vw,58px)] py-[clamp(10px,2vw,26px)]">
                <p className="text-black text-[clamp(24px,2.8vw,40px)] font-semibold text-center leading-tight">€XXX / night</p>
            </div>

            <div className="flex justify-center items-center border-r-2 border-brown-100 px-[clamp(24px,4vw,58px)] py-[clamp(10px,2vw,26px)]">
                <p className="text-black text-[clamp(24px,2.8vw,40px)] font-semibold text-center leading-tight">High season</p>
            </div>

            <div className="flex justify-center items-center px-[clamp(24px,4vw,58px)] py-[clamp(10px,2vw,26px)]">
                <p className="text-black text-[clamp(24px,2.8vw,40px)] font-semibold text-center leading-tight">€XXX / night</p>
            </div>
        </div>
    );
}
