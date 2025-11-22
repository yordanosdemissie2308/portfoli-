import { Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery & Planning",
    description:
      "I start by understanding your goals, target audience, and project requirements. Together, we create a strategic roadmap.",
    step: "01",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Code,
    title: "Design & Development",
    description:
      "Bringing ideas to life with clean code and beautiful design. I iterate quickly while maintaining quality standards.",
    step: "02",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Smooth deployment with thorough testing. I provide ongoing support and optimization to ensure long-term success.",
    step: "03",
    gradient: "from-blue-400 to-indigo-500",
  },
];

export function WorkProcess() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-purple-50 rounded-full mb-4">
            <span className="text-sm text-purple-700">Process</span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
            How I Work
          </h2>
          <p className="text-slate-600">
            A streamlined process designed to deliver exceptional results. From
            concept to launch, every step is carefully crafted.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-200 via-purple-200 to-blue-200 -z-10"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="group relative bg-gradient-to-br from-white to-purple-50/20 rounded-3xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  {/* Glassmorphic Overlay */}
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    {/* Step Number Badge */}
                    <div
                      className={`absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white text-xl">{step.step}</span>
                    </div>

                    {/* Icon */}
                    <div className="mt-8 mb-6 flex justify-center">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-slate-900 text-center mb-4">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-base text-center">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative Glow */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                </div>

                {/* Connection Point */}
                <div className="hidden md:block absolute top-32 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">Ready to start your project?</p>
          <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
            <span className="flex items-center gap-2">
              Let's Work Together
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
