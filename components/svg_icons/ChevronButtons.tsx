export function PreviousButton({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 5 9" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 8.5L0.5 4.5L4.5 0.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function NextButton({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 5 9" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 8.5L4.5 4.5L0.5 0.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
