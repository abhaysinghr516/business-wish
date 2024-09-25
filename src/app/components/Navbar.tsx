"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-950 border-b border-gray-800 py-4 px-4 md:px-20 sticky top-0 z-50 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="ml-2 text-xl font-bold text-white">
          <img src="/logo2.png" alt="logo" className="h-5" />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/docs/components/accordion"
            className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-gray-900 after:transition-all after:duration-300 hover:text-gray-900 hover:after:scale-x-100"
          >
            Components
          </Link>
          <Link
            href="/templates"
            className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-gray-900 after:transition-all after:duration-300 hover:text-gray-900 hover:after:scale-x-100"
          >
            Templates
          </Link>
          <Link href="https://github.com/abhaysinghr516/business-wish">
            <FiGithub className="h-4 w-4" />
          </Link>
          <Link href="https://x.com/abhaysinghr1">
            <FaXTwitter className="h-4 w-4" />
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden flex">
              <FaBars className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[300px] sm:w-[400px] flex flex-col gap-4 px-0"
            side="left"
          >
            <DialogTitle className="sr-only">Menu</DialogTitle>
            <SheetHeader>
              <SheetClose className="px-5" asChild>
                <Link href="/" className="ml-2 text-xl font-bold text-white">
                  <img src="/logo2.png" alt="logo" className="h-5" />
                </Link>
              </SheetClose>
            </SheetHeader>
            <ScrollArea className="flex-grow">
              <div className="flex flex-col gap-4 p-6">
                <Link href="/docs/components/accordion" className="text-sm">
                  Components
                </Link>
                <Link href="/templates" className="text-sm">
                  Templates
                </Link>
                <Link
                  href="https://github.com/abhaysinghr516/business-wish"
                  className="text-sm"
                >
                  GitHub
                </Link>
                <Link href="https://x.com/abhaysinghr1" className="text-sm">
                  Twitter
                </Link>
              </div>
              <div className="px-6">
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
