import { Terminal, Database, Layers, Shield, Cloud, Code } from "lucide-react";

export const BasicFeatures: React.FC = () => (
  <section className="py-12 bg-gray-50 dark:bg-gray-950">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
        Our Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex items-center space-x-4">
          <Terminal className="w-8 h-8 text-teal-600 dark:text-teal-400" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Command-Line Interface
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Control everything via terminal with ease.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Database className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Secure Database
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Ensure your data is safely stored and encrypted.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Layers className="w-8 h-8 text-pink-600 dark:text-pink-400" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Modular Architecture
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Build systems with flexible and reusable modules.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Advanced Security
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Protect your applications with top-notch security features.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Cloud className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Cloud Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Seamlessly integrate with cloud services.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Code className="w-8 h-8 text-green-600 dark:text-green-400" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Customizable Code
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Easily customize and extend the codebase.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
