"use client";

import { PreviousButton } from "@/components/svg_icons/ChevronButtons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PageNumbers from "./PageNumbers";

export default function PageNumeration({
    page,
    limit,
    totalItems,
    totalPages,
}: {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function updateQueryParams(nextPage: number, nextLimit: number) {
        const params = new URLSearchParams(searchParams.toString());

        params.set("page", String(nextPage));
        params.set("limit", String(nextLimit));

        router.push(`${pathname}?${params.toString()}`);
    }

    function handleLimitChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const nextLimit = Number(e.target.value);
        updateQueryParams(1, nextLimit);
    }

    return (
        <div className="grid max-w-247.25 w-full h-fit grid-cols-2 lg:grid-cols-3 items-center">
            <div className="justify-self-start flex items-center justify-center gap-12 w-fit h-fit">
                <div className="text-left text-black hidden lg:inline-block font-medium text-14 leading-150">
                    Prikaži
                </div>
                <div className="relative flex items-center justify-center">
                    <select
                        name="limit"
                        value={limit}
                        onChange={handleLimitChange}
                        className="cursor-pointer appearance-none w-18.5 flex bg-beige-dark border border-beige-darker px-3.5 py-2.5 rounded-md text-black text-14 leading-150">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none flex w-24 aspect-square justify-center items-center">
                        <PreviousButton className="pointer-events-none w-1.5 aspect-1/2 fill-none stroke-black -rotate-90" />
                    </div>
                </div>
            </div>
            <PageNumbers
                page={page}
                limit={limit}
                totalItems={totalItems}
                totalPages={totalPages}
            />
        </div>
    );
}
