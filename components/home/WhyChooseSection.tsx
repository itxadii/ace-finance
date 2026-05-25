"use client";

const features = [
  { id: "feature-quick-approval", icon: "⚡", title: "Quick Approval", description: "Get loan approvals processed within 24–48 hours directly with bank credit teams." },
  { id: "feature-secure", icon: "🔒", title: "Secure & Transparent", description: "Zero hidden fees. Complete transparency in interest rates and lender terms." },
  { id: "feature-expert", icon: "🤝", title: "Multiple Bank Partners", description: "Partnered with 20+ top banks and NBFCs, offering you the absolute best market options." },
  { id: "feature-rates", icon: "📊", title: "No Service Charges", description: "Our expert consultation, eligibility checking, and process guidance are 100% free." },
];

const stats = [
  { val: "20+", label: "Partner Lenders" },
  { val: "98%", label: "Approval Rate" },
  { val: "24 hrs", label: "Avg. Turnaround" },
  { val: "₹0", label: "Service Charges" },
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="relative bg-white overflow-hidden py-24 px-6">
      {/* Decorative blobs */}
      <div className="absolute top-[10%] -right-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] -left-[80px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(16,185,129,0.04)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-fit items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5">
              <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">Why Choose ACE Finance?</span>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(32px,4vw,46px)] font-black text-slate-900 tracking-tight leading-[1.15]">
                Your Direct Selling Agent Partner
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Instead of visiting multiple bank branches, wasting weeks, and filling out dozens of forms, we do the heavy lifting. We compare 20+ lenders to secure the lowest rates and highest eligibility for you.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {features.map((f) => (
                <div key={f.id} className="bg-white rounded-2xl border border-slate-200 flex items-start gap-5 p-6 shadow-sm hover:border-emerald-500/30 hover:shadow-[0_10px_25px_rgba(16,185,129,0.08)] transition-all duration-300">
                  <div className="bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white w-12 h-12 text-xl shadow-lg shadow-emerald-500/20">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-base mb-1">{f.title}</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{f.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative">
            <div className="rounded-3xl relative overflow-hidden bg-white border border-slate-200 shadow-xl p-10 lg:p-12">
              <div className="relative z-10 flex flex-col gap-8">
                <div className="bg-emerald-600 rounded-xl flex items-center justify-center font-black text-white w-14 h-14 text-2xl shadow-lg shadow-emerald-600/20">
                  A
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-2xl leading-snug mb-3">
                    Start Your Loan Journey Today
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Get personalized guidance from our direct selling loan experts. Compare bank quotes and save thousands.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-2xl text-center bg-slate-50 border border-slate-100 p-4">
                      <div className="font-black text-emerald-600 text-xl tracking-tight">{s.val}</div>
                      <div className="font-bold uppercase tracking-wider text-[10px] text-slate-400 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                <a href="#contact" className="block text-center font-bold rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 py-4 px-6 text-sm shadow-lg shadow-emerald-600/20">
                  Get Free Consultation →
                </a>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 z-20 bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-3 shadow-xl animate-[float_4s_ease-in-out_infinite]">
              <span className="text-2xl">🏆</span>
              <div>
                <div className="font-extrabold text-slate-900 text-xs">#1 Loan Agent</div>
                <div className="text-slate-500 text-[10px]">In Nashik Region</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-3 shadow-xl animate-[float_4s_ease-in-out_infinite_1.5s]">
              <span className="text-2xl">✅</span>
              <div>
                <div className="font-extrabold text-slate-900 text-xs">10k+ Approvals</div>
                <div className="text-slate-500 text-[10px]">100% Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
      `}</style>
    </section>
  );
}