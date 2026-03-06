"use client";

export default function FilterDropdown({ open, onClose }: { open: boolean; onClose: () => void }) {
    if (!open) return null;

    return (
        <div className="z-100 overflow-hidden absolute top-full md:left-1/2 md:-translate-x-1/2 right-0 mt-[8px] w-26.75 h-42 bg-beige-dark border border-beige-darker rounded-md flex flex-col">
            <button
                onClick={onClose}
                className="cursor-pointer flex-1 hover:bg-beige-darker focus:bg-beige-darker text-sm leading-150 text-center text-black">
                Sve
            </button>
            <button
                onClick={onClose}
                className="cursor-pointer flex-1 hover:bg-beige-darker focus:bg-beige-darker text-sm leading-150 text-center text-black">
                Aktivne
            </button>
            <button
                onClick={onClose}
                className="cursor-pointer flex-1 hover:bg-beige-darker focus:bg-beige-darker text-sm leading-150 text-center text-black">
                Otkazane
            </button>
            <button
                onClick={onClose}
                className="cursor-pointer flex-1 hover:bg-beige-darker focus:bg-beige-darker text-sm leading-150 text-center text-black">
                Refundirane
            </button>
        </div>
    );
}
