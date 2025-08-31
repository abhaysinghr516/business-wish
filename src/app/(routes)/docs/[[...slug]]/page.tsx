import DocsBreadcrumb from "@/app/components/docs-breadcrumb";
import Pagination from "@/app/components/pagination";
import { page_routes } from "@/app/lib/routes-config";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/app/lib/markdown";
import { Typography } from "@/app/components/typography";
import TOC from "@/app/components/TOC";
import { Metadata } from "next";
import {
  generateSEO,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

type PageProps = {
  params: { slug: string[] };
};

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);

  if (!res) notFound();

  // Generate breadcrumb structured data
  const breadcrumbItems = [
    { name: "Home", url: "https://business-wish.vercel.app" },
    { name: "Docs", url: "https://business-wish.vercel.app/docs" },
    ...slug.map((segment, index) => ({
      name:
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
      url: `https://business-wish.vercel.app/docs/${slug
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

      <div className="flex items-start gap-12">
        <article className="flex-[3] pt-10">
          <DocsBreadcrumb paths={slug} />
          <Typography>
            <header>
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                {res.frontmatter.title}
              </h1>
              <p className="-mt-4 text-muted-foreground text-[16.5px] mb-8">
                {res.frontmatter.description}
              </p>
            </header>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {res.content}
            </div>
            <Pagination pathname={pathName} />
          </Typography>
        </article>
        <aside className="flex-[1]" aria-label="Table of contents">
          <TOC path={pathName} />
        </aside>
      </div>
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
