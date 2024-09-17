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
  text?: string; // Add the text prop
}

export const Badge: React.FC<BadgeProps> = ({ variant, icon, text }) => {
  const baseClass = "px-2 py-1 rounded-full text-xs";
  const variantClasses = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    outlined: "border border-gray-300 text-gray-600",
  };

  return (
    <span className={`${baseClass} ${variantClasses[variant]}`}>
      {icon && <Check className="w-4 h-4 mr-1 inline" />}
      {text || variant.charAt(0).toUpperCase() + variant.slice(1)}
    </span>
  );
};

// Usage
export const BadgeGroup: React.FC = () => (
  <div className="flex flex-wrap items-center space-x-2">
    <Badge variant="primary" text="Primary" />
    <Badge variant="success" text="Success" />
    <Badge variant="warning" text="Warning" />
    <Badge variant="danger" text="Danger" />
    <Badge variant="outlined" text="Outlined" />
    <Badge variant="success" icon text="With Icon" />
  </div>
);
