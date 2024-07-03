export const BasicBanner: React.FC = () => (
  <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg">
    <div className="text-sm">This is a basic banner component.</div>
  </div>
);

export const BannerwithIcon: React.FC = () => (
  <div className="flex items-center bg-green-100 text-green-800 px-4 py-3 rounded-lg">
    <svg
      className="mr-2 h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg>
    <div className="text-sm">This is a banner with an icon.</div>
  </div>
);

export const DismissibleBanner: React.FC = () => (
  <div className="relative bg-yellow-100 text-yellow-800 px-4 py-3 rounded-lg">
    <div className="flex items-center">
      <svg
        className="mr-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
        />
      </svg>
      <div className="text-sm">This is a dismissible banner component.</div>
    </div>
    <button className="absolute top-0 right-0 mt-4 mr-4 text-yellow-800 hover:text-yellow-700">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
);

export const BannerwithActions: React.FC = () => (
  <div className="bg-indigo-100 text-indigo-800 px-4 py-3 rounded-lg flex flex-col sm:flex-row items-center justify-between">
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

export const StackedBanners: React.FC = () => (
  <div className="space-y-4">
    <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg">
      <div className="text-sm">This is the first banner.</div>
    </div>
    <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg">
      <div className="text-sm">This is the second banner.</div>
    </div>
    <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded-lg">
      <div className="text-sm">This is the third banner.</div>
    </div>
  </div>
);

export const BannerwithHeadingAndButton: React.FC = () => (
  <div className="bg-blue-200 p-6">
    <div className="mb-4 text-2xl font-bold">Special Offer!</div>
    <div className="text-base">
      Get 20% off on selected items. Limited time only.
    </div>
    <button className="text-base mt-4 rounded bg-white px-4 py-2 text-blue-400">
      Shop Now
    </button>
  </div>
);
