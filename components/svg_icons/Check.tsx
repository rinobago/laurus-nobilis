export function Check({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 13 10" fill="none" className={className} style={{ aspectRatio: "1 / 1.46" }} xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6667 1L4.33333 8.33333L1 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function CompleteCheck({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 140 140" fill="none" className={className} style={{ aspectRatio: "1 / 1" }} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M127.172 58.3333C129.836 71.4076 127.937 85 121.793 96.8438C115.648 108.688 105.629 118.067 93.4057 123.418C81.1826 128.768 67.4947 129.767 54.6244 126.247C41.7542 122.727 30.4796 114.901 22.681 104.075C14.8823 93.2484 11.0309 80.0756 11.7691 66.7531C12.5072 53.4306 17.7903 40.7639 26.7373 30.8652C35.6843 20.9665 47.7544 14.4342 60.9347 12.3576C74.1151 10.2811 87.6089 12.7859 99.166 19.4542"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M52.5 64.1666L70 81.6666L128.333 23.3333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
