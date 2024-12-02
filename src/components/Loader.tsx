"use client";

export const Loaders: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
    <div className="flex flex-col items-center">
      <SpinnerLoader />
      <span className="mt-2 text-sm text-gray-500 font-medium">Spinner</span>
    </div>
    <div className="flex flex-col items-center">
      <PulseLoader />
      <span className="mt-2 text-sm text-gray-500 font-medium">Pulse</span>
    </div>
    <div className="flex flex-col items-center">
      <DotsLoader />
      <span className="mt-2 text-sm text-gray-500 font-medium">Dots</span>
    </div>
    <div className="flex flex-col items-center">
      <CircleLoader />
      <span className="mt-2 text-sm text-gray-500 font-medium">Circle</span>
    </div>
    <div className="flex flex-col items-center">
      <BarLoader />
      <span className="mt-2 text-sm text-gray-500 font-medium">Bar</span>
    </div>
    <div className="flex flex-col items-center">
      <SquareLoader />
      <span className="mt-2 text-sm text-gray-500 font-medium">Square</span>
    </div>
    <div className="flex flex-col items-center">
      <HourglassLoader />
      <span className="mt-2 text-sm text-gray-500 font-medium">Hourglass</span>
    </div>
  </div>
);

function SpinnerLoader() {
  return (
    <div
      className="w-8 h-8 border-4  border-[rgba(0, 0, 0, 0.08)] rounded-full"
      style={{
        borderRightColor: "transparent",
        animation: "spin 0.8s cubic-bezier(0.42, 0, 0.58, 1) infinite",
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
          className="w-1.5 h-6 bg-black rounded-full opacity-30"
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
    <div className="flex space-x-1.5" role="status">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="w-2 h-2 bg-black rounded-full opacity-30"
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
      className="w-8 h-8 rounded-full"
      style={{
        background: "conic-gradient(from 0deg, #000, rgba(0, 0, 0, 0.08))",
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
      className="w-16 h-1 bg-black/[0.08] rounded-full overflow-hidden"
      role="status"
    >
      <div
        className="h-full bg-black"
        style={{
          width: "25%",
          animation: "slide 1s cubic-bezier(0.4, 0, 0.2, 1) infinite",
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
      className="w-6 h-6 bg-black/30"
      style={{
        animation:
          "rotate 1.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite",
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
      className="w-6 h-6 border-4 border-black/30 rounded-lg"
      style={{
        animation:
          "hourglass 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite",
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
            border-radius: 4px;
          }
          50% {
            transform: rotate(180deg);
            border-radius: 50%;
          }
          75% {
            transform: rotate(360deg);
            border-radius: 4px;
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
