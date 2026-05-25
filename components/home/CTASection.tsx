"use client";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
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

            <p className="text-lg text-slate-600 max-w-xl mx-auto mb-12 leading-relaxed">
              Speak with a professional direct selling agent. We will handle your documentation, match you with the best bank, and secure approvals at no cost.
            </p>

            {/* Form */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 max-w-xl mx-auto shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 mb-6 outline-none focus:border-emerald-500 transition-colors text-slate-600">
                <option>Select loan type</option>
                <option>Home Loan</option>
                <option>Personal Loan</option>
                <option>Business Loan</option>
              </select>

              <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-600/20">
                Get Free Consultation →
              </button>

              <p className="text-xs text-slate-400 mt-4">
                🔒 Your information is 100% secure & never shared
              </p>
            </div>

            {/* Direct Contact */}
            <p className="mt-10 text-slate-600">
              Or speak with an advisor directly:{" "}
              <a href="tel:+919529602759" className="text-emerald-600 font-extrabold hover:underline">
                +91 999999999
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}