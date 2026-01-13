"use client";

import { useEffect, useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { enUS } from "react-day-picker/locale";
import { NextButton, PreviousButton } from "../svg_icons/ChevronButtons";

export default function BookingCalendar() {
    const today = new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth());
    const cn = getDefaultClassNames();

    const [months, setMonths] = useState(2);

    useEffect(() => {
        const update = () => setMonths(window.innerWidth < 640 ? 1 : 2);
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
