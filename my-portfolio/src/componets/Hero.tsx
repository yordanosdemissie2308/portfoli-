import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden  from-white via-purple-50/30 to-blue-50/40 pt-20 pb-32">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-lg shadow-purple-100/50">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-900">
                Introducing the future of technology
              </span>
            </div>

            <h1 className="bg-gradient-to-r from-slate-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
              Transform Your Digital Experience
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0">
              Experience the next generation of innovation. Our cutting-edge
              platform combines powerful features with elegant simplicity to
              revolutionize the way you work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-2 justify-center">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-900 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl hover:border-purple-300 hover:scale-105 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-slate-900">10K+</div>
                <div className="text-sm text-slate-500">Active Users</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="text-center">
                <div className="text-slate-900">99.9%</div>
                <div className="text-sm text-slate-500">Uptime</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="text-center">
                <div className="text-slate-900">4.9/5</div>
                <div className="text-sm text-slate-500">Rating</div>
              </div>
            </div>
          </div>

          {/* Right - Product Mockup */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-white/50 bg-gradient-to-br from-white/80 to-purple-50/30 backdrop-blur-sm p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1750056393356-d1de9d222a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZGV2aWNlJTIwbW9ja3VwfGVufDF8fHx8MTc2Mzc4ODgyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Product mockup"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl shadow-xl animate-pulse opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-xl animate-pulse opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
