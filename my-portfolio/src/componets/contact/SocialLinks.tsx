import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "#",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      gradient: "from-blue-600 to-blue-700",
    },
  ];

  return (
    <div className="mb-16">
      <h3 className="text-center text-gray-700 mb-8">Connect With Me</h3>

      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div
                className={`relative flex items-center gap-3 px-8 py-4 bg-white/70 backdrop-blur-md rounded-[24px] shadow-md hover:shadow-xl transition-all duration-300 border border-white/20 hover:-translate-y-1`}
              >
                <Icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300 relative z-10" />
                <span className="text-gray-700 group-hover:text-white transition-colors duration-300 relative z-10">
                  {social.name}
                </span>
                <div
                  className={`absolute inset-0 rounded-[24px] bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
              <div
                className={`absolute -inset-1 rounded-[26px] bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
