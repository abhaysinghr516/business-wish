import { getAllBlogs } from "@/app/lib/markdown";
import { generateSEO } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = generateSEO({
  title: "Blog",
  description: "Insights, guides, and tutorials on modern CSS, UI engineering, and animations.",
  url: "/blog",
  type: "website",
  section: "Blog",
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
        <div className="border-b border-stone-200 dark:border-stone-850 pb-10 mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-white">
            Blog
          </h1>
          <p className="text-stone-500 dark:text-stone-400 mt-3 text-base sm:text-lg font-light">
            Insights, guides, and tutorials on Tailwind CSS, React, and frontend engineering.
          </p>
        </div>

        {sortedBlogs.length === 0 ? (
          <p className="text-stone-500 dark:text-stone-400 text-center py-10">No posts found.</p>
        ) : (
          <div className="space-y-8">
            {sortedBlogs.map((post) => (
              <article
                key={post.slug}
                className="group border border-stone-200 dark:border-stone-850 rounded-2xl p-6 sm:p-8 hover:bg-stone-50/50 dark:hover:bg-stone-900/30 transition-colors duration-200"
              >
                <div className="flex flex-col gap-4">
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
                    <Link href={`/blog/${post.slug}`}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>

                  {/* Description */}
                  <p className="text-stone-500 dark:text-stone-400 text-sm sm:text-base font-light leading-relaxed">
                    {post.frontmatter.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-stone-100 dark:border-stone-850/60 mt-2">
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
