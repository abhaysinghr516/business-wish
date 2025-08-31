import { Metadata } from "next";

export interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
}

const baseUrl = "https://business-wish.vercel.app";
const defaultImage = `${baseUrl}/home.png`;

export function generateSEO({
    title,
    description,
    keywords = [],
    image = defaultImage,
    url,
    type = "website",
    publishedTime,
    modifiedTime,
    authors,
    section,
    tags = [],
}: SEOProps = {}): Metadata {
    const fullTitle = title
        ? `${title} | Business Wish - Tailwind CSS Components`
        : "Business Wish - Free Tailwind CSS UI Components Library";

    const fullDescription = description ||
        "Discover a comprehensive library of free, high-quality Tailwind CSS UI components for web developers. Boost your project's design and efficiency with our ready-to-use components.";

    const fullUrl = url ? `${baseUrl}${url}` : baseUrl;

    const allKeywords = [
        "Tailwind CSS components",
        "free Tailwind CSS components",
        "React UI components",
        "Next.js components",
        "UI library",
        "web development",
        "frontend components",
        "responsive design",
        "dark mode",
        "accessibility",
        ...keywords,
        ...tags,
    ];

    const metadata: Metadata = {
        title: fullTitle,
        description: fullDescription,
        keywords: allKeywords,
        authors: authors?.map(name => ({ name })) || [
            { name: "Abhay Singh Rathore", url: "https://abhay-singh-rathore.vercel.app/" }
        ],
        creator: "Abhay Singh Rathore",
        publisher: "Business Wish",
        alternates: {
            canonical: fullUrl,
        },
        openGraph: {
            title: fullTitle,
            description: fullDescription,
            type: type as any,
            url: fullUrl,
            siteName: "Business Wish",
            locale: "en_US",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
            ...(type === "article" && {
                publishedTime,
                modifiedTime,
                authors: authors || ["Abhay Singh Rathore"],
                section,
                tags,
            }),
        },
        twitter: {
            card: "summary_large_image",
            site: "@abhaysinghr516",
            creator: "@abhaysinghr516",
            title: fullTitle,
            description: fullDescription,
            images: [image],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };

    return metadata;
}

// Structured data generators
export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Business Wish",
        url: baseUrl,
        description: "Free Tailwind CSS UI components library for web developers.",
        keywords: "Tailwind CSS, UI components, React, Next.js, free, open source",
        author: {
            "@type": "Person",
            name: "Abhay Singh Rathore",
            url: "https://abhay-singh-rathore.vercel.app/",
        },
        publisher: {
            "@type": "Organization",
            name: "Business Wish",
            url: baseUrl,
        },
        potentialAction: {
            "@type": "SearchAction",
            target: `${baseUrl}/docs?search={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };
}

export function generateSoftwareApplicationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Business Wish UI Components",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web Browser",
        description: "A comprehensive library of free, high-quality Tailwind CSS UI components for web developers.",
        url: baseUrl,
        downloadUrl: `${baseUrl}/docs`,
        softwareVersion: "2.3.0",
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString(),
        author: {
            "@type": "Person",
            name: "Abhay Singh Rathore",
        },
        publisher: {
            "@type": "Organization",
            name: "Business Wish",
        },
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "150",
            bestRating: "5",
            worstRating: "1",
        },
    };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function generateArticleSchema({
    title,
    description,
    url,
    publishedTime,
    modifiedTime,
    authors = ["Abhay Singh Rathore"],
    image = defaultImage,
}: {
    title: string;
    description: string;
    url: string;
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    image?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: title,
        description,
        url: `${baseUrl}${url}`,
        datePublished: publishedTime || new Date().toISOString(),
        dateModified: modifiedTime || new Date().toISOString(),
        author: authors.map(name => ({
            "@type": "Person",
            name,
        })),
        publisher: {
            "@type": "Organization",
            name: "Business Wish",
            logo: {
                "@type": "ImageObject",
                url: `${baseUrl}/logo.png`,
            },
        },
        image: {
            "@type": "ImageObject",
            url: image,
            width: 1200,
            height: 630,
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${baseUrl}${url}`,
        },
    };
}