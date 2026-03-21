"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
    children: React.ReactNode;
    as?: React.ElementType;
    className?: string;
    stagger?: number;
    delay?: number;
    duration?: number;
    y?: number;
    start?: string;
    once?: boolean;
};

export default function Reveal({
    children,
    as: Tag = "div",
    className = "",
    stagger = 0,
    delay = 0,
    duration = 0.8,
    y = 40,
    start = "top 90%",
    once = true,
}: RevealProps) {
    const ref = useRef(null);

    useGSAP(() => {
        const el = ref.current;
        if (!el) return;

        gsap.fromTo(
            el,
            {
                opacity: 0,
                y,
            },
            {
                opacity: 1,
                y: 0,
                duration,
                stagger,
                delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start,
                    toggleActions: once ? "play none none none" : "play reverse play reverse",
                    once,
                },
            },
        );
    });

    return (
        <Tag
            ref={ref}
            className={className}>
            {children}
        </Tag>
    );
}
