import React from "react";
import { ChevronRight } from "lucide-react";

const heroData = {
  centerContent: {
    title: "Elevate Your UI with Simplicity",
    description:
      "Our UI components library embraces minimalism and flexibility, allowing you to create stunning interfaces with ease.",
    ctaText: "Explore Components",
    stats: [
      { label: "Components", value: "100+" },
      { label: "Downloads", value: "50K+" },
      { label: "GitHub Stars", value: "5K+" },
    ],
  },
  sideImage: {
    title: "Powerful UI Components at Your Fingertips",
    description:
      "From sleek buttons to complex data visualizations, our library offers a comprehensive suite of customizable components.",
    ctaText: "View Documentation",
    features: [
      "Responsive by default",
      "Dark mode support",
      "Accessibility compliant",
      "Easy customization",
    ],
  },
};

export const CenterContentHeroSection: React.FC = () => (
  <section className="bg-white dark:bg-gray-950 text-black dark:text-white min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-100 dark:bg-blue-900 rounded-full filter blur-3xl opacity-15 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-100 dark:bg-purple-900 rounded-full filter blur-3xl opacity-15 translate-x-1/2 translate-y-1/2"></div>

    <div className="max-w-4xl w-full text-center relative z-10">
      <h1 className="text-6xl sm:text-7xl font-semibold mb-8 leading-[1.1] tracking-tighter text-gray-800 dark:text-white">
        {heroData.centerContent.title}
      </h1>
      <p className="text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-light tracking-tight">
        {heroData.centerContent.description}
      </p>
      <a
        href="#"
        className="inline-flex items-center text-xl font-medium text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-200 transition-colors duration-300 ease-in-out group"
      >
        {heroData.centerContent.ctaText}
        <ChevronRight
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          size={24}
        />
      </a>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12">
        {heroData.centerContent.stats.map((stat, index) => (
          <div
            key={index}
            className="text-center bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-md"
          >
            <div className="text-5xl font-semibold mb-3 text-gray-800 dark:text-white">
              {stat.value}
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-base tracking-wide font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
