import { absoluteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        {
            url: absoluteUrl("/"),
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: absoluteUrl("/privacy-policy"),
            lastModified,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: absoluteUrl("/terms-of-service"),
            lastModified,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: absoluteUrl("/cancellation-policy"),
            lastModified,
            changeFrequency: "yearly",
            priority: 0.4,
        },
    ];
}
