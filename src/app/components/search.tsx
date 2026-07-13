"use client";

import {
  CommandIcon,
  FileIcon,
  SearchIcon,
  XIcon,
  ComponentIcon,
  FolderIcon,
  SparklesIcon,
  WandSparklesIcon,
  LayoutTemplateIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { advanceSearch, cn } from "@/app/lib/utils";
import { useRouter } from "next/navigation";

type SearchProps = {
  hideTrigger?: boolean; // hide input trigger (useful for mobile sheet)
  triggerOnly?: boolean; // only render a trigger that opens search
};

export default function Search({
  hideTrigger = false,
  triggerOnly = false,
}: SearchProps) {
  const [searchedInput, setSearchedInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    setIsMac(navigator.userAgent.toUpperCase().includes("MAC"));

    if (triggerOnly) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((isMac ? event.metaKey : event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsOpen(true);
      }
      if (event.key === "Escape" && isOpen) {
        event.preventDefault();
        setIsOpen(false);
      }
    };

    const handleOpenSearch = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-search", handleOpenSearch as EventListener);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener(
        "open-search",
        handleOpenSearch as EventListener
      );
    };
  }, [isMac, isOpen, triggerOnly]);

  const filteredResults = useMemo(() => {
    const trimmedInput = searchedInput.trim();
    return advanceSearch(trimmedInput);
  }, [searchedInput]);

  const handleItemClick = useCallback(
    (href: string) => {
      setIsOpen(false);
      router.push(`/docs${href}`);
    },
    [router]
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchedInput, filteredResults]);

  useEffect(() => {
    if (itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "instant",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const maxIndex = filteredResults.length - 1;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prevIndex) =>
          prevIndex === maxIndex ? 0 : prevIndex + 1
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prevIndex) =>
          prevIndex === 0 ? maxIndex : prevIndex - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredResults.length > 0) {
          const selectedItem = filteredResults[selectedIndex];
          handleItemClick(selectedItem.href);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    },
    [filteredResults, handleItemClick, selectedIndex]
  );

  const getItemPresentation = useCallback((href: string, title: string) => {
    const path = href.toLowerCase();

    if (path.includes("/motion/"))
      return {
        Icon: WandSparklesIcon,
        label: "Motion",
        iconClass: "text-violet-600 dark:text-violet-300",
        iconBackground: "border-violet-100 bg-violet-50 dark:border-violet-500/20 dark:bg-violet-500/10",
      };
    if (path.includes("/components/"))
      return {
        Icon: ComponentIcon,
        label: "Component",
        iconClass: "text-stone-600 dark:text-stone-300",
        iconBackground: "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800",
      };
    if (path.includes("/pages/"))
      return {
        Icon: LayoutTemplateIcon,
        label: "Page",
        iconClass: "text-stone-600 dark:text-stone-300",
        iconBackground: "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800",
      };
    if (path.split("/").length <= 2)
      return {
        Icon: FolderIcon,
        label: "Section",
        iconClass: "text-stone-500 dark:text-stone-400",
        iconBackground: "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800",
      };
    if (
      title.toLowerCase().includes("new") ||
      title.toLowerCase().includes("latest")
    )
      return {
        Icon: SparklesIcon,
        label: "New",
        iconClass: "text-stone-600 dark:text-stone-300",
        iconBackground: "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800",
      };
    return {
      Icon: FileIcon,
      label: "Document",
      iconClass: "text-stone-500 dark:text-stone-400",
      iconBackground: "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-800",
    };
  }, []);

  // If only trigger is needed
  if (triggerOnly) {
    return (
      <div
        onClick={() => window.dispatchEvent(new Event("open-search"))}
        className="relative flex-1 max-w-md cursor-pointer group"
      >
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-all duration-200 group-hover:scale-110" />
        <Input
          className="md:w-full rounded-xl dark:bg-stone-900/90 bg-stone-50/90 border-stone-200 dark:border-stone-800 h-10 pl-10 pr-0 sm:pr-4 text-sm shadow-sm"
          placeholder="Search"
          type="search"
          readOnly
        />
        <div className="sm:flex hidden absolute top-1/2 -translate-y-1/2 right-2 text-xs font-medium font-mono items-center gap-0.5 dark:bg-stone-800/80 bg-stone-200/80 p-1.5 rounded-md">
          {isMac ? (
            <>
              <CommandIcon className="w-3 h-3" />
              <span>K</span>
            </>
          ) : (
            <>
              <span>Ctrl</span>
              <span>K</span>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          setSearchedInput("");
          setSelectedIndex(0);
        } else {
          setTimeout(() => inputRef.current?.focus(), 0);
        }
        setIsOpen(open);
      }}
    >
      {!hideTrigger && (
        <DialogTrigger asChild>
          <div className="relative flex-1 max-w-md cursor-pointer group">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-all duration-200 group-hover:scale-110" />
            <Input
              className="md:w-full rounded-xl dark:bg-stone-900/90 bg-stone-50/90 border-stone-200 dark:border-stone-800 h-10 pl-10 pr-0 sm:pr-4 text-sm shadow-sm"
              placeholder="Search"
              type="search"
              readOnly
            />
            <div className="sm:flex hidden absolute top-1/2 -translate-y-1/2 right-2 text-xs font-medium font-mono items-center gap-0.5 dark:bg-stone-800/80 bg-stone-200/80 p-1.5 rounded-md">
              {isMac ? (
                <>
                  <CommandIcon className="w-3 h-3" />
                  <span>K</span>
                </>
              ) : (
                <>
                  <span>Ctrl</span>
                  <span>K</span>
                </>
              )}
            </div>
          </div>
        </DialogTrigger>
      )}
      <DialogContent className="p-0 max-w-xl sm:top-[38%] top-[45%] overflow-hidden rounded-[20px] border border-stone-200/80 dark:border-stone-800 shadow-[0_24px_80px_-24px_rgb(0,0,0,0.28)] dark:shadow-[0_24px_80px_-24px_rgb(0,0,0,0.8)] dark:bg-stone-950/95 bg-white/95">
        <DialogTitle className="sr-only">Search</DialogTitle>
        <DialogHeader>
          <div className="relative">
            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-500 dark:text-stone-400" />
            <input
              ref={inputRef}
              value={searchedInput}
              onChange={(e) => setSearchedInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search components, motion, and pages"
              className="h-[68px] w-full pl-14 pr-12 bg-transparent border-b border-stone-200/80 dark:border-stone-800 text-[15px] outline-none placeholder:text-stone-400 dark:placeholder:text-stone-500"
            />
            {searchedInput && (
              <button
                onClick={() => setSearchedInput("")}
                className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 p-0.5 transition-all duration-200 hover:scale-110"
                aria-label="Clear search"
              >
                <XIcon className="h-3 w-3" />
              </button>
            )}
          </div>
        </DialogHeader>

        {/* Hints */}
        <div className="px-5 py-2.5 border-b border-stone-200/80 dark:border-stone-800 text-[11px] text-stone-400 dark:text-stone-500 flex items-center justify-between gap-4">
          <span className="hidden sm:inline">Navigate the library</span>
          <div className="flex items-center gap-4 sm:ml-auto">
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-stone-200 dark:bg-stone-700 rounded">
              ↑↓
            </kbd>{" "}
            Navigate
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-stone-200 dark:bg-stone-700 rounded">
              ↵
            </kbd>{" "}
            Select
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-stone-200 dark:bg-stone-700 rounded">
              Esc
            </kbd>{" "}
            Close
          </div>
          </div>
        </div>

        {/* Results */}
        {filteredResults.length === 0 && searchedInput && (
          <div className="flex flex-col items-center py-12 text-center text-stone-500 dark:text-stone-400">
            <div className="relative mb-6">
              <SearchIcon className="h-16 w-16 text-stone-300 dark:text-stone-600" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-stone-200 dark:bg-stone-700 rounded-full flex items-center justify-center">
                <XIcon className="h-3 w-3 text-stone-400 dark:text-stone-500" />
              </div>
            </div>
            <h3 className="font-medium text-stone-700 dark:text-stone-300 mb-2">
              No results found
            </h3>
            <p className="text-sm mb-1">
              No results for{" "}
              <span className="font-medium text-stone-600 dark:text-stone-400">
                &quot;{searchedInput}&quot;
              </span>
            </p>
            <p className="text-sm">
              Try searching for components, tools, or pages
            </p>
          </div>
        )}
        {/* Quick access when empty */}
        {filteredResults.length === 0 && !searchedInput && (
          <div className="px-5 py-4">
            <div className="mb-4">
              <h3 className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-stone-400 dark:text-stone-500">
                Quick Access
              </h3>
              <div className="grid grid-cols-1 gap-1">
                {[
                  {
                    title: "Button",
                    href: "/components/button",
                    icon: ComponentIcon,
                  },
                  {
                    title: "Card",
                    href: "/components/card",
                    icon: ComponentIcon,
                  },
                  {
                    title: "Blog List",
                    href: "/pages/blog-list",
                    icon: LayoutTemplateIcon,
                  },
                  {
                    title: "Text Reveal",
                    href: "/motion/text-reveal",
                    icon: WandSparklesIcon,
                  },
                ].map((item) => (
                  <div
                    key={item.href}
                    onClick={() => handleItemClick(item.href)}
                    className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-stone-50 dark:hover:bg-stone-900/60 cursor-pointer transition-colors group"
                  >
                    <item.icon className={cn("h-4 w-4", item.href.includes("/motion/") ? "text-violet-600 dark:text-violet-300" : "text-stone-500 dark:text-stone-400")} />
                    <span className="text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-stone-100">
                      {item.title}
                    </span>
                    <ArrowUpRightIcon className="ml-auto h-4 w-4 text-stone-300 opacity-0 transition-opacity group-hover:opacity-100 dark:text-stone-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {filteredResults.length > 0 && (
          <div
            className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-stone-200 dark:scrollbar-thumb-stone-800 scrollbar-track-transparent"
            ref={containerRef}
          >
            <div className="flex flex-col items-start overflow-y-auto px-2 py-2">
              {filteredResults.map((item, index) => {
                const level = (item.href.split("/").slice(1).length -
                  1) as keyof typeof paddingMap;
                const paddingClass = paddingMap[level];
                const presentation = getItemPresentation(item.href, item.title);
                const ItemIcon = presentation.Icon;

                return (
                  <div
                    key={item.href}
                    id={`search-item-${index}`}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    onClick={() => handleItemClick(item.href)}
                    className={cn(
                      "group w-full rounded-xl transition-colors duration-150 cursor-pointer",
                      paddingClass,
                      index === selectedIndex
                        ? "bg-stone-100/80 dark:bg-stone-900"
                        : "hover:bg-stone-50 dark:hover:bg-stone-900/60"
                    )}
                    role="option"
                    aria-selected={index === selectedIndex}
                  >
                    <div
                      className={cn(
                        "flex items-center w-full py-2.5 px-3 gap-3",
                        level > 1 &&
                          "border-l-2 border-stone-200 dark:border-stone-700 ml-2 pl-4"
                      )}
                    >
                      <div className={cn("flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] border", presentation.iconBackground)}>
                        <ItemIcon className={cn("h-4 w-4", presentation.iconClass)} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className={cn(
                            "block truncate transition-colors",
                            "text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-stone-100"
                          )}
                        >
                          {item.title}
                        </span>
                      </div>
                      <span className="hidden sm:inline text-[11px] text-stone-400 dark:text-stone-500">{presentation.label}</span>
                      <ArrowUpRightIcon className="h-4 w-4 text-stone-300 opacity-0 transition-opacity group-hover:opacity-100 dark:text-stone-600" />
                      {index === selectedIndex && (
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

const paddingMap = {
  1: "pl-2",
  2: "pl-4",
  3: "pl-10",
} as const;
