import { notFound } from "next/navigation";
import { getDocsForSlug, getDocsTocs } from "@/app/lib/markdown";
import { page_routes } from "@/app/lib/routes-config";
import { Metadata } from "next";
import {
  generateSEO,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateSourceCodeSchema,
} from "@/lib/seo";
import { DocsPageContent } from "@/app/components/docs-page-content";

type PageProps = {
  params: { slug: string[] };
};

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const docsPath = pathName ? `/docs/${pathName}` : "/docs";
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
    url: docsPath,
  });

  const isComponent = pathName.startsWith("components/");
  const isMotion = pathName.startsWith("motion/");
  const sourceCodeSchema = (isComponent || isMotion)
    ? generateSourceCodeSchema({
        name: `React & Tailwind CSS ${res.frontmatter.title} Component`,
        description: res.frontmatter.description,
        url: docsPath,
        programmingLanguage: isMotion ? "Framer Motion / React" : "React / TypeScript",
      })
    : null;

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
      {sourceCodeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sourceCodeSchema) }}
        />
      )}

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
  const docsPath = pathName ? `/docs/${pathName}` : "/docs";
  const res = await getDocsForSlug(pathName);
  if (!res) return {};

  const { frontmatter } = res;

  function generateComponentKeywords(componentName?: string): string[] {
    if (!componentName) return [];

    const baseKeywords = [
      componentName,
      `React ${componentName}`,
      `React ${componentName} component`,
      `React Tailwind CSS ${componentName}`,
      `React ${componentName} Tailwind`,
      `Tailwind CSS ${componentName}`,
      `Tailwind ${componentName}`,
      `${componentName} component`,
      `${componentName} in React`,
      `${componentName} in Tailwind CSS`,
      `free React ${componentName} components`,
      `free Tailwind CSS ${componentName} components`,
      `how to use ${componentName} in React`,
      `${componentName} examples`,
      `${componentName} tutorial`,
      `responsive ${componentName}`,
    ];

    // Add specific keywords based on component type
    const lowerName = componentName.toLowerCase();
    if (lowerName.includes("button")) {
      baseKeywords.push(
        "button styles",
        "button variants",
        "interactive buttons",
        "React button component"
      );
    } else if (lowerName.includes("form")) {
      baseKeywords.push("form validation", "form controls", "input fields", "React form components");
    } else if (
      lowerName.includes("navigation") ||
      lowerName.includes("navbar")
    ) {
      baseKeywords.push(
        "responsive navigation",
        "mobile menu",
        "navigation bar",
        "React navigation bar"
      );
    }

    return baseKeywords;
  }

  const defaultTitle = frontmatter?.title || "Documentation";
  const defaultDescription = frontmatter?.description || "";

  const keywords = [
    "React components",
    "React Tailwind CSS",
    "Tailwind CSS",
    "UI components",
    "web development",
    "React UI library",
    "documentation",
    "frontend development",
    "responsive design",
    "accessibility",
    "dark mode",
    ...generateComponentKeywords(frontmatter?.title),
  ];

  // Optimize title based on path (highest CTR optimization)
  const isComponent = pathName.startsWith("components/");
  const isMotion = pathName.startsWith("motion/");
  const optimizedTitle = isComponent 
      ? `React Tailwind CSS ${defaultTitle} Component` 
      : isMotion
      ? `React ${defaultTitle} Motion Component`
      : `${defaultTitle} - React & Tailwind CSS`;

  return generateSEO({
    title: optimizedTitle,
    description: defaultDescription,
    keywords,
    url: docsPath,
    type: "article",
    section: isComponent ? "Components" : isMotion ? "Motion" : "Documentation",
    tags: keywords.slice(0, 10), // Limit tags for better performance
  });
}

export function generateStaticParams() {
  const sectionRoutes = ["", "components", "pages", "motion"];

  return [
    ...sectionRoutes.map((item) => ({
      slug: item ? item.split("/") : [],
    })),
    ...page_routes.map((item) => ({
      slug: item.href.split("/").slice(1),
    })),
  ];
}
