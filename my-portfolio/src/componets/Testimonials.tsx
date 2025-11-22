import { Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVision Inc",
    image:
      "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczNDUzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "This platform has completely transformed how our team collaborates. The intuitive design and powerful features have increased our productivity by 300%.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Product Director, InnovateLab",
    image:
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM3Njc4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "I've tried dozens of solutions, but nothing comes close to this. The AI features are game-changing, and the support team is exceptional.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "CTO, FutureStack",
    image:
      "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzcxODIzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "Outstanding product with enterprise-grade security. We migrated our entire infrastructure and couldn't be happier with the results.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-50 rounded-full mb-4">
            <span className="text-sm text-purple-700">Testimonials</span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-slate-900 to-purple-900 bg-clip-text text-transparent">
            Loved by Industry Leaders
          </h2>
          <p className="text-slate-600">
            Join thousands of satisfied customers who have transformed their
            businesses with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-purple-50/30 rounded-3xl p-8 border border-slate-200 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Glassmorphic Overlay */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 mb-8 text-base italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Quote Mark */}
              <div className="absolute top-6 right-6 text-6xl text-purple-200/50 group-hover:text-purple-300/50 transition-colors">
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
