"use client";

import { NextButton, PreviousButton } from "@/components/svg_icons/ChevronButtons";
import { fromYMD, toYMD } from "@/lib/dateParams";
import { useEffect, useMemo, useState } from "react";
import { DateRange, DayPicker, getDefaultClassNames } from "react-day-picker";
import { hr } from "react-day-picker/locale";

type BookingRange = { checkin_date: string; checkout_date: string };

function addDaysUTC(date: Date, days: number) {
    const next = new Date(date);
    next.setUTCDate(next.getUTCDate() + days);
    return next;
}

function dayDiffUTC(from: Date, to: Date) {
    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.round((to.getTime() - from.getTime()) / msPerDay);
}

function buildBlockedDaySet(ranges: BookingRange[]) {
    const blockedDays = new Set<string>();

    for (const range of ranges) {
        const checkIn = fromYMD(range.checkin_date);
        const checkOut = fromYMD(range.checkout_date);

        // Same-day booking blocks that day directly.
        if (toYMD(checkIn) === toYMD(checkOut)) {
            blockedDays.add(toYMD(checkIn));
            continue;
        }

        let cursor = addDaysUTC(checkIn, 1);
        const end = addDaysUTC(checkOut, -1);

        while (cursor <= end) {
            blockedDays.add(toYMD(cursor));
            cursor = addDaysUTC(cursor, 1);
        }
    }

    if (blockedDays.size < 2) return blockedDays;

    const sortedBlocked = [...blockedDays].sort();
    const result = new Set(blockedDays);

    for (let i = 0; i < sortedBlocked.length - 1; i++) {
        const left = fromYMD(sortedBlocked[i]);
        const right = fromYMD(sortedBlocked[i + 1]);
        const freeGap = dayDiffUTC(left, right) - 1;

        // If 1 or 2 free days are trapped between blocked days, block them too.
        if (freeGap >= 1 && freeGap <= 2) {
            for (let offset = 1; offset <= freeGap; offset++) {
                result.add(toYMD(addDaysUTC(left, offset)));
            }
        }
    }

    return result;
}

function removeRangeFromBlockedSet(blockedDays: Set<string>, checkIn?: string, checkOut?: string) {
    if (!checkIn || !checkOut) return blockedDays;

    const result = new Set(blockedDays);
    let cursor = fromYMD(checkIn);
    const end = fromYMD(checkOut);

    while (cursor <= end) {
        result.delete(toYMD(cursor));
        cursor = addDaysUTC(cursor, 1);
    }

    return result;
}

export default function CalendarDateChange({
    selected,
    onSelect,
    disabled = false,
    currentCheckIn,
    currentCheckOut,
}: {
    selected: DateRange | undefined;
    onSelect: (range: DateRange | undefined) => void;
    disabled?: boolean;
    currentCheckIn?: string;
    currentCheckOut?: string;
}) {
    const [blockedDays, setBlockedDays] = useState<Set<string>>(new Set());
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

    useEffect(() => {
        let active = true;

        const loadBlocked = async () => {
            try {
                const res = await fetch("/api/bookings/blocked");
                if (!res.ok) return;

                const payload = (await res.json()) as {
                    ranges?: BookingRange[];
                };

                if (!active) return;

                const blocked = buildBlockedDaySet(payload.ranges || []);
                const cleanedBlocked = removeRangeFromBlockedSet(
                    blocked,
                    currentCheckIn,
                    currentCheckOut,
                );

                setBlockedDays(cleanedBlocked);
            } catch {
                // Silent fail; calendar remains usable.
            }
        };

        loadBlocked();
        return () => {
            active = false;
        };
    }, [currentCheckIn, currentCheckOut]);

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
            disabled={[{ before: today }, (date) => blockedDays.has(toYMD(date))]}
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
