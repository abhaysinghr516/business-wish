"use client";
import React, { useState, useRef, useEffect } from "react";
import { Settings2, Bell, LogOut, User, Lock, X } from "lucide-react";

interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  width?: number;
  showArrow?: boolean;
  closeOnClickOutside?: boolean;
  variant?: "default" | "menu" | "notification" | "minimal";
  onClose?: () => void;
}

interface MenuButtonProps {
  icon?: React.ComponentType<any>;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

interface NotificationItemProps {
  title: string;
  description: string;
  time: string;
}

const MenuButton = ({
  icon: Icon,
  children,
  onClick,
  className = "",
}: MenuButtonProps) => (
  <button
    onClick={onClick}
    className={`w-full px-3 py-2 text-left text-sm rounded-lg hover:bg-gray-100/80 dark:hover:bg-gray-800/50 transition-colors flex items-center space-x-2 dark:text-gray-200 ${className}`}
  >
    {Icon && <Icon className="w-4 h-4" />}
    <span>{children}</span>
  </button>
);

const NotificationItem = ({
  title,
  description,
  time,
}: NotificationItemProps) => (
  <div className="p-3 hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-colors">
    <div className="flex justify-between items-start">
      <p className="font-medium text-sm dark:text-gray-200">{title}</p>
      <span className="text-xs text-gray-500 dark:text-gray-400">{time}</span>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
      {description}
    </p>
  </div>
);

const Popover = ({
  trigger,
  content,
  position = "bottom",
  width = 280,
  showArrow = true,
  closeOnClickOutside = true,
  variant = "default",
  onClose,
}: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        closeOnClickOutside &&
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    const calculatePosition = () => {
      if (!triggerRef.current || !contentRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const spacing = 8;

      let top = 0;
      let left = 0;

      switch (position) {
        case "top":
          top = triggerRect.top - contentRect.height - spacing;
          left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
          break;
        case "bottom":
          top = triggerRect.bottom + spacing;
          left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
          break;
        case "left":
          top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
          left = triggerRect.left - contentRect.width - spacing;
          break;
        case "right":
          top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
          left = triggerRect.right + spacing;
          break;
      }

      setCoords({ top, left });
    };

    if (isOpen) {
      calculatePosition();
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("resize", calculatePosition);
      window.addEventListener("scroll", calculatePosition);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", calculatePosition);
      window.removeEventListener("scroll", calculatePosition);
    };
  }, [isOpen, position, closeOnClickOutside]);

  const getVariantStyles = () => {
    switch (variant) {
      case "menu":
        return "bg-white/95 dark:bg-gray-900/95 shadow-xl border-0";
      case "notification":
        return "bg-white dark:bg-gray-900 shadow-lg border border-gray-200/20 dark:border-gray-700/20";
      case "minimal":
        return "bg-white/80 dark:bg-gray-900/80 shadow-sm border border-gray-200/10 dark:border-gray-700/10";
      default:
        return "bg-white/80 dark:bg-gray-900/80 shadow-lg border border-gray-200/20 dark:border-gray-700/20";
    }
  };

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={contentRef}
          className="fixed z-50"
          style={{
            top: coords.top,
            left: coords.left,
            width,
          }}
        >
          <div className={`rounded-2xl overflow-hidden ${getVariantStyles()}`}>
            {showArrow && (
              <div
                className={`
                  absolute w-4 h-4 bg-inherit rotate-45 border border-gray-200/20 dark:border-gray-700/20
                  ${
                    position === "bottom"
                      ? "-top-2 left-1/2 -translate-x-1/2 border-b-0 border-r-0"
                      : ""
                  }
                  ${
                    position === "top"
                      ? "-bottom-2 left-1/2 -translate-x-1/2 border-t-0 border-l-0"
                      : ""
                  }
                  ${
                    position === "left"
                      ? "-right-2 top-1/2 -translate-y-1/2 border-l-0 border-t-0"
                      : ""
                  }
                  ${
                    position === "right"
                      ? "-left-2 top-1/2 -translate-y-1/2 border-r-0 border-b-0"
                      : ""
                  }
                `}
              />
            )}
            <div className="relative z-10">
              {variant !== "minimal" && (
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-full hover:bg-gray-100/80 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              {content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function PopoverDemo() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 p-8 space-x-8">
      <Popover
        variant="menu"
        position="bottom"
        trigger={
          <button className="p-2 text-sm font-medium bg-white/90 dark:bg-gray-800/90 border border-gray-200/20 dark:border-gray-700/20 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 shadow-md hover:shadow-lg">
            <Settings2 className="w-5 h-5 dark:text-gray-200" />
          </button>
        }
        content={
          <div className="py-2">
            <MenuButton icon={User}>Account Settings</MenuButton>
            <MenuButton icon={Bell}>Notifications</MenuButton>
            <MenuButton icon={Lock}>Privacy</MenuButton>
            <div className="my-2 border-t border-gray-200/50 dark:border-gray-700/50" />
            <MenuButton
              icon={LogOut}
              className="text-red-500 dark:text-red-400"
            >
              Sign Out
            </MenuButton>
          </div>
        }
      />

      <Popover
        variant="notification"
        position="bottom"
        width={320}
        trigger={
          <button className="relative p-2 text-sm font-medium bg-white/90 dark:bg-gray-800/90 border border-gray-200/20 dark:border-gray-700/20 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 shadow-md hover:shadow-lg">
            <Bell className="w-5 h-5 dark:text-gray-200" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        }
        content={
          <div>
            <div className="px-4 py-3 border-b border-gray-200/50 dark:border-gray-700/50">
              <h3 className="font-semibold dark:text-gray-200">
                Notifications
              </h3>
            </div>
            <div className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
              <NotificationItem
                title="New Feature Available"
                description="Check out the new dashboard view. Pages now load faster."
                time="1m ago"
              />
              <NotificationItem
                title="Account Security"
                description="Your account password was changed successfully."
                time="2h ago"
              />
            </div>
            <div className="p-3 text-center border-t border-gray-200/50 dark:border-gray-700/50">
              <button className="text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">
                View All
              </button>
            </div>
          </div>
        }
      />

      <Popover
        variant="minimal"
        position="bottom"
        width={200}
        trigger={
          <button className="px-3 py-1.5 text-sm font-medium bg-white/70 dark:bg-gray-800/70 border border-gray-200/20 dark:border-gray-700/20 rounded-lg hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 dark:text-gray-200">
            More Info
          </button>
        }
        content={
          <div className="p-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Additional information about this feature will appear here.
            </p>
          </div>
        }
      />
    </div>
  );
}
