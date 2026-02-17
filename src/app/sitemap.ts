import { MetadataRoute } from "next";
import { page_routes } from "./lib/routes-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.businesswish.tech";
    const currentDate = new Date().toISOString();

    // Individual tool page slugs
    const toolSlugs = [
        "palette-generator",
        "contrast-checker",
        "blindness-simulator",
        "format-converter",
        "image-extractor",
        "json-formatter",
        "qr-generator",
        "box-shadow",
        "gradient",
        "flexbox",
        "csv-to-json",
        "word-counter",
        "image-compressor",
        "css-grid",
        "pomodoro-timer",
        "animation-easing",
        "image-formatter",
    ];

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
        {
            url: `${baseUrl}/docs/motion`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/tools`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        // Individual tool pages
        ...toolSlugs.map((slug) => ({
            url: `${baseUrl}/tools/${slug}`,
            lastModified: currentDate,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
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
        } else if (route.href.startsWith('/motion')) {
            priority = 0.7;
            changeFrequency = "weekly";
        } else if (route.href.startsWith('/tools')) {
            priority = 0.8;
            changeFrequency = "weekly";
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