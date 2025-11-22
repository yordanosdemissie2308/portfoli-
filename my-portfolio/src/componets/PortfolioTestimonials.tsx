import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const testimonials = [
  {
    name: "Pawlos Gelgelo",
    role: "Group leader",
    image: "./groupleader.png",
    quote:
      "Yordanos exceeded all expectations. The attention to detail and technical expertise delivered a product that transformed our business. Highly recommend!",
    rating: 5,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Hana G/medihn",
    role: "Group member",
    image: "./hana.png",
    quote:
      "Working with Yordanos was seamless. From design to deployment, every phase was handled professionally. The final product exceeded our vision.",
    rating: 5,
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    name: "dr.Michael Demissie",
    role: "Medical doctor (client)",
    image: "./babi.png",
    quote:
      "Exceptional developer with impressive design sense and high-quality work — looking forward to collaborating again.",
    rating: 5,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

export function PortfolioTestimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 border border-purple-200/50">
            <span className="text-sm text-purple-700">Testimonials</span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-slate-600">
            Don't just take my word for it. Here's what clients have to say
            about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div
                className={`relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Gradient Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Glassmorphic Overlay */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg opacity-80">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-slate-700 text-base italic mb-8 text-center leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"></div>

                  {/* Author Info */}
                  <div className="flex flex-col items-center">
                    {/* Profile Image with Glow */}
                    <div className="relative mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Glow Ring */}
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${testimonial.gradient} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                      ></div>
                    </div>

                    {/* Name & Role */}
                    <div className="text-center">
                      <div className="text-slate-900 mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-tr-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200/50 shadow-lg">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md"
                >
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-slate-900">10+ Happy Clients</div>
              <div className="text-sm text-slate-500">
                5-star rated projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
