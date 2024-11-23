"use client";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardGlass } from "./components/card-glass";

export default function Component() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50 dark:from-black dark:to-gray-950">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-1/2 dark:bg-purple-600 bg-purple-400 rounded-full filter blur-3xl opacity-20"></div>

        <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-gray-800 dark:text-gray-200 mb-6 leading-tight">
            Build UIs Effortlessly
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Ready-to-use Tailwind CSS components. No installation. Just copy,
            paste, and go. Build stunning interfaces in minutes, not hours.
          </p>
          <Link href="/docs/components/accordion">
            <Button
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-600 text-white"
            >
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 min-h-screen md:px-20 flex items-center bg-white dark:bg-black lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_150%,rgba(170,128,255,0.5),rgba(0,0,0,0))] dark:bg-[radial-gradient(circle_at_50%_150%,rgba(120,0,255,0.5),rgba(0,0,0,0))]" />
        <div className="container mx-auto px-4 sm:px-0 relative z-20">
          <h2 className="text-2xl sm:text-3xl font-bold dark:text-white text-center mb-8 sm:mb-12">
            Why Choose{" "}
            <span className="relative">
              Business Wish
              <svg
                width="200"
                height="10"
                viewBox="0 0 200 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-1/2 -translate-x-1/2 -bottom-2 text-purple-500"
              >
                <path
                  d="M1 6.5C27.5 1.5 89 -0.499989 199 8.50001"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <CardGlass className="md:col-span-1">
                <div className="flex justify-between items-start mb-20">
                  <span className="text-purple-700 dark:text-purple-200">
                    Seamlessly integrate our components into your existing
                    projects.
                  </span>
                  <ArrowUpRight className="text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-4xl font-light text-black/70 dark:text-white/70">
                  Easy Integration
                </h3>
              </CardGlass>

              <CardGlass className="md:col-span-1 bg-purple-600/20">
                <div className="flex justify-between items-start mb-20">
                  <span className="text-purple-700 dark:text-purple-200">
                    Lightweight and fast components to keep your app speedy.
                  </span>
                  <ArrowUpRight className="text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-4xl font-light text-gray-900 dark:text-white">
                  Performance Optimized
                </h3>
              </CardGlass>

              <CardGlass className="md:col-span-1">
                <div className="flex justify-between items-start mb-20">
                  <span className="text-purple-700 dark:text-purple-200">
                    Easily customize components to match your brand&apos;s look
                    and feel.
                  </span>
                  <ArrowUpRight className="text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-4xl font-light text-black/70 dark:text-white/70">
                  Customizable
                </h3>
              </CardGlass>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
