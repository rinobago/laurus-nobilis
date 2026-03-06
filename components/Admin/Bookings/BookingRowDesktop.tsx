import ActionDotsButton from "../Actions/ActionDotsButton";
import { Status } from "../adminTypes";
import StatusBanner from "./StatusBanner";

export default function BookingRow({ status }: { status: Status }) {
    return (
        <tr className="bg-white border-y-[0.5px] border-beige-darkest">
            <td className="p-2.5 text-black text-12 leading-150 text-left">1</td>
            <td className="p-2.5 text-black text-12 leading-150 text-left">Marko Markić</td>
            <td className="p-2.5 text-black text-12 leading-150 text-left">
                6.7.2026. - 12.7.2026.
            </td>
            <td className="p-2.5 text-black text-12 leading-150 text-left">4</td>
            <td className="p-2.5 text-black text-12 leading-150 text-left">€ ___</td>
            <td className="p-2.5">
                <StatusBanner status={status} />
            </td>
            <td className="p-2.5">
                <ActionDotsButton />
            </td>
        </tr>
    );
}
