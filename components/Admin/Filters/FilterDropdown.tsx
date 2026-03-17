"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function FilterDropdown({ open, onClose }: { open: boolean; onClose: () => void }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    function handleFilterClick(filterType: string | null) {
        const params = new URLSearchParams(searchParams.toString());

        if (filterType) {
            params.set("filter", filterType);
        } else {
            params.delete("filter");
        }
        router.push(`/admin?${params.toString()}`);
        onClose();
    }

    if (!open) return null;

    return (
        <div className="z-100 overflow-hidden absolute top-full md:left-1/2 md:-translate-x-1/2 right-0 mt-[8px] w-26.75 h-42 bg-beige-dark border border-beige-darker rounded-md flex flex-col">
            <button
                onClick={() => handleFilterClick(null)}
                className="cursor-pointer flex-1 hover:bg-beige-darker focus:bg-beige-darker text-sm leading-150 text-center text-black">
                Sve
            </button>
            <button
                onClick={() => handleFilterClick("active")}
                className="cursor-pointer flex-1 hover:bg-beige-darker focus:bg-beige-darker text-sm leading-150 text-center text-black">
                Aktivne
            </button>
            <button
                onClick={() => handleFilterClick("canceled")}
                className="cursor-pointer flex-1 hover:bg-beige-darker focus:bg-beige-darker text-sm leading-150 text-center text-black">
                Otkazane
            </button>
            <button
                onClick={() => handleFilterClick("refunded")}
                className="cursor-pointer flex-1 hover:bg-beige-darker focus:bg-beige-darker text-sm leading-150 text-center text-black">
                Refundirane
            </button>
        </div>
    );
}
