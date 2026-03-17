import type { Metadata } from "next";

const FALLBACK_SITE_URL = "https://laurusnobilisrent.com";

export const SITE_NAME = "Laurus Nobilis";
export const DEFAULT_OG_IMAGE = "/apartment-images/IMG_7224.jpg";

export function getSiteUrl(): string {
    const raw = process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL;
    return raw.replace(/\/+$/, "");
}

export function absoluteUrl(path = "/"): string {
    return new URL(path, getSiteUrl()).toString();
}

type PageSeoOptions = {
    title: string;
    description: string;
    path: string;
    indexable?: boolean;
};

export function buildPageMetadata({
    title,
    description,
    path,
    indexable = true,
}: PageSeoOptions): Metadata {
    return {
        title,
        description,
        alternates: {
            canonical: path,
        },
        openGraph: {
            title,
            description,
            url: path,
            siteName: SITE_NAME,
            type: "website",
            images: [
                {
                    url: DEFAULT_OG_IMAGE,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [DEFAULT_OG_IMAGE],
        },
        robots: indexable
            ? {
                  index: true,
                  follow: true,
                  nocache: false,
                  googleBot: {
                      index: true,
                      follow: true,
                      noimageindex: false,
                  },
              }
            : {
                  index: false,
                  follow: true,
                  nocache: false,
                  googleBot: {
                      index: true,
                      follow: true,
                      noimageindex: false,
                  },
              },
    };
}
