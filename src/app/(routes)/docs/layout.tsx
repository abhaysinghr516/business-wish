"use client";

import { useState } from "react";
import { DocsSidebar } from "@/app/components/docs-sidebar";
import Footer from "@/app/components/Footer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Mobile Menu Button */}
      <div className="lg:hidden sticky top-0 z-50 bg-background border-b border-border/40 px-4 py-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center space-x-2"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
          <span>Menu</span>
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Documentation Layout */}
      <div className="flex flex-1 relative">
        {/* Desktop Sidebar */}
        <DocsSidebar />

        {/* Mobile Sidebar */}
        <div
          className={cn(
            "lg:hidden fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-background border-r border-border/50 transform transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="pt-16">
            <DocsSidebar
              isMobile={true}
              onItemClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 lg:ml-64 xl:ml-72">
          <div className="min-h-screen flex flex-col">
            <div className="flex-1">{children}</div>
            {/* Docs Footer */}
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
