import { MetadataRoute } from "next";
import { page_routes } from "./lib/routes-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://business-wish.vercel.app";

    const routes: MetadataRoute.Sitemap = page_routes.map((route) => ({
        url: `${baseUrl}/docs${route.href}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as "weekly",
        priority: route.href.startsWith("/components") ? 0.8 : 0.5
    }));

    const additionalRoutes = [
        { url: baseUrl, priority: 1 },
        { url: `${baseUrl}/`, priority: 1 }
    ];

    return [
        ...additionalRoutes.map(route => ({
            url: route.url,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily" as "daily",
            priority: route.priority
        })),
        ...routes
    ];
}