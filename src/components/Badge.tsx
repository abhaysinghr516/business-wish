export const DefaultBadge: React.FC = () => (
  <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
    Default
  </span>
);

export const PrimaryBadge: React.FC = () => (
  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
    Primary
  </span>
);

export const PillBadge: React.FC = () => (
  <span className="bg-indigo-500 text-white px-4 py-2 rounded-full">
    Pill Shaped Bage
  </span>
);

export const OutlinedBadge: React.FC = () => (
  <span className="border border-gray-300 text-gray-600 px-2 py-1 rounded-full text-xs">
    Outlined
  </span>
);

export const SuccessBadge: React.FC = () => (
  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
    Success
  </span>
);

export const WarningBadge: React.FC = () => (
  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
    Warning
  </span>
);

export const DangerBadge: React.FC = () => (
  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
    Danger
  </span>
);

export const BadgeWithIcon: React.FC = () => (
  <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
    Active
  </span>
);

export const BadgeGroup: React.FC = () => (
  <div className="flex flex-wrap items-center space-x-2">
    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
      Tag 1
    </span>
    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
      Tag 2
    </span>
    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
      Tag 3
    </span>
  </div>
);
