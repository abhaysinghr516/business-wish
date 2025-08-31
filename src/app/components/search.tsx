"use client";

import {
  CommandIcon,
  FileIcon,
  SearchIcon,
  XIcon,
  ComponentIcon,
  BookOpenIcon,
  FolderIcon,
  HashIcon,
  ClockIcon,
  SparklesIcon,
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

export default function Search() {
  const [searchedInput, setSearchedInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    setIsMac(navigator.userAgent.toUpperCase().indexOf("MAC") >= 0);

    // Load recent searches from localStorage
    const saved = localStorage.getItem("search-recent");
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (error) {
        console.warn("Failed to parse recent searches:", error);
      }
    }

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
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMac, isOpen]);

  const filteredResults = useMemo(() => {
    const trimmedInput = searchedInput.trim();
    // Show all components when no search input
    if (!trimmedInput) return advanceSearch("");
    return advanceSearch(trimmedInput);
  }, [searchedInput]);

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

  const saveRecentSearch = useCallback(
    (query: string) => {
      if (!query.trim()) return;

      const updated = [
        query,
        ...recentSearches.filter((s) => s !== query),
      ].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem("search-recent", JSON.stringify(updated));
    },
    [recentSearches]
  );

  const clearRecentSearches = useCallback(() => {
    setRecentSearches([]);
    localStorage.removeItem("search-recent");
  }, []);

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
          if (searchedInput.trim()) {
            saveRecentSearch(searchedInput.trim());
          }
          handleItemClick(selectedItem.href);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    },
    [filteredResults, selectedIndex, searchedInput, saveRecentSearch]
  );

  const handleItemClick = useCallback(
    (href: string) => {
      if (searchedInput.trim()) {
        saveRecentSearch(searchedInput.trim());
      }
      setIsOpen(false);
      router.push(`/docs${href}`);
    },
    [searchedInput, saveRecentSearch, router]
  );

  const getItemIcon = useCallback((href: string, title: string) => {
    const path = href.toLowerCase();

    // Component icons
    if (path.includes("/components/")) {
      return (
        <ComponentIcon className="h-4 w-4 text-blue-500 dark:text-blue-400" />
      );
    }

    // Page/documentation icons
    if (path.includes("/pages/") || path.includes("/docs/")) {
      return (
        <BookOpenIcon className="h-4 w-4 text-green-500 dark:text-green-400" />
      );
    }

    // Folder/category icons
    if (path.split("/").length <= 2) {
      return (
        <FolderIcon className="h-4 w-4 text-amber-500 dark:text-amber-400" />
      );
    }

    // Special items
    if (
      title.toLowerCase().includes("new") ||
      title.toLowerCase().includes("latest")
    ) {
      return (
        <SparklesIcon className="h-4 w-4 text-purple-500 dark:text-purple-400" />
      );
    }

    // Default file icon
    return <FileIcon className="h-4 w-4 text-stone-500 dark:text-stone-400" />;
  }, []);

  return (
    <div>
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
        <DialogTrigger asChild>
          <div className="relative flex-1 max-w-md cursor-pointer group">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 dark:text-stone-400 transition-all duration-200 group-hover:text-stone-700 dark:group-hover:text-stone-200 group-hover:scale-110" />
            <Input
              className="md:w-full rounded-xl dark:bg-stone-900/90 bg-stone-50/90 border-stone-200 dark:border-stone-800 h-10 pl-10 pr-0 sm:pr-4 text-sm shadow-sm transition-all duration-200 hover:border-stone-300 dark:hover:border-stone-700 focus:ring-2 focus:ring-stone-200 dark:focus:ring-stone-800"
              placeholder="Search Components..."
              type="search"
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
        <DialogContent className="p-0 max-w-2xl sm:top-[38%] top-[45%] rounded-2xl border dark:border-stone-800 shadow-2xl dark:shadow-stone-950/50 dark:bg-stone-900/90 bg-stone-50/90">
          <DialogTitle className="sr-only">Search Components</DialogTitle>
          <DialogHeader>
            <div className="relative">
              <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-500 dark:text-stone-400 transition-colors" />
              <input
                ref={inputRef}
                value={searchedInput}
                onChange={(e) => setSearchedInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search components or browse all..."
                className="h-16 w-full pl-14 pr-12 bg-transparent border-b border-stone-200 dark:border-stone-800 text-base outline-none focus:outline-none transition-colors placeholder:text-stone-500 dark:placeholder:text-stone-400 focus:border-stone-300 dark:focus:border-stone-700"
                aria-label="Search components"
                aria-expanded={isOpen}
                aria-autocomplete="list"
                aria-activedescendant={
                  filteredResults.length > 0
                    ? `search-item-${selectedIndex}`
                    : undefined
                }
                role="combobox"
              />
              {searchedInput && (
                <button
                  onClick={() => setSearchedInput("")}
                  className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-all duration-200 hover:scale-110 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 p-0.5"
                  aria-label="Clear search"
                >
                  <XIcon className="h-3 w-3" />
                </button>
              )}
            </div>
          </DialogHeader>

          {/* Accessibility hints */}
          <div className="px-4 py-2 border-b border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/50">
            <div className="flex items-center justify-center gap-4 text-xs text-stone-500 dark:text-stone-400">
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-stone-200 dark:bg-stone-700 rounded text-xs font-mono">
                  ↑↓
                </kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-stone-200 dark:bg-stone-700 rounded text-xs font-mono">
                  ↵
                </kbd>
                <span>Select</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-stone-200 dark:bg-stone-700 rounded text-xs font-mono">
                  Esc
                </kbd>
                <span>Close</span>
              </div>
            </div>
          </div>
          {!searchedInput && recentSearches.length > 0 && (
            <div className="px-4 py-3 border-b border-stone-200 dark:border-stone-800">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <ClockIcon className="h-3 w-3 text-stone-400 dark:text-stone-500" />
                  <h3 className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide">
                    Recent Searches
                  </h3>
                </div>
                <button
                  onClick={clearRecentSearches}
                  className="text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors hover:underline"
                >
                  Clear
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchedInput(search)}
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-md hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-200 hover:scale-105"
                  >
                    <HashIcon className="h-2.5 w-2.5 text-stone-400" />
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredResults.length === 0 && searchedInput && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="relative mb-4">
                <SearchIcon className="h-12 w-12 text-stone-300 dark:text-stone-600" />
                <XIcon className="absolute -top-1 -right-1 h-5 w-5 text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-800 rounded-full p-1" />
              </div>
              <p className="text-stone-500 dark:text-stone-400 text-sm">
                No results found for{" "}
                <span className="text-stone-900 dark:text-stone-100 font-medium">{`"${searchedInput}"`}</span>
              </p>
              <p className="text-stone-400 dark:text-stone-500 text-sm mt-1">
                Try adjusting your search term
              </p>
            </div>
          )}
          {filteredResults.length > 0 && (
            <div
              className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-stone-200 dark:scrollbar-thumb-stone-800 scrollbar-track-transparent"
              ref={containerRef}
              role="listbox"
              aria-label="Search results"
            >
              <div className="flex flex-col items-start overflow-y-auto sm:px-2 px-1 pb-4">
                {filteredResults.map((item, index) => {
                  const level = (item.href.split("/").slice(1).length -
                    1) as keyof typeof paddingMap;
                  const paddingClass = paddingMap[level];

                  return (
                    <div
                      key={item.href}
                      id={`search-item-${index}`}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      onClick={() => handleItemClick(item.href)}
                      className={cn(
                        "group w-full px-3 rounded-lg transition-colors duration-150 cursor-pointer",
                        paddingClass,
                        index === selectedIndex
                          ? "bg-stone-100 dark:bg-stone-800"
                          : "hover:bg-stone-50 dark:hover:bg-stone-800/50"
                      )}
                      role="option"
                      aria-selected={index === selectedIndex}
                      tabIndex={-1}
                    >
                      <div
                        className={cn(
                          "flex items-center w-fit h-full py-3 gap-1.5 px-2 transition-colors",
                          level > 1 &&
                            "border-l border-stone-200 dark:border-stone-700 pl-4"
                        )}
                      >
                        <div className="mr-2 flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                          {getItemIcon(item.href, item.title)}
                        </div>
                        <span className="text-sm text-stone-700 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-stone-100 truncate font-medium">
                          {item.title}
                        </span>
                        {index === selectedIndex && (
                          <div className="ml-auto flex-shrink-0">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                          </div>
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
    </div>
  );
}

const paddingMap = {
  1: "pl-2",
  2: "pl-4",
  3: "pl-10",
} as const;
