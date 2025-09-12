"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";

import Search from "./search";
import ThemeToggle from "./theme-switch";
import GitHubStarButton from "./github-star-button";

const Navbar = () => {
  return (
    <nav className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-3 sm:py-4 px-4 sm:px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-medium text-black dark:text-white"
        >
          Business Wish
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Search />
          <Link
            href="/docs/components/accordion"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Components
          </Link>
          <Link
            href="/templates"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Templates
          </Link>
          <Link
            href="/tools"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Tools
          </Link>
          <div className="flex items-center space-x-4">
            <GitHubStarButton repo="abhaysinghr516/business-wish" />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <SheetHeader className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                <DialogTitle className="text-left font-semibold text-gray-900 dark:text-gray-100">
                  Menu
                </DialogTitle>
              </SheetHeader>
              <ScrollArea className="h-full">
                <div className="px-4 py-6 space-y-6">
                  <Search hideTrigger triggerOnly />
                  <nav className="flex flex-col space-y-4">
                    <SheetClose asChild>
                      <Link
                        href="/docs/components/accordion"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      >
                        Components
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/templates"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      >
                        Templates
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/tools"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      >
                        Tools
                      </Link>
                    </SheetClose>
                  </nav>
                  <div className="flex items-center space-x-4">
                    <GitHubStarButton repo="abhaysinghr516/business-wish" />
                    <ThemeToggle />
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
