"use client";

export default function Dots({ count, active, onGo }: { count: number; active: number; onGo: (i: number) => void }) {
    return (
        <div className="flex items-center justify-center gap-1.5 min-[360px]:gap-2">
            {Array.from({ length: count }).map((_, i) => (
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
