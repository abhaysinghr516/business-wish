export const BasicSidebar: React.FC = () => (
  <div className="flex flex-col w-64  bg-gray-50 h-screen justify-between text-gray-700">
    <div className="overflow-y-auto px-3 py-4">
      <div className="space-y-2">
        <div>
          <div className="flex items-center rounded-lg p-2 text-base font-normal">
            <span className="ml-3">Logo</span>
          </div>
        </div>
        <div>
          <div className="cursor-pointer flex items-center rounded-lg p-2 text-base font-normal hover:bg-slate-200">
            <span className="ml-3">Dashboard</span>
          </div>
        </div>
        <div>
          <div className="cursor-pointer flex items-center rounded-lg p-2 text-base font-normal hover:bg-slate-200">
            <span className="ml-3 flex-1 whitespace-nowrap">Projects</span>
          </div>
        </div>
        <div>
          <div className="cursor-pointer flex items-center rounded-lg p-2 text-base font-normal hover:bg-slate-200">
            <span className="ml-3 flex-1 whitespace-nowrap">Team</span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4 flex items-center">
      <img
        className="m-0 object-cover mx-2 rounded-full h-9 w-9"
        src="https://source.unsplash.com/random/32x32"
        alt="avatar"
      />
      <span className="mx-2 font-medium ">John Doe</span>
    </div>
  </div>
);

export const SidebarwithIcons: React.FC = () => (
  <div className="flex flex-col w-64  bg-gray-50 h-screen justify-between text-gray-700">
    <div className="overflow-y-auto px-3 py-4">
      <div className="space-y-2">
        <div>
          <div className="flex items-center rounded-lg p-2 text-base font-normal">
            <span className="ml-3">Logo</span>
          </div>
        </div>
        <div>
          <div className="cursor-pointer flex items-center rounded-lg p-2 text-base font-normal hover:bg-slate-200">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>
            <span className="ml-3">Home</span>
          </div>
        </div>
        <div>
          <div className="cursor-pointer flex items-center rounded-lg p-2 text-base font-normal hover:bg-slate-200">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                />
              </svg>
            </span>
            <span className="ml-3 flex-1 whitespace-nowrap">Dashboard</span>
          </div>
        </div>
        <div>
          <div className="cursor-pointer flex items-center rounded-lg p-2 text-base font-normal hover:bg-slate-200">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </span>
            <span className="ml-3 flex-1 whitespace-nowrap">Team</span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4 flex items-center">
      <img
        className="m-0 object-cover mx-2 rounded-full h-9 w-9"
        src="https://source.unsplash.com/random/32x32"
        alt="avatar"
      />
      <span className="mx-2 font-medium ">John Doe</span>
    </div>
  </div>
);

export const CollapseSidebar: React.FC = () => (
  <div className="flex flex-col  bg-gray-50 w-fit h-screen justify-between text-gray-700">
    <div className="overflow-y-auto px-3 py-4">
      <div className="space-y-2">
        <div>
          <div className="flex items-center rounded-lg p-2 text-base font-normal">
            <span className="font-bold">Logo</span>
          </div>
        </div>
        <div>
          <div className="cursor-pointer flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-slate-200">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <div className="cursor-pointer flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-slate-200">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <div className="cursor-pointer flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-slate-200">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4 flex items-center">
      <img
        className="object-cover rounded-full h-9 w-9"
        src="https://source.unsplash.com/random/32x32"
        alt="avatar"
      />
    </div>
  </div>
);
