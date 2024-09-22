import { CheckCircle, ChevronRight, Code, Zap } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

interface FeatureCardProps {
  icon: FunctionComponent<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

const FeatureCard: FunctionComponent<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="relative z-20">
    {" "}
    <Icon className="text-purple-500 mb-4" size={32} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Home() {
  return (
    <>
      <section className="bg-white text-black lg:py-32 flex items-center justify-center px-4 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>

        <div className="max-w-3xl w-full text-center relative z-20">
          <h1 className="text-3xl sm:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Elevate Your Design
          </h1>
          <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
            Our UI components library embraces minimalism and flexibility,
            allowing you to create stunning interfaces with ease.
          </p>
          <Link
            href="/docs/components/404"
            className="inline-flex items-center text-lg font-semibold text-blue-600 hover:underline"
          >
            Explore Components
            <ChevronRight className="ml-1" size={20} />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 md:px-20 lg:pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4 sm:px-0 relative z-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Business Wish
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={CheckCircle as FunctionComponent}
              title="Easy Integration"
              description="Seamlessly integrate our components into your existing projects."
            />
            <FeatureCard
              icon={Zap as FunctionComponent}
              title="Performance Optimized"
              description="Lightweight and fast components to keep your app speedy."
            />
            <FeatureCard
              icon={Code as FunctionComponent}
              title="Customizable"
              description="Easily customize components to match your brand's look and feel."
            />
          </div>
        </div>
      </section>
    </>
  );
}
