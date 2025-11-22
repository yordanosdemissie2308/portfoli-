import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for individuals and small teams getting started",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "Core features",
    ],
    recommended: false,
    gradient: "from-slate-600 to-slate-700",
  },
  {
    name: "Professional",
    price: "79",
    description: "Ideal for growing teams and businesses",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support 24/7",
      "All features included",
      "Custom integrations",
      "API access",
    ],
    recommended: true,
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom analytics",
      "Dedicated support",
      "All features included",
      "Custom integrations",
      "Advanced API access",
      "SLA guarantee",
    ],
    recommended: false,
    gradient: "from-purple-600 to-pink-600",
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 border border-purple-200/50">
            <span className="text-sm text-purple-700">Pricing</span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h2>
          <p className="text-slate-600">
            Flexible pricing that scales with your business. All plans include a
            14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                plan.recommended
                  ? "bg-gradient-to-br from-indigo-600 to-purple-600 border-purple-400 shadow-2xl shadow-purple-500/30 scale-105 md:scale-110"
                  : "bg-white/80 backdrop-blur-sm border-slate-200 hover:border-purple-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg">
                  <span className="flex items-center gap-1.5 text-sm text-slate-900">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3
                  className={`mb-2 ${
                    plan.recommended ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.recommended ? "text-purple-100" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-5xl ${
                      plan.recommended ? "text-white" : "text-slate-900"
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-lg ${
                      plan.recommended ? "text-purple-100" : "text-slate-600"
                    }`}
                  >
                    /month
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full px-6 py-4 rounded-2xl mb-8 transition-all duration-300 ${
                  plan.recommended
                    ? "bg-white text-indigo-600 hover:bg-purple-50 shadow-lg hover:shadow-xl hover:scale-105"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
                }`}
              >
                Get Started
              </button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.recommended ? "bg-white/20" : "bg-purple-100"
                      }`}
                    >
                      <Check
                        className={`w-3.5 h-3.5 ${
                          plan.recommended ? "text-white" : "text-purple-600"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.recommended ? "text-purple-50" : "text-slate-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              {!plan.recommended && (
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-slate-600">
            All plans include our core features. Need a custom solution?{" "}
            <a
              href="#"
              className="text-indigo-600 hover:text-purple-600 transition-colors"
            >
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
