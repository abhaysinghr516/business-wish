import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import React from "react";
import Link from "next/link";
import { ComponentData, componentsData } from "../../../data/componentsData";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: `Business Wish || Tailwind CSS ${componentsData.length} Components`,
  description: `Explore the ${componentsData.map(
    (component, index) => component.components
  )} components of Tailwind CSS || Business Wish `,
};

const page = () => {
  return (
    <>
      <Navbar />
      <p className=" text-2xl bg-gradient-to-tl from-purple-200 to-blue-200  w-full h-28 flex justify-center items-center">
        Get started by exploring the components
      </p>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center mb-10">
        <h2 className=" py-10 text-center text-4xl font-semibold  text-purple-600">
          Components
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mt-6">
          {componentsData.map((component, index) => (
            <Link
              key={index}
              href={component.href}
              className="p-6 text-left border border-black group rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-xl text-blue-600 font-bold">
                {component.title}{" "}
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </h3>
              <p className="mt-4 text-sm font-medium">
                <span className="font-semibold">{component.components} </span>
                Components
              </p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
