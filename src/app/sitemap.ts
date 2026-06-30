import { MetadataRoute } from "next";
import { page_routes } from "./lib/routes-config";
import { promises as fs } from "fs";
import path from "path";

const baseUrl = "https://www.businesswish.tech";
const fallbackDate = new Date("2026-05-28T00:00:00.000Z");

async function getLastModified(relativePath: string) {
    try {
        const stats = await fs.stat(path.join(process.cwd(), relativePath));
        return stats.mtime;
    } catch {
        return fallbackDate;
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Static high-priority pages
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: await getLastModified("src/app/page.tsx"),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/docs`,
            lastModified: await getLastModified("src/app/contents/docs/index.mdx"),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/docs/components`,
            lastModified: await getLastModified("src/app/contents/docs/components/index.mdx"),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/docs/pages`,
            lastModified: await getLastModified("src/app/contents/docs/pages/index.mdx"),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/docs/motion`,
            lastModified: await getLastModified("src/app/contents/docs/motion/index.mdx"),
            changeFrequency: "weekly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: await getLastModified("contents/blogs"),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: await getLastModified("src/app/(routes)/privacy/page.tsx"),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: await getLastModified("src/app/(routes)/terms/page.tsx"),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    // Dynamic component and page routes
    const dynamicRoutes: MetadataRoute.Sitemap = await Promise.all(page_routes.map(async (route) => {
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
        } else if (route.href.startsWith('/pages')) {
            priority = 0.6;
            changeFrequency = "monthly";
        }

        return {
            url: `${baseUrl}/docs${route.href}`,
            lastModified: await getLastModified(`src/app/contents/docs${route.href}/index.mdx`),
            changeFrequency,
            priority,
        };
    }));

    const blogFiles = await fs
        .readdir(path.join(process.cwd(), "contents/blogs"))
        .catch(() => []);

    const blogRoutes: MetadataRoute.Sitemap = await Promise.all(
        blogFiles
            .filter((file) => file.endsWith(".mdx"))
            .map(async (file) => {
                const slug = file.replace(/\.mdx$/, "");
                return {
                    url: `${baseUrl}/blog/${slug}`,
                    lastModified: await getLastModified(`contents/blogs/${file}`),
                    changeFrequency: "monthly" as const,
                    priority: 0.6,
                };
            })
    );

    return [
        ...staticRoutes,
        ...dynamicRoutes,
        ...blogRoutes,
    ];
}
