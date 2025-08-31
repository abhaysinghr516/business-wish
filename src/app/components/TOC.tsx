import { getDocsTocs } from "@/app/lib/markdown";
import TocObserver from "./toc-observer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function TOC({ path }: { path: string }) {
  const tocs = await getDocsTocs(path);

  return (
    <div className="xl:flex hidden toc flex-[1] min-w-[200px] max-w-[240px] py-8 sticky top-16 h-[95.95vh]">
      <div className="flex flex-col gap-3 w-full">
        <h3 className="font-medium text-sm text-muted-foreground">
          On this page
        </h3>
        <ScrollArea className="pb-4 pt-0.5">
          <TocObserver data={tocs} />
        </ScrollArea>
      </div>
    </div>
  );
}
