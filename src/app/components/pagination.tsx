import { getPreviousNext } from "@/app/lib/markdown";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function Pagination({ pathname }: { pathname: string }) {
  const res = getPreviousNext(pathname);

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-4 py-4 sm:py-6 mt-6 border-t border-border/50">
      <div className="flex-1">
        {res.prev && (
          <Link
            className="flex items-center gap-2 sm:gap-3 no-underline px-3 py-2 sm:px-4 sm:py-3 hover:bg-muted/50 transition-colors duration-150 group w-full sm:w-auto rounded-md"
            href={`/docs${res.prev.href}`}
          >
            <ChevronLeftIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
            <div className="flex flex-col items-start min-w-0 flex-1">
              <span className="text-xs text-muted-foreground mb-0.5">
                Previous
              </span>
              <span className="font-medium text-foreground line-clamp-1 text-sm">
                {res.prev.title}
              </span>
            </div>
          </Link>
        )}
      </div>
      <div className="flex-1 flex justify-end">
        {res.next && (
          <Link
            className="flex items-center gap-2 sm:gap-3 no-underline px-3 py-2 sm:px-4 sm:py-3 hover:bg-muted/50 transition-colors duration-150 group w-full sm:w-auto rounded-md"
            href={`/docs${res.next.href}`}
          >
            <div className="flex flex-col items-end text-right min-w-0 flex-1">
              <span className="text-xs text-muted-foreground mb-0.5">Next</span>
              <span className="font-medium text-foreground line-clamp-1 text-sm">
                {res.next.title}
              </span>
            </div>
            <ChevronRightIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
          </Link>
        )}
      </div>
    </div>
  );
}
