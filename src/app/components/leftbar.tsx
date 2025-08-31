import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { Logo, NavMenu } from "./navbar";
import { Button } from "@/components/ui/button";
import { AlignLeftIcon } from "lucide-react";
// import { FooterButtons } from "./footer";
import { DialogTitle } from "@/components/ui/dialog";
import DocsMenu from "./docs-menu";

export function Leftbar() {
  return (
    <aside className="lg:flex hidden flex-[1] min-w-[230px] max-w-[280px] sticky top-16 flex-col h-[92.75vh] overflow-y-auto">
      <ScrollArea className="py-4 pr-2">
        <DocsMenu />
      </ScrollArea>
    </aside>
  );
}

export function SheetLeftbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden flex"
          aria-label="Open navigation menu"
        >
          <AlignLeftIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="flex flex-col gap-4 px-0 w-[300px] sm:w-[350px]"
        side="left"
      >
        <DialogTitle className="sr-only">Documentation Navigation</DialogTitle>
        <SheetHeader>
          <SheetClose className="px-5" asChild>
            <div className="text-lg font-semibold">Documentation</div>
          </SheetClose>
        </SheetHeader>
        <ScrollArea className="flex flex-col gap-4 flex-1">
          <div className="mx-2 px-3">
            <DocsMenu isSheet />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
