"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronRight,
  Package,
  FileText,
  Layers,
  Palette,
  Sparkles,
  Wrench,
} from "lucide-react";
import { ROUTES } from "@/app/lib/routes-config";
import { cn } from "@/lib/utils";

interface DocsSidebarProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function DocsSidebar({
  isMobile = false,
  onItemClick,
}: DocsSidebarProps) {
  const pathname = usePathname();
  const [searchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    components: true,
    pages: true,
    motion: true,
    tools: true,
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const getSectionIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    const className = "h-4 w-4 mr-2 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors";
    if (lowerTitle.includes("component"))
      return <Package className={className} />;
    if (lowerTitle.includes("motion"))
      return <Sparkles className={className} />;
    if (lowerTitle.includes("page")) return <FileText className={className} />;
    if (lowerTitle.includes("template")) return <Palette className={className} />;
    if (lowerTitle.includes("tool")) return <Wrench className={className} />;
    return <Layers className={className} />;
  };

  const filteredRoutes = ROUTES.map((section) => ({
    ...section,
    items:
      section.items?.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) || [],
  })).filter(
    (section) =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (section.items && section.items.length > 0)
  );

  return (
    <aside
      className={cn(
        "border-r border-neutral-200/50 dark:border-white/[0.05] bg-neutral-50/50 dark:bg-transparent",
        isMobile
          ? "w-full h-full"
          : "hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 xl:w-72"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Navigation */}
        <ScrollArea className="flex-1 px-4 py-6">
          <nav className="space-y-6">
            {filteredRoutes.map((section) => {
              const sectionId = section.title
                .toLowerCase()
                .replace(/\s+/g, "-");
              const isExpanded = expandedSections[sectionId];

              return (
                <div key={section.title} className="space-y-2">
                  {/* Section Header */}
                  <Button
                    variant="ghost"
                    className="w-full flex items-center justify-between h-8 px-2 text-[11px] font-semibold tracking-widest uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors hover:bg-transparent group"
                    onClick={() => toggleSection(sectionId)}
                  >
                    <div className="flex items-center">
                      {getSectionIcon(section.title)}
                      <span>{section.title}</span>
                      <Badge
                        variant="secondary"
                        className="ml-2 bg-neutral-200/50 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 text-[9px] px-1.5 py-0 rounded-md border-none font-medium h-4"
                      >
                        {section.items?.length || 0}
                      </Badge>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                    ) : (
                      <ChevronRight className="h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Button>

                  {/* Section Items */}
                  {isExpanded && section.items && (
                    <div className="space-y-0.5 ml-3 pl-3 border-l border-neutral-200/50 dark:border-white/5">
                      {section.items.map((item) => {
                        const href = `/docs${section.href}${item.href}`;
                        const isActive = pathname === href;

                        return (
                          <Link
                            key={item.href}
                            href={href}
                            onClick={onItemClick}
                            className={cn(
                              "flex items-center px-3 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 group border border-transparent",
                              isActive
                                ? "bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white"
                                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/50 dark:hover:bg-white/5"
                            )}
                          >
                            <span className="flex-1 truncate relative">
                              {isActive && (
                                <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
                              )}
                              {item.title}
                            </span>
                            {item.title.toLowerCase().includes("new") && (
                              <Badge
                                className="text-[9px] px-1.5 py-0 h-4 bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 border-none font-semibold rounded-md uppercase tracking-wider ml-2"
                              >
                                New
                              </Badge>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </ScrollArea>

        {/* Sidebar Footer */}
        <div className="px-6 py-4 border-t border-neutral-200/50 dark:border-white/[0.05]">
          <div className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
            v2.1.0
          </div>
        </div>
      </div>
    </aside>
  );
}
