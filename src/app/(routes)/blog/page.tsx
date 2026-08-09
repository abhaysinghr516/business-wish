import { getAllBlogs } from "@/app/lib/blog-markdown";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "React & Tailwind CSS Developer Blog",
  description: "Insights, guides, and in-depth tutorials on React, Tailwind CSS v4, modern UI engineering, and animations.",
  url: "/blog",
  type: "website",
  section: "Blog",
  keywords: ["React blog", "Tailwind CSS tutorials", "React UI tutorials", "React animation guides"],
});

export default async function BlogPage() {
  const allBlogs = await getAllBlogs();
  
  // Sort blogs by date descending
  const sortedBlogs = (allBlogs || []).sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });

  return (
    <div className="w-full bg-white dark:bg-stone-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="border-b border-stone-200 dark:border-stone-850 pb-10 mb-8 animate-fade-in-up min-w-0 overflow-hidden">
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-white">
            Blog
          </h1>
          <p className="text-stone-500 dark:text-stone-400 mt-3 text-base sm:text-lg font-light break-words">
            Insights, guides, and tutorials on Tailwind CSS, React, and frontend engineering.
          </p>
        </div>

        {/* Featured Newsletter Spotlight */}
        <div className="mb-10 rounded-2xl border border-stone-200/90 bg-stone-50/60 p-5 sm:p-6 dark:border-stone-800 dark:bg-stone-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <Image
              src="/how-machines-think-logo.png"
              alt="How Machines Think"
              width={48}
              height={48}
              className="rounded-xl border border-stone-200 dark:border-stone-800 shrink-0 object-cover"
            />
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#FF3903]">
                <span className="inline-block h-1.5 w-1.5 shrink-0 aspect-square rounded-full bg-[#FF3903] animate-pulse" />
                Featured AI Publication
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-stone-900 dark:text-white">
                How Machines Think
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 max-w-md leading-relaxed">
                Explore the mathematics, logic, and systems behind artificial intelligence.
              </p>
            </div>
          </div>
          <a
            href="https://howmachinesthink.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 shrink-0 rounded-xl bg-[#FF3903] px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#e03202] active:scale-98"
          >
            <span>Subscribe on Substack</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {sortedBlogs.length === 0 ? (
          <p className="text-stone-500 dark:text-stone-400 text-center py-10">No posts found.</p>
        ) : (
          <div className="space-y-8">
            {sortedBlogs.map((post) => (
              <article
                key={post.slug}
                className="group border border-stone-200 dark:border-stone-850 rounded-2xl p-6 sm:p-8 hover:bg-stone-50/50 dark:hover:bg-stone-900/30 transition-colors duration-200 min-w-0 overflow-hidden"
              >
                <div className="flex flex-col gap-4 min-w-0">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-stone-400 dark:text-stone-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.frontmatter.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime} min read
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-semibold text-stone-900 dark:text-white group-hover:text-[#FF3903] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`} className="break-words">
                      {post.frontmatter.title}
                    </Link>
                  </h2>

                  {/* Description */}
                  <p className="text-stone-500 dark:text-stone-400 text-sm sm:text-base font-light leading-relaxed break-words">
                    {post.frontmatter.description}
                  </p>

                  {/* Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-100 dark:border-stone-850/60 mt-2">
                    {post.frontmatter.authors && post.frontmatter.authors[0] && (
                      <div className="flex items-center gap-2.5">
                        <Image
                          src={post.frontmatter.authors[0].avatar || "https://github.com/abhaysinghr516.png"}
                          alt={post.frontmatter.authors[0].username}
                          width={28}
                          height={28}
                          className="rounded-full border border-stone-200 dark:border-stone-800"
                        />
                        <span className="text-xs sm:text-sm font-medium text-stone-700 dark:text-stone-300">
                          {post.frontmatter.authors[0].username}
                        </span>
                      </div>
                    )}

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#FF3903] hover:underline"
                    >
                      Read Post
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
