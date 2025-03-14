import DocsBreadcrumb from "@/app/components/docs-breadcrumb";
import Pagination from "@/app/components/pagination";
import { page_routes } from "@/app/lib/routes-config";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/app/lib/markdown";
import { Typography } from "@/app/components/typography";
import TOC from "@/app/components/TOC";
import { Metadata } from "next";

type PageProps = {
  params: { slug: string[] };
};

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-12">
      <div className="flex-[3] pt-10">
        <DocsBreadcrumb paths={slug} />
        <Typography>
          <h1>{res.frontmatter.title}</h1>
          <p className="-mt-4 text-muted-foreground text-[16.5px]">
            {res.frontmatter.description}
          </p>
          <div>{res.content}</div>
          <Pagination pathname={pathName} />
        </Typography>
      </div>
      <TOC path={pathName} />
    </div>
  );
}

export async function generateMetadata({
  params: { slug = [] },
}: PageProps): Promise<Metadata> {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);
  if (!res) return {};

  const { frontmatter } = res;
  const baseUrl = "https://business-wish.vercel.app";

  function generateComponentKeywords(componentName: string): string[] {
    return [
      componentName,
      `Tailwind CSS ${componentName}`,
      `Tailwind ${componentName}`,
      `${componentName} in Tailwind CSS`,
      `free Tailwind CSS ${componentName} components`,
      `how to use Tailwind CSS ${componentName}`,
    ];
  }

  return {
    title: {
      default: frontmatter.title,
      template: `%s | Business Wish Docs`,
    },
    description: frontmatter.description,
    alternates: {
      canonical: `${baseUrl}/docs/${pathName}`,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `${baseUrl}/docs/${pathName}`,
      type: "article",
      siteName: "Business Wish",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
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
    category: "web development",
    keywords: [
      "Tailwind CSS",
      "UI components",
      "web development",
      "documentation",
      ...generateComponentKeywords(frontmatter.title),
    ],
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: frontmatter.title,
        description: frontmatter.description,
        url: `${baseUrl}/docs/${pathName}`,
        author: {
          "@type": "Person",
          name: "Abhay Singh Rathore",
        },
        publisher: {
          "@type": "Organization",
          name: "Business Wish",
          logo: {
            "@type": "ImageObject",
            url: "https://business-wish.vercel.app/logo.png",
          },
        },
      }),
    },
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
