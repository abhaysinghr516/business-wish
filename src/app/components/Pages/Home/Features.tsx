import React, { FunctionComponent } from "react";
import { CheckCircle, Star, Code, Zap, Coffee } from "lucide-react";

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
  <div className="border border-gray-800 p-6 rounded-lg">
    <Icon className="text-purple-500 mb-4" size={32} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features: FunctionComponent = () => (
  <section className="py-16 px-4 md:px-20">
    <div className="container mx-auto px-4 sm:px-0">
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
);

export default Features;
