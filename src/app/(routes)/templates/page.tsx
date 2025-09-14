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
  CheckCircle,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const templates = [
  {
    id: "landing-page",
    title: "Landing Page",
    description:
      "Convert visitors with high-impact hero sections and compelling calls-to-action",
    icon: Layout,
    color: "text-blue-500 bg-blue-100/50 dark:bg-blue-900/30",
  },
  {
    id: "e-commerce",
    title: "E-commerce Store",
    description:
      "Drive sales with optimized product displays and seamless checkout flows",
    icon: ShoppingBag,
    color: "text-green-500 bg-green-100/50 dark:bg-green-900/30",
  },
  {
    id: "blog",
    title: "Blog Template",
    description:
      "Engage readers with clean typography and intuitive content organization",
    icon: FileText,
    color: "text-purple-500 bg-purple-100/50 dark:bg-purple-900/30",
  },
  {
    id: "dashboard",
    title: "Admin Dashboard",
    description:
      "Monitor performance with data-rich interfaces and actionable insights",
    icon: BarChart3,
    color: "text-orange-500 bg-orange-100/50 dark:bg-orange-900/30",
  },
  {
    id: "portfolio",
    title: "Portfolio Site",
    description:
      "Showcase your work with stunning galleries and professional layouts",
    icon: Users,
    color: "text-pink-500 bg-pink-100/50 dark:bg-pink-900/30",
  },
  {
    id: "saas",
    title: "SaaS Application",
    description:
      "Scale your business with enterprise-grade interfaces and user management",
    icon: Settings,
    color: "text-teal-500 bg-teal-100/50 dark:bg-teal-900/30",
  },
];

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900 relative">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/70 dark:bg-black/70 border border-gray-200 dark:border-gray-800 rounded-full text-xs text-gray-600 dark:text-gray-400 backdrop-blur-sm">
              <CheckCircle className="w-3 h-3 text-blue-500" />
              <span>Production Ready</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-black dark:text-white mb-4 leading-tight">
            Premium Templates.
            <br />
            <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Coming Soon.
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Complete website templates built with our components.
            Production-ready designs that ship fast and scale beautifully across
            all devices.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Layout className="w-4 h-4 mr-1" />6 Templates
            </div>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Settings className="w-4 h-4 mr-1" />
              50+ Components
            </div>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <CheckCircle className="w-4 h-4 mr-1" />
              TypeScript Ready
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-14 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-5 flex flex-col h-full"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${template.color}`}
                >
                  <template.icon className="w-6 h-6" />
                </div>

                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {template.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {template.description}
                </p>

                <Button
                  disabled
                  className="mt-auto w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg text-sm font-medium cursor-not-allowed"
                >
                  Coming Soon
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-medium text-black dark:text-white mb-4">
            Start building today
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for templates. Our component library has everything
            you need to build these designs and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/docs/components/accordion">
              <Button
                size="lg"
                className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium border-0"
              >
                Explore Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/tools">
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-2.5 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium bg-white/50 dark:bg-black/50 backdrop-blur-sm"
              >
                <Wrench className="mr-2 h-4 w-4" />
                Browse Tools
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
