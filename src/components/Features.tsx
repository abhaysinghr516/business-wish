import React from "react";
import { Terminal, Database, Layers, Shield, Cloud, Code } from "lucide-react";

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
}) => {
  return (
    <div className="group p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer">
      <div className="flex flex-col space-y-4">
        <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const BasicFeatures = () => {
  const features = [
    {
      icon: Terminal,
      title: "Command-Line Interface",
      description:
        "Control everything via terminal with ease. Powerful CLI tools for automated workflows and quick deployments.",
      color: "text-teal-600 dark:text-teal-400",
    },
    {
      icon: Database,
      title: "Secure Database",
      description:
        "Ensure your data is safely stored and encrypted. Built-in protection against common security threats.",
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Layers,
      title: "Modular Architecture",
      description:
        "Build systems with flexible and reusable modules. Scale your application with independently managed components.",
      color: "text-pink-600 dark:text-pink-400",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description:
        "Protect your applications with top-notch security features. Industry-standard encryption and authentication.",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Seamlessly integrate with cloud services. Deploy and scale your applications with leading cloud providers.",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Code,
      title: "Customizable Code",
      description:
        "Easily customize and extend the codebase. Well-documented API and flexible architecture for your needs.",
      color: "text-green-600 dark:text-green-400",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Features
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Powerful tools and capabilities to bring your ideas to life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BasicFeatures;
