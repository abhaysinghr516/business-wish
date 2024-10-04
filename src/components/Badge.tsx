import { Check } from "lucide-react";

type Variant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "outlined";

interface BadgeProps {
  variant: Variant;
  icon?: boolean;
  text?: string;
}

export const Badge: React.FC<BadgeProps> = ({ variant, icon, text }) => {
  const baseClass = "px-2 py-1 rounded-full text-xs inline-flex items-center";
  const variantClasses = {
    default: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    primary: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    success:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    warning:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    outlined:
      "border border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-300",
  };

  return (
    <span className={`${baseClass} ${variantClasses[variant]}`}>
      {icon && <Check className="w-4 h-4 mr-1" />}
      {text || variant.charAt(0).toUpperCase() + variant.slice(1)}
    </span>
  );
};

export const BadgeGroup: React.FC = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Badge variant="primary" text="Primary" />
    <Badge variant="success" text="Success" />
    <Badge variant="warning" text="Warning" />
    <Badge variant="danger" text="Danger" />
    <Badge variant="outlined" text="Outlined" />
    <Badge variant="success" icon text="With Icon" />
  </div>
);
