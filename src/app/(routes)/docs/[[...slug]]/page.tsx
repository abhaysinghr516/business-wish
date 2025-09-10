import { notFound } from "next/navigation";
import { getDocsForSlug, getDocsTocs } from "@/app/lib/markdown";
import { page_routes } from "@/app/lib/routes-config";
import { Metadata } from "next";
import {
  generateSEO,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { DocsPageContent } from "@/app/components/docs-page-content";

type PageProps = {
  params: { slug: string[] };
};

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);

  if (!res) notFound();

  // Get TOC data
  const tocs = await getDocsTocs(pathName);

  // Generate structured data
  const breadcrumbItems = [
    { name: "Home", url: "https://www.businesswish.tech" },
    { name: "Docs", url: "https://www.businesswish.tech/docs" },
    ...slug.map((segment, index) => ({
      name:
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
      url: `https://www.businesswish.tech/docs/${slug
        .slice(0, index + 1)
        .join("/")}`,
    })),
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const articleSchema = generateArticleSchema({
    title: res.frontmatter.title,
    description: res.frontmatter.description,
    url: `/docs/${pathName}`,
  });

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <DocsPageContent
        title={res.frontmatter.title}
        description={res.frontmatter.description}
        content={res.content}
        tocs={tocs}
        pathname={pathName}
        slug={slug}
      />
    </>
  );
}

export async function generateMetadata({
  params: { slug = [] },
}: PageProps): Promise<Metadata> {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);
  if (!res) return {};

  const { frontmatter } = res;

  function generateComponentKeywords(componentName: string): string[] {
    const baseKeywords = [
      componentName,
      `Tailwind CSS ${componentName}`,
      `Tailwind ${componentName}`,
      `${componentName} component`,
      `${componentName} in Tailwind CSS`,
      `free Tailwind CSS ${componentName} components`,
      `how to use Tailwind CSS ${componentName}`,
      `${componentName} examples`,
      `${componentName} tutorial`,
      `responsive ${componentName}`,
    ];

    // Add specific keywords based on component type
    if (componentName.toLowerCase().includes("button")) {
      baseKeywords.push(
        "button styles",
        "button variants",
        "interactive buttons"
      );
    } else if (componentName.toLowerCase().includes("form")) {
      baseKeywords.push("form validation", "form controls", "input fields");
    } else if (
      componentName.toLowerCase().includes("navigation") ||
      componentName.toLowerCase().includes("navbar")
    ) {
      baseKeywords.push(
        "responsive navigation",
        "mobile menu",
        "navigation bar"
      );
    }

    return baseKeywords;
  }

  const keywords = [
    "Tailwind CSS",
    "UI components",
    "web development",
    "React components",
    "documentation",
    "frontend development",
    "responsive design",
    "accessibility",
    "dark mode",
    ...generateComponentKeywords(frontmatter.title),
  ];

  return generateSEO({
    title: frontmatter.title,
    description: frontmatter.description,
    keywords,
    url: `/docs/${pathName}`,
    type: "article",
    section: pathName.includes("components") ? "Components" : "Documentation",
    tags: keywords.slice(0, 10), // Limit tags for better performance
  });
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
