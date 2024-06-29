export const BasicButtons: React.FC = () => (
  <div className="flex gap-2">
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded"
    >
      Primary
    </button>
    <button
      type="button"
      className="bg-gray-300 hover:bg-gray-400 text-sm text-gray-800 font-bold py-2 px-4 rounded"
    >
      Secondary
    </button>
  </div>
);

export const OutlinedButtons: React.FC = () => (
  <div className="flex gap-2">
    <button
      type="button"
      className="bg-transparent hover:bg-blue-500 text-sm text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      Outlined
    </button>
    <button
      type="button"
      className="bg-transparent hover:bg-red-500 text-sm text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
    >
      Danger
    </button>
  </div>
);

export const IconButtons: React.FC = () => (
  <div className="flex gap-2">
    <button
      type="button"
      className="inline-flex items-center rounded text-sm bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="mr-2 h-4 w-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
        />
      </svg>
      Upload
    </button>
    <button
      type="button"
      className="inline-flex items-center rounded text-sm bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-indigo-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w- mr-2 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
      Edit
    </button>
  </div>
);

export const PillButtons: React.FC = () => (
  <button
    type="button"
    className="rounded-full text-sm bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-700"
  >
    Pill Button
  </button>
);

export const ButtonSizes: React.FC = () => (
  <div className="flex gap-2 items-baseline ">
    <button
      type="button"
      className="rounded-full cursor-pointer h-fit bg-blue-500 px-2 py-1 text-xs font-bold text-white hover:bg-blue-700"
    >
      Small
    </button>
    <button
      type="button"
      className="rounded h-fit cursor-pointer text-sm bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      Regular
    </button>
    <button
      type="button"
      className="rounded-lg cursor-pointer h-fit text-base bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
    >
      Large
    </button>
  </div>
);

export const ButtonGroups: React.FC = () => (
  <div className="inline-flex rounded-md shadow-sm" role="group">
    <button
      type="button"
      className="rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
    >
      Prev
    </button>
    <button
      type="button"
      className="border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
    >
      1
    </button>
    <button
      type="button"
      className="border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
    >
      2
    </button>
    <button
      type="button"
      className="border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
    >
      3
    </button>
    <button
      type="button"
      className="rounded-r-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
    >
      Next
    </button>
  </div>
);

export const FAB: React.FC = () => (
  <div className="relative bg-gray-200 h-40 w-full">
    <div className="absolute right-2 bottom-2">
      <button className="rounded-full bg-blue-500 p-4 text-white shadow-md hover:bg-blue-600 focus:border-blue-300 focus:outline-none focus:ring">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>
    </div>
  </div>
);
