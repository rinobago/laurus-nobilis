"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchIcon } from "../../svg_icons/AdminIcons";

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("q") || "");

    useEffect(() => {
        const currentQuery = searchParams.get("q") || "";

        // Prevent replace loops when local input and URL are already in sync.
        if (search === currentQuery) return;

        const timeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());

            if (search) {
                params.set("q", search);
            } else {
                params.delete("q");
            }

            params.set("page", "1");

            router.replace(`?${params.toString()}`);
        }, 300); // debounce delay

        return () => clearTimeout(timeout);
    }, [search, router, searchParams]);

    return (
        <div className="relative flex justify-start items-center gap-8 max-w-75 w-full h-full rounded-[5px] bg-beige-dark border border-beige-darker">
            <SearchIcon className="pointer-events-none absolute w-24 h-24 left-8 top-1/2 transform -translate-y-1/2" />
            <input
                type="search"
                placeholder="Pretraži..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="py-8 pl-10 pr-8 w-full h-full bg-transparent text-14 leading-150 text-black placeholder-placeholder-text focus:outline-none"
            />
        </div>
    );
}
