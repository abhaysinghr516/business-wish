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

  const getIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("component")) return Package;
    if (lowerTitle.includes("motion")) return Sparkles;
    if (lowerTitle.includes("page")) return FileText;
    if (lowerTitle.includes("template")) return Palette;
    if (lowerTitle.includes("tool")) return Wrench;
    return Layers;
  };

  const getSectionIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("component"))
      return <Package className="h-4 w-4" />;
    if (lowerTitle.includes("motion"))
      return <Sparkles className="h-4 w-4" />;
    if (lowerTitle.includes("page")) return <FileText className="h-4 w-4" />;
    if (lowerTitle.includes("template")) return <Palette className="h-4 w-4" />;
    if (lowerTitle.includes("tool")) return <Wrench className="h-4 w-4" />;
    return <Layers className="h-4 w-4" />;
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
        "border-r border-border/50 bg-muted/20",
        isMobile
          ? "w-full h-full"
          : "hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 xl:w-72"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Navigation */}
        <ScrollArea className="flex-1 px-4 py-4">
          <nav className="space-y-2">
            {filteredRoutes.map((section) => {
              const sectionId = section.title
                .toLowerCase()
                .replace(/\s+/g, "-");
              const isExpanded = expandedSections[sectionId];

              return (
                <div key={section.title} className="space-y-1">
                  {/* Section Header */}
                  <Button
                    variant="ghost"
                    className="w-full justify-between h-9 px-3 font-medium text-sm"
                    onClick={() => toggleSection(sectionId)}
                  >
                    <div className="flex items-center space-x-2">
                      {getSectionIcon(section.title)}
                      <span>{section.title}</span>
                      <Badge
                        variant="default"
                        className="text-xs px-1.5 py-0.5 h-5"
                      >
                        {section.items?.length || 0}
                      </Badge>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>

                  {/* Section Items */}
                  {isExpanded && section.items && (
                    <div className="ml-6 space-y-1">
                      {section.items.map((item) => {
                        const href = `/docs${section.href}${item.href}`;
                        const isActive = pathname === href;

                        return (
                          <Link
                            key={item.href}
                            href={href}
                            onClick={onItemClick}
                            className={cn(
                              "flex items-center space-x-2 px-3 py-2 text-sm rounded-md transition-all duration-200 group",
                              isActive
                                ? "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}
                          >
                            <span className="flex-1">{item.title}</span>
                            {item.title.toLowerCase().includes("new") && (
                              <Badge
                                variant="secondary"
                                className="text-xs px-1.5 py-0.5 h-4 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
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
        <div className="p-4 border-t border-border/50 bg-muted/10">
          <div className="space-y-3">
            <div className="text-xs text-muted-foreground">
              <p>v2.1.0</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
