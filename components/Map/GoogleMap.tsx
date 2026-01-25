import { getConsent } from "@/lib/cookies/getConsent";

export default async function GoogleMap() {
    const functionalEnabled = (await getConsent())?.functional === true;

    return (
        <div
            aria-label="Map showing the location of Laurus Nobilis"
            className="w-full lg:aspect-video aspect-3/4 overflow-hidden rounded-xl lg:rounded-3xl">
            {functionalEnabled ? (
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.9806742967826!2d14.269979676845123!3d45.28861224513631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4763579240838bed%3A0x2ab2d841cc3a8799!2sRezine%207G%2C%2051415%2C%20Lovran!5e0!3m2!1sen!2shr!4v1767400763473!5m2!1sen!2shr"
                    className="w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Apartment location map"></iframe>
            ) : (
                <div className="bg-brown-090 w-full h-full flex flex-col justify-center items-center text-center text-white text-16 leading-150 px-16">
                    <p>Google Maps is disabled</p>
                    <p>To view the map, please accept functional cookies.</p>
                    <button className="cursor-pointer underline">Cookie preferences</button>
                </div>
            )}
        </div>
    );
}
