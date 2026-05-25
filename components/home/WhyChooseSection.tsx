"use client";

const features = [
  {
    id: "feature-quick-approval",
    icon: "⚡",
    title: "Quick Approval",
    description: "Get loan approvals processed within 24–48 hours directly with bank credit teams.",
  },
  {
    id: "feature-secure",
    icon: "🔒",
    title: "Secure & Transparent",
    description: "Zero hidden fees. Complete transparency in interest rates and lender terms.",
  },
  {
    id: "feature-expert",
    icon: "🤝",
    title: "Multiple Bank Partners",
    description: "Partnered with 20+ top banks and NBFCs, offering you the absolute best market options.",
  },
  {
    id: "feature-rates",
    icon: "📊",
    title: "No Service Charges",
    description: "Our expert consultation, eligibility checking, and process guidance are 100% free.",
  },
];

const stats = [
  { val: "20+", label: "Partner Lenders" },
  { val: "98%", label: "Approval Rate" },
  { val: "24 hrs", label: "Avg. Turnaround" },
  { val: "₹0", label: "Service Charges" },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="relative bg-slate-50 overflow-hidden"
      style={{ padding: "120px 24px" }}
    >
      {/* Decorative blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            top: "10%",
            right: "-100px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: "10%",
            left: "-80px",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        <div className="why-choose-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* ── LEFT COLUMN ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5">
              <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">
                Why Choose ACE Finance?
              </span>
            </div>

            {/* Heading + body */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h2
                className="font-black text-slate-900 tracking-tight"
                style={{ fontSize: "clamp(32px,4vw,46px)", lineHeight: 1.15 }}
              >
                Your Direct Selling Agent Partner
              </h2>
              <p className="text-slate-600 leading-relaxed" style={{ fontSize: "17px" }}>
                Instead of visiting multiple bank branches, wasting weeks, and filling out dozens of forms, we do the heavy lifting. We compare 20+ lenders to secure the lowest rates and highest eligibility for you.
              </p>
            </div>

            {/* Feature cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {features.map((f) => (
                <div
                  key={f.id}
                  id={f.id}
                  className="feature-card bg-white rounded-2xl border border-slate-200 flex items-start"
                  style={{
                    gap: "18px",
                    padding: "20px 24px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                    transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateX(6px)";
                    el.style.borderColor = "rgba(16,185,129,0.35)";
                    el.style.boxShadow = "0 10px 25px rgba(16,185,129,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateX(0)";
                    el.style.borderColor = "#e2e8f0";
                    el.style.boxShadow = "0 4px 12px rgba(0,0,0,0.03)";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                    style={{ width: "44px", height: "44px", fontSize: "20px" }}
                  >
                    {f.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <div className="font-extrabold text-slate-900" style={{ fontSize: "15px", marginBottom: "5px" }}>
                      {f.title}
                    </div>
                    <div className="text-slate-500 leading-relaxed" style={{ fontSize: "13.5px" }}>
                      {f.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — dark card ── */}
          <div className="visual-panel-container" style={{ position: "relative" }}>

            {/* Main dark card — emerald gradient */}
            <div
              className="rounded-3xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #064e3b 0%, #065f46 40%, #047857 100%)",
                padding: "52px 44px",
                boxShadow: "0 30px 70px rgba(6,78,59,0.35)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {/* Dot grid overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "28px" }}>

                {/* Logo mark */}
                <div
                  className="bg-white rounded-xl flex items-center justify-center font-black text-emerald-700 border-2 border-emerald-300"
                  style={{ width: "52px", height: "52px", fontSize: "24px" }}
                >
                  A
                </div>

                {/* Heading + subtext */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3
                    className="font-black text-white tracking-tight"
                    style={{ fontSize: "26px", lineHeight: 1.3 }}
                  >
                    Start Your Loan Journey Today
                  </h3>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: 1.75 }}>
                    Get personalized guidance from our direct selling loan experts. Compare bank quotes and save thousands.
                  </p>
                </div>

                {/* Stats 2×2 grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl text-center"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "18px 12px",
                      }}
                    >
                      <div className="font-black text-emerald-300" style={{ fontSize: "22px", letterSpacing: "-0.5px" }}>
                        {s.val}
                      </div>
                      <div
                        className="font-semibold uppercase tracking-wider"
                        style={{ fontSize: "10.5px", color: "rgba(255,255,255,0.7)", marginTop: "6px", letterSpacing: "0.06em" }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA button */}
                <a
                  href="#contact"
                  id="why-choose-cta"
                  className="block text-center font-bold rounded-full text-emerald-900 bg-emerald-300 hover:bg-white transition-all duration-300"
                  style={{
                    padding: "15px 24px",
                    fontSize: "15px",
                    textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(16,185,129,0.25)",
                  }}
                >
                  Get Free Consultation →
                </a>
              </div>
            </div>

            {/* Floating badge — top right */}
            <div
              className="absolute bg-white rounded-2xl border border-slate-100 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]"
              style={{
                top: "-20px",
                right: "-20px",
                padding: "12px 18px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <span style={{ fontSize: "22px" }}>🏆</span>
              <div>
                <div className="font-extrabold text-slate-900" style={{ fontSize: "12px" }}>#1 Loan Agent</div>
                <div className="text-slate-500" style={{ fontSize: "11px" }}>In Nashik Region</div>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div
              className="absolute bg-white rounded-2xl border border-slate-100 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite_1.5s]"
              style={{
                bottom: "-16px",
                left: "-20px",
                padding: "12px 18px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <span style={{ fontSize: "22px" }}>✅</span>
              <div>
                <div className="font-extrabold text-slate-900" style={{ fontSize: "12px" }}>10k+ Approvals</div>
                <div className="text-slate-500" style={{ fontSize: "11px" }}>100% Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @media (max-width: 768px) {
          .why-choose-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .visual-panel-container {
            margin-top: 20px;
          }
        }
      `}</style>
    </section >
  );
}