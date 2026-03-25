"use client";

import Image from "next/image";
import { useLayoutEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "../svg_icons/ArrowIcons";
import Dots from "./Dots";

export type Img = { src: string; alt: string };

const SWIPE_THRESHOLD = 50;

type LayoutValues = {
    isMobile: boolean;
    activeW: number;
    inactiveW: number;
    stageH?: number;
};

function getLayoutValues(viewportWidth: number): LayoutValues {
    const mobile = viewportWidth < 730;

    if (mobile) {
        return {
            isMobile: true,
            activeW: 1080,
            inactiveW: 900,
            stageH: undefined,
        };
    }

    if (viewportWidth < 890) {
        const activeW = 648;
        const inactiveW = 540;
        return {
            isMobile: false,
            activeW,
            inactiveW,
            stageH: Math.round((activeW * 2) / 3),
        };
    }

    if (viewportWidth < 1140) {
        const activeW = 810;
        const inactiveW = 675;
        return {
            isMobile: false,
            activeW,
            inactiveW,
            stageH: Math.round((activeW * 2) / 3),
        };
    }

    return {
        isMobile: false,
        activeW: 1080,
        inactiveW: 900,
        stageH: Math.round((1080 * 2) / 3),
    };
}

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

    const [layout, setLayout] = useState<LayoutValues | null>(null);
    const [isReady, setIsReady] = useState(false);

    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);

    const count = images.length;

    const prev = () => setActive((i) => (i - 1 + count) % count);
    const next = () => setActive((i) => (i + 1) % count);

    useLayoutEffect(() => {
        const update = () => {
            const nextLayout = getLayoutValues(window.innerWidth);
            setLayout(nextLayout);
            setIsReady(true);
        };

        update();

        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const centerOffset = useMemo(() => {
        if (!layout) return 0;
        return active * layout.inactiveW + layout.activeW / 2;
    }, [active, layout]);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEndX(null);
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX == null || touchEndX == null) return;

        const distance = touchStartX - touchEndX;

        if (distance > SWIPE_THRESHOLD) next();
        if (distance < -SWIPE_THRESHOLD) prev();
    };

    // Prevent incorrect first paint
    if (!layout || !isReady) {
        return (
            <div className="w-full">
                <div className="relative w-full overflow-hidden invisible" />
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

    const { isMobile, activeW, inactiveW, stageH } = layout;

    return (
        <div className="w-full">
            <div
                className="relative w-full overflow-hidden"
                style={{ height: stageH }}>
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

                <div
                    className="flex items-center transition-transform duration-500 ease-out will-change-transform"
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
                                className={`shrink-0 flex items-center justify-center transition-[width,filter] duration-300 ${
                                    isActive ? "brightness-100" : "brightness-50"
                                }`}
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
                                        className={`absolute inset-0 focus:outline-none ${
                                            isActive ? "cursor-pointer" : "pointer-events-none"
                                        }`}
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
                                            priority={i === 0}
                                        />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

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
