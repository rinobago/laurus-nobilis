import { Status } from "../adminTypes";

export default function StatusBanner({ status }: { status: Status }) {
    const statusConfig = {
        active: {
            text: "Aktivan",
            containerClass: "bg-badge-green-bg",
            dotClass: "bg-badge-green-fg",
            textClass: "text-badge-green-fg",
        },
        cancelled: {
            text: "Otkazan",
            containerClass: "bg-badge-blue-bg",
            dotClass: "bg-badge-blue-fg",
            textClass: "text-badge-blue-fg",
        },
        refunded: {
            text: "Refundiran",
            containerClass: "bg-badge-red-bg",
            dotClass: "bg-badge-red-fg",
            textClass: "text-badge-red-fg",
        },
    };

    const config = statusConfig[status];

    return (
        <div
            className={`flex justify-center items-center px-[8.52px] py-[4.26px] gap-[8.52px] w-fit h-fit rounded-full ${config.containerClass}`}>
            <div className={`w-[8.52px] rounded-full aspect-square ${config.dotClass}`}></div>
            <div className={`text-12 leading-150 text-left font-medium ${config.textClass}`}>
                {config.text}
            </div>
        </div>
    );
}
