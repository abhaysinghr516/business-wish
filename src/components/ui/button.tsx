interface ButtonProps {
  variant?: "primary" | "secondary" | "outlined" | "ghost" | "glass" | "danger" | "icon";
  size?: "small" | "regular" | "large";
  icon?: "upload" | "edit";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "regular",
  icon,
  children,
  onClick,
  className = "",
}) => {
  const baseClass =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950 active:scale-[0.98] ";
    
  const sizeClasses = {
    small: "px-3 py-1.5 text-xs",
    regular: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base"
  };

  const variantClasses = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.05)] " +
      "dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200",
    secondary:
      "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 " +
      "dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700",
    outlined:
      "bg-transparent border border-neutral-200 text-neutral-900 hover:bg-neutral-50 " +
      "dark:border-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/50",
    ghost:
      "bg-transparent text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 " +
      "dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
    glass:
      "bg-white/20 backdrop-blur-md border border-white/20 text-neutral-900 hover:bg-white/30 " +
      "shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] " +
      "dark:bg-black/20 dark:border-white/10 dark:text-white dark:hover:bg-black/30",
    danger:
      "bg-red-50 text-red-600 hover:bg-red-100 " +
      "dark:bg-red-500/10 dark:text-red-500 dark:hover:bg-red-500/20",
    icon:
      "bg-neutral-900 text-white hover:bg-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.05)] " +
      "dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200",
  };

  return (
    <button
      type="button"
      className={`
        ${baseClass} 
        ${variant === "icon" ? "p-2.5" : sizeClasses[size]} 
        ${variantClasses[variant]} 
        ${className}
      `}
      onClick={onClick}
    >
      <div className="flex items-center justify-center gap-2">
        {icon === "upload" && <Upload className="h-4 w-4" />}
        {children}
      </div>
    </button>
  );
};
