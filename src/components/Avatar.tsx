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
      {/* Display all sizes */}
      <div className="mt-8 flex gap-4">
        {Object.keys(sizeClasses).map((sizeKey) => (
          <div key={sizeKey} className="text-center">
            <h4 className="mb-2 text-sm font-medium capitalize">{sizeKey}</h4>
            <div
              className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full ${
                sizeClasses[sizeKey as keyof typeof sizeClasses]
              } ${className}`}
            >
              {src ? (
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
              ) : initials ? (
                <span className="text-gray-600 font-medium">{initials}</span>
              ) : (
                <User className="w-1/2 h-1/2 text-gray-600" />
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
    <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full w-10 h-10">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
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
      <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full w-10 h-10 text-sm">
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : initials ? (
          <span className="text-gray-600 font-medium">{initials}</span>
        ) : (
          <svg
            className="w-1/2 h-1/2 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        )}
      </div>
      <span
        className={`absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ${notificationColor} ring-2 ring-white`}
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
      <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full w-10 h-10 text-sm">
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : initials ? (
          <span className="text-gray-600 font-medium">{initials}</span>
        ) : (
          <svg
            className="w-1/2 h-1/2 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        )}
      </div>
      <span
        className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ${badgeColor} ring-2 ring-white`}
      />
    </div>
  );
};

interface AvatarGroupProps {
  max?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ max = 3 }) => {
  // Hardcoded avatar data
  const avatars = [
    { src: "/api/placeholder/40/40", alt: "User 1" },
    { initials: "JD" },
    { src: "/api/placeholder/40/40", alt: "User 2" },
    { initials: "AS" },
    { src: "/api/placeholder/40/40", alt: "User 3" },
  ];

  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = Math.max(avatars.length - max, 0);

  return (
    <div className="flex -space-x-4">
      {visibleAvatars.map((avatar, index) => (
        <div
          key={index}
          className="relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full ring-2 ring-white w-10 h-10 text-sm"
        >
          {avatar.src ? (
            <img
              src={avatar.src}
              alt={avatar.alt || "User avatar"}
              className="w-full h-full object-cover"
            />
          ) : avatar.initials ? (
            <span className="text-gray-600 font-medium">{avatar.initials}</span>
          ) : (
            <User className="w-1/2 h-1/2 text-gray-600" />
          )}
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="relative inline-flex items-center justify-center bg-gray-300 text-gray-600 font-medium rounded-full ring-2 ring-white w-10 h-10 text-sm">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
