import { Check, Sparkles, Zap } from "lucide-react";

const services = [
  {
    name: "Basic",
    price: "1,500",
    description: "Perfect for small projects and landing pages",
    features: [
      "Single page website",
      "Responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "2 rounds of revisions",
      "1 month support",
    ],
    recommended: false,
    gradient: "from-slate-600 to-slate-700",
    icon: null,
  },
  {
    name: "Standard",
    price: "3,500",
    description: "Ideal for business websites and web apps",
    features: [
      "Multi-page website/app",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "CMS integration",
      "API development",
      "5 rounds of revisions",
      "3 months support",
      "Performance optimization",
    ],
    recommended: true,
    gradient: "from-indigo-600 to-purple-600",
    icon: Sparkles,
  },
  {
    name: "Premium",
    price: "7,500",
    description: "Complete solution for complex projects",
    features: [
      "Full-stack application",
      "Custom design system",
      "Advanced features & integrations",
      "Database architecture",
      "Admin dashboard",
      "Unlimited revisions",
      "6 months support",
      "Performance optimization",
      "Security audit",
      "Deployment & hosting setup",
    ],
    recommended: false,
    gradient: "from-purple-600 to-pink-600",
    icon: Zap,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-50 rounded-full mb-4">
            <span className="text-sm text-purple-700">Services & Pricing</span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
            Choose Your Package
          </h2>
          <p className="text-slate-600">
            Transparent pricing for quality work. Each package is tailored to
            deliver exceptional value.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-500 ${
                  service.recommended
                    ? "bg-gradient-to-br from-indigo-600 to-purple-600 border-purple-400 shadow-2xl shadow-purple-500/40 scale-105 md:scale-110 z-10"
                    : "bg-white/90 backdrop-blur-sm border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-2"
                }`}
              >
                {/* Recommended Badge */}
                {service.recommended && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg">
                    <span className="flex items-center gap-2 text-sm text-slate-900">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                {Icon && (
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}

                {/* Plan Name */}
                <div className="text-center mb-6">
                  <h3
                    className={`mb-3 ${
                      service.recommended ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {service.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      service.recommended ? "text-purple-100" : "text-slate-600"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-2">
                    <span
                      className={`text-sm ${
                        service.recommended
                          ? "text-purple-100"
                          : "text-slate-600"
                      }`}
                    >
                      From
                    </span>
                    <span
                      className={`text-5xl ${
                        service.recommended ? "text-white" : "text-slate-900"
                      }`}
                    >
                      ${service.price}
                    </span>
                  </div>
                  <p
                    className={`text-sm mt-2 ${
                      service.recommended ? "text-purple-100" : "text-slate-500"
                    }`}
                  >
                    per project
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`w-full h-px mb-8 ${
                    service.recommended ? "bg-white/20" : "bg-slate-200"
                  }`}
                ></div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          service.recommended ? "bg-white/20" : "bg-purple-100"
                        }`}
                      >
                        <Check
                          className={`w-3.5 h-3.5 ${
                            service.recommended
                              ? "text-white"
                              : "text-purple-600"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          service.recommended
                            ? "text-purple-50"
                            : "text-slate-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full px-6 py-4 rounded-2xl transition-all duration-300 ${
                    service.recommended
                      ? "bg-white text-indigo-600 hover:bg-purple-50 shadow-lg hover:shadow-xl hover:scale-105"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
                  }`}
                >
                  Get Started
                </button>
                {!service.recommended && (
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Need something custom? Let's discuss your unique requirements.
          </p>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300">
            Contact for Custom Quote
            <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
}
