"use client";

const MAX_VISIBLE = 10;

export default function Dots({
    count,
    active,
    onGo,
}: {
    count: number;
    active: number;
    onGo: (i: number) => void;
}) {
    const visibleCount = Math.min(MAX_VISIBLE, count);

    let start = 0;

    if (count > MAX_VISIBLE) {
        const half = Math.floor(visibleCount / 2);

        if (active <= half) {
            start = 0;
        } else if (active > count - half - 1) {
            start = count - visibleCount;
        } else {
            start = active - half;
        }
    }

    const end = start + visibleCount;
    const visibleDots = Array.from({ length: visibleCount }, (_, i) => start + i);

    return (
        <div className="flex items-center justify-center gap-1.5 min-[360px]:gap-2">
            {visibleDots.map((i) => (
                <button
                    key={i}
                    type="button"
                    aria-label={`Go to image ${i + 1}`}
                    onClick={() => onGo(i)}
                    className={`w-1.5 min-[400px]:w-2 aspect-square cursor-pointer rounded-full transition-opacity ${i === active ? "bg-white/90" : "bg-white/35"}`}
                />
            ))}
        </div>
    );
}
