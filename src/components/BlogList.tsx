import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Boost Your Conversion Rate",
    excerpt:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 16, 2023",
  },
  {
    id: 2,
    title: "How to Use SEO to Drive Sales",
    excerpt:
      "Optio consequatur ed illo super consectetur ratione. Ducimus quia dolorem voluptas ea repellat saepe. Quasi in deleniti eligendi fuga aut eum reiciendis rerum veritatis aut.",
    date: "Mar 10, 2023",
  },
  {
    id: 3,
    title: "Improve Your Customer Experience",
    excerpt:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
    date: "Feb 12, 2023",
  },
];

export const BasicBlogList: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white tracking-tight">
        Latest Blog Posts
      </h2>
      <ul className="space-y-12">
        {posts.map((post) => (
          <li
            key={post.id}
            className="group border-b pb-12 border-gray-100 dark:border-gray-800 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700"
          >
            <article>
              <div className="space-y-4 md:grid md:grid-cols-4 md:items-baseline md:space-y-0">
                <time className="text-sm font-medium leading-6 text-gray-400 dark:text-gray-500 tracking-tight">
                  {post.date}
                </time>
                <div className="space-y-6 md:col-span-3">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight">
                      <Link
                        href="#"
                        className="text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="text-sm font-medium">
                    <Link
                      href="#"
                      className="inline-flex items-center text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                      aria-label={`Read more about "${post.title}"`}
                    >
                      Read article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
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
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 dark:text-white tracking-tight">
        Featured Articles
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden"
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white tracking-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-gray-100 dark:border-gray-700">
                <span className="text-sm text-gray-400 dark:text-gray-500">
                  {post.date}
                </span>
                <Link
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const HorizontalCardBlogList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 dark:text-white tracking-tight">
        Popular Posts
      </h2>
      <div className="space-y-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-64 transition-transform duration-300 group-hover:scale-105"
                  src="/thumbnail.jpg"
                  alt=""
                />
              </div>
              <div className="p-8 md:flex-1 flex flex-col">
                <div className="flex-grow">
                  <div className="text-sm text-gray-400 dark:text-gray-500 mb-3 tracking-tight">
                    {post.date}
                  </div>
                  <Link
                    href="#"
                    className="block mb-4 text-2xl leading-tight font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                  >
                    {post.title}
                  </Link>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                  >
                    Read article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TimelineLayoutBlogList: React.FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-16">
    <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white tracking-tight">
      Blog Timeline
    </h2>
    <div className="relative border-l-2 border-gray-100 dark:border-gray-800">
      {posts.map((post) => (
        <div key={post.id} className="relative mb-12 ml-6">
          <div className="absolute w-4 h-4 -left-[32.5px] bg-white dark:bg-gray-900 rounded-full mt-1.5 border-2 border-gray-200 dark:border-gray-700 transition-colors duration-300 group-hover:border-gray-300 dark:group-hover:border-gray-600"></div>
          <div className="group">
            <time className="mb-2 text-sm font-medium text-gray-400 dark:text-gray-500 tracking-tight">
              {post.date}
            </time>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
              <Link
                href="#"
                className="group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
              >
                {post.title}
              </Link>
            </h3>
            <p className="mb-6 text-gray-500 dark:text-gray-400 leading-relaxed">
              {post.excerpt}
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
              aria-label={`Read more about ${post.title}`}
            >
              Read article
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);
