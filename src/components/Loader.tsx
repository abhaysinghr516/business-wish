"use client";

export const Loaders: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
    <div className="flex flex-col items-center">
      <SpinnerLoader />
      <span className="mt-2 text-sm text-gray-600">Spinner</span>
    </div>
    <div className="flex flex-col items-center">
      <PulseLoader />
      <span className="mt-2 text-sm text-gray-600">Pulse</span>
    </div>
    <div className="flex flex-col items-center">
      <DotsLoader />
      <span className="mt-2 text-sm text-gray-600">Dots</span>
    </div>
    <div className="flex flex-col items-center">
      <CircleLoader />
      <span className="mt-2 text-sm text-gray-600">Circle</span>
    </div>
    <div className="flex flex-col items-center">
      <BarLoader />
      <span className="mt-2 text-sm text-gray-600">Bar</span>
    </div>
    <div className="flex flex-col items-center">
      <SquareLoader />
      <span className="mt-2 text-sm text-gray-600">Square</span>
    </div>
    <div className="flex flex-col items-center">
      <HourglassLoader />
      <span className="mt-2 text-sm text-gray-600">Hourglass</span>
    </div>
  </div>
);

function SpinnerLoader() {
  return (
    <div
      className="w-8 h-8 border-4 border-blue-500 rounded-full"
      style={{
        borderRightColor: "transparent",
        animation: "spin 1s linear infinite",
      }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

function PulseLoader() {
  return (
    <div className="flex space-x-1" role="status">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="w-2 h-8 bg-blue-500 rounded-full"
          style={{
            animation: "pulse 1.4s ease-in-out infinite",
            animationDelay: `${index * 0.2}s`,
          }}
        ></div>
      ))}
      <span className="sr-only">Loading...</span>
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.4);
          }
        }
      `}</style>
    </div>
  );
}

function DotsLoader() {
  return (
    <div className="flex space-x-1" role="status">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="w-2 h-2 bg-blue-500 rounded-full"
          style={{
            animation: "bounce 1.4s infinite ease-in-out",
            animationDelay: `${index * 0.16}s`,
          }}
        ></div>
      ))}
      <span className="sr-only">Loading...</span>
      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

function CircleLoader() {
  return (
    <div
      className="w-8 h-8 border-2 border-gray-200 rounded-full"
      style={{
        borderTopColor: "#3B82F6",
        animation: "spin 1s linear infinite",
      }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

function BarLoader() {
  return (
    <div
      className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden"
      role="status"
    >
      <div
        className="h-full bg-blue-500"
        style={{
          width: "30%",
          animation: "slide 1s ease-in-out infinite",
        }}
      ></div>
      <span className="sr-only">Loading...</span>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
      `}</style>
    </div>
  );
}

function SquareLoader() {
  return (
    <div
      className="w-8 h-8 bg-blue-500"
      style={{
        animation: "rotate 1.5s ease-in-out infinite",
      }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: perspective(120px) rotateX(0deg) rotateY(0deg);
          }
          50% {
            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
          }
          100% {
            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
          }
        }
      `}</style>
    </div>
  );
}

function HourglassLoader() {
  return (
    <div
      className="w-8 h-8 border-4 border-blue-500 rounded-full"
      style={{
        animation: "hourglass 1.5s ease-in-out infinite",
      }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
      <style jsx>{`
        @keyframes hourglass {
          0% {
            transform: rotate(0deg);
            border-radius: 50%;
          }
          25% {
            transform: rotate(180deg);
            border-radius: 0%;
          }
          50% {
            transform: rotate(180deg);
            border-radius: 50%;
          }
          75% {
            transform: rotate(360deg);
            border-radius: 0%;
          }
          100% {
            transform: rotate(360deg);
            border-radius: 50%;
          }
        }
      `}</style>
    </div>
  );
}
