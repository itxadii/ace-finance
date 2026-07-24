"use client";

import Link from "next/link";
import { MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";

const serviceLinks = [
  { label: "Home Loan", href: "/home-loan" },
  { label: "Personal Loan", href: "/personal-loan" },
  { label: "Business Loan", href: "/business-loan" },
  { label: "Loan Against Property", href: "/loan-against-property" },
  { label: "Auto Loan", href: "/auto-loan" },
  { label: "Gold Loan", href: "/gold-loan" },
  { label: "Life & Health Insurance", href: "/insurance" },
  { label: "Mutual Funds", href: "/mutual-funds" },
  { label: "Commodity & Currency", href: "/commodity-currency" },
  { label: "Shares Trading", href: "/shares-trading" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/#why-choose" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
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
              <Link href="/" className="inline-block no-underline mb-6 group">
                <div className="w-[64px] h-[64px] bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow overflow-hidden p-1.5">
                  <img src="/favicon.ico" alt="ACE Logo" className="w-full h-full object-contain" />
                </div>
              </Link>

              <p className="text-sm text-slate-600 leading-relaxed max-w-[280px] mb-8">
                <strong>Universe of Loans & Investments.</strong> Your premier direct selling loan agent in Dhule. We partner with all leading banks to secure the best loan rates and terms for you.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[13px] font-bold text-slate-900 tracking-widest uppercase mb-6">
                Our Services
              </h4>
              <ul className="flex flex-col gap-2.5">
                {serviceLinks.map((link) => (
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
                  { icon: <MapPin size={18} />, text: "S-301-305, 'B' Wing, 2nd Floor, New Jayshankar Market, Opp. Urdu High School, Dhule - 424001", href: "https://maps.app.goo.gl/B5a6bRP4ZrzyNHNG6" },
                  { icon: <Phone size={18} />, text: "+91 99754 94945", href: "tel:+919975494945" },
                  { icon: <Phone size={18} />, text: "02562 - 280033 / 34 / 35", href: "tel:02562280033" },
                  { icon: <Mail size={18} />, text: "priyanka.agrawal@iiflpartner.com", href: "mailto:priyanka.agrawal@iiflpartner.com" },
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
              © {new Date().getFullYear()} ACE Financial Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-[13px] text-slate-500 hover:text-emerald-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[13px] text-slate-500 hover:text-emerald-600 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-[13px] text-slate-500 hover:text-emerald-600 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}