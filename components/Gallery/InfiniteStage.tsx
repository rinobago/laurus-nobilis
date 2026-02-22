"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "../svg_icons/ArrowIcons";
import Dots from "./Dots";

export type Img = { src: string; alt: string };

const ACTIVE_W = 1080;
const INACTIVE_W = 900;

export default function InfiniteStage({
    images,
    openGallery,
    showDots = true,
}: {
    images: Img[];
    openGallery?: (i: number) => void;
    showDots?: boolean;
}) {
    const [active, setActive] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);

    const SWIPE_THRESHOLD = 50; // minimum px to count as swipe

    // ✅ derived widths instead of scaling
    const [activeW, setActiveW] = useState(ACTIVE_W);
    const [inactiveW, setInactiveW] = useState(INACTIVE_W);
    const stageH = isMobile ? undefined : Math.round((activeW * 2) / 3);

    const count = images.length;

    const prev = () => setActive((i) => (i - 1 + count) % count);
    const next = () => setActive((i) => (i + 1) % count);

    // distance from start to the CENTER of the active card (desktop mode)
    const centerOffset = active * inactiveW + activeW / 2;

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;

            const mobile = w < 730;
            setIsMobile(mobile);

            if (mobile) {
                // mobile: full width slides
                setActiveW(ACTIVE_W);
                setInactiveW(INACTIVE_W);
                return;
            }

            // >=700 and <860 => scale 0.60
            if (w < 890) {
                setActiveW(648); // 1080 * 0.60
                setInactiveW(540); // 900  * 0.60
                return;
            }

            // >=860 and <1140 => scale 0.75
            if (w < 1140) {
                setActiveW(810); // 1080 * 0.75
                setInactiveW(675); // 900  * 0.75
                return;
            }

            // >=1140 => scale 1.00
            setActiveW(1080);
            setInactiveW(900);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

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
        <div className="w-full">
            {/* STAGE (full width) */}
            <div
                className="relative w-full overflow-hidden"
                style={{ height: stageH }}>
                {/* ARROWS */}
                {isMobile ? (
                    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between px-8">
                        <button
                            onClick={prev}
                            type="button"
                            aria-label="Previous image"
                            className="pointer-events-auto cursor-pointer w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center">
                            <ArrowLeft className="w-16 aspect-square fill-brown-100 stroke-brown-100" />
                        </button>

                        <button
                            onClick={next}
                            type="button"
                            aria-label="Next image"
                            className="pointer-events-auto cursor-pointer w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center">
                            <ArrowRight className="w-16 aspect-square fill-brown-100 stroke-brown-100" />
                        </button>
                    </div>
                ) : (
                    <div
                        className="pointer-events-none absolute left-1/2 top-0 z-10 h-full -translate-x-1/2 flex items-center justify-between"
                        style={{ width: `${activeW}px` }}>
                        <button
                            onClick={prev}
                            type="button"
                            aria-label="Previous image"
                            className="pointer-events-auto cursor-pointer w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center -translate-x-7">
                            <ArrowLeft className="w-16 aspect-square fill-brown-100 stroke-brown-100" />
                        </button>

                        <button
                            onClick={next}
                            type="button"
                            aria-label="Next image"
                            className="pointer-events-auto cursor-pointer w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center translate-x-7">
                            <ArrowRight className="w-16 aspect-square fill-brown-100 stroke-brown-100" />
                        </button>
                    </div>
                )}

                {/* TRACK */}
                <div
                    className="flex items-center transition-transform duration-500 ease-out"
                    onTouchStart={isMobile ? handleTouchStart : undefined}
                    onTouchMove={isMobile ? handleTouchMove : undefined}
                    onTouchEnd={isMobile ? handleTouchEnd : undefined}
                    style={{
                        transform: isMobile
                            ? `translateX(-${active * 100}%)`
                            : `translateX(calc(50% - ${centerOffset}px))`,
                    }}>
                    {images.map((img, i) => {
                        const isActive = i === active;

                        return (
                            <div
                                key={img.src}
                                className={`shrink-0 flex items-center justify-center transition-[width,filter] duration-300 ${isActive ? "brightness-100" : "brightness-50"}`}
                                style={{
                                    width: isMobile
                                        ? "100%"
                                        : isActive
                                          ? `${activeW}px`
                                          : `${inactiveW}px`,
                                }}>
                                <div className="relative w-full aspect-3/2">
                                    <button
                                        type="button"
                                        onClick={isActive ? () => openGallery?.(i) : undefined}
                                        className={`absolute inset-0 focus:outline-none ${isActive ? "cursor-pointer" : "pointer-events-none"}`}
                                        aria-label={isActive ? "Open gallery" : undefined}>
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-contain"
                                            sizes={
                                                isMobile
                                                    ? "100vw"
                                                    : isActive
                                                      ? `${activeW}px`
                                                      : `${inactiveW}px`
                                            }
                                        />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* DOTS */}
            {showDots && (
                <div className="mt-[48px]">
                    <Dots
                        count={count}
                        active={active}
                        onGo={setActive}
                    />
                </div>
            )}
        </div>
    );
}
