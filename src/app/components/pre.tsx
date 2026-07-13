import { ComponentProps } from "react";
import Copy from "./copy";

export default function Pre({
  children,
  raw,
  ...rest
}: ComponentProps<"pre"> & { raw?: string }) {
  return (
    <div className="relative my-6 w-full overflow-hidden rounded-[18px] border border-neutral-200 bg-neutral-950 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.45)] dark:border-white/[0.08] dark:bg-[#080808] dark:shadow-none">
      <div className="absolute right-3 top-3 z-10">
        <Copy content={raw!} />
      </div>
      <div className="relative overflow-x-auto custom-scrollbar w-full">
        <pre className="bg-transparent! p-4 text-[13px] leading-relaxed dark:bg-transparent! sm:p-5 sm:text-sm" {...rest}>
          {children}
        </pre>
      </div>
    </div>
  );
}
