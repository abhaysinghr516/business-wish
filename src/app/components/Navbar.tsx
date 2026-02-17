"use client";

import React from "react";
import Link from "next/link";
import { Menu, ComponentIcon, BookOpenIcon, WrenchIcon, Sparkles } from "lucide-react";
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
    <nav className="bg-white/90 dark:bg-stone-950/90 backdrop-blur-xl border-b border-stone-200/50 dark:border-stone-800/50 py-3 px-4 sm:px-6 sticky top-0 z-50 shadow-sm dark:shadow-stone-950/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-semibold text-stone-900 dark:text-stone-100 hover:text-stone-700 dark:hover:text-stone-300 transition-colors flex-shrink-0"
        >
          Business Wish
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-center max-w-4xl">
          <div className="flex-1 max-w-md">
            <Search />
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/docs/components/accordion"
              className="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all duration-200 hover:scale-105 relative group"
            >
              Components
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/templates"
              className="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all duration-200 hover:scale-105 relative group"
            >
              Templates
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/docs/motion/text-reveal"
              className="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all duration-200 hover:scale-105 relative group"
            >
              Motion
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/tools"
              className="text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-all duration-200 hover:scale-105 relative group"
            >
              Tools
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <GitHubStarButton repo="abhaysinghr516/business-wish" />
          <ThemeToggle />
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 rounded-lg"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-80">
              <SheetHeader className="px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50">
                <DialogTitle className="text-left font-semibold text-stone-900 dark:text-stone-100">
                  Navigation
                </DialogTitle>
              </SheetHeader>
              <ScrollArea className="h-full">
                <div className="px-6 py-6 space-y-8">
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                      Search
                    </p>
                    <Search hideTrigger triggerOnly />
                  </div>

                  <nav className="space-y-1">
                    <p className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-3">
                      Navigation
                    </p>
                    <SheetClose asChild>
                      <Link
                        href="/docs/components/accordion"
                        className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-all duration-200 group"
                      >
                        <ComponentIcon className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                        Components
                        <span className="ml-auto text-xs text-stone-400 dark:text-stone-500 group-hover:text-stone-600 dark:group-hover:text-stone-400">
                          UI Library
                        </span>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/templates"
                        className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-all duration-200 group"
                      >
                        <BookOpenIcon className="h-4 w-4 text-green-500 dark:text-green-400" />
                        Templates
                        <span className="ml-auto text-xs text-stone-400 dark:text-stone-500 group-hover:text-stone-600 dark:group-hover:text-stone-400">
                          Pages
                        </span>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/tools"
                        className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-all duration-200 group"
                      >
                        <WrenchIcon className="h-4 w-4 text-orange-500 dark:text-orange-400" />
                        Tools
                        <span className="ml-auto text-xs text-stone-400 dark:text-stone-500 group-hover:text-stone-600 dark:group-hover:text-stone-400">
                          Utilities
                        </span>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/docs/motion/text-reveal"
                        className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-all duration-200 group"
                      >
                        <Sparkles className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                        Motion
                        <span className="ml-auto text-xs text-stone-400 dark:text-stone-500 group-hover:text-stone-600 dark:group-hover:text-stone-400">
                          Animations
                        </span>
                      </Link>
                    </SheetClose>
                  </nav>

                  <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
                    <p className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-3">
                      Actions
                    </p>
                    <div className="flex items-center gap-3">
                      <GitHubStarButton repo="abhaysinghr516/business-wish" />
                      <ThemeToggle />
                    </div>
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
