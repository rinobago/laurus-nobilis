"use client";

type HamburgerButtonProps = {
    open: boolean;
    onToggle?: () => void;
};

export default function HamburgerButton({ open, onToggle }: HamburgerButtonProps) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={"inline-flex h-32 w-32 cursor-pointer items-center justify-center rounded-full"}
        >
            <svg viewBox="0 0 32 32" className={`hamburger w-32 aspect-square transition-transform duration-200 ease-in-out ${open ? "rotate-180" : ""}`} fill="none">
                <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-white">
                    {/* Top */}
                    <line x1="5" y1="8" x2="27" y2="8" className={`origin-center transition-[transform] duration-200 ease-in-out ${open ? "translate-y-8 rotate-45" : ""}`} />
                    {/* Middle */}
                    <line x1="5" y1="16" x2="27" y2="16" className={`origin-center transition-[opacity,transform] duration-200 ease-in-out ${open ? "opacity-0 scale-x-75" : "opacity-100"}`} />
                    {/* Bottom */}
                    <line x1="5" y1="24" x2="27" y2="24" className={`origin-center transition-[transform] duration-200 ease-in-out ${open ? "-translate-y-8 -rotate-45" : ""}`} />
                </g>
            </svg>
        </button>
    );
}
