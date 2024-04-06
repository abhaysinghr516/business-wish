export const AvatarwithInitials: React.FC = () => (
  <div className="flex items-center">
    <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-semibold">
      JD
    </div>
    <div className="ml-4">
      <div className="text-lg font-semibold">John Doe</div>
      <div className="text-gray-600">Online</div>
    </div>
  </div>
);

export const AvatarwithNotificationBadge: React.FC = () => (
  <div className="flex items-center">
    <div className="relative">
      <img
        className="rounded-full w-12 h-12"
        src="https://source.unsplash.com/random/100x100?face"
        alt="Avatar"
      />
      <span className="absolute top-6 right-0 block rounded-full bg-red-500 text-white text-xs px-2 py-1">
        3
      </span>
    </div>
    <div className="ml-4">
      <div className="text-lg font-semibold">John Doe</div>
      <div className="text-gray-600">Online</div>
    </div>
  </div>
);

export const AvatarwithActiveBadge: React.FC = () => (
  <div className="flex items-center">
    <div className="relative">
      <img
        className="rounded-full w-12 h-12"
        src="https://source.unsplash.com/random/100x100?face"
        alt="Avatar"
      />
      <span className="absolute bottom-8 right-0 block rounded-full bg-green-500 ring-2 ring-white w-3 h-3"></span>
    </div>
    <div className="ml-4">
      <div className="text-lg font-semibold">John Doe</div>
      <div className="text-gray-600">Online</div>
    </div>
  </div>
);

export const AvatarGroup: React.FC = () => (
  <div className="flex -space-x-4">
    <div>
      <img
        className="rounded-full w-12 h-12 border-2 border-white"
        src="https://source.unsplash.com/random/100x100?face"
        alt="Avatar"
      />
    </div>
    <div>
      <img
        className="rounded-full w-12 h-12 border-2 border-white"
        src="https://source.unsplash.com/random/100x100?face"
        alt="Avatar"
      />
    </div>
    <div>
      <img
        className="rounded-full w-12 h-12 border-2 border-white"
        src="https://source.unsplash.com/random/100x100?face"
        alt="Avatar"
      />
    </div>
    <div>
      <div className="relative top-8 bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-2xl font-semibold">
        +3
      </div>
    </div>
  </div>
);
