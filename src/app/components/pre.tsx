import { ComponentProps } from "react";
import Copy from "./copy";

export default function Pre({
  children,
  raw,
  ...rest
}: ComponentProps<"pre"> & { raw?: string }) {
  return (
    <div className="my-4 sm:my-5 relative">
      <div className="absolute top-10 right-2 z-10">
        <Copy content={raw!} />
      </div>
      <div className="relative">
        <pre {...rest}>{children}</pre>
      </div>
    </div>
  );
}
