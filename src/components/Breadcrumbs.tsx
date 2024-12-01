"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, ChevronDown, Home } from "lucide-react";

export const BasicBreadcrumb: React.FC = () => {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Laptops", href: "#" },
  ];

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="list-none p-0 inline-flex items-center bg-gray-50/50 dark:bg-gray-900/50 px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-800/50">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index === 0 && (
              <Home className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
            )}
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400 dark:text-gray-500" />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export const DropdownBreadcrumb: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
    { label: "Web Development", href: "#" },
    { label: "React", href: "#" },
  ];

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="list-none p-0 inline-flex items-center bg-gray-50/50 dark:bg-gray-900/50 px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-800/50">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200 flex items-center"
          >
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
        </li>
        <li className="flex items-center ml-2">
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400 dark:text-gray-500" />
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span>•••</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="absolute z-10 mt-2 w-48 rounded-xl shadow-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-200">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {breadcrumbs.slice(1, -1).map((breadcrumb) => (
                    <Link
                      key={breadcrumb.href}
                      href={breadcrumb.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100/50 hover:text-blue-500 dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:text-blue-400 transition-all duration-200"
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                    >
                      {breadcrumb.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </li>
        <li className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400 dark:text-gray-500" />
          <span className="text-gray-800 dark:text-gray-200 font-medium">
            {breadcrumbs[breadcrumbs.length - 1].label}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export const BreadcrumbwithSeparators: React.FC = () => {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Electronics", href: "#" },
    { label: "Smartphones", href: "#" },
    { label: "iPhone 16", href: "#" },
  ];

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="list-none p-0 inline-flex items-center bg-gray-50/50 dark:bg-gray-900/50 px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-800/50">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center group">
            {index === 0 && (
              <Home className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
            )}
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400 dark:text-gray-500 transform transition-transform group-hover:translate-x-0.5" />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-800 dark:text-gray-200 font-medium px-2 py-1 rounded-md bg-gray-100/50 dark:bg-gray-800/50">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
