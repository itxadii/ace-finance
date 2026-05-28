"use client";

import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    id: "testimonial-ravi",
    quote: "ACE Financial Services helped us expand our manufacturing unit with a quick business loan. The process was smooth and completely transparent.",
    name: "Ravi B.",
    role: "Manufacturing Owner",
  },
  {
    id: "testimonial-ajit",
    quote: "As a startup, getting funding was challenging. The ACE Financial Services team truly understood our needs and matched us with the right bank.",
    name: "Ajit Patil",
    role: "Retail Trader",
  },
  {
    id: "testimonial-suraj",
    quote: "Excellent service and competitive rates. They helped us open three new stores with their working capital loan solutions.",
    name: "Suraj K.",
    role: "Franchise Owner",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative bg-white py-24 px-6 overflow-hidden border-t border-emerald-100"
    >
      {/* Decorative BG Glow (Subtle Green) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.04)_0%,transparent_70%)] rounded-full pointer-events-none" />
      {/* Background Pattern - Right Side */}


      <div className="container mx-auto max-w-[1200px] relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-emerald-50 text-emerald-600 font-bold text-sm tracking-widest uppercase border border-emerald-100">
            ⭐ Client Stories
          </div>
          <h2 className="text-[clamp(32px,4vw,46px)] font-black text-slate-900 tracking-tight leading-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-[480px] mx-auto leading-relaxed">
            Real stories from business owners and individuals who achieved success.
          </p>
        </div>

        {/* Cards Grid - Added 'gap-10' for extra spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {testimonials.map((t) => (
            <div key={t.id} className="h-full">
              <TestimonialCard
                label="Client Review"
                quote={t.quote}
                authorName={t.name}
                authorRole={t.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}