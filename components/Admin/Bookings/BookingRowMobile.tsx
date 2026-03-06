import ActionDotsButton from "../Actions/ActionDotsButton";
import { Status } from "../adminTypes";
import StatusBanner from "./StatusBanner";

export default function BookingRowMobile({ status }: { status: Status }) {
    return (
        <div className="w-full h-fit bg-white border border-beige-darkest rounded-[5px]">
            <div className="bg-beige-dark w-full py-2.5 pl-2.5 pr-1.25 flex justify-between items-center rounded-t-[5px]">
                <div className="text-black font-semibold text-12 leading-150 text-left">1</div>
                <ActionDotsButton />
            </div>
            <div className="bg-white flex flex-col p-2.5 gap-2.5 justify-center items-start w-full rounded-b-[5px]">
                <div className="flex justify-between items-center w-full">
                    <div className="text-black font-bold text-12 leading-150 text-left">
                        Marko Markić
                    </div>
                    <StatusBanner status={status} />
                </div>
                <hr className="w-full h-[0.5px] border-0 bg-beige-darkest" />
                <div className="flex justify-between items-center w-full">
                    <div className="text-black font-semibold text-12 leading-150 text-left">
                        Datumi boravka
                    </div>
                    <div className="text-black text-12 leading-150 text-left">
                        6.7.2026. - 12.7.2026.
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="text-black font-semibold text-12 leading-150 text-left">
                        Broj gostiju
                    </div>
                    <div className="text-black text-12 leading-150 text-left">4</div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="text-black font-semibold text-12 leading-150 text-left">
                        Ukupan iznos
                    </div>
                    <div className="text-black text-12 leading-150 text-left">€ ___</div>
                </div>
            </div>
        </div>
    );
}
