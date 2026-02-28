"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 sm:pt-32 sm:pb-28 px-4 sm:px-6 bg-white dark:bg-stone-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wide uppercase text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-800 rounded-full">
            Open Source
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wide uppercase text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-800 rounded-full">
            Free Forever
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-stone-900 dark:text-stone-100 mb-6 leading-[1.08] tracking-tight"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Business Wish: Free Tailwind CSS Components & Tools
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-stone-500 dark:text-stone-400 mb-10 max-w-2xl leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          50+ Tailwind components via CLI or copy-paste, 13 motion primitives,
          and 17 browser-based dev tools. No config. No accounts.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mb-16"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
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
        </motion.div>

        {/* Code Preview Block */}
        <motion.div
          className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-6 font-mono text-sm"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
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
              <span className="text-stone-900 dark:text-stone-200">Install</span>{" "}
              via CLI or <span className="text-stone-900 dark:text-stone-200">Copy</span> the code
            </p>
            <p>
              <span className="text-stone-400 dark:text-stone-600 select-none">
                3{" "}
              </span>
              <span className="text-stone-900 dark:text-stone-200">Ship</span>{" "}
              your project faster
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
