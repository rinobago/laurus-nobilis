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
    ];
}
