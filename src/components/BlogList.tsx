import Image from "next/image";
import Link from "next/link";

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
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Latest Blog Posts
      </h2>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border-b pb-8 border-gray-200 dark:border-gray-700"
          >
            <article>
              <div className="space-y-4 md:grid md:grid-cols-4 md:items-baseline md:space-y-0">
                <time className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  {post.date}
                </time>
                <div className="space-y-5 md:col-span-3">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link
                        href="#"
                        className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="text-base font-medium leading-6">
                    <Link
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500 transition duration-300 ease-in-out"
                      aria-label={`Read more about "${post.title}"`}
                    >
                      Read more →
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 dark:text-white">
        Featured Articles
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col dark:bg-gray-800"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 dark:text-gray-400">
                {post.excerpt}
              </p>
            </div>
            <div className="bg-gray-50 px-6 py-4 dark:bg-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
                <Link
                  href="#"
                  className="text-indigo-600 hover:text-indigo-500 font-medium transition duration-300 ease-in-out"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read more
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 dark:text-white">
        Popular Posts
      </h2>
      <div className="space-y-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden dark:bg-gray-800"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src=""
                  alt=""
                  width={300}
                  height={200}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {post.date}
                </div>
                <Link
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline dark:text-white"
                >
                  {post.title}
                </Link>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-block px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out"
                  >
                    Read full article
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
  <div className="max-w-4xl mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
      Blog Timeline
    </h2>
    <div className="relative border-l border-gray-200 dark:border-gray-700">
      {posts.map((post, index) => (
        <div key={post.id} className="relative mb-10 ml-4">
          <div className="absolute w-3 h-3 -left-[22.5px] bg-gray-200 rounded-full mt-1.5 border border-white dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
            {post.date}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            <Link href="#">{post.title}</Link>
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {post.excerpt}
          </p>
          <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-lg shadow-sm hover:bg-blue-50 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-4 dark:bg-gray-800 dark:border-gray-700 dark:text-blue-400 dark:hover:bg-gray-700">
            <Link
              href="#"
              className="flex items-center"
              aria-label={`Read more about ${post.title}`}
            >
              Read more
              <svg
                className="w-4 h-4 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);
