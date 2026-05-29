"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        {/* Main CTA Card - Switched to White/Emerald theme */}
        <div className="relative rounded-[32px] p-8 md:p-16 text-center overflow-hidden border border-emerald-100 shadow-[0_20px_50px_rgba(16,185,129,0.05)] bg-emerald-200">
          {/* Decorative background accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-1.5 mb-6">
              <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">Get Started Today</span>
            </div>

            <h2 className="text-[clamp(32px,4vw,48px)] font-black text-slate-900 tracking-tight leading-tight mb-6">
              Ready to Apply for Your Loan?
            </h2>

            <p className="text-lg text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed">
              Speak with a professional direct selling agent. We will handle your documentation, match you with the best bank, and secure approvals at no cost.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="no-underline w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-12 rounded-xl shadow-lg shadow-emerald-600/20 transition-all duration-300 border-none cursor-pointer flex items-center justify-center gap-2 text-base"
                >
                  Apply Now <ChevronRight size={18} />
                </button>
              </Link>
            </div>

            {/* Direct Contact */}
            <p className="mt-10 text-slate-600">
              Or speak with Nilesh Gindodia directly:{" "}
              <a href="tel:+919975494945" className="text-emerald-600 font-extrabold hover:underline">
                +91 99754 94945
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}