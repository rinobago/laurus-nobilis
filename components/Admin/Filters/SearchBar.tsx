"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SearchIcon } from "../../svg_icons/AdminIcons";
import { Booking } from "../adminTypes";

export default function SearchBar({ bookings }: { bookings?: Booking[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("q") || "");

    const handleChange = (value: string) => {
        setSearch(value);

        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set("q", value);
        } else {
            params.delete("q");
        }

        router.replace(`?${params.toString()}`);
    };

    return (
        <div className="relative flex justify-start items-center gap-8 max-w-75 w-full h-full rounded-[5px] bg-beige-dark border border-beige-darker">
            <SearchIcon className="pointer-events-none absolute w-24 h-24 left-8 top-1/2 transform -translate-y-1/2" />
            <input
                type="search"
                placeholder="Pretraži..."
                value={search}
                onChange={(e) => handleChange(e.target.value)}
                className="py-8 pl-10 pr-8 w-full h-full bg-transparent text-14 leading-150 text-black placeholder-placeholder-text focus:outline-none"
            />
        </div>
    );
}
