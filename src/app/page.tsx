"use client";
import {
  ArrowRight,
  Copy,
  Github,
  Wrench,
  Shield,
  Zap,
  Code2,
  Palette,
  FileJson,
  Image,
  Sparkles,
  Terminal,
  Layers,
  MousePointerClick,
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
      <section className="pt-24 pb-20 sm:pt-32 sm:pb-28 px-4 sm:px-6 bg-white dark:bg-stone-950">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wide uppercase text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-800 rounded-full">
              Open Source
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wide uppercase text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-800 rounded-full">
              Free Forever
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-stone-900 dark:text-stone-100 mb-6 leading-[1.08] tracking-tight">
            The developer toolkit
            <br />
            you always wanted
          </h1>

          <p className="text-lg sm:text-xl text-stone-500 dark:text-stone-400 mb-10 max-w-2xl leading-relaxed">
            50+ copy-paste Tailwind components, 13 motion primitives, and 17
            browser-based dev tools. No installs. No config. No accounts.
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            <Link href="/docs/components/accordion">
              <Button
                size="lg"
                className="px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg text-sm font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
              >
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/tools">
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-3 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 rounded-lg text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
              >
                Explore Tools
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
                className="px-6 py-3 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 rounded-lg text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </Link>
          </div>

          {/* Code Preview Block */}
          <div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 font-mono text-sm">
            <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500 mb-4">
              <Terminal className="h-4 w-4" />
              <span className="text-xs font-sans uppercase tracking-wider">
                How it works
              </span>
            </div>
            <div className="space-y-2 text-stone-600 dark:text-stone-400">
              <p>
                <span className="text-stone-400 dark:text-stone-600 select-none">
                  1{" "}
                </span>
                <span className="text-stone-900 dark:text-stone-200">
                  Browse
                </span>{" "}
                the component you need
              </p>
              <p>
                <span className="text-stone-400 dark:text-stone-600 select-none">
                  2{" "}
                </span>
                <span className="text-stone-900 dark:text-stone-200">Copy</span>{" "}
                the code with one click
              </p>
              <p>
                <span className="text-stone-400 dark:text-stone-600 select-none">
                  3{" "}
                </span>
                <span className="text-stone-900 dark:text-stone-200">Paste</span>{" "}
                into your project and ship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-stone-200 dark:border-stone-800" />

      {/* Bento Grid — What's Inside */}
      <section className="py-20 px-4 sm:px-6 bg-white dark:bg-stone-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
              What&apos;s inside
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium text-stone-900 dark:text-stone-100 leading-tight">
              Three pillars, one toolkit
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-stone-200 dark:bg-stone-800 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800">
            {/* Components */}
            <div className="bg-white dark:bg-stone-950 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-900 flex items-center justify-center">
                  <Layers className="h-5 w-5 text-stone-600 dark:text-stone-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  Components
                </h3>
              </div>
              <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                50+ production-ready Tailwind CSS components. Buttons, cards,
                heroes, navbars, footers, modals — every building block you
                need.
              </p>
              <ul className="space-y-2 text-sm text-stone-500 dark:text-stone-400">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600" />
                  Dark mode built-in
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600" />
                  WCAG accessible
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600" />
                  Fully responsive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600" />
                  Framework agnostic
                </li>
              </ul>
              <Link
                href="/docs/components/accordion"
                className="inline-flex items-center gap-1 text-sm font-medium text-stone-900 dark:text-stone-100 mt-6 hover:underline"
              >
                Browse components <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Motion */}
            <div className="bg-white dark:bg-stone-950 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-900 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-stone-600 dark:text-stone-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  Motion
                </h3>
              </div>
              <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                13 animated components built with Framer Motion. Text reveals,
                morphing text, shimmer buttons, magnetic elements, and more.
              </p>
              <ul className="space-y-2 text-sm text-stone-500 dark:text-stone-400">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600" />
                  Scroll-triggered
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600" />
                  Interactive hover effects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600" />
                  Smooth transitions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600" />
                  React / Next.js ready
                </li>
              </ul>
              <Link
                href="/docs/motion/text-reveal"
                className="inline-flex items-center gap-1 text-sm font-medium text-stone-900 dark:text-stone-100 mt-6 hover:underline"
              >
                Explore motion <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Tools */}
            <div className="bg-white dark:bg-stone-950 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-900 flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-stone-600 dark:text-stone-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  Dev Tools
                </h3>
              </div>
              <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                17 browser-based utilities. Color palettes, CSS generators,
                JSON formatter, image compressor — all running locally.
              </p>
              <ul className="space-y-2 text-sm text-stone-500 dark:text-stone-400">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600" />
                  100% offline capable
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600" />
                  Zero data collection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600" />
                  No signup required
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600" />
                  Instant loading
                </li>
              </ul>
              <Link
                href="/tools"
                className="inline-flex items-center gap-1 text-sm font-medium text-stone-900 dark:text-stone-100 mt-6 hover:underline"
              >
                Open tools <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-stone-200 dark:border-stone-800" />

      {/* Tools Grid */}
      <section className="py-20 px-4 sm:px-6 bg-stone-50 dark:bg-stone-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
              Developer Tools
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium text-stone-900 dark:text-stone-100 mb-3 leading-tight">
              Everything runs in your browser
            </h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-xl">
              Professional-grade utilities with zero installs. Your data never
              leaves your machine.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {[
              {
                name: "Palette Generator",
                icon: Palette,
                href: "/tools/palette-generator",
              },
              {
                name: "Contrast Checker",
                icon: Shield,
                href: "/tools/contrast-checker",
              },
              {
                name: "JSON Formatter",
                icon: FileJson,
                href: "/tools/json-formatter",
              },
              {
                name: "Box Shadow",
                icon: Layers,
                href: "/tools/box-shadow",
              },
              {
                name: "Gradient Generator",
                icon: Palette,
                href: "/tools/gradient",
              },
              {
                name: "Flexbox Playground",
                icon: Code2,
                href: "/tools/flexbox",
              },
              {
                name: "CSS Grid",
                icon: Code2,
                href: "/tools/css-grid",
              },
              {
                name: "Image Compressor",
                icon: Image,
                href: "/tools/image-compressor",
              },
            ].map((tool) => (
              <Link key={tool.name} href={tool.href}>
                <div className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-lg p-4 sm:p-5 hover:border-stone-400 dark:hover:border-stone-600 transition-colors group">
                  <tool.icon className="h-5 w-5 text-stone-400 dark:text-stone-500 mb-3 group-hover:text-stone-600 dark:group-hover:text-stone-400 transition-colors" />
                  <p className="text-sm font-medium text-stone-700 dark:text-stone-300">
                    {tool.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/tools">
            <Button
              variant="outline"
              className="px-5 py-2.5 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-stone-900 transition-colors"
            >
              View all 17 tools
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-stone-200 dark:border-stone-800" />

      {/* Why Section — Flat cards */}
      <section className="py-20 px-4 sm:px-6 bg-white dark:bg-stone-950">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
              Why Business Wish
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium text-stone-900 dark:text-stone-100 leading-tight">
              Built for how developers actually work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 dark:bg-stone-800 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800">
            <div className="bg-white dark:bg-stone-950 p-6 sm:p-8">
              <Copy className="h-5 w-5 text-stone-400 dark:text-stone-500 mb-4" />
              <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Copy & Paste
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                No package to install. No dependencies to manage. Just grab the
                code and go.
              </p>
            </div>

            <div className="bg-white dark:bg-stone-950 p-6 sm:p-8">
              <Shield className="h-5 w-5 text-stone-400 dark:text-stone-500 mb-4" />
              <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Privacy First
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                Every tool runs locally. Your files and data never touch a
                server. Ever.
              </p>
            </div>

            <div className="bg-white dark:bg-stone-950 p-6 sm:p-8">
              <Zap className="h-5 w-5 text-stone-400 dark:text-stone-500 mb-4" />
              <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Zero Config
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                Works with Next.js, Vite, CRA, or any Tailwind project. No
                setup needed.
              </p>
            </div>

            <div className="bg-white dark:bg-stone-950 p-6 sm:p-8">
              <MousePointerClick className="h-5 w-5 text-stone-400 dark:text-stone-500 mb-4" />
              <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Accessible
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                WCAG compliant components with proper ARIA labels, keyboard
                navigation, and focus management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-stone-200 dark:border-stone-800" />

      {/* Numbers */}
      <section className="py-20 px-4 sm:px-6 bg-stone-50 dark:bg-stone-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-stone-100 mb-1">
                50+
              </div>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                UI Components
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-stone-100 mb-1">
                13
              </div>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                Motion Primitives
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-stone-100 mb-1">
                17
              </div>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                Browser Tools
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-semibold text-stone-900 dark:text-stone-100 mb-1">
                0
              </div>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                Dependencies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-stone-200 dark:border-stone-800" />

      {/* Templates Teaser */}
      <section className="py-20 px-4 sm:px-6 bg-white dark:bg-stone-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
                Coming Soon
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-stone-900 dark:text-stone-100 leading-tight">
                Full-page templates
              </h2>
              <p className="text-stone-500 dark:text-stone-400 mt-3 max-w-lg">
                Complete website templates built with our components.
                Production-ready designs that ship fast.
              </p>
            </div>
            <Link
              href="/templates"
              className="inline-flex items-center gap-1 text-sm font-medium text-stone-900 dark:text-stone-100 hover:underline flex-shrink-0"
            >
              View all templates <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-stone-200 dark:bg-stone-800 rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800">
            {[
              { name: "Landing Page", label: "Marketing" },
              { name: "E-commerce", label: "Store" },
              { name: "Blog", label: "Content" },
              { name: "Dashboard", label: "Analytics" },
              { name: "Portfolio", label: "Personal" },
              { name: "SaaS App", label: "Product" },
            ].map((template) => (
              <div
                key={template.name}
                className="bg-white dark:bg-stone-950 p-5 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-900 mx-auto mb-3 flex items-center justify-center">
                  <div className="w-4 h-3 rounded-sm border border-stone-300 dark:border-stone-700" />
                </div>
                <p className="text-sm font-medium text-stone-900 dark:text-stone-100">
                  {template.name}
                </p>
                <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">
                  {template.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-stone-200 dark:border-stone-800" />

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 bg-white dark:bg-stone-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-stone-900 dark:text-stone-100 mb-5 leading-tight tracking-tight">
            Start building today
          </h2>
          <p className="text-lg text-stone-500 dark:text-stone-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Components to build. Tools to create. Motion to delight. All
            free, all open source.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/docs/components/accordion">
              <Button
                size="lg"
                className="px-8 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg text-sm font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
              >
                Explore Components
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
                className="px-8 py-3 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 rounded-lg text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
              >
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
