"use client";
import { User } from "lucide-react";
import React from "react";

interface AvatarGroupProps {
  max?: number;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ max = 3 }) => {
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

export default AvatarGroup;
