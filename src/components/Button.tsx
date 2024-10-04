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
}) => {
  const baseClass = "font-bold rounded focus:outline-none ";
  const sizeClasses = {
    small: "px-2 py-1 text-xs",
    regular: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base",
  };
  const variantClasses = {
    primary:
      "bg-blue-500 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-600",
    secondary:
      "bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white",
    outlined:
      "bg-transparent border text-blue-700 hover:bg-blue-500 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-800",
    danger:
      "bg-transparent border text-red-700 hover:bg-red-500 hover:text-white dark:text-red-400 dark:border-red-400 dark:hover:bg-red-800",
    icon: "inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-600",
  };

  return (
    <button
      type="button"
      className={`${baseClass} ${sizeClasses[size]} ${
        variantClasses[variant]
      } ${variant === "icon" ? "flex items-center" : ""}`}
      onClick={onClick}
    >
      {icon === "upload" && <Upload className="h-4 w-4 mr-2" />}
      {children}
    </button>
  );
};

// Usage
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
    className="inline-flex rounded-md shadow-sm dark:shadow-gray-700"
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
    <Button variant="primary">
      <Plus />
    </Button>
  </div>
);
