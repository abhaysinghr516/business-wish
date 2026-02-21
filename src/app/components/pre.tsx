import { ComponentProps } from "react";
import Copy from "./copy";

export default function Pre({
  children,
  raw,
  ...rest
}: ComponentProps<"pre"> & { raw?: string }) {
  return (
    <div className="my-6 relative rounded-xl overflow-hidden bg-neutral-950 dark:bg-[#050505] border border-neutral-800/40 dark:border-white/[0.05] shadow-lg shadow-black/5 dark:shadow-none w-full">
      <div className="absolute top-3 right-3 z-10">
        <Copy content={raw!} />
      </div>
      <div className="relative overflow-x-auto custom-scrollbar w-full">
        <pre className="p-4 sm:p-5 text-[13px] sm:text-sm leading-relaxed bg-transparent! dark:bg-transparent!" {...rest}>
          {children}
        </pre>
      </div>
    </div>
  );
}
