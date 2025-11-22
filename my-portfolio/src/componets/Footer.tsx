import { Twitter, Linkedin, Github, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="mb-4 text-white">Stay in the Loop</h3>
            <p className="text-purple-200 mb-8">
              Get the latest updates, insights, and exclusive offers delivered
              to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
              />
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-2 justify-center">
                  Subscribe
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h4 className="mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Press Kit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">✦</span>
            </div>
            <div>
              <div className="text-white">TechFlow</div>
              <div className="text-sm text-purple-300">
                © 2025 All rights reserved
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-purple-400 hover:scale-110 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-purple-200" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-purple-400 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-purple-200" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-purple-400 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-purple-200" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-purple-400 hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-purple-200" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
