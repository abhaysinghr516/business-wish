import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { page_routes } from "@/app/lib/routes-config";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = generateSEO({
  title: "Search Components and Documentation",
  description:
    "Search through our comprehensive library of Tailwind CSS components and documentation. Find the perfect component for your project.",
  keywords: [
    "search",
    "find components",
    "Tailwind CSS search",
    "component finder",
  ],
  url: "/search",
});

function SearchResults({ query }: { query: string }) {
  if (!query) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">
          Search Components & Docs
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Enter a search term to find components, documentation, and examples.
        </p>
      </div>
    );
  }

  const filteredRoutes = page_routes.filter(
    (route) =>
      route.title.toLowerCase().includes(query.toLowerCase()) ||
      route.href.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Search Results for "{query}"
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Found {filteredRoutes.length} result
          {filteredRoutes.length !== 1 ? "s" : ""}
        </p>
      </div>

      {filteredRoutes.length > 0 ? (
        <div className="grid gap-4">
          {filteredRoutes.map((route) => (
            <Link
              key={route.href}
              href={`/docs${route.href}`}
              className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
            >
              <h3 className="font-semibold text-lg mb-2">{route.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                /docs{route.href}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                {route.href.includes("components")
                  ? "Component"
                  : "Documentation"}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-4">No results found</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Try searching for different terms or browse our popular components:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["button", "card", "form", "navigation", "modal"].map((term) => (
              <Link
                key={term}
                href={`/search?q=${term}`}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SearchResultsPage",
            name: "Search Results",
            description:
              "Search results for Tailwind CSS components and documentation",
            url: `https://business-wish.vercel.app/search${
              query ? `?q=${query}` : ""
            }`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: page_routes.filter(
                (route) =>
                  route.title.toLowerCase().includes(query.toLowerCase()) ||
                  route.href.toLowerCase().includes(query.toLowerCase())
              ).length,
            },
          }),
        }}
      />

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <form method="GET" className="relative">
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search components and documentation..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <SearchResults query={query} />
        </Suspense>
      </div>
    </>
  );
}
