export const BasicDivider: React.FC = () => (
  <div className="mx-auto max-w-screen-xl p-6 text-base">
    Section
    <hr className="my-4 border-t border-gray-300" />
    Section
  </div>
);

export const VerticalDivider: React.FC = () => (
  <div className="mx-auto text-base max-w-screen-xl p-6">
    <div className="flex">
      <div className="flex-1 pr-4">Section</div>
      <div className="w-px bg-gray-300"></div>
      <div className="flex-1 pl-4">Section</div>
    </div>
  </div>
);

export const CustomDividerwithIcon: React.FC = () => (
  <div className="mx-auto text-base max-w-screen-xl p-6">
    Section
    <div className="my-4 flex items-center">
      <div className="flex-1 border-t border-gray-300"></div>
      <span className="mx-4 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-purple-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
          />
        </svg>
      </span>
      <div className="flex-1 border-t border-gray-300"></div>
    </div>
    Section
  </div>
);

export const GradientDivider: React.FC = () => (
  <div className="mx-auto text-base max-w-screen-xl p-6">
    Section
    <div className="my-4 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
    Section
  </div>
);
