"use client";

import { useEffect, useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { enUS } from "react-day-picker/locale";

export default function BookingCalendar() {
    const today = new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth());
    const cn = getDefaultClassNames();

    const [months, setMonths] = useState(2);

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;

            if (w < 640) {
                setMonths(1);
                return;
            }
            setMonths(2);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return (
        <DayPicker
            animate
            captionLayout="label"
            navLayout="around"
            numberOfMonths={months}
            mode="range"
            min={2}
            startMonth={monthStart}
            disabled={{ before: today }}
            locale={enUS}
            timeZone="UTC"
            classNames={{
                root: `${cn.root} text-black`,
                caption_label: `${cn.caption_label} text-black font-medium`,
                weekday: `${cn.weekday} text-muted-text`,
                day: `${cn.day} text-black`,
                disabled: `${cn.disabled} text-muted-text`,
                today: `text-black`,
                chevron: `fill-black`,
            }}
        />
    );
}
