import { cn } from "@/lib/utils";

interface CardGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function CardGlass({ children, className, ...props }: CardGlassProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
