"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "../svg_icons/ArrowIcons";
import Xicon from "../svg_icons/Xicon";
import type { Img } from "./InfiniteStage";

export default function GalleryOverlay({
    open,
    onClose,
    images,
    initialIndex = 0,
}: {
    open: boolean;
    onClose: () => void;
    images: Img[];
    initialIndex?: number;
}) {
    const count = images.length;

    const [activeIndex, setActiveIndex] = useState(initialIndex);
    const [isMobile, setIsMobile] = useState(false);

    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);

    const SWIPE_THRESHOLD = 50; // minimum px to count as swipe

    // when opening, focus the image that was active/clicked in the carousel
    useEffect(() => {
        if (!open) return;
        setActiveIndex(initialIndex);
    }, [open, initialIndex]);

    // ESC to close
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    useEffect(() => {
        const update = () => {
            setIsMobile(window.innerWidth <= 730);
        };

        update(); // set initial value
        window.addEventListener("resize", update);

        return () => window.removeEventListener("resize", update);
    }, []);

    if (!open || !count) return null;

    const safeIndex = ((activeIndex % count) + count) % count;
    const current = images[safeIndex];

    const prev = () => setActiveIndex((i) => (i - 1 + count) % count);
    const next = () => setActiveIndex((i) => (i + 1) % count);

    // Touch handlers for mobile swipe navigation
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEndX(null); // reset
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStartX || !touchEndX) return;

        const distance = touchStartX - touchEndX;

        if (distance > SWIPE_THRESHOLD) {
            // swiped left
            next();
        }

        if (distance < -SWIPE_THRESHOLD) {
            // swiped right
            prev();
        }
    };

    return (
        <div className="fixed inset-0 z-2000 bg-black h-dvh w-dvw">
            <div className="relative w-full h-full">
                {/* Close (top-right) */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close gallery"
                    className="absolute top-6 right-6 z-10000 w-64 cursor-pointer aspect-square rounded-full bg-black/40 flex items-center justify-center">
                    <Xicon className="w-10 aspect-square fill-white stroke-transparent" />
                </button>

                <div className="w-full h-full flex flex-col min-h-0">
                    {/* Main image */}
                    <div className="flex-1 min-h-0 flex items-center justify-center px-[clamp(16px,4vw,40px)]">
                        <div
                            className="relative w-full max-w-270"
                            onTouchStart={isMobile ? handleTouchStart : undefined}
                            onTouchMove={isMobile ? handleTouchMove : undefined}
                            onTouchEnd={isMobile ? handleTouchEnd : undefined}>
                            {/* Arrows */}
                            <div className="pointer-events-none absolute inset-0 z-10000 flex items-center justify-between max-[1040px]:px-16">
                                <button
                                    type="button"
                                    onClick={prev}
                                    aria-label="Previous"
                                    className="cursor-pointer pointer-events-auto w-[clamp(32px,9.6vw,48px)] aspect-square rounded-full bg-white flex items-center justify-center">
                                    <ArrowLeft className="w-[clamp(12px,3.2vw,16px)] aspect-square fill-black stroke-black" />
                                </button>

                                <button
                                    type="button"
                                    onClick={next}
                                    aria-label="Next"
                                    className="cursor-pointer pointer-events-auto w-[clamp(32px,9.6vw,48px)] aspect-square rounded-full bg-white flex items-center justify-center">
                                    <ArrowRight className="w-[clamp(12px,3.2vw,16px)] aspect-square fill-black stroke-black" />
                                </button>
                            </div>

                            <div className="relative w-full aspect-3/2 max-h-[calc(100dvh-180px)]">
                                <Image
                                    key={current.src}
                                    src={current.src}
                                    alt={current.alt}
                                    fill={true}
                                    className="object-contain"
                                    sizes="100vw"
                                    priority={safeIndex === initialIndex}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Thumbnails (100x100) */}
                    <div className="shrink-0 border-t border-white/15 bg-black px-3 py-3 max-[520px]:px-2 max-[520px]:py-2 max-[445px]:px-1.5 max-[445px]:py-1.5">
                        <div className="flex gap-3 max-[520px]:gap-2 max-[445px]:gap-1.5 overflow-x-auto">
                            {images.map((img, i) => {
                                const selected = i === safeIndex;

                                return (
                                    <button
                                        key={img.src}
                                        type="button"
                                        onClick={() => setActiveIndex(i)}
                                        aria-label={`Select image ${i + 1}`}
                                        className={`cursor-pointer overflow-hidden shrink-0 w-25 h-25 max-[650px]:w-22.5 max-[650px]:h-22.5 max-[520px]:w-18.75 max-[520px]:h-18.75 max-[445px]:w-15 max-[445px]:h-15 aspect-square rounded border ${
                                            selected ? "border-white/60" : "border-white/15"
                                        }`}>
                                        <div className="relative shrink-0 w-25 h-25 max-[650px]:w-22.5 max-[650px]:h-22.5 max-[520px]:w-18.75 max-[520px]:h-18.75 max-[445px]:w-15 max-[445px]:h-15">
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                sizes="(max-width: 445px) 60px, (max-width: 520px) 75px, (max-width: 650px) 90px, 100px"
                                                className={`object-cover transition-all duration-200 ${selected ? "brightness-100" : "brightness-50"}`}
                                            />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
