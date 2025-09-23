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

const baseUrl = "https://www.businesswish.tech";
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
        description: "Free Tailwind CSS UI components library and developer tools for web developers.",
        keywords: "Tailwind CSS, UI components, React, Next.js, developer tools, free, open source, color palette generator, CSS tools, JSON formatter",
        author: {
            "@type": "Person",
            name: "Abhay Singh Rathore",
            url: "https://abhay-singh-rathore.vercel.app/",
        },
        publisher: {
            "@type": "Organization",
            name: "Business Wish",
            url: baseUrl,
            logo: {
                "@type": "ImageObject",
                url: `${baseUrl}/logo.png`,
                width: 192,
                height: 192,
            },
            sameAs: [
                "https://github.com/abhaysinghr516/business-wish",
                "https://twitter.com/abhaysinghr516",
            ],
        },
        potentialAction: [
            {
                "@type": "SearchAction",
                target: `${baseUrl}/docs?search={search_term_string}`,
                "query-input": "required name=search_term_string",
            },
            {
                "@type": "SearchAction",
                target: `${baseUrl}/tools?search={search_term_string}`,
                "query-input": "required name=search_term_string",
            },
        ],
    };
}

export function generateSoftwareApplicationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Business Wish UI Components & Developer Tools",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web Browser",
        description: "A comprehensive library of free, high-quality Tailwind CSS UI components and 17+ developer tools for web developers.",
        url: baseUrl,
        downloadUrl: `${baseUrl}/docs`,
        softwareVersion: "2.4.0",
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString(),
        author: {
            "@type": "Person",
            name: "Abhay Singh Rathore",
            url: "https://abhay-singh-rathore.vercel.app/",
        },
        publisher: {
            "@type": "Organization",
            name: "Business Wish",
            url: baseUrl,
            logo: {
                "@type": "ImageObject",
                url: `${baseUrl}/logo.png`,
            },
        },
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "200",
            bestRating: "5",
            worstRating: "1",
        },
        featureList: [
            "Free Tailwind CSS UI Components",
            "17+ Developer Tools",
            "Color Palette Generator",
            "CSS Grid & Flexbox Generators",
            "JSON Formatter & Validator",
            "Image Compression Tools",
            "QR Code Generator",
            "Accessibility Tools",
            "Dark Mode Support",
            "Copy-Paste Ready Code",
            "No Registration Required",
            "Privacy-Focused (Offline Tools)",
        ],
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

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Business Wish",
        url: baseUrl,
        logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/logo.png`,
            width: 192,
            height: 192,
        },
        description: "Free Tailwind CSS UI components library and developer tools for web developers.",
        foundingDate: "2024-01-01",
        founder: {
            "@type": "Person",
            name: "Abhay Singh Rathore",
            url: "https://abhay-singh-rathore.vercel.app/",
        },
        sameAs: [
            "https://github.com/abhaysinghr516/business-wish",
            "https://twitter.com/abhaysinghr516",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: "English",
        },
        knowsAbout: [
            "Tailwind CSS",
            "React Components",
            "Next.js",
            "Web Development",
            "UI/UX Design",
            "Frontend Development",
            "Developer Tools",
            "Color Theory",
            "CSS Grid",
            "Flexbox",
            "Accessibility",
            "Web Standards",
        ],
    };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

export function generateHowToSchema({
    name,
    description,
    steps,
    totalTime,
    image = defaultImage,
}: {
    name: string;
    description: string;
    steps: Array<{ name: string; text: string }>;
    totalTime?: string;
    image?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name,
        description,
        image: {
            "@type": "ImageObject",
            url: image,
        },
        totalTime: totalTime || "PT5M",
        supply: [],
        tool: [],
        step: steps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.name,
            text: step.text,
        })),
    };
}