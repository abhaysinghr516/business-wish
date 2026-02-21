import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Enhanced SEO metadata for tools page
export const metadata: Metadata = {
  title: "Free Developer Tools | Online Utilities for Web Development",
  description:
    "17+ professional developer tools that work completely offline. Color palette generators, CSS utilities, formatters, converters, and productivity tools for web developers.",
  keywords: [
    "developer tools",
    "web development tools",
    "online tools",
    "color palette generator",
    "CSS tools",
    "JSON formatter",
    "image compressor",
    "QR code generator",
    "gradient generator",
    "flexbox generator",
    "accessibility tools",
    "contrast checker",
    "color blindness simulator",
    "productivity tools",
    "pomodoro timer",
    "word counter",
    "CSV to JSON converter",
    "free developer utilities",
    "offline tools",
    "browser-based tools",
    "no signup required",
    "privacy-focused tools",
  ],
  openGraph: {
    title: "Free Developer Tools | 17+ Online Utilities for Web Development",
    description:
      "Professional developer tools that work completely offline. Color generators, CSS utilities, formatters, and productivity tools for web developers.",
    type: "website",
    url: "https://www.businesswish.tech/tools",
    images: [
      {
        url: "https://www.businesswish.tech/business-wish-tools.png",
        width: 1200,
        height: 630,
        alt: "Business Wish Developer Tools - Free Online Utilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Developer Tools | 17+ Online Utilities",
    description:
      "Professional developer tools that work completely offline. Color generators, CSS utilities, formatters, and productivity tools.",
    images: ["https://www.businesswish.tech/business-wish-tools.png"],
  },
  alternates: {
    canonical: "https://www.businesswish.tech/tools",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

type Tool = {
  name: string;
  description: string;
  href: string;
  category: string;
};

const categories = [
  { name: "Color & Design", key: "color" },
  { name: "CSS Tools", key: "css" },
  { name: "Data & Code", key: "data" },
  { name: "Image Tools", key: "image" },
  { name: "Productivity", key: "productivity" },
];

const tools: Tool[] = [
  {
    name: "Palette Generator",
    description:
      "Generate cohesive color palettes using harmony rules like complementary and triadic schemes.",
    href: "/tools/palette-generator",
    category: "color",
  },
  {
    name: "Contrast Checker",
    description:
      "Ensure color combinations meet WCAG accessibility standards with real-time compliance scoring.",
    href: "/tools/contrast-checker",
    category: "color",
  },
  {
    name: "Blindness Simulator",
    description:
      "Visualize how designs appear to users with different types of color vision deficiency.",
    href: "/tools/blindness-simulator",
    category: "color",
  },
  {
    name: "Color Converter",
    description:
      "Convert between HEX, RGB, HSL, HSV, CMYK color formats with live preview.",
    href: "/tools/format-converter",
    category: "color",
  },
  {
    name: "Image Color Picker",
    description:
      "Extract dominant colors and generate complete palettes from uploaded images.",
    href: "/tools/image-extractor",
    category: "color",
  },
  {
    name: "CSS Box Shadow",
    description:
      "Design sophisticated box shadows with real-time preview and optimized CSS output.",
    href: "/tools/box-shadow",
    category: "css",
  },
  {
    name: "CSS Gradient",
    description:
      "Create stunning linear, radial, and conic gradients with intuitive color controls.",
    href: "/tools/gradient",
    category: "css",
  },
  {
    name: "Flexbox Playground",
    description:
      "Master CSS Flexbox layouts with interactive visual editor and generated code.",
    href: "/tools/flexbox",
    category: "css",
  },
  {
    name: "CSS Grid Generator",
    description:
      "Visual CSS Grid layout builder with interactive controls and generated code.",
    href: "/tools/css-grid",
    category: "css",
  },
  {
    name: "Animation Easing",
    description:
      "CSS transition timing functions with interactive curves and code preview.",
    href: "/tools/animation-easing",
    category: "css",
  },
  {
    name: "JSON Formatter",
    description:
      "Format, validate, and beautify JSON data with syntax highlighting and error detection.",
    href: "/tools/json-formatter",
    category: "data",
  },
  {
    name: "CSV to JSON",
    description:
      "Transform CSV data into structured JSON with field mapping and validation.",
    href: "/tools/csv-to-json",
    category: "data",
  },
  {
    name: "QR Code Generator",
    description:
      "Create customizable QR codes with logos, colors, and multiple export formats.",
    href: "/tools/qr-generator",
    category: "data",
  },
  {
    name: "Image Compressor",
    description:
      "Compress JPEG, PNG, WebP images with quality controls and batch processing.",
    href: "/tools/image-compressor",
    category: "image",
  },
  {
    name: "Image Formatter",
    description:
      "Convert between image formats (PNG, JPEG, WebP, SVG) with quality settings.",
    href: "/tools/image-formatter",
    category: "image",
  },
  {
    name: "Word Counter",
    description:
      "Text analysis with word count, reading time, and keyword density metrics.",
    href: "/tools/word-counter",
    category: "productivity",
  },
  {
    name: "Pomodoro Timer",
    description:
      "Productivity timer with customizable work/break intervals and focus tracking.",
    href: "/tools/pomodoro-timer",
    category: "productivity",
  },
];

// Structured data for tools page
const toolsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Developer Tools Collection",
  description:
    "A comprehensive collection of 17+ professional developer tools that work completely offline",
  url: "https://www.businesswish.tech/tools",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, index) => ({
      "@type": "SoftwareApplication",
      position: index + 1,
      name: tool.name,
      description: tool.description,
      url: `https://www.businesswish.tech${tool.href}`,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    })),
  },
  publisher: {
    "@type": "Organization",
    name: "Business Wish",
    url: "https://www.businesswish.tech",
  },
};

export default function ToolsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsPageSchema) }}
      />

      <div className="bg-white dark:bg-stone-950">
        {/* Hero Section */}
        <section className="pt-16 pb-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">
                Developer Tools
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-stone-900 dark:text-stone-100 mb-4 leading-tight tracking-tight">
                Professional tools, zero installs
              </h1>
              <p className="text-base sm:text-lg text-stone-500 dark:text-stone-400 leading-relaxed max-w-2xl">
                {tools.length} browser-based utilities for color, CSS, data, and
                images. Everything runs locally — your data never leaves your
                machine.
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-stone-500 dark:text-stone-400">
              <span>{tools.length} tools</span>
              <span>·</span>
              <span>100% offline</span>
              <span>·</span>
              <span>No signup</span>
              <span>·</span>
              <span>Zero tracking</span>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-stone-200 dark:border-stone-800" />

        {/* Tools by Category */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {categories.map((category) => {
              const categoryTools = tools.filter(
                (t) => t.category === category.key
              );
              if (categoryTools.length === 0) return null;

              return (
                <div key={category.key}>
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                      {category.name}
                    </h2>
                    <span className="text-xs text-stone-400 dark:text-stone-500">
                      {categoryTools.length}
                    </span>
                    <div className="flex-1 border-t border-stone-200 dark:border-stone-800" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 dark:bg-stone-800 rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800">
                    {categoryTools.map((tool) => (
                      <Link
                        key={tool.name}
                        href={tool.href}
                        className="group block bg-white dark:bg-stone-950 p-5 sm:p-6 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors"
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/SoftwareApplication"
                      >
                        <meta itemProp="name" content={tool.name} />
                        <meta
                          itemProp="description"
                          content={tool.description}
                        />
                        <meta
                          itemProp="url"
                          content={`https://www.businesswish.tech${tool.href}`}
                        />
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100 group-hover:text-stone-700 dark:group-hover:text-white transition-colors">
                            {tool.name}
                          </h3>
                          <ArrowUpRight className="h-3.5 w-3.5 text-stone-300 dark:text-stone-700 group-hover:text-stone-500 dark:group-hover:text-stone-400 transition-all duration-200 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2">
                          {tool.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer note */}
        <div className="border-t border-stone-200 dark:border-stone-800" />
        <div className="py-10 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs text-stone-400 dark:text-stone-500">
              All tools process data locally in your browser — nothing is sent to
              any server
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
