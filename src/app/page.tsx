"use client";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  FileJson,
  Monitor,
  Moon,
  RefreshCcw,
  Smartphone,
  Tablet,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardGlass } from "./components/card-glass";

export default function Component() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-100 to-gray-50 dark:from-black dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1),rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),rgba(0,0,0,0)_70%)]" />
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400/30 via-indigo-400/20 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-400/20 via-indigo-400/10 to-transparent rounded-full filter blur-3xl" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-medium text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
            Build UIs
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600">
              Effortlessly
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Ready-to-use Tailwind CSS components. No installation. Just copy,
            paste, and create something beautiful.
          </p>
          <Link
            href="/docs/components/accordion"
            aria-label="Get started with our components"
          >
            <Button
              size="lg"
              className="px-8 py-6 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-2xl transition-all duration-300 text-lg"
            >
              Get started
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 min-h-screen md:px-20 flex items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-gray-100 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(170,128,255,0.2),rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(120,0,255,0.2),rgba(0,0,0,0)_70%)]" />
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

      <section className="py-24 px-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-medium text-center mb-16 tracking-tight dark:text-white">
            Everything you need
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              to build faster
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">
            <CardGlass className="md:col-span-4 p-8 bg-purple-600/10 dark:bg-purple-600/20 rounded-3xl border border-purple-200/50 dark:border-purple-700/50">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      Responsive Components
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
                    Responsive Design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md">
                    Automatically adapts to any screen size or device type
                  </p>
                </div>
                <span className="text-4xl">📱</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-24 rounded-xl border border-purple-500/80 dark:border-purple-500/20 flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm ml-2 text-purple-600 dark:text-purple-400">
                    Desktop
                  </span>
                </div>
                <div className="h-24 rounded-xl border border-purple-500/80 dark:border-purple-500/20 flex items-center justify-center">
                  <Tablet className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm ml-2 text-purple-600 dark:text-purple-400">
                    Tablet
                  </span>
                </div>
                <div className="h-24 rounded-xl border border-purple-500/80 dark:border-purple-500/20 flex items-center justify-center">
                  <Smartphone className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm ml-2 text-purple-600 dark:text-purple-400">
                    Mobile
                  </span>
                </div>
              </div>
            </CardGlass>
            <CardGlass className="md:col-span-2 md:row-span-2 p-8 bg-white/80 dark:bg-gray-900/80 rounded-3xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <Moon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  Theme Support
                </span>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
                Dark Mode Ready
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Built-in dark mode support with seamless transitions
              </p>
              <div className="mt-8 grid gap-3">
                <div className="h-24 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-sm text-gray-900 dark:text-white">
                    Light Theme
                  </span>
                </div>
                <div className="h-24 rounded-xl bg-gray-900 dark:bg-gray-950 flex items-center justify-center">
                  <span className="text-sm text-white">Dark Theme</span>
                </div>
              </div>
            </CardGlass>
            <CardGlass className="md:col-span-2 p-6 bg-white/80 dark:bg-gray-900/80 rounded-3xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  Modern Tech
                </span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                Modern Stack
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Built with React, Next.js, and Tailwind CSS
              </p>
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm">
                  React
                </div>
                <div className="px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm">
                  Next.js
                </div>
              </div>
            </CardGlass>
            <CardGlass className="md:col-span-2 p-6 bg-white/80 dark:bg-gray-900/80 rounded-3xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">♿</span>
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  A11Y Ready
                </span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                Accessibility
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                WCAG compliant components for inclusive experiences
              </p>
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm">
                  ARIA
                </div>
                <div className="px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm">
                  WCAG 2.1
                </div>
              </div>
            </CardGlass>
            <CardGlass className="md:col-span-3 p-8 bg-white/80 dark:bg-gray-900/80 rounded-3xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <RefreshCcw className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      Always Fresh
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
                    Regular Updates
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Constant improvements and new components
                  </p>
                  <div className="mt-4 flex gap-2">
                    <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm">
                      Latest v2.0.0
                    </div>
                  </div>
                </div>
              </div>
            </CardGlass>
            <CardGlass className="md:col-span-3 p-8 bg-purple-600/10 dark:bg-purple-600/20 rounded-3xl border border-purple-200/50 dark:border-purple-700/50">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <FileJson className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      Dev Friendly
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
                    Developer Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Extensive documentation to get you started
                  </p>
                  <div className="mt-4 flex gap-2">
                    <div className="px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm">
                      TypeScript
                    </div>
                    <div className="px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm">
                      API Docs
                    </div>
                  </div>
                </div>
              </div>
            </CardGlass>
          </div>
        </div>
      </section>
    </>
  );
}
