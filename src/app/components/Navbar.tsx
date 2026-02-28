"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const navLinks = [
  { href: "/docs/components/accordion", label: "Components", matchPath: "/docs/components" },
  { href: "/templates", label: "Templates", matchPath: "/templates" },
  { href: "/docs/motion/text-reveal", label: "Motion", matchPath: "/docs/motion" },
  { href: "/tools", label: "Tools", matchPath: "/tools" },
];

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (matchPath: string) => pathname.startsWith(matchPath);

  return (
    <nav className="bg-white/70 dark:bg-[#050505]/70 backdrop-blur-2xl border-b border-stone-200/50 dark:border-white/[0.08] py-4 px-4 sm:px-6 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-medium tracking-tight text-stone-900 dark:text-white hover:opacity-80 transition-opacity flex-shrink-0"
        >
          Business Wish
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-center max-w-4xl">
          <div className="flex-1 max-w-[320px] mr-4 transition-all duration-300">
            <Search />
          </div>
          
          <div className="flex items-center space-x-1.5 bg-stone-100/60 dark:bg-white/[0.03] p-1.5 rounded-full border border-stone-200/60 dark:border-white/5 transition-all">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive(link.matchPath)
                    ? "bg-white dark:bg-white/10 text-stone-900 dark:text-white shadow-sm"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 hover:shadow-sm"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <GitHubStarButton repo="abhaysinghr516/business-wish" />
          <ThemeToggle />
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden flex items-center gap-3">
          <Search />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white focus:bg-stone-100 dark:focus:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200 rounded-full h-9 w-9 p-0 flex items-center justify-center border border-transparent dark:hover:border-white/10"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-[300px] border-l border-stone-200 dark:border-white/10 bg-white/95 dark:bg-[#050505]/95 backdrop-blur-2xl">
              <SheetHeader className="px-6 py-5 border-b border-stone-100 dark:border-white/5 bg-transparent">
                <DialogTitle className="text-left font-medium tracking-tight text-stone-900 dark:text-white">
                  Menu
                </DialogTitle>
              </SheetHeader>
              <ScrollArea className="h-full">
                <div className="px-5 py-6 space-y-8">

                  <nav className="space-y-1.5">
                    <p className="text-[10px] font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-4 px-1">
                      Explore
                    </p>
                    <SheetClose asChild>
                      <Link
                        href="/docs/components/accordion"
                        className={`flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                          isActive("/docs/components")
                            ? "bg-stone-100 dark:bg-white/5 text-stone-900 dark:text-white"
                            : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/5"
                        }`}
                      >
                        <ComponentIcon className="h-4 w-4 text-stone-400 group-hover:text-blue-500 transition-colors" />
                        Components
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/templates"
                        className={`flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                          isActive("/templates")
                            ? "bg-stone-100 dark:bg-white/5 text-stone-900 dark:text-white"
                            : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/5"
                        }`}
                      >
                        <BookOpenIcon className="h-4 w-4 text-stone-400 group-hover:text-emerald-500 transition-colors" />
                        Templates
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/tools"
                        className={`flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                          isActive("/tools")
                            ? "bg-stone-100 dark:bg-white/5 text-stone-900 dark:text-white"
                            : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/5"
                        }`}
                      >
                        <WrenchIcon className="h-4 w-4 text-stone-400 group-hover:text-amber-500 transition-colors" />
                        Tools
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/docs/motion/text-reveal"
                        className={`flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                          isActive("/docs/motion")
                            ? "bg-stone-100 dark:bg-white/5 text-stone-900 dark:text-white"
                            : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/5"
                        }`}
                      >
                        <Sparkles className="h-4 w-4 text-stone-400 group-hover:text-purple-500 transition-colors" />
                        Motion
                      </Link>
                    </SheetClose>
                  </nav>

                  <div className="pt-6 border-t border-stone-100 dark:border-white/5">
                    <p className="text-[10px] font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-4 px-1">
                      Actions
                    </p>
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
