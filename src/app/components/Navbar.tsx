"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Github, Twitter } from "lucide-react";
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
import DocsMenu from "./docs-menu";
import Search from "./search";
import ThemeToggle from "./theme-switch";
import GitHubStarButton from "./github-star-button";

const Navbar = () => {
  return (
    <nav className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-3 sm:py-4 px-4 sm:px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-lg sm:text-xl font-medium text-black dark:text-white"
        >
          Business Wish
        </Link>

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
          <div className="flex items-center space-x-4">
            <GitHubStarButton repo="abhaysinghr516/business-wish" />
            <Link
              href="https://x.com/abhaysinghr1"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile/Tablet Search and Theme Toggle */}
        <div className="flex lg:hidden items-center space-x-3">
          <Search />
          <ThemeToggle />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[300px] sm:w-[400px] flex flex-col gap-4 px-0"
            side="left"
          >
            <DialogTitle className="sr-only">Menu</DialogTitle>
            <SheetHeader>
              <SheetClose className="px-5" asChild>
                <Link
                  href="/"
                  className="text-xl font-medium text-black dark:text-white"
                >
                  Business Wish
                </Link>
              </SheetClose>
            </SheetHeader>
            <ScrollArea className="flex-grow">
              <div className="px-5 mb-4">
                <Search />
              </div>
              <div className="flex flex-col gap-4 px-5">
                <Link href="/docs/components/accordion" className="text-sm">
                  Components
                </Link>
                <Link href="/templates" className="text-sm">
                  Templates
                </Link>
                <div className="flex items-center gap-4 pt-4">
                  <GitHubStarButton repo="abhaysinghr516/business-wish" />
                  <Link href="https://x.com/abhaysinghr1" className="text-sm">
                    Twitter
                  </Link>
                  <ThemeToggle />
                </div>
              </div>
              <div className="px-5 mt-6">
                <DocsMenu isSheet />
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
