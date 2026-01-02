"use client";

import { useEffect, useState } from "react";
import GalleryOverlay from "./GalleryOverlay";
import InfiniteStage, { Img } from "./InfiniteStage";

export default function CarouselWithGallery({ images }: { images: Img[] }) {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!images?.length) return null;

    return (
        <>
            <InfiniteStage
                images={images}
                openGallery={(i) => {
                    setActiveIndex(i);
                    setOpen(true);
                }}
            />

            <GalleryOverlay open={open} onClose={() => setOpen(false)} images={images} initialIndex={activeIndex} />
        </>
    );
}
