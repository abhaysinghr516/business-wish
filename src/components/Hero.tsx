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
  <section className="bg-white dark:bg-gray-950 text-black dark:text-white min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-200 dark:bg-blue-800 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-200 dark:bg-purple-800 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

    <div className="max-w-3xl w-full text-center relative z-10">
      <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight tracking-tight">
        {heroData.centerContent.title}
      </h1>
      <p className="text-xl mb-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {heroData.centerContent.description}
      </p>
      <a
        href="#"
        className="inline-flex items-center text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
      >
        {heroData.centerContent.ctaText}
        <ChevronRight className="ml-1" size={20} />
      </a>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {heroData.centerContent.stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SideImageHero: React.FC = () => (
  <section className="bg-gray-100 dark:bg-gray-950 text-black dark:text-white min-h-screen flex items-center px-4 py-16">
    <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2 lg:pr-8">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
          {heroData.sideImage.title}
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
          {heroData.sideImage.description}
        </p>
        <ul className="mb-10 space-y-4">
          {heroData.sideImage.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
              <span className="text-lg">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="inline-flex items-center bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
        >
          {heroData.sideImage.ctaText}
          <ChevronRight className="ml-2" size={20} />
        </a>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="relative">
          <img
            src="/components-page.png"
            alt="UI Components Preview"
            className="rounded-2xl shadow-2xl w-full h-auto"
          />
          <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 text-black dark:text-white py-2 px-4 rounded-full shadow-lg text-sm font-medium">
            New in 2024
          </div>
        </div>
      </div>
    </div>
  </section>
);
