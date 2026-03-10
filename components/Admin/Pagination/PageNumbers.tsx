"use client";

import { PreviousButton } from "@/components/svg_icons/ChevronButtons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PageNumbersProps = {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
};

export default function PageNumbers({ page, limit, totalItems, totalPages }: PageNumbersProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function setPage(nextPage: number) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(nextPage));
        params.set("limit", String(limit));
        router.push(`${pathname}?${params.toString()}`);
    }

    function getVisiblePages(maxVisible: number) {
        if (totalPages <= 0) return [];

        if (totalPages <= maxVisible) {
            const pages = [];

            for (let i = 0; i < totalPages; i++) {
                pages.push(i + 1);
            }

            return pages;
        }

        let start = Math.max(1, page - Math.floor(maxVisible / 2));
        let end = start + maxVisible - 1;

        if (end > totalPages) {
            end = totalPages;
            start = end - maxVisible + 1;
        }

        const pages = [];

        for (let i = 0; i < end - start + 1; i++) {
            pages.push(start + i);
        }

        return pages;
    }

    const mobilePages = getVisiblePages(2);
    const desktopPages = getVisiblePages(5);

    const showMobileEllipsis =
        totalPages > 2 && mobilePages[mobilePages.length - 1] < totalPages - 1;
    const showDesktopEllipsis =
        totalPages > 5 && desktopPages[desktopPages.length - 1] < totalPages - 1;

    return (
        <div className="justify-self-end lg:justify-self-center w-fit h-fit flex gap-12">
            <button
                type="button"
                onClick={() => {
                    if (page > 1) setPage(page - 1);
                }}
                disabled={page <= 1 || totalPages <= 1}
                className={`flex justify-center items-center w-9 h-9 rounded-md ${page <= 1 || totalPages <= 1 ? "pointer-events-none opacity-50 bg-beige-darker stroke-black" : "cursor-pointer bg-beige-darker hover:bg-beige-darkest active:bg-brown-100 stroke-black active:stroke-white"}`}
                aria-label="Previous page">
                <PreviousButton className="w-[6.5px] aspect-1/2 fill-none" />
            </button>

            <div className="text-black text-center text-12 leading-150 font-medium">
                {/* Mobile */}
                <div className="flex items-center justify-center lg:hidden">
                    {mobilePages.map((pageNumber) => (
                        <button
                            key={`mobile-${pageNumber}`}
                            type="button"
                            onClick={() => setPage(pageNumber)}
                            className={`w-9 h-9 rounded-md ${pageNumber === page ? "bg-brown-100 text-white" : "bg-transparent text-black hover:bg-beige-dark active:bg-beige-darker cursor-pointer"}`}
                            aria-current={pageNumber === page ? "page" : undefined}>
                            {pageNumber}
                        </button>
                    ))}

                    {showMobileEllipsis && (
                        <>
                            <div className="w-9 h-9 rounded-md pt-1.25">...</div>
                            <button
                                type="button"
                                onClick={() => setPage(totalPages)}
                                className="w-9 h-9 rounded-md bg-transparent text-black hover:bg-beige-dark active:bg-beige-darker cursor-pointer"
                                aria-current={totalPages === page ? "page" : undefined}>
                                {totalPages}
                            </button>
                        </>
                    )}
                </div>

                {/* Desktop */}
                <div className="hidden items-center justify-center lg:flex">
                    {desktopPages.map((pageNumber) => (
                        <button
                            key={`desktop-${pageNumber}`}
                            type="button"
                            onClick={() => setPage(pageNumber)}
                            className={`w-9 h-9 rounded-md ${pageNumber === page ? "bg-brown-100 text-white" : "bg-transparent text-black hover:bg-beige-dark active:bg-beige-darker cursor-pointer"}`}
                            aria-current={pageNumber === page ? "page" : undefined}>
                            {pageNumber}
                        </button>
                    ))}

                    {showDesktopEllipsis && (
                        <>
                            <div className="w-9 h-9 rounded-md pt-1.25">...</div>
                            <button
                                type="button"
                                onClick={() => setPage(totalPages)}
                                className="w-9 h-9 rounded-md bg-transparent text-black hover:bg-beige-dark active:bg-beige-darker cursor-pointer"
                                aria-current={totalPages === page ? "page" : undefined}>
                                {totalPages}
                            </button>
                        </>
                    )}
                </div>
            </div>

            <button
                type="button"
                onClick={() => {
                    if (page < totalPages) setPage(page + 1);
                }}
                disabled={page >= totalPages || totalPages <= 1}
                className={`flex justify-center items-center w-9 h-9 rounded-md ${page >= totalPages || totalPages <= 1 ? "pointer-events-none opacity-50 bg-beige-darker stroke-black" : "cursor-pointer bg-beige-darker hover:bg-beige-darkest active:bg-brown-100 stroke-black active:stroke-white"}`}
                aria-label="Next page">
                <PreviousButton className="w-[6.5px] aspect-1/2 fill-none rotate-180" />
            </button>
        </div>
    );
}
