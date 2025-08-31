import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://business-wish.vercel.app";

    return {
        rules: [
            {
                userAgent: "*",
                allow: [
                    "/",
                    "/docs/",
                    "/docs/components/",
                    "/docs/pages/",
                    "/llms.txt",
                ],
                disallow: [
                    "/api/",
                    "/templates/",
                    "/private/",
                    "/_next/",
                    "/node_modules/",
                    "/*.json$",
                    "/*.xml$",
                    "/admin/",
                ],
                crawlDelay: 1,
            },
            {
                userAgent: "Googlebot",
                allow: [
                    "/",
                    "/docs/",
                    "/docs/components/",
                    "/docs/pages/",
                    "/llms.txt",
                ],
                disallow: [
                    "/api/",
                    "/admin/",
                    "/private/",
                    "/_next/",
                ],
                crawlDelay: 1,
            },
            {
                userAgent: "Bingbot",
                allow: [
                    "/",
                    "/docs/",
                    "/llms.txt",
                ],
                disallow: [
                    "/api/",
                    "/admin/",
                    "/private/",
                ],
                crawlDelay: 2,
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl
    };
}