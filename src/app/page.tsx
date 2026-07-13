import {
  ArrowRight,
  Github,
  Shield,
  Zap,
  MousePointerClick,
  Terminal,
  Navigation,
  FormInput,
  Layout,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";

/* ── Wireframe component thumbnails ── */
const componentThumbs = [
  {
    name: "Hero Sections",
    href: "/docs/components/hero",
    wire: (
      <div className="space-y-2 p-3 w-full">
        <div className="h-2.5 bg-stone-300 dark:bg-stone-600 rounded-full w-1/2" />
        <div className="h-1.5 bg-stone-200 dark:bg-stone-700 rounded-full w-full" />
        <div className="h-1.5 bg-stone-200 dark:bg-stone-700 rounded-full w-3/4" />
        <div className="flex gap-2 mt-3">
          <div className="h-4 w-12 bg-[#FF3903] rounded-full" />
          <div className="h-4 w-10 border border-stone-300 dark:border-stone-600 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    name: "Cards",
    href: "/docs/components/card",
    wire: (
      <div className="p-3 space-y-2 w-full">
        <div className="w-full h-10 bg-stone-100 dark:bg-stone-800 rounded-md flex justify-end p-1.5 border border-stone-200 dark:border-stone-700">
           <div className="w-1.5 h-1.5 rounded-full bg-[#FF3903]" />
        </div>
        <div className="h-2 bg-stone-300 dark:bg-stone-600 rounded-full w-3/4" />
        <div className="h-1.5 bg-stone-200 dark:bg-stone-700 rounded-full w-full" />
      </div>
    ),
  },
  {
    name: "Navigation",
    href: "/docs/components/header",
    wire: (
      <div className="p-3 space-y-3 w-full">
        <div className="flex items-center justify-between">
          <div className="h-3 w-3 bg-[#FF3903] rounded-full" />
          <div className="flex gap-1.5">
            <div className="h-1.5 w-4 bg-stone-300 dark:bg-stone-600 rounded-full" />
            <div className="h-1.5 w-4 bg-stone-300 dark:bg-stone-600 rounded-full" />
            <div className="h-1.5 w-4 bg-stone-300 dark:bg-stone-600 rounded-full" />
          </div>
        </div>
        <div className="h-px w-full bg-stone-200 dark:bg-stone-800" />
      </div>
    ),
  },
  {
    name: "Buttons",
    href: "/docs/components/button",
    wire: (
      <div className="p-3 flex flex-col gap-2 items-start w-full">
        <div className="px-4 py-1.5 bg-[#FF3903] rounded-full text-[8px] text-white font-medium w-full text-center">Primary</div>
        <div className="px-4 py-1.5 border border-stone-300 dark:border-stone-600 rounded-full text-[8px] text-stone-500 dark:text-stone-400 font-medium w-full text-center">Outline</div>
        <div className="px-4 py-1.5 bg-stone-100 dark:bg-stone-800 rounded-full text-[8px] text-stone-600 dark:text-stone-300 font-medium w-full text-center">Secondary</div>
      </div>
    ),
  },
  {
    name: "Data Table",
    href: "/docs/components/data-table",
    wire: (
      <div className="p-3 space-y-2 w-full">
        <div className="flex items-center justify-between pb-1.5 border-b border-stone-200 dark:border-stone-700">
          <div className="h-1 w-6 bg-stone-300 dark:bg-stone-600 rounded-full" />
          <div className="h-1 w-6 bg-stone-300 dark:bg-stone-600 rounded-full" />
        </div>
        {[1, 2, 3].map((r) => (
          <div key={r} className="flex items-center justify-between">
            <div className="h-1.5 bg-stone-200 dark:bg-stone-700 rounded-full w-10" />
            <div className={`h-1.5 rounded-full w-6 ${r === 2 ? 'bg-[#FF3903]' : 'bg-stone-200 dark:bg-stone-700'}`} />
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "Accordion",
    href: "/docs/components/accordion",
    wire: (
      <div className="p-3 space-y-1.5 w-full">
        {[1, 2, 3].map((n) => (
          <div key={n} className={`border border-stone-200 dark:border-stone-700 rounded-md p-1.5 ${n===1 ? 'border-[#FF3903]/30 bg-[#FF3903]/5' : ''}`}>
            <div className="flex items-center justify-between">
              <div className={`h-1.5 rounded-full w-1/2 ${n === 1 ? 'bg-[#FF3903]' : 'bg-stone-300 dark:bg-stone-600'}`} />
              <div className={`h-1.5 w-1.5 rounded-full ${n === 1 ? 'bg-[#FF3903]' : 'bg-stone-300 dark:bg-stone-600'}`} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

const motionItems = [
  { name: "Text Reveal", desc: "Animated text reveal on scroll", href: "/docs/motion/text-reveal" },
  { name: "Shimmer Button", desc: "Buttons with shimmer animation", href: "/docs/motion/shimmer-button" },
  { name: "Card Spotlight", desc: "Spotlight hover effect", href: "/docs/motion/card-spotlight" },
  { name: "Morphing Text", desc: "Smooth text transitions", href: "/docs/motion/morphing-text" },
  { name: "Magnetic Element", desc: "Cursor-attracted elements", href: "/docs/motion/magnetic-element" },
  { name: "Gradient Text", desc: "Animated gradient text", href: "/docs/motion/gradient-text" },
];

const features = [
  { icon: Terminal, title: "CLI or Copy & Paste", desc: "Install via CLI or grab the code. No dependencies either way." },
  { icon: Shield, title: "Open Source", desc: "Apache-2.0 licensed. Contribute, customize, build freely." },
  { icon: Zap, title: "Zero Config", desc: "Works with Next.js, Vite, CRA, or any Tailwind project." },
  { icon: MousePointerClick, title: "Accessible", desc: "WCAG compliant with ARIA labels and keyboard navigation." },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* ── Stats ── */}
      <StatsSection />

      {/* ── Main Features ── */}
      <section className="border-b border-stone-200/80 bg-white px-4 py-16 dark:border-stone-800 dark:bg-stone-950 sm:px-6 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-stone-900 dark:text-stone-100 sm:text-4xl">
              Build faster with a complete React UI component library
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-stone-500 dark:text-stone-400">
              50+ free components, production-ready blocks, and a complete design system built for teams who design, build, and ship at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-stone-200/80 bg-stone-50/50 p-6 transition-colors hover:border-stone-300 hover:bg-white dark:border-stone-800 dark:bg-white/[0.02] dark:hover:border-stone-700 dark:hover:bg-white/[0.04]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white dark:border-white/[0.08] dark:bg-stone-900">
                  <f.icon className="h-5 w-5 text-stone-600 dark:text-stone-400" />
                </div>
                <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-2">{f.title}</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Component Showcase ── */}
      <section className="border-b border-stone-200/80 bg-stone-50/60 px-4 py-16 dark:border-stone-800 dark:bg-stone-950 sm:px-6 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-stone-900 dark:text-stone-100 sm:text-4xl">
              50+ UI Components and Blocks to Build Faster
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-stone-500 dark:text-stone-400">
              Each component ships with production-ready code, ensuring consistent design-to-development workflows at scale.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {componentThumbs.map((comp) => (
              <Link key={comp.name} href={comp.href} className="group">
                <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-stone-300 dark:border-stone-800 dark:bg-white/[0.02] dark:hover:border-stone-700">
                  <div className="flex aspect-[4/3] items-center justify-center border-b border-stone-200/80 bg-stone-50/70 dark:border-stone-800 dark:bg-white/[0.02]">
                    {comp.wire}
                  </div>
                  <div className="px-3 py-2.5">
                    <span className="text-xs font-medium text-stone-700 transition-colors group-hover:text-stone-950 dark:text-stone-300 dark:group-hover:text-white">
                      {comp.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/docs/components/accordion">
              <Button variant="outline" className="rounded-xl border-stone-200 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-stone-100 dark:border-stone-800 dark:hover:bg-stone-900">
                View all 50+ components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Motion Showcase ── */}
      <section className="border-b border-stone-200/80 bg-white px-4 py-16 dark:border-stone-800 dark:bg-stone-950 sm:px-6 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-stone-900 dark:text-stone-100 sm:text-4xl">
              Components that come alive
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-stone-500 dark:text-stone-400">
              13 animated components built with Framer Motion. Scroll-triggered, interactive, and ready for React & Next.js.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {motionItems.map((m) => (
              <Link key={m.name} href={m.href} className="group">
                <div className="rounded-2xl border border-stone-200/80 bg-stone-50/50 p-5 transition-colors hover:border-stone-300 hover:bg-white dark:border-stone-800 dark:bg-white/[0.02] dark:hover:border-stone-700 dark:hover:bg-white/[0.04]">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-medium text-stone-900 transition-colors group-hover:text-stone-600 dark:text-stone-100 dark:group-hover:text-stone-300">{m.name}</h3>
                  </div>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{m.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/docs/motion/text-reveal">
              <Button variant="outline" className="rounded-xl border-stone-200 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-stone-100 dark:border-stone-800 dark:hover:bg-stone-900">
                Explore all 13 motion primitives
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Community CTA (dark) ── */}
      <section className="border-b border-stone-800 bg-stone-950 dark:bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-stone-800">
          <div className="px-6 py-16 sm:px-10 sm:py-20">
            <h2 className="mb-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
              Business Wish Community
            </h2>
            <p className="text-stone-400 leading-relaxed max-w-sm">
              Star us on GitHub to stay up to date with the latest updates, releases, and contributions.
            </p>
          </div>
          <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20">
            <Link
              href="https://github.com/abhaysinghr516/business-wish"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="rounded-xl bg-white px-8 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-200">
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
