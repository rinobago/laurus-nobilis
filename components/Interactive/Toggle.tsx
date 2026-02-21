"use client";

export default function Toggle({
    on,
    onChange,
    className = "",
}: {
    on: boolean;
    onChange: (value: boolean) => void;
    className?: string;
}) {
    const toggle = () => {
        onChange?.(!on);
    };

    return (
        <button
            onClick={toggle}
            aria-pressed={on}
            className={`
        relative ${className}
        aspect-5/3
        rounded-full p-[4%]
        transition-colors duration-200 cursor-pointer
        ${on ? "bg-emerald-500" : "bg-brown-100"}
      `}>
            <span
                className={`
          block h-full aspect-square rounded-full bg-white
          transition-transform duration-200
          ${on ? "translate-x-[76.923%]" : "translate-x-0"}
        `}
            />
        </button>
    );
}
