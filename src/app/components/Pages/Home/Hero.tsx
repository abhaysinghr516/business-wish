"use client";
import { ArrowRight, Puzzle, Zap, Code } from "lucide-react";
import Link from "next/link";
import { ButtonGroups } from "@/components/Button";
import { BadgeGroup } from "@/components/Badge";
import { TabswithUnderline } from "@/components/Tabs";
import { AvatarSizes } from "@/components/Avatar";

const Hero = () => {
  return (
    <div className="flex flex-col p-4 sm:p-8 mt-8">
      {" "}
      {/* Added mt-8 here */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Left side: Content */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:mr-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-purple-500">
            Business Wish
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-4 text-gray-700">
            The ultimate Tailwind CSS component library for business
            applications
          </p>
          <ul className="space-y-4">
            <li className="flex items-start sm:items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-sm md:text-base">
                Rapid development with pre-built components
              </span>
            </li>
            <li className="flex items-start sm:items-center gap-2">
              <Puzzle className="w-6 h-6 text-primary" />
              <span className="text-sm md:text-base">
                Easily customizable to match your brand
              </span>
            </li>
            <li className="flex items-start sm:items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              <span className="text-sm md:text-base">
                Built on Tailwind CSS for ultimate flexibility
              </span>
            </li>
          </ul>
          <Link href="/docs/components/404">
            <button className="bg-purple-600 text-white py-3 px-8 rounded-full transition duration-300 flex items-center hover:bg-purple-700 mt-4">
              {" "}
              {/* Added mt-4 here */}
              Explore Components
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2 group-hover:-rotate-45" />
            </button>
          </Link>
        </div>

        {/* Right side: UI Components Preview */}
        <div className="lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg space-y-8">
          {/* Divider */}
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-gray-600">Components</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Button Group */}
          <ButtonGroups />

          {/* Tabs */}
          <TabswithUnderline />

          {/* Avatar */}
          <AvatarSizes />

          {/* Badge */}
          <BadgeGroup />
        </div>
      </div>
    </div>
  );
};

export default Hero;
