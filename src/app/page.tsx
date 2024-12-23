"use client";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardGlass } from "./components/card-glass";

export default function Component() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full filter blur-3xl"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-medium text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
            Build UIs
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Effortlessly
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Ready-to-use Tailwind CSS components. No installation. Just copy,
            paste, and create something beautiful.
          </p>
          <Link href="/docs/components/accordion">
            <Button
              size="lg"
              className="px-8 py-6 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-2xl transition-all duration-300 text-lg"
            >
              Get started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 min-h-screen md:px-20 flex items-center bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(170,128,255,0.15),rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(120,0,255,0.15),rgba(0,0,0,0)_70%)]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-20">
          <h2 className="text-4xl sm:text-5xl font-medium dark:text-white text-center mb-16 tracking-tight">
            Why Choose{" "}
            <span className="relative inline-block">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <CardGlass className="md:col-span-1 p-8 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-start mb-24">
                  <span className="text-lg text-gray-900 dark:text-white font-light">
                    Seamlessly integrate our components into your projects.
                  </span>
                  <ArrowUpRight className="text-purple-600 dark:text-purple-400 h-6 w-6" />
                </div>
                <h3 className="text-4xl font-medium text-gray-900 dark:text-white">
                  Easy
                  <br />
                  Integration
                </h3>
              </CardGlass>

              <CardGlass className="md:col-span-1 p-8 backdrop-blur-xl bg-purple-600/10 dark:bg-purple-600/20 rounded-3xl border border-purple-200/50 dark:border-purple-700/50 hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-start mb-24">
                  <span className="text-lg text-gray-900 dark:text-white font-light">
                    Lightweight and fast components to keep your app speedy.
                  </span>
                  <ArrowUpRight className="text-purple-600 dark:text-purple-400 h-6 w-6" />
                </div>
                <h3 className="text-4xl font-medium text-gray-900 dark:text-white">
                  Performance
                  <br />
                  Optimized
                </h3>
              </CardGlass>

              <CardGlass className="md:col-span-1 p-8 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-start mb-24">
                  <span className="text-lg text-gray-900 dark:text-white font-light">
                    Easily customize components to match your brand&apos;s look
                    and feel.
                  </span>
                  <ArrowUpRight className="text-purple-600 dark:text-purple-400 h-6 w-6" />
                </div>
                <h3 className="text-4xl font-medium text-gray-900 dark:text-white">
                  Highly
                  <br />
                  Customizable
                </h3>
              </CardGlass>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 bg-white dark:bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-medium text-center mb-16 tracking-tight dark:text-white">
            Everything you need
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              to build faster
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Responsive Design",
                description:
                  "Automatically adapts to any screen size or device type",
                icon: "📱",
              },
              {
                title: "Dark Mode Ready",
                description:
                  "Built-in dark mode support with seamless transitions",
                icon: "🌙",
              },
              {
                title: "Accessibility",
                description:
                  "WCAG compliant components for inclusive experiences",
                icon: "♿",
              },
              {
                title: "Modern Stack",
                description: "Built with React, Next.js, and Tailwind CSS",
                icon: "⚡",
              },
              {
                title: "Regular Updates",
                description: "Constant improvements and new components",
                icon: "🔄",
              },
              {
                title: "Developer Experience",
                description: "Extensive documentation to get you started",
                icon: "👩‍💻",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-2xl font-medium mb-2 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
