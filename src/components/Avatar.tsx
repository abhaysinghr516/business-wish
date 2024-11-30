import React from "react";
import { User } from "lucide-react";

interface AvatarSizesProps {
  size?: "sm" | "md" | "lg";
  src?: string;
  alt?: string;
  initials?: string;
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
};

export const AvatarSizes: React.FC<AvatarSizesProps> = ({
  src,
  alt = "User avatar",
  initials,
  className = "",
}) => {
  return (
    <div>
      <div className="mt-8 flex gap-6">
        {Object.keys(sizeClasses).map((sizeKey) => (
          <div key={sizeKey} className="text-center">
            <h4 className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
              {sizeKey}
            </h4>
            <div
              className={`relative inline-flex items-center justify-center overflow-hidden 
              bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900
              rounded-full shadow-sm
              ${sizeClasses[sizeKey as keyof typeof sizeClasses]} ${className}`}
            >
              {src ? (
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
              ) : initials ? (
                <span className="text-gray-700 dark:text-gray-200 font-medium">
                  {initials}
                </span>
              ) : (
                <User className="w-1/2 h-1/2 text-gray-600 dark:text-gray-300" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface AvatarWithImageProps {
  src: string;
  alt?: string;
}

export const AvatarWithImage: React.FC<AvatarWithImageProps> = ({
  src,
  alt = "User avatar",
}) => {
  return (
    <div
      className="relative inline-flex items-center justify-center overflow-hidden 
    bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 
    rounded-full shadow-sm w-10 h-10"
    >
      <img src="/pfp.jpg" alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

interface AvatarWithNotificationProps {
  src?: string;
  alt?: string;
  initials?: string;
  notificationColor?: string;
}

export const AvatarWithNotification: React.FC<AvatarWithNotificationProps> = ({
  src,
  alt = "User avatar",
  initials,
  notificationColor = "bg-red-500",
}) => {
  return (
    <div className="relative inline-block">
      <div
        className="relative inline-flex items-center justify-center overflow-hidden 
      bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 
      rounded-full shadow-sm w-10 h-10 text-sm"
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : initials ? (
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            {initials}
          </span>
        ) : (
          <User className="w-1/2 h-1/2 text-gray-600 dark:text-gray-300" />
        )}
      </div>
      <span
        className={`absolute top-0 right-0 block h-3 w-3 rounded-full ${notificationColor} 
        ring-2 ring-white dark:ring-gray-900 shadow-sm`}
      />
    </div>
  );
};

interface AvatarWithActiveBadgeProps {
  src?: string;
  alt?: string;
  initials?: string;
  badgeColor?: string;
}

export const AvatarWithActiveBadge: React.FC<AvatarWithActiveBadgeProps> = ({
  src,
  alt = "User avatar",
  initials,
  badgeColor = "bg-green-500",
}) => {
  return (
    <div className="relative inline-block">
      <div
        className="relative inline-flex items-center justify-center overflow-hidden 
      bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 
      rounded-full shadow-sm w-10 h-10 text-sm"
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : initials ? (
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            {initials}
          </span>
        ) : (
          <User className="w-1/2 h-1/2 text-gray-600 dark:text-gray-300" />
        )}
      </div>
      <span
        className={`absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full ${badgeColor} 
        ring-2 ring-white dark:ring-gray-900 shadow-sm`}
      />
    </div>
  );
};

interface AvatarGroupProps {
  max?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ max = 3 }) => {
  const avatars = [
    { src: "/pfp.jpg", alt: "User 1" },
    { initials: "JD" },
    { src: "/pfp.jpg", alt: "User 2" },
    { initials: "AS" },
    { src: "/pfp.jpg", alt: "User 3" },
  ];

  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = Math.max(avatars.length - max, 0);

  return (
    <div className="flex -space-x-3">
      {visibleAvatars.map((avatar, index) => (
        <div
          key={index}
          className="relative inline-flex items-center justify-center overflow-hidden 
          bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 
          rounded-full ring-2 ring-white dark:ring-gray-900 shadow-sm
          w-10 h-10 text-sm transition-transform hover:translate-y-0.5"
        >
          {avatar.src ? (
            <img
              src={avatar.src}
              alt={avatar.alt || "User avatar"}
              className="w-full h-full object-cover"
            />
          ) : avatar.initials ? (
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              {avatar.initials}
            </span>
          ) : (
            <User className="w-1/2 h-1/2 text-gray-600 dark:text-gray-300" />
          )}
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          className="relative inline-flex items-center justify-center 
        bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 
        text-gray-600 dark:text-gray-300 font-medium rounded-full 
        ring-2 ring-white dark:ring-gray-900 shadow-sm
        w-10 h-10 text-sm transition-transform hover:translate-y-0.5"
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
