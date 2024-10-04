"use client";
import Link from "next/link";
import { useState } from "react";

export const BasicBreadcrumb: React.FC = () => {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Laptops", href: "#" },
  ];

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="list-none p-0 inline-flex">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-700 dark:text-gray-300">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
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
      <ol className="list-none p-0 inline-flex items-center">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Home
          </Link>
        </li>
        <li className="flex items-center ml-2">
          <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center focus:outline-none"
            >
              ...
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {breadcrumbs.slice(1, -1).map((breadcrumb) => (
                    <Link
                      key={breadcrumb.href}
                      href={breadcrumb.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                      role="menuitem"
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
          <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
          <span className="text-gray-700 dark:text-gray-300">
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
    { label: "iPhone 12", href: "#" },
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm bg-gray-100 dark:bg-gray-800 p-3 rounded-lg"
    >
      <ol className="list-none p-0 inline-flex">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <svg
                className="w-3 h-3 mx-2 text-gray-400 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
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
