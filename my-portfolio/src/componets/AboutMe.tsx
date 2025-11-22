import {
  Code2,
  Palette,
  Database,
  Zap,
  Layout,
  Smartphone,
} from "lucide-react";

const skills = [
  { icon: Code2, name: "React & Next.js", color: "from-blue-500 to-cyan-500" },
  {
    icon: Database,
    name: "Node.js,Nest.js & APIs",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Layout,
    name: "Responsive Design",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    name: "Performance Optimization",
    color: "from-yellow-500 to-orange-500",
  },
];

export function AboutMe() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Floating background lights */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="inline-block px-4 py-2 bg-purple-50 rounded-full mb-4 shadow-sm animate-glow"></div>
          <h2 className="mb-6 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
            Turning Ideas Into Reality
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Card */}
          <div
            className="relative group opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative bg-gradient-to-br from-white via-purple-50/20 to-blue-50/20 backdrop-blur-md rounded-3xl p-10 border border-slate-200 shadow-2xl hover:shadow-purple-300/40 transition-all duration-700">
              {/* Light glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-200/0 to-blue-200/0 group-hover:from-purple-200/40 group-hover:to-blue-200/40 opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <div className="relative flex flex-col items-center text-center space-y-6">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-purple-500/30 animate-float">
                    <img
                      src="/pic.png"
                      width={192}
                      height={192}
                      alt="Profile"
                      className="object-cover"
                    />
                  </div>

                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-purple-300/40 animate-spin-slow"></div>

                  {/* Status Badge */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                </div>

                <div>
                  <h3 className="text-slate-900 mb-2 text-lg font-semibold">
                    Yordanos Demissie
                  </h3>
                  <p className="text-purple-600 mb-4">
                    Full-Stack Developer & Designer
                  </p>
                  <p className="text-slate-600 text-base max-w-md">
                    With 4 years of hands-on experience in full-stack
                    development, I create modern, scalable web applications with
                    intuitive, visually polished interfaces. I blend frontend
                    creativity with backend power to build experiences users
                    love.
                  </p>
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex items-center justify-center gap-3 px-4 py-3 bg-purple-50 rounded-xl animate-fade-in">
                    <span>📧</span>
                    <span className="text-slate-700">
                      yordanoselluwork@gmail.com
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-3 px-4 py-3 bg-blue-50 rounded-xl animate-fade-in">
                    <span>📍</span>
                    <span className="text-slate-700">
                      Addis Ababa, Ethiopia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-slate-900 mb-6 text-xl font-semibold">
              Core Expertise
            </h3>
            <p className="text-slate-600 mb-10 leading-relaxed">
              I specialize in crafting modern digital experiences using
              performance-focused engineering, clean UI design, and scalable
              architecture to deliver products that feel both elegant and
              powerful.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Glow overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-100/0 to-blue-100/0 group-hover:from-purple-100/50 group-hover:to-blue-100/50 transition-all duration-500"></div>

                    <div className="relative flex flex-col items-center text-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-xl group-hover:scale-125 transition-all duration-500 animate-pulse-slow`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-slate-800">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px rgba(168, 85, 247, 0.3); }
          50% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.5); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 4s ease-in-out infinite; }
        .animate-fade-up { animation: fadeUp 1.2s ease forwards; }
        .animate-spin-slow { animation: spinSlow 12s linear infinite; }
        .animate-pulse-slow { animation: pulse 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
