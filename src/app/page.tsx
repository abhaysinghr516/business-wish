"use client";
import { ArrowRight, Copy, Palette, Zap, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-black dark:text-white mb-6 leading-tight">
            Copy. Paste.
            <br />
            <span className="font-medium">Ship.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Production-ready Tailwind CSS components. No dependencies, no setup.
            Just copy what you need and build faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/docs/components/accordion">
              <Button
                size="lg"
                className="px-8 py-4 bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black rounded-lg text-base font-medium"
              >
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="https://github.com/abhaysinghr516/business-wish"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg text-base font-medium"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-black dark:text-white mb-4">
              Built for developers who value
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Speed, simplicity, and quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800">
              <Copy className="h-8 w-8 text-black dark:text-white mb-4" />
              <h3 className="text-xl font-medium text-black dark:text-white mb-3">
                Copy & Paste
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                No package installations. No complex setups. Just copy the code
                and use it in your project.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800">
              <Zap className="h-8 w-8 text-black dark:text-white mb-4" />
              <h3 className="text-xl font-medium text-black dark:text-white mb-3">
                Performance First
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Lightweight components built with modern best practices. No
                unnecessary dependencies.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800">
              <Palette className="h-8 w-8 text-black dark:text-white mb-4" />
              <h3 className="text-xl font-medium text-black dark:text-white mb-3">
                Fully Customizable
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Built with Tailwind CSS. Modify colors, spacing, and styles to
                match your design system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-white dark:bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-black dark:text-white mb-16">
            Trusted by developers worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl sm:text-5xl font-light text-black dark:text-white mb-2">
                50+
              </div>
              <p className="text-gray-600 dark:text-gray-400">Components</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-light text-black dark:text-white mb-2">
                100%
              </div>
              <p className="text-gray-600 dark:text-gray-400">Responsive</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-light text-black dark:text-white mb-2">
                0
              </div>
              <p className="text-gray-600 dark:text-gray-400">Dependencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-black dark:text-white mb-6">
            Start building today
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of developers who are shipping faster with our
            component library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/docs/components/accordion">
              <Button
                size="lg"
                className="px-8 py-4 bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black rounded-lg text-base font-medium"
              >
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="https://github.com/abhaysinghr516/business-wish"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg text-base font-medium"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
