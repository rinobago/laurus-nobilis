"use client";

import { NextButton, PreviousButton } from "@/components/svg_icons/ChevronButtons";
import { useEffect, useMemo, useState } from "react";
import { DateRange, DayPicker, getDefaultClassNames } from "react-day-picker";
import { hr } from "react-day-picker/locale";

export default function CalendarDateChange({
    selected,
    onSelect,
    disabled = false,
}: {
    selected: DateRange | undefined;
    onSelect: (range: DateRange | undefined) => void;
    disabled?: boolean;
}) {
    const today = useMemo(() => new Date(), []);
    const minMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const cn = getDefaultClassNames();

    const monthStart = useMemo(
        () =>
            selected?.from
                ? new Date(selected.from.getFullYear(), selected.from.getMonth() + 1, 1)
                : new Date(today.getFullYear(), today.getMonth(), 1),
        [selected?.from, today],
    );
    const [month, setMonth] = useState(monthStart);

    useEffect(() => {
        setMonth(monthStart);
    }, [monthStart]);

    return (
        <DayPicker
            animate
            captionLayout="label"
            navLayout="around"
            numberOfMonths={1}
            mode="range"
            min={2}
            month={month}
            onMonthChange={setMonth}
            startMonth={minMonth}
            excludeDisabled
            locale={hr}
            timeZone="UTC"
            selected={selected}
            onSelect={(range) => {
                if (disabled) return;
                onSelect(range);
            }}
            required={false}
            disabled={{ before: today }}
            classNames={{
                root: `${cn.root} text-black`,
                caption_label: `${cn.caption_label} text-black font-medium`,
                weekday: `${cn.weekday} text-muted-text`,
                day: `${cn.day} text-black`,
                disabled: `${cn.disabled} line-through text-muted-text`,
                today: `text-black`,
                chevron: `fill-black`,
            }}
            components={{
                PreviousMonthButton: (props) => (
                    <button
                        {...props}
                        className="rdp-button_previous flex items-center justify-center">
                        <PreviousButton className="w-2.5 h-16 fill-none stroke-black" />
                    </button>
                ),
                NextMonthButton: (props) => (
                    <button
                        {...props}
                        className="rdp-button_next flex items-center justify-center">
                        <NextButton className="w-2.5 h-16 fill-none stroke-black" />
                    </button>
                ),
            }}
        />
    );
}
