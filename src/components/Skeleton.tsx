export const BasicSkeleton: React.FC = () => (
  <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow-md">
    <div className="space-y-4 animate-pulse">
      <div className="h-4 bg-gray-300 rounded"></div>
      <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
      <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
    </div>
  </div>
);

export const SkeletonLoadingforImageCard: React.FC = () => (
  <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
    <div className="animate-pulse">
      <div className="h-40 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 w-2/3 bg-gray-300"></div>
    </div>
  </div>
);

export const SkeletonLoadingforUserProfile: React.FC = () => (
  <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
    <div className="flex items-center space-x-4 animate-pulse">
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div>
        <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-16 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
);

export const SkeletonwithLoadedContent: React.FC = () => (
  <div className="max-w-3xl mx-auto p-4">
    <div className="animate-pulse bg-gray-200 rounded p-6 mb-8">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="ml-4">
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <div className="h-4 w-16 bg-gray-300 rounded mt-2"></div>
        </div>
      </div>
      <div className="h-4 w-32 bg-gray-300 rounded"></div>
      <div className="h-4 w-56 bg-gray-300 rounded mt-2"></div>
      <div className="h-4 w-48 bg-gray-300 rounded mt-2"></div>
    </div>
    <div>
      <h2 className="text-2xl font-bold">Your Preloaded Content Goes Here</h2>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>
    </div>
  </div>
);
