"use client";
import {
  ArrowRight,
  Copy,
  Palette,
  Zap,
  Github,
  Wrench,
  Shield,
  Rocket,
  Star,
  Users,
  Download,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  generateWebsiteSchema,
  generateSoftwareApplicationSchema,
} from "@/lib/seo";

const websiteSchema = generateWebsiteSchema();
const softwareSchema = generateSoftwareApplicationSchema();

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400 mb-8 backdrop-blur-sm">
            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
            <span>Trusted by 1,000+ developers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black dark:text-white mb-6 leading-[1.1] tracking-tight">
            Build. Create.
            <br />
            <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Ship Faster.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            The ultimate developer toolkit. Copy-paste components, professional
            tools, and utilities—all running locally in your browser. Zero
            dependencies, maximum productivity.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <Link href="/docs/components/accordion">
              <Button
                size="lg"
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl text-base font-medium shadow-lg shadow-black/10 dark:shadow-white/10 border-0"
              >
                Explore Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/tools">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-base font-medium bg-white/50 dark:bg-black/50 backdrop-blur-sm"
              >
                <Wrench className="mr-2 h-4 w-4" />
                Browse Tools
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No signup required</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-500" />
              <span>Privacy focused</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4 text-purple-500" />
              <span>Works offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
              Why developers choose us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black dark:text-white mb-4 leading-tight">
              Everything you need to build
              <br />
              <span className="font-medium">modern web apps</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Components, tools, and utilities—all in one place, designed for
              modern development workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group p-8 bg-gray-50 dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-900 relative">
              <div className="bg-black dark:bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Copy className="h-5 w-5 text-white dark:text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                Copy & Paste Ready
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                50+ production-ready components. No installations, no complex
                setups. Just copy the code and start building immediately.
              </p>
            </div>

            <div className="group p-8 bg-gray-50 dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-900 relative">
              <div className="bg-black dark:bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-5 w-5 text-white dark:text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                Privacy First Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                17 professional utilities that run entirely offline. Your data
                never leaves your browser. Zero tracking, maximum security.
              </p>
            </div>

            <div className="group p-8 bg-gray-50 dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-900 relative">
              <div className="bg-black dark:bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="h-5 w-5 text-white dark:text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Lightweight components and instant tools. Built with modern
                practices for maximum performance and minimal overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Preview Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white dark:bg-black rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 border border-gray-200 dark:border-gray-800">
              Professional toolkit
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black dark:text-white mb-4 leading-tight">
              Professional tools,
              <br />
              <span className="font-medium">zero dependencies</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Design systems, development utilities, and productivity tools that
              work entirely in your browser
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
            <div className="p-6 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 group">
              <h4 className="font-semibold text-black dark:text-white mb-2">
                Color Tools
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Palette generator, contrast checker, blindness simulator
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 group">
              <h4 className="font-semibold text-black dark:text-white mb-2">
                CSS Generators
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Box shadows, gradients, flexbox, grid layouts
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 group">
              <h4 className="font-semibold text-black dark:text-white mb-2">
                Data Tools
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                JSON formatter, CSV converter, QR generator
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 group">
              <h4 className="font-semibold text-black dark:text-white mb-2">
                Image Utils
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Compression, format conversion, color extraction
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/tools">
              <Button
                size="lg"
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl text-base font-medium shadow-lg shadow-black/10 dark:shadow-white/10"
              >
                View All 17 Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-black dark:text-white mb-4">
              Built for the modern web
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Trusted by developers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-900">
              <div className="text-3xl sm:text-4xl font-light text-black dark:text-white mb-2">
                50+
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Components
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Ready to use
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-900">
              <div className="text-3xl sm:text-4xl font-light text-black dark:text-white mb-2">
                17
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Tools
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Professional grade
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-900">
              <div className="text-3xl sm:text-4xl font-light text-black dark:text-white mb-2">
                100%
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Local
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Privacy first
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="inline-block px-4 py-2 bg-white dark:bg-black rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 mb-6 border border-gray-200 dark:border-gray-800">
            Ready to get started?
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black dark:text-white mb-6 leading-tight">
            Stop switching between apps
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Everything you need for frontend development in one place.
            Components for building, tools for creating, utilities for
            optimizing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/docs/components/accordion">
              <Button
                size="lg"
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl text-base font-medium shadow-lg shadow-black/10 dark:shadow-white/10"
              >
                Start Building
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
                className="px-8 py-3 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-base font-medium bg-white/80 dark:bg-black/80 backdrop-blur-sm"
              >
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>1,000+ developers</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>Open source</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
