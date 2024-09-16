"use client";
import {
  ArrowRight,
  HomeIcon,
  Search,
  Bell,
  User,
  ChevronDownIcon,
  Puzzle,
  Zap,
  Code,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ButtonGroup } from "@/components/Button";
import { BadgeGroup } from "@/components/Badge";

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggleState, setToggleState] = useState(false);

  const navItems = [
    { icon: HomeIcon, label: "Home" },
    { icon: Search, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: User, label: "Profile" },
  ];

  return (
    <div className="min-h-screen flex items-center p-4 sm:p-8 sm:px-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left side: Content */}
        <div className="lg:w-1/2 sm:mr-5 mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-purple-500">
            Business Wish
          </h1>
          <p className="text-xl sm:text-2xl mb-4 text-gray-700">
            The ultimate Tailwind CSS component library for business
            applications
          </p>
          <ul className="grid gap-2 py-4">
            <li className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base">
                Rapid development with pre-built components
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Puzzle className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base">
                Easily customizable to match your brand
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base">
                Built on Tailwind CSS for ultimate flexibility
              </span>
            </li>
          </ul>
          <Link href="/docs/components/404" className="group">
            <button className="bg-purple-600 text-white py-3 px-8 rounded-full transition duration-300 flex items-center hover:bg-purple-700">
              Explore Components
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2 group-hover:-rotate-45" />
            </button>
          </Link>
        </div>

        {/* Right side: UI Components Preview */}
        <div className="lg:w-1/2 space-y-8 bg-gray-100 p-6 rounded-lg shadow-lg">
          {/* Divider */}
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-gray-600">Components</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Button Group */}
          <ButtonGroup />

          {/* Tabs */}
          <div className="flex border-b border-gray-700">
            {["Overview", "Installation", "Usage"].map((tab, index) => (
              <button
                key={tab}
                className={`py-2 px-4 ${
                  activeTab === index
                    ? "border-b-2 border-purple-500 text-purple-500"
                    : ""
                } hover:text-purple-400 transition duration-300`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center space-x-4">
            <span>Toggle Switch</span>
            <button
              className={`w-14 h-7 flex items-center rounded-full p-1 ${
                toggleState ? "bg-purple-600" : "bg-gray-700"
              }`}
              onClick={() => setToggleState(!toggleState)}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
                  toggleState ? "translate-x-7" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Bottom Navigation */}
          <BadgeGroup />
        </div>
      </div>
    </div>
  );
};

export default Hero;
