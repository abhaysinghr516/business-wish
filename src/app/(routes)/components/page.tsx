import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import React from "react";
import Link from "next/link";
import { componentsData } from "../../../data/componentsData";
import Footer from "@/app/components/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Explore ${componentsData.length} Tailwind CSS Components on Business Wish`,
  description: `Discover and utilize the diverse range of Tailwind CSS components available on Business Wish. Perfect for developers looking to enhance their web projects.`,
  keywords: `Tailwind CSS, Components, Business Wish, Web Development, UI Components`,
  openGraph: {
    title: `Explore ${componentsData.length} Tailwind CSS Components on Business Wish`,
    description: `Discover and utilize the diverse range of Tailwind CSS components available on Business Wish. Perfect for developers looking to enhance their web projects.`,
    type: `website`,
    url: `https://business-wish.vercel.app/components`,
    images: [
      {
        url: `https://business-wish.vercel.app/components-page.png`,
        width: 800,
        height: 600,
        alt: `Business Wish Tailwind CSS Components`,
      },
    ],
  },
};

const Page = () => {
  return (
    <>
      <main className="text-white flex  flex-col items-center justify-center flex-1 px-6 sm:px-20 text-center pb-10">
        <h2 className="py-10 text-4xl font-semibold bg-gradient-to-br from-gray-500 via-gray-600 to-gray-800 bg-clip-text text-transparent">
          Tailwind CSS Components
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mt-6 w-full">
          {componentsData.map((component, index) => (
            <Link
              key={index}
              href={component.href}
              className="p-6 text-left border border-gray-800 group rounded-xl transform transition-transform hover:scale-105 hover:shadow-xl hover:translate-y-1 "
            >
              <div className="flex gap-x-2 text-purple-400 items-center">
                <h3 className="text-xl font-bold">{component.title}</h3>
                <span className="inline-block group-hover:translate-x-1 group-hover:-rotate-45 transition-transform">
                  <ArrowRight />
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                <span className="font-semibold">{component.components}</span>{" "}
                Components
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Page;
