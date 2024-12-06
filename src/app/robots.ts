import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://business-wish.vercel.app";

    return {
        rules: [
            {
                userAgent: "*",
                allow: [
                    "/",
                    "/docs",
                    "/blog",
                ],
                disallow: [
                    "/templates",
                    "/private",
                    "/*.json$",
                    "/*.xml$"
                ],
            },
            {
                userAgent: "Googlebot",
                allow: [
                    "/docs",
                    "/blog"
                ],
                disallow: [
                    "/admin",
                    "/private"
                ]
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl
    };
}