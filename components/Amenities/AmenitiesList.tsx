import AmenitiesFeature from "./AmenitiesFeature";

export default function AmenitiesList() {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-[clamp(16px,2.77vw,40px)] w-full max-sm:max-w-100">
            <li className="hidden w-full sm:flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature amenitiy="queenbed" text="2 queen beds" />
            </li>
            <li className="hidden w-full sm:flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature amenitiy="singlebed" text="1 kid's bed" />
            </li>
            <li className="hidden w-full lg:flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature amenitiy="sofa" text="Extendable couch" />
            </li>
            <li className="w-full flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature amenitiy="pool" text="Private pool" />
            </li>
            <li className="w-full flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature amenitiy="bbq" text="Terrace with BBQ" />
            </li>
            <li className="w-full flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature amenitiy="parking" text="Private parking" />
            </li>
            <li className="w-full flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature amenitiy="ac" text="Air conditioning" />
            </li>
            <li className="w-full flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature amenitiy="wifi" text="WiFi" />
            </li>
            <li className="w-full flex flex-col justify-center items-center px-2.5 py-8 bg-brown-110 rounded-[18px]">
                <AmenitiesFeature amenitiy="beach" text="Nearby beach" />
            </li>
        </ul>
    );
}
