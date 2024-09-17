export const BasicBanner: React.FC = () => (
  <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg max-w-xl mx-auto">
    <div className="text-sm">This is a basic banner component.</div>
  </div>
);

export const BannerwithActions: React.FC = () => (
  <div className="bg-indigo-100 text-indigo-800 px-4 py-3 rounded-lg flex flex-col sm:flex-row items-center justify-between max-w-2xl mx-auto">
    <div className="mb-2 sm:mb-0">
      <p className="text-sm">This is a banner with actions.</p>
    </div>
    <div className="flex items-center justify-center sm:justify-end space-x-2">
      <button className="bg-indigo-500 text-white px-3 py-2 rounded-md text-sm">
        Action 1
      </button>
      <button className="bg-indigo-200 text-indigo-800 px-3 py-2 rounded-md text-sm">
        Action 2
      </button>
    </div>
  </div>
);

export const BannerwithHeadingAndButton: React.FC = () => (
  <div className="bg-blue-200 p-6 max-w-xl mx-auto rounded-lg">
    <div className="mb-4 text-2xl font-bold">Special Offer!</div>
    <div className="text-base">
      Get 20% off on selected items. Limited time only.
    </div>
    <button className="text-base mt-4 rounded bg-white px-4 py-2 text-blue-400">
      Shop Now
    </button>
  </div>
);
