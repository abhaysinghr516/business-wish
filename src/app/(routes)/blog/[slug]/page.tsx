import { getBlogForSlug, getAllBlogStaticPaths } from "@/app/lib/markdown";
import { notFound } from "next/navigation";
import { generateSEO, generateArticleSchema } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const post = await getBlogForSlug(slug);
  if (!post) return {};

  const { frontmatter } = post;
  
  return generateSEO({
    title: `${frontmatter.title} | Blog`,
    description: frontmatter.description,
    url: `/blog/${slug}`,
    type: "article",
    publishedTime: new Date(frontmatter.date).toISOString(),
    authors: frontmatter.authors?.map((a) => a.username) || ["Abhay Singh Rathore"],
    section: "Blog",
    tags: ["Tailwind CSS", "React", "Frontend", "UI Design"],
  });
}

export default async function BlogPostPage({ params: { slug } }: PageProps) {
  const post = await getBlogForSlug(slug);

  if (!post) notFound();

  const { frontmatter, content, readingTime } = post;

  // Generate structured data
  const articleSchema = generateArticleSchema({
    title: frontmatter.title,
    description: frontmatter.description,
    url: `/blog/${slug}`,
    publishedTime: new Date(frontmatter.date).toISOString(),
    authors: frontmatter.authors?.map((a) => a.username) || ["Abhay Singh Rathore"],
  });

  return (
    <article className="w-full bg-white dark:bg-stone-950 min-h-screen py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-[#FF3903] transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="border-b border-stone-200 dark:border-stone-850 pb-8 mb-10 sm:mb-12">
          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-stone-400 dark:text-stone-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {frontmatter.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readingTime} min read
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white mb-6 leading-tight">
            {frontmatter.title}
          </h1>

          <p className="text-base sm:text-lg text-stone-500 dark:text-stone-400 leading-relaxed font-light mb-8">
            {frontmatter.description}
          </p>

          {/* Author block */}
          {frontmatter.authors && frontmatter.authors[0] && (
            <div className="flex items-center gap-3">
              <Image
                src={frontmatter.authors[0].avatar || "https://github.com/abhaysinghr516.png"}
                alt={frontmatter.authors[0].username}
                width={36}
                height={36}
                className="rounded-full border border-stone-200 dark:border-stone-800"
              />
              <div>
                <p className="text-sm font-semibold text-stone-900 dark:text-white">
                  {frontmatter.authors[0].username}
                </p>
                <p className="text-xs text-stone-400">Creator</p>
              </div>
            </div>
          )}
        </header>

        {/* Content body with customized typography rules - resetting pre/code conflicts */}
        <section className="prose prose-stone dark:prose-invert max-w-none prose-base leading-relaxed prose-headings:font-bold prose-headings:tracking-tight dark:prose-headings:text-stone-100 prose-headings:text-stone-950 prose-a:text-[#FF3903] dark:prose-a:text-[#FF3903] hover:prose-a:underline prose-strong:text-stone-950 dark:prose-strong:text-white prose-code:text-[#FF3903] dark:prose-code:text-[#FF3903] prose-code:before:content-none prose-code:before:content-[''] prose-code:after:content-none prose-code:after:content-[''] prose-pre:bg-transparent dark:prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0 prose-pre:border-none prose-pre:shadow-none">
          {content}
        </section>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllBlogStaticPaths();
  return slugs ? slugs.map((slug) => ({ slug })) : [];
}
