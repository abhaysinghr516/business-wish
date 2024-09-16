import DocsBreadcrumb from "@/app/components/docs-breadcrumb";
import Pagination from "@/app/components/pagination";
import { page_routes } from "@/app/lib/routes-config";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/app/lib/markdown";
import { Typography } from "@/app/components/typography";
import Toc from "@/app/components/Toc";

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
      <Toc path={pathName} />
    </div>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);
  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
