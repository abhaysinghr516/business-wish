"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-black py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url(/mesh-gradient.svg)] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Elevate Your Design with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Business Wish
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-8 max-w-[600px] mx-auto text-gray-600 dark:text-gray-300">
              Build stunning interfaces in minutes, not hours. Accelerate your
              project development with ready-to-use components.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs/components/accordion">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white"
                >
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://github.com/abhaysinghr516/business-wish"
                target="blank"
              >
                <Button size="lg" variant="outline">
                  View on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-20 bg-gray-50 dark:bg-black lg:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-0 relative z-20">
          <h2 className="text-2xl sm:text-3xl font-bold dark:text-white text-center mb-8 sm:mb-12">
            Why Choose Business Wish
          </h2>
          <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-green-100 dark:from-black dark:via-gray-950 dark:to-green-950 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-0">
            <div className="flex-1 pr-0 sm:pr-4 mb-4 sm:mb-0 text-center sm:text-left">
              <h2 className="dark:text-white text-xl font-bold mb-2">
                Easy Integration
              </h2>
              <p className="dark:text-gray-400">
                Seamlessly integrate our components into your existing projects.
              </p>
            </div>
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="10"
                  width="35"
                  height="35"
                  rx="5"
                  fill="#0f172a"
                  stroke="#22c55e"
                  strokeWidth="2"
                />
                <rect
                  x="15"
                  y="15"
                  width="25"
                  height="5"
                  rx="2.5"
                  fill="#22c55e"
                />
                <rect
                  x="15"
                  y="25"
                  width="25"
                  height="15"
                  rx="2"
                  fill="#1e293b"
                />
                <rect
                  x="55"
                  y="10"
                  width="35"
                  height="35"
                  rx="5"
                  fill="#0f172a"
                  stroke="#22c55e"
                  strokeWidth="2"
                />
                <circle cx="72.5" cy="27.5" r="12.5" fill="#22c55e" />
                <rect
                  x="10"
                  y="55"
                  width="80"
                  height="35"
                  rx="5"
                  fill="#0f172a"
                  stroke="#22c55e"
                  strokeWidth="2"
                />
                <rect
                  x="15"
                  y="60"
                  width="70"
                  height="5"
                  rx="2.5"
                  fill="#22c55e"
                />
                <rect
                  x="15"
                  y="70"
                  width="30"
                  height="15"
                  rx="2"
                  fill="#1e293b"
                />
                <rect
                  x="50"
                  y="70"
                  width="35"
                  height="15"
                  rx="2"
                  fill="#1e293b"
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-green-100 dark:from-black dark:via-gray-950 dark:to-green-950 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
              <div className="flex-1 pr-0 sm:pr-4 mb-4 sm:mb-0 text-center sm:text-left">
                <h2 className="dark:text-white text-xl font-bold mb-2">
                  Performance Optimized
                </h2>
                <p className="dark:text-gray-400 mb-4">
                  Lightweight and fast components to keep your app speedy.
                </p>
              </div>
              <div className="mt-4 flex justify-center">
                <svg
                  className="w-24 h-24 sm:w-32 sm:h-32"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="10"
                    y="40"
                    width="80"
                    height="50"
                    rx="5"
                    fill="#0f172a"
                    stroke="#22c55e"
                    strokeWidth="2"
                  />
                  <rect
                    x="15"
                    y="45"
                    width="70"
                    height="5"
                    rx="2.5"
                    fill="#22c55e"
                  />
                  <rect
                    x="15"
                    y="55"
                    width="30"
                    height="30"
                    rx="2"
                    fill="#1e293b"
                  />
                  <path
                    d="M20 80L25 70L30 75L35 65L40 80"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="50"
                    y="55"
                    width="30"
                    height="30"
                    rx="2"
                    fill="#1e293b"
                  />
                  <circle
                    cx="65"
                    cy="70"
                    r="10"
                    stroke="#22c55e"
                    strokeWidth="2"
                  />
                  <path
                    d="M65 65V70H70"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-green-100 dark:from-black dark:via-gray-950 dark:to-green-950 rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
              <div className="flex-1 pr-0 sm:pr-4 mb-4 sm:mb-0 text-center sm:text-left">
                <h2 className="dark:text-white text-xl font-bold mb-2">
                  Customizable
                </h2>
                <p className="dark:text-gray-400 mb-4">
                  Easily customize components to match your brand&apos;s look
                  and feel.
                </p>
              </div>
              <div className="mt-4 flex justify-center">
                <svg
                  className="w-24 h-24 sm:w-32 sm:h-32"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="10"
                    y="10"
                    width="80"
                    height="80"
                    rx="5"
                    fill="#0f172a"
                    stroke="#22c55e"
                    strokeWidth="2"
                  />
                  <circle cx="25" cy="25" r="10" fill="#22c55e" />
                  <circle
                    cx="75"
                    cy="25"
                    r="10"
                    fill="#1e293b"
                    stroke="#22c55e"
                    strokeWidth="2"
                  />
                  <rect
                    x="20"
                    y="45"
                    width="60"
                    height="10"
                    rx="5"
                    fill="#22c55e"
                  />
                  <rect
                    x="20"
                    y="60"
                    width="60"
                    height="10"
                    rx="5"
                    fill="#1e293b"
                    stroke="#22c55e"
                    strokeWidth="2"
                  />
                  <rect
                    x="20"
                    y="75"
                    width="30"
                    height="10"
                    rx="5"
                    fill="#22c55e"
                  />
                  <rect
                    x="55"
                    y="75"
                    width="25"
                    height="10"
                    rx="5"
                    fill="#1e293b"
                    stroke="#22c55e"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
