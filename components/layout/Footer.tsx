"use client";

import Link from "next/link";
import { MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";

const loanLinks = [
  { label: "Home Loan", href: "/home-loan" },
  { label: "Personal Loan", href: "/personal-loan" },
  { label: "Business Loan", href: "/business-loan" },
  { label: "Loan Against Property", href: "/#services" },
  { label: "Used Car Loan", href: "/#services" },
  { label: "Credit Cards", href: "/#services" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/#why-choose" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">

      {/* Decorative Background Glows for the Glass Effect to blur over */}
      <div className="absolute inset-0 bg-slate-50/50 -z-20" />
      <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-[300px] h-[300px] bg-emerald-400/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

      {/* Main Glass Container */}
      <div className="relative z-10 bg-white/60 backdrop-blur-2xl border-t border-white/80 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <div className="container mx-auto px-6 max-w-[1200px] pt-16 pb-6">

          {/* Top grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 lg:gap-16 mb-16">

            {/* Brand column */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3 no-underline mb-6 group">
                <div className="w-[38px] h-[38px] bg-white rounded-lg flex items-center justify-center font-black text-lg text-emerald-600 border-2 border-emerald-500 shadow-sm group-hover:shadow-md transition-shadow">
                  A
                </div>
                <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                  ACE <span className="text-emerald-600">Finance</span>
                </span>
              </Link>

              <p className="text-sm text-slate-600 leading-relaxed max-w-[280px] mb-8">
                Your premier direct selling loan agent in Nashik. We partner with India's leading banks to secure the best loan rates for you at zero service charge.
              </p>

              {/* Social icons */}
              <div className="flex gap-3">
                {[

                  { id: "wa", icon: <MessageCircle size={18} />, label: "WhatsApp" },

                ].map((s) => (
                  <a
                    key={s.id}
                    href="#"
                    aria-label={s.label}
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-500 border border-slate-200 shadow-sm hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 hover:-translate-y-1 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Loan Products */}
            <div>
              <h4 className="text-[13px] font-bold text-slate-900 tracking-widest uppercase mb-6">
                Loan Products
              </h4>
              <ul className="flex flex-col gap-3">
                {loanLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-emerald-600 transition-colors inline-flex items-center"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[13px] font-bold text-slate-900 tracking-widest uppercase mb-6">
                Company
              </h4>
              <ul className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-emerald-600 transition-colors inline-flex items-center"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-[13px] font-bold text-slate-900 tracking-widest uppercase mb-6">
                Get In Touch
              </h4>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <MapPin size={18} />, text: "Nashik, Maharashtra, India" },
                  { icon: <Phone size={18} />, text: "+91 95296 02759", href: "tel:+919529602759" },
                  { icon: <Mail size={18} />, text: "info@acefinance.in", href: "mailto:info@acefinance.in" },
                  { icon: <Clock size={18} />, text: "Mon–Sat: 9 AM – 6 PM" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-600">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">
                      {item.icon}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm hover:text-emerald-600 transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-sm">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider & Copyright */}
          <div className="border-t border-slate-200/80 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[13px] text-slate-500">
              © {new Date().getFullYear()} ACE Finance. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[13px] text-slate-500 hover:text-emerald-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}