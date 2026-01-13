"use client";

import { fromYMD, toYMD } from "@/lib/dateParams";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { DateRange, DayPicker, getDefaultClassNames } from "react-day-picker";
import { enUS } from "react-day-picker/locale";
import { NextButton, PreviousButton } from "../svg_icons/ChevronButtons";

export default function BookingCalendar() {
    const today = new Date();
    const minMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const cn = getDefaultClassNames();

    const [months, setMonths] = useState(2);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Read from query params (if they exist)
    const checkIn = searchParams.get("check_in");
    const checkOut = searchParams.get("check_out");

    const selected: DateRange | undefined = checkIn ? { from: fromYMD(checkIn), to: checkOut ? fromYMD(checkOut) : undefined } : undefined;

    const monthStart = useMemo(() => {
        return selected?.from ? new Date(selected.from.getFullYear(), selected.from.getMonth() + 1, 1) : new Date(today.getFullYear(), today.getMonth(), 1);
    }, [selected?.from, today]);

    useEffect(() => {
        const update = () => setMonths(window.innerWidth < 640 ? 1 : 2);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // ALWAYS update params when selection changes
    const onSelect = (range: DateRange | undefined) => {
        const sp = new URLSearchParams(searchParams.toString());

        if (!range?.from) {
            sp.delete("check_in");
            sp.delete("check_out");
        } else if (!range.to) {
            sp.set("check_in", toYMD(range.from));
            sp.delete("check_out");
        } else {
            sp.set("check_in", toYMD(range.from));
            sp.set("check_out", toYMD(range.to));
        }

        const qs = sp.toString();
        router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    };

    return (
        <DayPicker
            animate
            captionLayout="label"
            navLayout="around"
            numberOfMonths={months}
            mode="range"
            min={2}
            defaultMonth={monthStart}
            startMonth={minMonth}
            disabled={{ before: today }}
            locale={enUS}
            timeZone="UTC"
            selected={selected}
            onSelect={onSelect}
            classNames={{
                root: `${cn.root} text-black`,
                caption_label: `${cn.caption_label} text-black font-medium`,
                weekday: `${cn.weekday} text-muted-text`,
                day: `${cn.day} text-black`,
                disabled: `${cn.disabled} text-muted-text`,
                today: `text-black`,
                chevron: `fill-black`,
            }}
            components={{
                PreviousMonthButton: (props) => (
                    <button {...props} className="rdp-button_previous flex items-center justify-center">
                        <PreviousButton className="w-2.5 h-16 fill-none stroke-black" />
                    </button>
                ),
                NextMonthButton: (props) => (
                    <button {...props} className="rdp-button_next flex items-center justify-center">
                        <NextButton className="w-2.5 h-16 fill-none stroke-black" />
                    </button>
                ),
            }}
        />
    );
}
