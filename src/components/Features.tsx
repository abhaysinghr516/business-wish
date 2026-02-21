import React from "react";
import { Terminal, Database, Layers, Shield, Cloud, Code, Zap, Smartphone, Globe, Lock, Cpu, BarChart } from "lucide-react";

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color?: string; 
}

const BasicFeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="group p-8 bg-white dark:bg-neutral-900/50 rounded-[2rem] border border-neutral-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex flex-col space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center border border-neutral-100 dark:border-white/5 transition-transform duration-300 group-hover:scale-105">
          <Icon className="w-6 h-6 text-neutral-900 dark:text-white" strokeWidth={1.5} />
        </div>
        <div className="space-y-2.5">
          <h3 className="text-[17px] font-semibold tracking-tight text-neutral-900 dark:text-white">
            {title}
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed">
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
      description: "Control everything via terminal with ease. Powerful CLI tools for automated workflows and quick deployments.",
    },
    {
      icon: Database,
      title: "Secure Database",
      description: "Ensure your data is safely stored and encrypted. Built-in protection against common security threats.",
    },
    {
      icon: Layers,
      title: "Modular Architecture",
      description: "Build systems with flexible and reusable modules. Scale your application with independently managed components.",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Protect your applications with top-notch security features. Industry-standard encryption and authentication.",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamlessly integrate with cloud services. Deploy and scale your applications with leading cloud providers.",
    },
    {
      icon: Code,
      title: "Customizable Code",
      description: "Easily customize and extend the codebase. Well-documented API and flexible architecture for your needs.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-2xl text-left mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
            Powerful capabilities.
          </h2>
          <p className="text-lg text-neutral-500 dark:text-neutral-400">
            Everything you need to build faster, scale further, and create exceptional experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <BasicFeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const MinimalFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized build processes and global edge caching ensure your application loads instantly for users everywhere.",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade encryption, role-based access control, and automated compliance sweeping built right into the core.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy to multiple regions simultaneously with our automated orchestration and global content delivery network.",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col space-y-4">
                <Icon className="w-8 h-8 text-neutral-900 dark:text-white stroke-[1.5]" />
                <h3 className="text-[17px] font-semibold tracking-tight text-neutral-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const HoverFeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="group relative p-8 bg-neutral-50 dark:bg-neutral-900/40 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:bg-neutral-100 dark:hover:bg-neutral-800">
      {/* Subtle background glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-neutral-200/50 via-transparent to-transparent dark:from-white/5 mix-blend-overlay"></div>
      
      <div className="relative z-10 flex flex-col h-full space-y-6">
        <div className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
          <Icon className="w-5 h-5 text-neutral-900 dark:text-white transition-colors" strokeWidth={1.5} />
        </div>
        <div className="mt-auto space-y-3">
          <h3 className="text-[18px] font-semibold tracking-tight text-neutral-900 dark:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-[14px] leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const HoverFeatures = () => {
  const features = [
    {
      icon: Cpu,
      title: "Smart Resource Allocation",
      description: "Our engine automatically scales your containers based on real-time traffic heuristics and historical load predictions.",
    },
    {
      icon: Smartphone,
      title: "Responsive by Default",
      description: "Every component is meticulously tested on over 50 device form factors to guarantee a perfect mobile experience.",
    },
    {
      icon: BarChart,
      title: "Real-time Telemetry",
      description: "Gain instant visibility into performance bottlenecks with distributed tracing and sub-millisecond metric reporting.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Designed for performance.
          </h2>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
            We sweat the details so you don't have to. Enjoy an infrastructure that quietly powers your ambition.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <HoverFeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
