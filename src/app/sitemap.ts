import { MetadataRoute } from "next";
import { page_routes } from "./lib/routes-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.businesswish.tech";
    const currentDate = new Date().toISOString();

    // Static high-priority pages
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/docs`,
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/docs/components`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/docs/pages`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    // Dynamic component and page routes
    const dynamicRoutes: MetadataRoute.Sitemap = page_routes.map((route) => {
        let priority = 0.7;
        let changeFrequency: "weekly" | "monthly" = "weekly";

        // Higher priority for popular components
        const popularComponents = ['/button', '/card', '/form', '/modal', '/navbar', '/hero'];
        if (popularComponents.some(comp => route.href.includes(comp))) {
            priority = 0.8;
        }

        // Component pages get higher priority than other pages
        if (route.href.startsWith('/components')) {
            priority = Math.max(priority, 0.7);
        } else if (route.href.startsWith('/pages')) {
            priority = 0.6;
            changeFrequency = "monthly";
        }

        return {
            url: `${baseUrl}/docs${route.href}`,
            lastModified: currentDate,
            changeFrequency,
            priority,
        };
    });

    return [
        ...staticRoutes,
        ...dynamicRoutes,
    ];
}