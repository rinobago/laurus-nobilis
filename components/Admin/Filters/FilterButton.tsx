"use client";

import { FilterIcon } from "@/components/svg_icons/AdminIcons";
import { useEffect, useRef, useState } from "react";
import FilterDropdown from "./FilterDropdown";

export default function FilterButton() {
    const [open, setOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div
            className="relative h-full"
            ref={modalRef}>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="cursor-pointer flex h-full gap-8 items-center justify-center px-2.5 py-8 bg-beige-dark border border-beige-darker hover:bg-beige-darker rounded-[5px]">
                <FilterIcon className="pointer-events-none w-16 h-16" />
                <p className="text-14 md:inline-block hidden text-black leading-150 text-left">
                    Filter
                </p>
            </button>
            <FilterDropdown
                open={open}
                onClose={() => setOpen(false)}
            />
        </div>
    );
}
