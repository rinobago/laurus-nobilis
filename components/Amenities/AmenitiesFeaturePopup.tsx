export default function AmenitiesFeature({ amenitiy, text }: { amenitiy: string; text: string }) {
    return (
        <div className="flex w-full items-center justify-start gap-[clamp(16px,2.22vw,32px)]">
            <div className="shrink-0 w-[clamp(64px,5vw,72px)] h-[clamp(64px,5vw,72px)] bg-brown-070 rounded-2xl flex items-center justify-center">
                <img src={`/icons/amenities/${amenitiy}.svg`} alt="" className="w-[clamp(42.67px,3.33vw,48px)] h-[clamp(42.67px,3.33vw,48px)]" />
            </div>

            <span className="min-w-0 font-bold text-left text-black leading-[1.1] text-[clamp(22px,6.2vw,32px)]">{text}</span>
        </div>
    );
}
