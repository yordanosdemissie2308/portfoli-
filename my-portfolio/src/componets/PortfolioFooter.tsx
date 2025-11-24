import { Linkedin, Github, Mail, Heart } from "lucide-react";

export function PortfolioFooter() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"></div>
              <div>
                <div className="text-white">Yordanos</div>
                <div className="text-sm text-purple-300">
                  Developer & Designer
                </div>
              </div>
            </div>
            <p className="text-purple-200 text-sm mb-6">
              Building beautiful digital experiences, one project at a time.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/yordanos-demissie-80379a358/"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-purple-400 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-purple-200" />
              </a>
              <a
                href="https://github.com/yordanosdemissie2308/"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-purple-400 hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-purple-200" />
              </a>
              <a
                href="mailto:yordanoselluwork@gmail.com"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-purple-400 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-purple-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="./componets/HowItWorks.tsx"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Work Process
                </a>
              </li>
              <li>
                <a
                  href="./componets/Testimonials.tsx"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:yordanoselluwork@gmail.com"
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  yordanoselluwork@gmail.com
                </a>
              </li>
              <li className="text-purple-200 text-sm">
                📍 Addis Abeba, Ethiopia
              </li>
              <li className="text-purple-200 text-sm">
                Available for freelance work
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-purple-200 text-sm">
            <span>© 2025 Yordanos Tesfaye. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2 text-purple-200 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
