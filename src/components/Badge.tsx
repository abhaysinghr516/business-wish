import React from "react";
import { Check } from "lucide-react";

type Variant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "outlined"
  | "ghost";

interface BadgeProps {
  variant?: Variant;
  icon?: boolean;
  text?: string;
  pill?: boolean;
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = "default", 
  icon = false, 
  text, 
  pill = false,
  dot = false,
  className = "" 
}) => {
  const baseClass = `
    inline-flex items-center gap-1.5 px-2.5 py-1 text-[13px] font-medium tracking-tight border
  `;

  // Determine border radius based on 'pill' prop
  const radiusClass = pill ? "rounded-full" : "rounded-md";

  const variantClasses = {
    default: `
      bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-transparent
    `,
    primary: `
      bg-blue-50/80 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-transparent
    `,
    success: `
      bg-emerald-50/80 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-transparent
    `,
    warning: `
      bg-amber-50/80 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-transparent
    `,
    danger: `
      bg-red-50/80 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-transparent
    `,
    outlined: `
      bg-transparent text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800
    `,
    ghost: `
      bg-transparent text-neutral-600 dark:text-neutral-400 border-transparent
    `
  };

  const iconClasses = {
    default: "text-neutral-500 dark:text-neutral-400",
    primary: "text-blue-500 dark:text-blue-400",
    success: "text-emerald-500 dark:text-emerald-400",
    warning: "text-amber-500 dark:text-amber-400",
    danger: "text-red-500 dark:text-red-400",
    outlined: "text-neutral-400 dark:text-neutral-500",
    ghost: "text-neutral-500 dark:text-neutral-400",
  };
  
  const dotClasses = {
    default: "bg-neutral-500 dark:bg-neutral-400",
    primary: "bg-blue-500 dark:bg-blue-400",
    success: "bg-emerald-500 dark:bg-emerald-400",
    warning: "bg-amber-500 dark:bg-amber-400",
    danger: "bg-red-500 dark:bg-red-400",
    outlined: "bg-neutral-400 dark:bg-neutral-500",
    ghost: "bg-neutral-500 dark:bg-neutral-400",
  };

  return (
    <span
      className={`
        ${baseClass} 
        ${radiusClass}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {dot && !icon && (
        <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotClasses[variant]}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${dotClasses[variant]}`}></span>
        </span>
      )}
      {icon && !dot && (
        <Check
          className={`w-3.5 h-3.5 ${iconClasses[variant]}`}
          strokeWidth={2.5}
        />
      )}
      <span>{text || variant.charAt(0).toUpperCase() + variant.slice(1)}</span>
    </span>
  );
};

export const BadgeGroup: React.FC = () => (
  <div className="flex flex-col gap-4 p-4">
    <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-neutral-500 dark:text-neutral-400 w-24">Default</span>
        <Badge variant="default" text="Default" />
        <Badge variant="primary" text="Primary" />
        <Badge variant="success" text="Success" />
        <Badge variant="warning" text="Warning" />
        <Badge variant="danger" text="Danger" />
        <Badge variant="outlined" text="Outlined" />
        <Badge variant="ghost" text="Ghost" />
    </div>
    
    <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-neutral-500 dark:text-neutral-400 w-24">Pill Shape</span>
        <Badge pill variant="default" text="Default" />
        <Badge pill variant="primary" text="Primary" />
        <Badge pill variant="success" text="Success" />
        <Badge pill variant="warning" text="Warning" />
        <Badge pill variant="danger" text="Danger" />
        <Badge pill variant="outlined" text="Outlined" />
        <Badge pill variant="ghost" text="Ghost" />
    </div>

    <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-neutral-500 dark:text-neutral-400 w-24">With Dot</span>
        <Badge dot variant="default" text="Default" />
        <Badge dot variant="primary" text="Primary" />
        <Badge dot variant="success" text="Success" />
        <Badge dot variant="warning" text="Warning" />
        <Badge dot variant="danger" text="Danger" />
        <Badge dot variant="outlined" text="Outlined" />
        <Badge dot variant="ghost" text="Ghost" />
    </div>

    <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-neutral-500 dark:text-neutral-400 w-24">With Icon</span>
        <Badge icon variant="default" text="Default" />
        <Badge icon variant="primary" text="Primary" />
        <Badge icon variant="success" text="Success" />
        <Badge icon variant="warning" text="Warning" />
        <Badge icon variant="danger" text="Danger" />
        <Badge icon variant="outlined" text="Outlined" />
        <Badge icon variant="ghost" text="Ghost" />
    </div>
  </div>
);
