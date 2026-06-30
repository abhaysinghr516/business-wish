import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://www.businesswish.tech";

    return {
        rules: [
            {
                userAgent: "*",
                allow: [
                    "/",
                    "/docs/",
                    "/docs/components/",
                    "/docs/pages/",
                    "/docs/motion/",
                    "/llms.txt",
                ],
                disallow: [
                    "/private/",
                    "/node_modules/",
                    "/*.json$",
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
                    "/docs/motion/",
                    "/llms.txt",
                ],
                disallow: [
                    "/admin/",
                    "/private/",
                ],
                crawlDelay: 1,
            },
            {
                userAgent: "Bingbot",
                allow: [
                    "/",
                    "/docs/",
                    "/docs/motion/",
                    "/llms.txt",
                ],
                disallow: [
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
