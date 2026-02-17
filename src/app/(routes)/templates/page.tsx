"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layout,
  ShoppingBag,
  FileText,
  BarChart3,
  Users,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const templates = [
  {
    id: "landing-page",
    title: "Landing Page",
    category: "Marketing",
    description:
      "Convert visitors with high-impact hero sections, feature grids, testimonials, and compelling calls-to-action.",
    icon: Layout,
    features: ["Hero section", "Feature grid", "CTA blocks", "Testimonials"],
  },
  {
    id: "e-commerce",
    title: "E-commerce Store",
    category: "Store",
    description:
      "Drive sales with optimized product displays, cart flows, and seamless checkout experiences.",
    icon: ShoppingBag,
    features: ["Product grid", "Cart sidebar", "Checkout flow", "Filters"],
  },
  {
    id: "blog",
    title: "Blog Template",
    category: "Content",
    description:
      "Engage readers with clean typography, intuitive navigation, and SEO-optimized content layouts.",
    icon: FileText,
    features: [
      "Article layout",
      "Category pages",
      "Author profiles",
      "Search",
    ],
  },
  {
    id: "dashboard",
    title: "Admin Dashboard",
    category: "Analytics",
    description:
      "Monitor performance with data-rich interfaces, charts, tables, and actionable insights.",
    icon: BarChart3,
    features: ["Data tables", "Charts", "KPI cards", "Sidebar nav"],
  },
  {
    id: "portfolio",
    title: "Portfolio Site",
    category: "Personal",
    description:
      "Showcase your work with stunning project galleries, about sections, and professional layouts.",
    icon: Users,
    features: ["Project grid", "About section", "Contact form", "Gallery"],
  },
  {
    id: "saas",
    title: "SaaS Application",
    category: "Product",
    description:
      "Scale your product with enterprise-grade interfaces, onboarding flows, and settings panels.",
    icon: Settings,
    features: ["Onboarding", "Settings", "User management", "Billing"],
  },
];

const Page = () => {
  return (
    <div className="bg-white dark:bg-stone-950">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium tracking-wide uppercase text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-800 rounded-full">
                Coming Soon
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-stone-900 dark:text-stone-100 mb-4 leading-tight tracking-tight">
              Website templates built
              <br />
              with our components
            </h1>

            <p className="text-base sm:text-lg text-stone-500 dark:text-stone-400 leading-relaxed max-w-2xl">
              Complete, production-ready page templates. Every template is built
              entirely from our component library — responsive, accessible, and
              ready to customize.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 text-sm text-stone-500 dark:text-stone-400">
            <span>{templates.length} templates</span>
            <span>·</span>
            <span>Built with 50+ components</span>
            <span>·</span>
            <span>TypeScript ready</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-stone-200 dark:border-stone-800" />

      {/* Templates Grid */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 dark:bg-stone-800 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-white dark:bg-stone-950 p-6 sm:p-8 flex flex-col"
              >
                {/* Placeholder preview */}
                <div className="w-full aspect-[4/3] rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 mb-5 flex items-center justify-center">
                  <template.icon className="h-8 w-8 text-stone-300 dark:text-stone-700" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">
                    {template.title}
                  </h3>
                  <span className="text-xs text-stone-400 dark:text-stone-500">
                    {template.category}
                  </span>
                </div>

                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-4">
                  {template.description}
                </p>

                {/* Feature list */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {template.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-0.5 bg-stone-100 dark:bg-stone-900 text-stone-500 dark:text-stone-400 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-stone-200 dark:border-stone-800" />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-100 mb-4">
            Can&apos;t wait? Start building now
          </h2>
          <p className="text-stone-500 dark:text-stone-400 mb-8 max-w-xl mx-auto">
            Our component library has everything you need to build these
            templates yourself. Copy, paste, and ship.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/docs/components/accordion">
              <Button
                size="lg"
                className="px-6 py-2.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg text-sm font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
              >
                Explore Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/tools">
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-2.5 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 rounded-lg text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
              >
                Browse Tools
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
