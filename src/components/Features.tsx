import { Terminal, Database, Layers, Shield, Cloud, Code } from "lucide-react";

export const BasicFeatures: React.FC = () => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Our Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex items-center space-x-4">
          <Terminal className="w-8 h-8 text-teal-600" />
          <div>
            <h3 className="text-lg font-semibold">Command-Line Interface</h3>
            <p className="text-gray-600">
              Control everything via terminal with ease.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Database className="w-8 h-8 text-yellow-600" />
          <div>
            <h3 className="text-lg font-semibold">Secure Database</h3>
            <p className="text-gray-600">
              Ensure your data is safely stored and encrypted.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Layers className="w-8 h-8 text-pink-600" />
          <div>
            <h3 className="text-lg font-semibold">Modular Architecture</h3>
            <p className="text-gray-600">
              Build systems with flexible and reusable modules.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Shield className="w-8 h-8 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold">Advanced Security</h3>
            <p className="text-gray-600">
              Protect your applications with top-notch security features.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Cloud className="w-8 h-8 text-purple-600" />
          <div>
            <h3 className="text-lg font-semibold">Cloud Integration</h3>
            <p className="text-gray-600">
              Seamlessly integrate with cloud services.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Code className="w-8 h-8 text-green-600" />
          <div>
            <h3 className="text-lg font-semibold">Customizable Code</h3>
            <p className="text-gray-600">
              Easily customize and extend the codebase.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
