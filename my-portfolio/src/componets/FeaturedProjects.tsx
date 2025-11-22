import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern, full-featured e-commerce solution with real-time inventory management, secure payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["React", "Tailwind CSS", "TypeScript", "Firebase"],
    gradient: "from-blue-500 to-cyan-500",
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics platform with interactive charts, KPI tracking, and detailed reporting for data-driven decisions.",
    image:
      "https://images.unsplash.com/photo-1761593280919-766a4acbcfca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/yourusername/analytics-dashboard",
    live: "#",
  },
  {
    title: "Bingo Game App",
    description:
      "Cross-platform interactive Bingo game with real-time multiplayer, dynamic cards, and engaging animations.",
    image: "pic3.png",
    tags: ["Nest.js", "Firebase", "TypeScript"],
    gradient: "from-green-500 to-emerald-500",
    github: "https://github.com/yourusername/bingo-game-app",
    live: "#",
  },
  {
    title: "Task Tracker App",
    description:
      "Efficient task management app with user authentication, task categories, deadlines, and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1581091215360-6b3b25c23b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Nest.js", "Next.js", "Postgres", "Tailwind CSS"],
    gradient: "from-orange-500 to-red-500",
    github: "https://github.com/yourusername/task-tracker-app",
    live: "#",
  },
  {
    title: "Online Pharma Store",
    description:
      "A secure online platform for pharmacy products with inventory management, user-friendly UI, and checkout features.",
    image:
      "https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    gradient: "from-indigo-500 to-purple-500",
    github: "https://github.com/yourusername/online-pharma-store",
    live: "#",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50/20 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 border border-purple-200/50">
            <span className="text-sm text-purple-700">Portfolio</span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent text-4xl font-bold">
            Featured Projects
          </h2>
          <p className="text-slate-600">
            A selection of my recent work, showcasing unique challenges and
            creative solutions in modern web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-t-3xl`}
                ></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-slate-900 mb-3 text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-base mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs rounded-full border border-purple-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-white/90 backdrop-blur-sm text-slate-900 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    GitHub
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
