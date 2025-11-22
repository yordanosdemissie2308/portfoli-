import { ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand */}
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Yordanos Demissie
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 text-slate-900 font-medium">
            <li className="hover:text-indigo-600 transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-indigo-600 transition-colors cursor-pointer">
              About
            </li>
            <li className="hover:text-indigo-600 transition-colors cursor-pointer">
              Projects
            </li>
            <li className="hover:text-indigo-600 transition-colors cursor-pointer">
              Skills
            </li>
            <li className="hover:text-indigo-600 transition-colors cursor-pointer">
              Contact
            </li>
          </ul>

          {/* Call-to-action button */}
          <div className="hidden lg:flex">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
              Hire Me <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="text-slate-900">
              {/* Hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
