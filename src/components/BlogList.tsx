import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import React from "react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "The Art of Minimalist UI",
    excerpt:
      "Explore how removing the non-essential elevates the user experience and creates interfaces that feel both intuitive and premium at first glance.",
    date: "Dec 12, 2024",
    category: "Design",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "Mastering Fluid Typography",
    excerpt:
      "A deep dive into structural scaling, CSS clamp(), and creating breathtaking reading experiences across any device size without media query bloat.",
    date: "Jan 04, 2025",
    category: "Engineering",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Interactive State Animations",
    excerpt:
      "Micro-animations breathe life into your application. Learn to use spring physics for hover states that feel organically connected to user intents.",
    date: "Feb 18, 2025",
    category: "Motion",
    readTime: "5 min read",
  },
];

export const BasicBlogList: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 bg-white dark:bg-neutral-950">
      <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-14 text-neutral-900 dark:text-white">
        Latest Notes
      </h2>
      <ul className="space-y-12">
        {posts.map((post) => (
          <li
            key={post.id}
            className="group pb-10 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600"
          >
            <article>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
                  {post.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="text-xs font-mono tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">
                  {post.readTime}
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-medium leading-tight tracking-tight">
                  <Link
                    href="#"
                    className="text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl font-normal">
                  {post.excerpt}
                </p>
                <div className="pt-2">
                  <Link
                    href="#"
                    className="inline-flex items-center text-xs font-medium tracking-wide uppercase text-neutral-900 dark:text-white group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors duration-200"
                    aria-label={`Read article: "${post.title}"`}
                  >
                    Read article
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const MinimalCardBlogList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-white dark:bg-neutral-950">
      <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900 mb-12 dark:text-white">
        Featured Writing
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            href="#"
            key={post.id}
            className="group flex flex-col justify-between rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 p-8 sm:p-9 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-6 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-2xl font-medium text-neutral-900 mb-3 dark:text-white tracking-tight leading-snug group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 font-normal">
                {post.excerpt}
              </p>
            </div>
            <div className="flex justify-between items-center pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
              <span className="inline-flex items-center text-xs font-medium uppercase tracking-wider text-neutral-900 dark:text-white transition-colors duration-200">
                Read article
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const HorizontalCardBlogList: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 bg-white dark:bg-neutral-950">
      <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900 mb-12 dark:text-white">
        Trending Stories
      </h2>
      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col md:flex-row gap-8 items-center p-6 sm:p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <div className="w-full md:w-2/5 aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200/60 dark:bg-neutral-800 shrink-0 border border-neutral-200 dark:border-neutral-800">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop"
                alt="Blog thumbnail"
              />
            </div>
            
            <div className="w-full md:w-3/5 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-xs font-mono tracking-wider uppercase text-neutral-900 dark:text-white font-medium">
                  {post.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <time className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
                  {post.date}
                </time>
              </div>
              <Link href="#">
                <h3 className="text-2xl sm:text-3xl font-medium leading-tight text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                  {post.title}
                </h3>
              </Link>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 max-w-xl font-normal">
                {post.excerpt}
              </p>
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                >
                  Read full story
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export const TimelineLayoutBlogList: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-20 bg-white dark:bg-neutral-950">
    <h2 className="text-4xl sm:text-5xl font-medium mb-16 text-neutral-900 dark:text-white tracking-tight">
      Changelog & Updates
    </h2>
    <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 md:ml-6 space-y-12">
      {posts.map((post) => (
        <div key={post.id} className="relative pl-8 md:pl-10 group">
          <div className="absolute w-2.5 h-2.5 -left-[5.5px] top-2 bg-neutral-300 dark:bg-neutral-700 rounded-full group-hover:bg-neutral-900 dark:group-hover:bg-white transition-colors duration-200" />
          
          <div className="transition-transform duration-200 group-hover:translate-x-1">
            <time className="block mb-2 text-xs font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
              {post.date}
            </time>
            <h3 className="text-2xl font-medium text-neutral-900 dark:text-white mb-2 tracking-tight">
              <Link
                href="#"
                className="group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200"
              >
                {post.title}
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 max-w-2xl font-normal">
              {post.excerpt}
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-xs font-medium tracking-wider uppercase text-neutral-900 dark:text-white group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors"
            >
              Explore details
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const GridMagazineBlogList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-white dark:bg-neutral-950">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white">
          Editorial Picks
        </h2>
        <Link href="#" className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
          View all
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[280px]">
        <Link href="#" className="group relative col-span-1 md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden block bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border border-neutral-800 dark:border-neutral-200 p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-700 dark:hover:border-neutral-300 transition-all duration-300">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-neutral-800 dark:bg-neutral-100 text-[11px] font-mono tracking-wider uppercase text-neutral-200 dark:text-neutral-800 border border-neutral-700 dark:border-neutral-200">
                Workspace
              </span>
              <span className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-600">{posts[0].date}</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-medium leading-tight mb-4 tracking-tight">
              {posts[0].title}
            </h3>
            <p className="text-sm text-neutral-400 dark:text-neutral-600 font-normal leading-relaxed max-w-md">
              {posts[0].excerpt}
            </p>
          </div>
          <div className="pt-6 border-t border-neutral-800 dark:border-neutral-200 flex items-center gap-2 text-xs font-medium uppercase tracking-wider">
            <span>Read full story</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </Link>

        <Link href="#" className="group relative col-span-1 md:col-span-2 row-span-1 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 flex items-center p-6 sm:p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
          <div className="flex-1 pr-6">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2 block">{posts[1].date}</span>
            <h3 className="text-xl sm:text-2xl font-medium text-neutral-900 dark:text-white leading-snug tracking-tight mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
              {posts[1].title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-normal line-clamp-2">{posts[1].excerpt}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-neutral-200/70 dark:bg-neutral-800 flex items-center justify-center shrink-0">
            <ArrowRight className="w-4 h-4 text-neutral-900 dark:text-white transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </Link>

        <Link href="#" className="group relative col-span-1 md:col-span-2 row-span-1 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 flex items-center p-6 sm:p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
          <div className="flex-1 pr-6">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2 block">{posts[2].date}</span>
            <h3 className="text-xl sm:text-2xl font-medium text-neutral-900 dark:text-white leading-snug tracking-tight mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
              {posts[2].title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-normal line-clamp-2">{posts[2].excerpt}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-neutral-200/70 dark:bg-neutral-800 flex items-center justify-center shrink-0">
            <ArrowRight className="w-4 h-4 text-neutral-900 dark:text-white transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </Link>
      </div>
    </div>
  );
};