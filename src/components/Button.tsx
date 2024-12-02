import React from "react";
import { Plus, Upload } from "lucide-react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outlined" | "danger" | "icon";
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
    "font-medium rounded-lg transition-all duration-300 ease-in-out ";
  const sizeClasses = {
    small: "px-3 py-1.5 text-xs",
    regular: "px-4 py-2 text-sm",
    large: "px-5 py-3 text-base",
  };
  const variantClasses = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 " +
      "shadow-md hover:shadow-lg active:shadow-sm " +
      "border border-transparent " +
      "dark:bg-blue-700 dark:hover:bg-blue-600",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 " +
      "shadow-sm hover:shadow " +
      "border border-gray-200 " +
      "dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
    outlined:
      "bg-transparent border border-blue-500 text-blue-700 " +
      "hover:bg-blue-50 active:bg-blue-100 " +
      "dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950",
    danger:
      "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 " +
      "shadow-md hover:shadow-lg " +
      "border border-transparent " +
      "dark:bg-red-700 dark:hover:bg-red-600",
    icon:
      "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 " +
      "shadow-md hover:shadow-lg active:shadow-sm " +
      "inline-flex items-center justify-center " +
      "dark:bg-blue-700 dark:hover:bg-blue-600",
  };

  return (
    <button
      type="button"
      className={`
        ${baseClass} 
        ${sizeClasses[size]} 
        ${variantClasses[variant]} 
        ${variant === "icon" ? "p-2.5" : ""} 
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

// Usage Components remain the same as in the original code
export const ButtonGroup: React.FC = () => (
  <div className="flex gap-2">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="icon" icon="upload">
      Upload
    </Button>
  </div>
);

export const ButtonSizes: React.FC = () => (
  <div className="flex gap-2 items-baseline">
    <Button size="small">Small</Button>
    <Button size="regular">Regular</Button>
    <Button size="large">Large</Button>
  </div>
);

export const ButtonGroups: React.FC = () => (
  <div
    className="inline-flex rounded-lg shadow-sm dark:shadow-gray-700"
    role="group"
  >
    <Button variant="outlined">Prev</Button>
    <Button variant="outlined">1</Button>
    <Button variant="outlined">2</Button>
    <Button variant="outlined">3</Button>
    <Button variant="outlined">Next</Button>
  </div>
);

export const FAB: React.FC = () => (
  <div className="fixed bottom-4 right-4">
    <Button
      variant="primary"
      className="rounded-full p-3 shadow-xl hover:shadow-2xl"
    >
      <Plus className="h-6 w-6" />
    </Button>
  </div>
);
