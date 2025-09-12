import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900/30">
      {/* Hero Section */}
      <section className="pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Status indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 rounded-full text-xs font-medium border border-green-200 dark:border-green-900">
              All systems operational
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 dark:text-gray-100 mb-4 tracking-tight leading-[1.15]">
              Tools that work
              <br />
              <span className="font-extralight text-gray-600 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 bg-clip-text text-transparent">
                completely offline
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
              Professional utilities that run entirely in your browser. No APIs,
              no dependencies, pure functionality.
            </p>

            <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                {tools.length} tools
              </span>
              <span>•</span>
              <span>100% local</span>
              <span>•</span>
              <span>Zero tracking</span>
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
                        <div className="flex-shrink-0 p-2.5 bg-gray-50/70 dark:bg-gray-700/70 group-hover:bg-gray-100/70 dark:group-hover:bg-gray-600/70 rounded-xl transition-all duration-300 group-hover:scale-105">
                          {tool.icon}
                        </div>
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
  icon: React.ReactNode;
};

const tools: Tool[] = [
  {
    name: "Palette Generator",
    description:
      "Generate cohesive color palettes using harmony rules like complementary and triadic schemes.",
    href: "/tools/palette-generator",
    tags: ["color", "design", "palette"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="12" cy="24" r="8" fill="#FF6B6B" />
        <circle cx="24" cy="16" r="6" fill="#4ECDC4" />
        <circle cx="36" cy="24" r="8" fill="#45B7D1" />
        <circle cx="24" cy="32" r="6" fill="#96CEB4" />
      </svg>
    ),
  },
  {
    name: "Contrast Checker",
    description:
      "Ensure color combinations meet WCAG accessibility standards with real-time compliance scoring.",
    href: "/tools/contrast-checker",
    tags: ["accessibility", "color", "WCAG"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="4"
          fill="#f8f9fa"
          stroke="#dee2e6"
          strokeWidth="2"
        />
        <rect x="8" y="8" width="16" height="32" rx="4" fill="#212529" />
        <text
          x="32"
          y="26"
          fill="#212529"
          fontSize="8"
          textAnchor="middle"
          fontFamily="monospace"
        >
          Aa
        </text>
        <circle cx="40" cy="16" r="3" fill="#28a745" />
      </svg>
    ),
  },
  {
    name: "Blindness Simulator",
    description:
      "Visualize how designs appear to users with different types of color vision deficiency.",
    href: "/tools/blindness-simulator",
    tags: ["accessibility", "vision", "design"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle
          cx="24"
          cy="24"
          r="16"
          fill="none"
          stroke="#dee2e6"
          strokeWidth="2"
        />
        <path
          d="M16 24 a8,8 0 0,1 16,0"
          fill="none"
          stroke="#6c757d"
          strokeWidth="2"
        />
        <circle cx="24" cy="24" r="4" fill="#495057" />
        <path
          d="M12 12 L36 36"
          stroke="#dc3545"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Color Converter",
    description:
      "Convert between HEX, RGB, HSL, HSV, CMYK color formats with live preview capabilities.",
    href: "/tools/format-converter",
    tags: ["color", "converter", "format"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect x="6" y="12" width="12" height="24" rx="2" fill="#FF6B6B" />
        <rect x="18" y="12" width="12" height="24" rx="2" fill="#4ECDC4" />
        <rect x="30" y="12" width="12" height="24" rx="2" fill="#45B7D1" />
        <path
          d="M14 8 L20 4 L26 8"
          fill="none"
          stroke="#6c757d"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 40 L28 44 L34 40"
          fill="none"
          stroke="#6c757d"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Image Color Picker",
    description:
      "Extract dominant colors and generate complete palettes from uploaded images.",
    href: "/tools/image-extractor",
    tags: ["image", "color", "palette"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect
          x="8"
          y="8"
          width="32"
          height="24"
          rx="3"
          fill="#f8f9fa"
          stroke="#dee2e6"
          strokeWidth="2"
        />
        <rect
          x="10"
          y="10"
          width="28"
          height="20"
          rx="2"
          fill="url(#imageGradient)"
        />
        <circle cx="16" cy="18" r="3" fill="#FFF" opacity="0.8" />
        <path
          d="M28 22 L32 18 L38 24 L38 28 L10 28 L10 24 L22 12 L28 18"
          fill="#FFF"
          opacity="0.6"
        />
        <rect x="8" y="34" width="6" height="6" rx="1" fill="#FF6B6B" />
        <rect x="16" y="34" width="6" height="6" rx="1" fill="#4ECDC4" />
        <rect x="24" y="34" width="6" height="6" rx="1" fill="#45B7D1" />
        <rect x="32" y="34" width="6" height="6" rx="1" fill="#96CEB4" />
        <defs>
          <linearGradient
            id="imageGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFE0E6" />
            <stop offset="50%" stopColor="#E0F7FF" />
            <stop offset="100%" stopColor="#E0FFE6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "JSON Formatter",
    description:
      "Format, validate, and beautify JSON data with syntax highlighting and error detection.",
    href: "/tools/json-formatter",
    tags: ["json", "formatter", "validate"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="4"
          fill="#f8f9fa"
          stroke="#dee2e6"
          strokeWidth="1.5"
        />
        <text x="12" y="18" fill="#6f42c1" fontSize="6" fontFamily="monospace">
          {"{"}
        </text>
        <text x="16" y="24" fill="#dc3545" fontSize="5" fontFamily="monospace">
          "key":
        </text>
        <text x="16" y="30" fill="#28a745" fontSize="5" fontFamily="monospace">
          "value"
        </text>
        <text x="12" y="36" fill="#6f42c1" fontSize="6" fontFamily="monospace">
          {"}"}
        </text>
        <circle cx="36" cy="16" r="2" fill="#28a745" />
      </svg>
    ),
  },
  {
    name: "QR Code Generator",
    description:
      "Create customizable QR codes with logos, colors, and multiple export formats.",
    href: "/tools/qr-generator",
    tags: ["qr", "code", "generator"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="2"
          fill="#FFF"
          stroke="#dee2e6"
          strokeWidth="1.5"
        />
        <rect x="10" y="10" width="6" height="6" fill="#000" />
        <rect x="18" y="10" width="2" height="2" fill="#000" />
        <rect x="22" y="10" width="2" height="2" fill="#000" />
        <rect x="26" y="10" width="2" height="2" fill="#000" />
        <rect x="34" y="10" width="6" height="6" fill="#000" />
        <rect x="10" y="18" width="2" height="2" fill="#000" />
        <rect x="14" y="18" width="2" height="2" fill="#000" />
        <rect x="22" y="18" width="2" height="2" fill="#000" />
        <rect x="34" y="18" width="2" height="2" fill="#000" />
        <rect x="38" y="18" width="2" height="2" fill="#000" />
        <rect x="10" y="22" width="2" height="2" fill="#000" />
        <rect x="18" y="22" width="6" height="6" fill="#000" />
        <rect x="30" y="22" width="2" height="2" fill="#000" />
        <rect x="38" y="22" width="2" height="2" fill="#000" />
        <rect x="10" y="34" width="6" height="6" fill="#000" />
        <rect x="18" y="34" width="2" height="2" fill="#000" />
        <rect x="26" y="34" width="2" height="2" fill="#000" />
        <rect x="34" y="34" width="6" height="6" fill="#000" />
      </svg>
    ),
  },
  {
    name: "CSS Box Shadow",
    description:
      "Design sophisticated box shadows with real-time preview and optimized CSS output.",
    href: "/tools/box-shadow",
    tags: ["css", "box-shadow", "design"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect
          x="16"
          y="14"
          width="16"
          height="16"
          rx="3"
          fill="#495057"
          opacity="0.2"
          transform="translate(2, 2)"
        />
        <rect
          x="16"
          y="14"
          width="16"
          height="16"
          rx="3"
          fill="#495057"
          opacity="0.4"
          transform="translate(1, 1)"
        />
        <rect
          x="16"
          y="14"
          width="16"
          height="16"
          rx="3"
          fill="#FFF"
          stroke="#dee2e6"
          strokeWidth="1.5"
        />
        <circle cx="24" cy="22" r="1.5" fill="#6c757d" />
      </svg>
    ),
  },
  {
    name: "CSS Gradient",
    description:
      "Create stunning linear, radial, and conic gradients with intuitive color controls.",
    href: "/tools/gradient",
    tags: ["css", "gradient", "design"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect
          x="12"
          y="12"
          width="24"
          height="24"
          rx="4"
          fill="url(#toolGradient)"
        />
        <defs>
          <linearGradient id="toolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="33%" stopColor="#4ECDC4" />
            <stop offset="66%" stopColor="#45B7D1" />
            <stop offset="100%" stopColor="#96CEB4" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Flexbox Generator",
    description:
      "Master CSS Flexbox layouts with interactive visual editor and generated code.",
    href: "/tools/flexbox",
    tags: ["css", "flexbox", "layout"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect
          x="8"
          y="16"
          width="32"
          height="16"
          rx="2"
          fill="#f8f9fa"
          stroke="#dee2e6"
          strokeWidth="1.5"
        />
        <rect x="12" y="20" width="6" height="8" rx="1" fill="#4ECDC4" />
        <rect x="21" y="20" width="6" height="8" rx="1" fill="#45B7D1" />
        <rect x="30" y="20" width="6" height="8" rx="1" fill="#96CEB4" />
        <path
          d="M10 12 L14 8 L18 12"
          fill="none"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 36 L34 40 L38 36"
          fill="none"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "CSV to JSON",
    description:
      "Transform CSV data into structured JSON with field mapping and validation.",
    href: "/tools/csv-to-json",
    tags: ["csv", "json", "convert"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect
          x="6"
          y="12"
          width="14"
          height="24"
          rx="2"
          fill="#f8f9fa"
          stroke="#dee2e6"
          strokeWidth="1.5"
        />
        <rect
          x="28"
          y="12"
          width="14"
          height="24"
          rx="2"
          fill="#f8f9fa"
          stroke="#dee2e6"
          strokeWidth="1.5"
        />
        <line
          x1="8"
          y1="18"
          x2="18"
          y2="18"
          stroke="#dee2e6"
          strokeWidth="0.5"
        />
        <line
          x1="8"
          y1="22"
          x2="18"
          y2="22"
          stroke="#dee2e6"
          strokeWidth="0.5"
        />
        <line
          x1="8"
          y1="26"
          x2="18"
          y2="26"
          stroke="#dee2e6"
          strokeWidth="0.5"
        />
        <text
          x="13"
          y="16"
          fill="#495057"
          fontSize="3"
          textAnchor="middle"
          fontFamily="monospace"
        >
          CSV
        </text>
        <text x="30" y="18" fill="#6f42c1" fontSize="3" fontFamily="monospace">
          {"{"}
        </text>
        <text
          x="31"
          y="22"
          fill="#dc3545"
          fontSize="2.5"
          fontFamily="monospace"
        >
          "key"
        </text>
        <text
          x="31"
          y="26"
          fill="#28a745"
          fontSize="2.5"
          fontFamily="monospace"
        >
          val
        </text>
        <text x="30" y="30" fill="#6f42c1" fontSize="3" fontFamily="monospace">
          {"}"}
        </text>
        <path
          d="M22 22 L24 24 L22 26"
          fill="none"
          stroke="#6c757d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Word Counter",
    description:
      "Text analysis with word count, reading time, and keyword density metrics.",
    href: "/tools/word-counter",
    tags: ["word", "counter", "text"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect
          x="10"
          y="10"
          width="28"
          height="28"
          rx="3"
          fill="#f8f9fa"
          stroke="#dee2e6"
          strokeWidth="1.5"
        />
        <line
          x1="14"
          y1="18"
          x2="34"
          y2="18"
          stroke="#6c757d"
          strokeWidth="1"
        />
        <line
          x1="14"
          y1="22"
          x2="30"
          y2="22"
          stroke="#6c757d"
          strokeWidth="1"
        />
        <line
          x1="14"
          y1="26"
          x2="34"
          y2="26"
          stroke="#6c757d"
          strokeWidth="1"
        />
        <line
          x1="14"
          y1="30"
          x2="26"
          y2="30"
          stroke="#6c757d"
          strokeWidth="1"
        />
        <rect x="32" y="32" width="8" height="8" rx="4" fill="#4ECDC4" />
        <text
          x="36"
          y="37"
          fill="#FFF"
          fontSize="4"
          textAnchor="middle"
          fontFamily="monospace"
        >
          42
        </text>
      </svg>
    ),
  },
  {
    name: "Image Compressor",
    description:
      "Compress JPEG, PNG, WebP images with quality controls and batch processing.",
    href: "/tools/image-compressor",
    tags: ["image", "compress", "optimize"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect
          x="8"
          y="12"
          width="32"
          height="24"
          rx="3"
          fill="#f8f9fa"
          stroke="#dee2e6"
          strokeWidth="2"
        />
        <rect
          x="10"
          y="14"
          width="28"
          height="20"
          rx="2"
          fill="url(#compressGradient)"
        />
        <circle cx="18" cy="22" r="2" fill="#FFF" opacity="0.9" />
        <path
          d="M26 26 L30 22 L36 28 L36 32 L12 32 L12 28 L20 20 L26 26"
          fill="#FFF"
          opacity="0.7"
        />
        {/* Compression arrows */}
        <path
          d="M6 18 L4 20 L6 22"
          fill="none"
          stroke="#28a745"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 18 L44 20 L42 22"
          fill="none"
          stroke="#28a745"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="24"
          y="42"
          fill="#28a745"
          fontSize="6"
          textAnchor="middle"
          fontWeight="bold"
          fontFamily="monospace"
        >
          75%
        </text>
        <defs>
          <linearGradient
            id="compressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#E8F5E8" />
            <stop offset="100%" stopColor="#C8E6C9" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "CSS Grid Generator",
    description:
      "Visual CSS Grid layout builder with interactive controls and generated code.",
    href: "/tools/css-grid",
    tags: ["css", "grid", "layout"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="2"
          fill="#f8f9fa"
          stroke="#dee2e6"
          strokeWidth="1.5"
        />
        {/* Grid lines */}
        <line x1="20" y1="8" x2="20" y2="40" stroke="#dee2e6" strokeWidth="1" />
        <line x1="28" y1="8" x2="28" y2="40" stroke="#dee2e6" strokeWidth="1" />
        <line x1="8" y1="20" x2="40" y2="20" stroke="#dee2e6" strokeWidth="1" />
        <line x1="8" y1="28" x2="40" y2="28" stroke="#dee2e6" strokeWidth="1" />
        {/* Grid items */}
        <rect
          x="10"
          y="10"
          width="8"
          height="8"
          rx="1"
          fill="#4ECDC4"
          opacity="0.8"
        />
        <rect
          x="22"
          y="10"
          width="16"
          height="8"
          rx="1"
          fill="#45B7D1"
          opacity="0.8"
        />
        <rect
          x="10"
          y="22"
          width="8"
          height="16"
          rx="1"
          fill="#96CEB4"
          opacity="0.8"
        />
        <rect
          x="22"
          y="22"
          width="8"
          height="8"
          rx="1"
          fill="#FF6B6B"
          opacity="0.8"
        />
        <rect
          x="30"
          y="22"
          width="8"
          height="16"
          rx="1"
          fill="#FFD93D"
          opacity="0.8"
        />
      </svg>
    ),
  },
  {
    name: "Pomodoro Timer",
    description:
      "Productivity timer with customizable work/break intervals and focus tracking.",
    href: "/tools/pomodoro-timer",
    tags: ["productivity", "timer", "focus"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <circle
          cx="24"
          cy="24"
          r="16"
          fill="#f8f9fa"
          stroke="#dee2e6"
          strokeWidth="2"
        />
        <circle
          cx="24"
          cy="24"
          r="14"
          fill="none"
          stroke="#FF6B6B"
          strokeWidth="3"
          strokeDasharray="44 44"
          strokeDashoffset="11"
          transform="rotate(-90 24 24)"
        />
        <circle cx="24" cy="24" r="2" fill="#495057" />
        <line
          x1="24"
          y1="24"
          x2="24"
          y2="14"
          stroke="#495057"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="24"
          y1="24"
          x2="30"
          y2="18"
          stroke="#495057"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Tomato leaf */}
        <path d="M22 8 Q24 6 26 8 Q25 10 24 10 Q23 10 22 8" fill="#28a745" />
        <text
          x="24"
          y="44"
          fill="#FF6B6B"
          fontSize="5"
          textAnchor="middle"
          fontWeight="bold"
          fontFamily="monospace"
        >
          25:00
        </text>
      </svg>
    ),
  },
  {
    name: "Animation Easing",
    description:
      "CSS transition timing functions with interactive curves and code preview.",
    href: "/tools/animation-easing",
    tags: ["css", "animation", "easing"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="3"
          fill="#f8f9fa"
          stroke="#dee2e6"
          strokeWidth="1.5"
        />
        {/* Bezier curve */}
        <path
          d="M12 36 Q18 12, 36 12"
          fill="none"
          stroke="#4ECDC4"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Control points */}
        <circle cx="18" cy="12" r="2" fill="#FF6B6B" />
        <circle cx="36" cy="12" r="2" fill="#FF6B6B" />
        <line
          x1="12"
          y1="36"
          x2="18"
          y2="12"
          stroke="#FF6B6B"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <line
          x1="36"
          y1="12"
          x2="36"
          y2="12"
          stroke="#FF6B6B"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        {/* Moving element */}
        <circle cx="32" cy="16" r="2" fill="#45B7D1">
          <animateMotion dur="2s" repeatCount="indefinite">
            <path d="M12 36 Q18 12, 36 12" />
          </animateMotion>
        </circle>
      </svg>
    ),
  },
  {
    name: "Image Formatter",
    description:
      "Convert between image formats (PNG, JPEG, WebP, SVG) with quality settings.",
    href: "/tools/image-formatter",
    tags: ["image", "convert", "format"],
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <rect
          x="6"
          y="16"
          width="14"
          height="16"
          rx="2"
          fill="#f8f9fa"
          stroke="#dee2e6"
          strokeWidth="1.5"
        />
        <rect
          x="28"
          y="16"
          width="14"
          height="16"
          rx="2"
          fill="#f8f9fa"
          stroke="#dee2e6"
          strokeWidth="1.5"
        />
        {/* Left image (PNG) */}
        <rect
          x="8"
          y="18"
          width="10"
          height="12"
          rx="1"
          fill="url(#pngGradient)"
        />
        <circle cx="11" cy="21" r="1" fill="#FFF" opacity="0.9" />
        <path
          d="M14 26 L16 24 L18 28 L18 28 L8 28 L8 26 L12 22 L14 24"
          fill="#FFF"
          opacity="0.7"
        />
        <text
          x="13"
          y="36"
          fill="#6c757d"
          fontSize="3"
          textAnchor="middle"
          fontFamily="monospace"
        >
          PNG
        </text>

        {/* Right image (JPEG) */}
        <rect
          x="30"
          y="18"
          width="10"
          height="12"
          rx="1"
          fill="url(#jpegGradient)"
        />
        <circle cx="33" cy="21" r="1" fill="#FFF" opacity="0.9" />
        <path
          d="M36 26 L38 24 L40 28 L40 28 L30 28 L30 26 L34 22 L36 24"
          fill="#FFF"
          opacity="0.7"
        />
        <text
          x="35"
          y="36"
          fill="#6c757d"
          fontSize="3"
          textAnchor="middle"
          fontFamily="monospace"
        >
          JPEG
        </text>

        {/* Conversion arrow */}
        <path
          d="M22 22 L24 24 L22 26"
          fill="none"
          stroke="#4ECDC4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <defs>
          <linearGradient id="pngGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E3F2FD" />
            <stop offset="100%" stopColor="#BBDEFB" />
          </linearGradient>
          <linearGradient id="jpegGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF3E0" />
            <stop offset="100%" stopColor="#FFE0B2" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];
