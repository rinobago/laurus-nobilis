"use client";

import { ActionDots } from "@/components/svg_icons/AdminIcons";
import { useState } from "react";
import ActionsModal from "./ActionsModal";

export default function ActionDotsButton() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="relative z-1 w-24 h-24 flex justify-center items-center cursor-pointer">
                <ActionDots className="w-full h-full" />
            </button>
            <ActionsModal
                open={open}
                onClose={() => setOpen(false)}
            />
        </div>
    );
}
