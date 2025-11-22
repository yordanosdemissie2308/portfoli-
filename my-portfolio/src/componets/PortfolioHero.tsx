import { ArrowRight, Download, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/20 to-blue-50/30 pt-32 pb-40">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h1 className="bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-6">
                Full-Stack Website Developer & Designer
              </h1>
              <p className="text-xl max-w-xl mx-auto lg:mx-0">
                I craft beautiful, functional digital experiences that bridge
                design and code. Specialized in React, Node.js, and modern web
                technologies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-2 justify-center">
                  Hire Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group px-8 py-4 bg-white/90 backdrop-blur-sm text-slate-900 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl hover:border-purple-300 hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-2 justify-center">
                  <Download className="w-5 h-5" />
                  Download CV
                </span>
              </button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start pt-6">
              <div>
                <div className="text-slate-900">3+ Years</div>
                <div className="text-sm text-slate-500">Experience</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div>
                <div className="text-slate-900">10+ Projects</div>
                <div className="text-sm text-slate-500">Completed</div>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div>
                <div className="text-slate-900">4+ Clients</div>
                <div className="text-sm text-slate-500">Satisfied</div>
              </div>
            </div>
          </div>

          {/* Right - Mockup Display */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative">
              {/* Glassmorphic Container */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/90 to-purple-50/40 backdrop-blur-xl border border-white/50 shadow-2xl shadow-purple-500/20 p-8">
                <img src="./public/pic2.png" />
              </div>

              {/* Floating Accent Cards */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl shadow-2xl shadow-purple-500/40 opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl shadow-blue-500/40 opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
