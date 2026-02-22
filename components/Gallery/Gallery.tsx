import CarouselWithGallery from "./CarouselWithGallery";

export default function Gallery() {
    return (
        <section
            id="gallery"
            className="py-64 md:py-112 bg-brown-100 flex flex-col items-center">
            <CarouselWithGallery
                images={[
                    { src: "/apartment-images/IMG_7222.jpg", alt: "Pool" },
                    { src: "/apartment-images/image-copy-2.png", alt: "Pool" },
                    { src: "/apartment-images/image-copy.png", alt: "Pool" },
                    { src: "/apartment-images/image.png", alt: "Pool" },
                    { src: "/apartment-images/IMG_7223.jpg", alt: "Pool" },
                    { src: "/apartment-images/IMG_7224.jpg", alt: "Pool" },
                    { src: "/apartment-images/IMG_7225.jpg", alt: "Terrace" },
                    { src: "/apartment-images/IMG_7226.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_7227.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_7228.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_7229.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_7230.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_7231.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_7232.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_7233.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_7234.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_7235.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0734.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0742.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0736.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0743.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0745.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0751.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0752.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0753.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0754.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0755.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0758.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0759.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0760.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0761.jpg", alt: "Living room" },
                    { src: "/apartment-images/IMG_0764.jpg", alt: "Living room" },
                ]}
            />
        </section>
    );
}
