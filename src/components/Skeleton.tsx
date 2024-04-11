export const BasicSkeleton: React.FC = () => (
  <div className="mx-auto max-w-3xl rounded-md bg-white p-8 shadow-md">
    <div className="animate-pulse space-y-4">
      <div className="h-4 rounded bg-gray-300"></div>
      <div className="h-6 w-3/4 rounded bg-gray-300"></div>
      <div className="h-6 w-1/2 rounded bg-gray-300"></div>
    </div>
  </div>
);

export const SkeletonLoadingforImageCard: React.FC = () => (
  <div className="mx-auto max-w-md rounded-md bg-white p-6 shadow-md">
    <div className="animate-pulse">
      <div className="mb-4 h-40 rounded-md bg-gray-300"></div>
      <div className="h-4 w-2/3 bg-gray-300"></div>
    </div>
  </div>
);

export const SkeletonLoadingforUserProfile: React.FC = () => (
  <div className="mx-auto max-w-md rounded-md bg-white p-6 shadow-md">
    <div className="flex animate-pulse items-center space-x-4">
      <div className="h-12 w-12 rounded-full bg-gray-300"></div>
      <div>
        <div className="mb-2 h-4 w-20 rounded bg-gray-300"></div>
        <div className="h-3 w-16 rounded bg-gray-300"></div>
      </div>
    </div>
  </div>
);

export const SkeletonwithLoadedContent: React.FC = () => (
  <div className="mx-auto max-w-3xl p-4">
    <div className="animate-pulse rounded-md bg-gray-200 p-6">
      <div className="mb-4 flex items-center">
        <div className="h-12 w-12 rounded-full bg-gray-300"></div>
        <div className="ml-4">
          <div className="h-4 w-20 rounded bg-gray-300"></div>
          <div className="mt-2 h-4 w-16 rounded bg-gray-300"></div>
        </div>
      </div>
      <div className="h-4 w-32 rounded bg-gray-300"></div>
      <div className="mt-2 h-4 w-56 rounded bg-gray-300"></div>
      <div className="mt-2 h-4 w-48 rounded bg-gray-300"></div>
    </div>
    <div className="mt-8">
      <h1 className="m-0 text-2xl font-bold">
        Your Preloaded Content Goes Here
      </h1>
      <p className="m-0 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>
    </div>
  </div>
);
