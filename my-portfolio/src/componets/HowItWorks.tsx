import { Download, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Sign Up & Install",
    description:
      "Create your account in seconds and install our platform with zero configuration required.",
    step: "01",
  },
  {
    icon: Settings,
    title: "Customize Your Setup",
    description:
      "Tailor the experience to your needs with our intuitive configuration tools and templates.",
    step: "02",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "Go live instantly and scale seamlessly as your business grows. We handle the complexity.",
    step: "03",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50/20 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 border border-purple-200/50">
            <span className="text-sm text-purple-700">How It Works</span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Get Started in Minutes
          </h2>
          <p className="text-slate-600">
            Our streamlined process gets you up and running quickly. No
            technical expertise required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-8 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg">
                    <span className="text-sm">Step {step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="mt-6 mb-6 inline-flex p-5 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 text-base">{step.description}</p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>

                {/* Connector Dot */}
                <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
