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

const templates = [
  {
    id: "landing-page",
    title: "Landing Page",
    description:
      "Convert visitors with high-impact hero sections and compelling calls-to-action",
    icon: Layout,
    status: "Coming Soon",
    components: ["Hero", "Features", "CTA", "Footer"],
    color: "bg-blue-500",
  },
  {
    id: "e-commerce",
    title: "E-commerce Store",
    description:
      "Drive sales with optimized product displays and seamless checkout flows",
    icon: ShoppingBag,
    status: "Coming Soon",
    components: ["Product Cards", "Shopping Cart", "Checkout", "Navigation"],
    color: "bg-green-500",
  },
  {
    id: "blog",
    title: "Blog Template",
    description:
      "Engage readers with clean typography and intuitive content organization",
    icon: FileText,
    status: "Coming Soon",
    components: ["Blog Cards", "Pagination", "Article Layout", "Sidebar"],
    color: "bg-purple-500",
  },
  {
    id: "dashboard",
    title: "Admin Dashboard",
    description:
      "Monitor performance with data-rich interfaces and actionable insights",
    icon: BarChart3,
    status: "Coming Soon",
    components: ["Data Tables", "Charts", "Sidebar", "Analytics Cards"],
    color: "bg-orange-500",
  },
  {
    id: "portfolio",
    title: "Portfolio Site",
    description:
      "Showcase your work with stunning galleries and professional layouts",
    icon: Users,
    status: "Coming Soon",
    components: [
      "Profile Cards",
      "Project Gallery",
      "Contact Form",
      "Testimonials",
    ],
    color: "bg-pink-500",
  },
  {
    id: "saas",
    title: "SaaS Application",
    description:
      "Scale your business with enterprise-grade interfaces and user management",
    icon: Settings,
    status: "Coming Soon",
    components: ["Settings Pages", "User Management", "Billing", "Navigation"],
    color: "bg-indigo-500",
  },
];

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-black dark:text-white mb-6 leading-tight">
            Templates.
            <br />
            <span className="font-medium">Soon.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Complete website templates built with our components.
            Production-ready designs that ship fast.
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-black dark:text-white mb-4">
              What's coming
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Six carefully crafted templates for every use case
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => {
              const IconComponent = template.icon;
              return (
                <div
                  key={template.id}
                  className="group bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="h-12 w-12 text-gray-400 dark:text-gray-600" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-medium px-3 py-1 rounded-full">
                        {template.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-medium text-black dark:text-white mb-2">
                      {template.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {template.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                        Includes:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {template.components.map((component) => (
                          <span
                            key={component}
                            className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                          >
                            {component}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      disabled
                      className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 rounded-lg text-sm font-medium cursor-not-allowed"
                    >
                      Coming Soon
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white dark:bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-black dark:text-white mb-6">
            Start building now
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Don't wait for templates. Our component library has everything you
            need to build these designs yourself.
          </p>
          <Link href="/docs/components/accordion">
            <button className="px-8 py-4 bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black rounded-lg text-base font-medium inline-flex items-center">
              Browse Components
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
