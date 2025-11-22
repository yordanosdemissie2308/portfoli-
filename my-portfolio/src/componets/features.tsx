import { Zap, Shield, Layers, Cpu } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with our optimized infrastructure. Load times under 100ms guaranteed.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and security protocols to keep your data safe and protected at all times.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description:
      "Connect with your favorite tools instantly. Works with over 100+ popular platforms and services.",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description:
      "Leverage cutting-edge artificial intelligence to automate workflows and make smarter decisions.",
    gradient: "from-purple-400 to-pink-500",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-50 rounded-full mb-4">
            <span className="text-sm text-purple-700">Features</span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
            Everything You Need to Succeed
          </h2>
          <p className="text-slate-600">
            Powerful features designed to elevate your workflow and drive
            results. Built for teams who demand excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/50 group-hover:to-blue-50/50 rounded-3xl transition-all duration-300"></div>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div
                  className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-xl transition-opacity duration-300`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
