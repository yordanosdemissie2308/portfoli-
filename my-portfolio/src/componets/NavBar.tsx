import { Icon, MessageCircle, X } from "lucide-react";
import { useState } from "react";

interface NavBarProps {
  onContactClick: () => void;
}

export function NavBar({ onContactClick }: NavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Yordanos Demissie
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8 text-slate-900 font-medium">
              <li
                className="hover:text-indigo-600 transition-colors cursor-pointer rounded-2xl shadow-2xs text-2xl px-3 py-2 text-blue-500"
                onClick={onContactClick}
              >
                <MessageCircle className="w-6 h-6" />
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="text-slate-900" onClick={() => setOpen(!open)}>
              {open ? (
                <MessageCircle className="w-6 h-6" onClick={onContactClick} />
              ) : (
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
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
