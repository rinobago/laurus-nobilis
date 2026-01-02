export default function AmenitiesFeature({ amenitiy, text }: { amenitiy: string; text: string }) {
    return (
        <div className="flex gap-[clamp(16px,2.22vw,32px)] w-full justify-start items-center">
            <div className="flex flex-col items-center justify-center aspect-square px-[clamp(10.67px,0.83vw,12px)] bg-brown-070 rounded-2xl">
                <img src={`/icons/amenities/${amenitiy}.svg`} alt="Amenities icon" className="w-[clamp(42.67px,3.33vw,48px)] aspect-square" />
            </div>
            <span className="font-bold text-left text-white leading-[1.1] text-[clamp(24px,3.13vw,32px)] lg:text-[clamp(20px,2.33vw,32px)]">{text}</span>
        </div>
    );
}
