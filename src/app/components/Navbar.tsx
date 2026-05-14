"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ComponentIcon, Sparkles } from "lucide-react";
import Image from "next/image";
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

const navLinks = [
  { href: "/docs/components/accordion", label: "Components", matchPath: "/docs/components" },
  { href: "/docs/motion/text-reveal", label: "Motion", matchPath: "/docs/motion" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (matchPath: string) => pathname.startsWith(matchPath);

  return (
    <nav className="bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl border-b border-stone-200 dark:border-stone-800 py-3 px-4 sm:px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0"
        >
          <Image
            src="/bw-logo.svg"
            alt="Business Wish"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span className="text-sm font-semibold tracking-tight text-stone-900 dark:text-white">
            Business Wish
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.matchPath)
                  ? "text-stone-900 dark:text-white"
                  : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <div className="max-w-[240px]">
            <Search />
          </div>
          <div className="w-px h-5 bg-stone-200 dark:bg-stone-800" />
          <GitHubStarButton repo="abhaysinghr516/business-wish" />
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <Search />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-lg border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-[280px] border-l border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950">
              <SheetHeader className="px-5 py-4 border-b border-stone-200 dark:border-stone-800">
                <DialogTitle className="text-left text-sm font-semibold text-stone-900 dark:text-white">
                  Menu
                </DialogTitle>
              </SheetHeader>
              <ScrollArea className="h-full">
                <div className="px-4 py-5 space-y-6">
                  <nav className="space-y-1">
                    <SheetClose asChild>
                      <Link
                        href="/docs/components/accordion"
                        className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                          isActive("/docs/components")
                            ? "bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-white"
                            : "text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-900"
                        }`}
                      >
                        <ComponentIcon className="h-4 w-4" />
                        Components
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/docs/motion/text-reveal"
                        className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                          isActive("/docs/motion")
                            ? "bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-white"
                            : "text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-900"
                        }`}
                      >
                        <Sparkles className="h-4 w-4" />
                        Motion
                      </Link>
                    </SheetClose>
                  </nav>

                  <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
                    <div className="flex items-center gap-3 px-1">
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
