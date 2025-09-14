import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle } from "lucide-react";

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900/30">
      {/* Hero Section */}
      <section className="pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Status indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/70 dark:bg-black/70 border border-gray-200 dark:border-gray-800 rounded-full text-xs text-gray-600 dark:text-gray-400 backdrop-blur-sm">
              <CheckCircle className="w-3 h-3 text-green-500" />
              <span>All systems operational</span>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-black dark:text-white mb-4 leading-tight">
              Tools that work
              <br />
              <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                completely offline
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Professional utilities that run entirely in your browser. No APIs,
              no dependencies, pure functionality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-1.5">
                <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                {tools.length} tools
              </span>
              <span className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-1.5">
                <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                100% local
              </span>
              <span className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-1.5">
                <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                Zero tracking
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <Link key={tool.name} href={tool.href} className="group block">
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100/80 dark:border-gray-700/80 hover:border-gray-200/80 dark:hover:border-gray-600/80 rounded-xl p-5 transition-all duration-300 overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 via-gray-50/0 to-gray-100/20 dark:from-gray-900/0 dark:via-gray-900/0 dark:to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition-colors leading-tight mb-0.5 truncate">
                            {tool.name}
                          </h3>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-0.5" />
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {tool.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {tool.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-0.5 bg-gray-100/80 dark:bg-gray-700/80 group-hover:bg-gray-200/80 dark:group-hover:bg-gray-600/80 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {tool.tags.length > 3 && (
                        <span className="inline-flex items-center px-2 py-0.5 text-gray-500 dark:text-gray-400 rounded-md text-xs">
                          +{tool.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer note */}
          <div className="text-center mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              All tools process data locally in your browser for maximum privacy
              and security
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
const metadata: Metadata = {
  title: "Developer Tools | Practical Utilities for Web Development",
  description:
    "A comprehensive collection of developer tools including color utilities, formatters, and calculators.",
};

type Tool = {
  name: string;
  description: string;
  href: string;
  tags: string[];
};

const tools: Tool[] = [
  {
    name: "Palette Generator",
    description:
      "Generate cohesive color palettes using harmony rules like complementary and triadic schemes.",
    href: "/tools/palette-generator",
    tags: ["color", "design", "palette"],
  },
  {
    name: "Contrast Checker",
    description:
      "Ensure color combinations meet WCAG accessibility standards with real-time compliance scoring.",
    href: "/tools/contrast-checker",
    tags: ["accessibility", "color", "WCAG"],
  },
  {
    name: "Blindness Simulator",
    description:
      "Visualize how designs appear to users with different types of color vision deficiency.",
    href: "/tools/blindness-simulator",
    tags: ["accessibility", "vision", "design"],
  },
  {
    name: "Color Converter",
    description:
      "Convert between HEX, RGB, HSL, HSV, CMYK color formats with live preview capabilities.",
    href: "/tools/format-converter",
    tags: ["color", "converter", "format"],
  },
  {
    name: "Image Color Picker",
    description:
      "Extract dominant colors and generate complete palettes from uploaded images.",
    href: "/tools/image-extractor",
    tags: ["image", "color", "palette"],
  },
  {
    name: "JSON Formatter",
    description:
      "Format, validate, and beautify JSON data with syntax highlighting and error detection.",
    href: "/tools/json-formatter",
    tags: ["json", "formatter", "validate"],
  },
  {
    name: "QR Code Generator",
    description:
      "Create customizable QR codes with logos, colors, and multiple export formats.",
    href: "/tools/qr-generator",
    tags: ["qr", "code", "generator"],
  },
  {
    name: "CSS Box Shadow",
    description:
      "Design sophisticated box shadows with real-time preview and optimized CSS output.",
    href: "/tools/box-shadow",
    tags: ["css", "box-shadow", "design"],
  },
  {
    name: "CSS Gradient",
    description:
      "Create stunning linear, radial, and conic gradients with intuitive color controls.",
    href: "/tools/gradient",
    tags: ["css", "gradient", "design"],
  },
  {
    name: "Flexbox Generator",
    description:
      "Master CSS Flexbox layouts with interactive visual editor and generated code.",
    href: "/tools/flexbox",
    tags: ["css", "flexbox", "layout"],
  },
  {
    name: "CSV to JSON",
    description:
      "Transform CSV data into structured JSON with field mapping and validation.",
    href: "/tools/csv-to-json",
    tags: ["csv", "json", "convert"],
  },
  {
    name: "Word Counter",
    description:
      "Text analysis with word count, reading time, and keyword density metrics.",
    href: "/tools/word-counter",
    tags: ["word", "counter", "text"],
  },
  {
    name: "Image Compressor",
    description:
      "Compress JPEG, PNG, WebP images with quality controls and batch processing.",
    href: "/tools/image-compressor",
    tags: ["image", "compress", "optimize"],
  },
  {
    name: "CSS Grid Generator",
    description:
      "Visual CSS Grid layout builder with interactive controls and generated code.",
    href: "/tools/css-grid",
    tags: ["css", "grid", "layout"],
  },
  {
    name: "Pomodoro Timer",
    description:
      "Productivity timer with customizable work/break intervals and focus tracking.",
    href: "/tools/pomodoro-timer",
    tags: ["productivity", "timer", "focus"],
  },
  {
    name: "Animation Easing",
    description:
      "CSS transition timing functions with interactive curves and code preview.",
    href: "/tools/animation-easing",
    tags: ["css", "animation", "easing"],
  },
  {
    name: "Image Formatter",
    description:
      "Convert between image formats (PNG, JPEG, WebP, SVG) with quality settings.",
    href: "/tools/image-formatter",
    tags: ["image", "convert", "format"],
  },
];
