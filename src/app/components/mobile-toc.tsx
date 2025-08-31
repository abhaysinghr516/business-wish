"use client";

import { useState } from "react";
import { ChevronDown, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import TocObserver from "./toc-observer";

interface MobileTOCProps {
  tocs: Array<{
    level: number;
    text: string;
    href: string;
  }>;
}

export default function MobileTOC({ tocs }: MobileTOCProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!tocs || tocs.length === 0) return null;

  return (
    <div className="xl:hidden mb-6 border border-border rounded-lg bg-card mx-2 sm:mx-0">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-between p-3 sm:p-4 h-auto font-medium text-left text-sm sm:text-base"
          >
            <div className="flex items-center gap-2">
              <List className="h-4 w-4 flex-shrink-0" />
              <span>Table of Contents</span>
            </div>
            <ChevronDown
              className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="border-t border-border">
          <ScrollArea className="max-h-[300px] p-3 sm:p-4">
            <div className="flex flex-col gap-1 text-sm">
              {tocs.map(({ href, level, text }) => (
                <a
                  key={href}
                  href={href}
                  className={`py-2 px-3 rounded-md hover:bg-muted/50 transition-colors block text-sm leading-relaxed ${
                    level === 2 ? "pl-3" : level === 3 ? "pl-6" : "pl-9"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {text}
                </a>
              ))}
            </div>
          </ScrollArea>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
