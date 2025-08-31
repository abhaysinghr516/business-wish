import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Page Not Found - 404 Error",
  description:
    "The page you're looking for doesn't exist. Explore our Tailwind CSS components library or return to the homepage.",
  keywords: ["404", "page not found", "error page", "Business Wish"],
});

export default function NotFound() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Page Not Found - 404 Error",
            description:
              "The requested page could not be found on Business Wish.",
            url: "https://business-wish.vercel.app/404",
            mainEntity: {
              "@type": "Thing",
              name: "404 Error",
              description: "Page not found error",
            },
          }),
        }}
      />

      <div className="flex py-20 text-base items-center justify-center min-h-[60vh]">
        <div className="max-w-md text-center">
          <h1 className="m-0 text-9xl font-bold text-gray-800 dark:text-gray-200">
            404
          </h1>
          <h2 className="m-0 mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-400">
            Page not found
          </h2>
          <p className="m-0 mt-2 text-gray-500 dark:text-gray-400">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>

          <div className="mt-8 space-y-4">
            <Link
              href="/"
              className="inline-block rounded-md bg-black dark:bg-gray-50 px-6 py-3 text-sm font-semibold text-white dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Go Back Home
            </Link>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              Or explore our popular sections:
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                href="/docs/components/accordion"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Accordion Components
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/docs/components/button"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Button Components
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
