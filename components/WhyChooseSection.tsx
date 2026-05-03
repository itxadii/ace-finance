"use client";

const features = [
  {
    id: "feature-quick-approval",
    icon: "⚡",
    title: "Quick Approval",
    description:
      "Get loan approval within 24–48 hours with minimal documentation",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.1)",
  },
  {
    id: "feature-secure",
    icon: "🔒",
    title: "Secure & Transparent",
    description:
      "Complete transparency in every process with bank-level security",
    color: "#10b981",
    bgColor: "rgba(16,185,129,0.1)",
  },
  {
    id: "feature-expert",
    icon: "🤝",
    title: "Expert Guidance",
    description:
      "Dedicated relationship managers to guide you every step of the way",
    color: "#6366f1",
    bgColor: "rgba(99,102,241,0.1)",
  },
  {
    id: "feature-rates",
    icon: "📊",
    title: "Competitive Rates",
    description:
      "Best-in-market interest rates with flexible repayment options",
    color: "#1a56db",
    bgColor: "rgba(26,86,219,0.1)",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      style={{
        background: "white",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG decorative */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(26,86,219,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div className="container-max">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left side text */}
          <div>
            <div className="section-label">Why Choose Acefinance?</div>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: "800",
                color: "#0f172a",
                letterSpacing: "-1.5px",
                lineHeight: "1.15",
                marginBottom: "20px",
                fontFamily: "Lato, sans-serif",
              }}
            >
              Your Trusted Financial Partner
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#64748b",
                lineHeight: "1.8",
                marginBottom: "40px",
              }}
            >
              We understand that every individual and business is unique. Our
              personalized approach ensures you get the right financial
              solution, every time.
            </p>

            {/* Features list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {features.map((f) => (
                <div
                  key={f.id}
                  id={f.id}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "16px 20px",
                    borderRadius: "16px",
                    background: f.bgColor,
                    border: `1px solid ${f.color}22`,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: f.color,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      flexShrink: 0,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "#0f172a",
                        marginBottom: "4px",
                      }}
                    >
                      {f.title}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#64748b",
                        lineHeight: "1.6",
                      }}
                    >
                      {f.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side visual panel */}
          <div style={{ position: "relative" }}>
            {/* Main card */}
            <div
              style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1a56db 100%)",
                borderRadius: "28px",
                padding: "48px 40px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(15,23,42,0.25)",
              }}
            >
              {/* Grid pattern */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Logo mark */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "linear-gradient(135deg, #1a56db, #f59e0b)",
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "30px",
                    fontWeight: "900",
                    color: "white",
                    marginBottom: "28px",
                    letterSpacing: "-1px",
                  }}
                >
                  A
                </div>

                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: "800",
                    color: "white",
                    lineHeight: "1.3",
                    marginBottom: "12px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Start Your Loan Journey Today
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: "1.7",
                    marginBottom: "32px",
                  }}
                >
                  Get personalized guidance from our loan experts and find the
                  best solution for your needs.
                </p>

                {/* Stats inside card */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    marginBottom: "32px",
                  }}
                >
                  {[
                    { val: "15+", label: "Loan Products" },
                    { val: "98%", label: "Approval Rate" },
                    { val: "24 hrs", label: "Avg. Approval" },
                    { val: "0%", label: "Hidden Charges" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: "14px",
                        padding: "16px",
                        textAlign: "center",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "22px",
                          fontWeight: "800",
                          color: "#fcd34d",
                          letterSpacing: "-0.5px",
                        }}
                      >
                        {s.val}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "rgba(255,255,255,0.5)",
                          marginTop: "4px",
                          fontWeight: "500",
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  id="why-choose-cta"
                  style={{
                    display: "block",
                    background: "linear-gradient(135deg,#f59e0b,#fcd34d)",
                    color: "#0f172a",
                    textAlign: "center",
                    padding: "14px 24px",
                    borderRadius: "50px",
                    fontWeight: "700",
                    fontSize: "15px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(245,158,11,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  Get Free Consultation →
                </a>
              </div>
            </div>

            {/* Floating badge top-right */}
            <div
              className="animate-float"
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                background: "white",
                borderRadius: "16px",
                padding: "12px 16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "24px" }}>🏆</span>
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#0f172a",
                  }}
                >
                  #1 Rated
                </div>
                <div style={{ fontSize: "11px", color: "#94a3b8" }}>
                  Loan Provider
                </div>
              </div>
            </div>

            {/* Floating badge bottom-left */}
            <div
              className="animate-float"
              style={{
                animationDelay: "1.5s",
                position: "absolute",
                bottom: "-16px",
                left: "-20px",
                background: "white",
                borderRadius: "16px",
                padding: "12px 16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "24px" }}>✅</span>
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#0f172a",
                  }}
                >
                  10,000+ Clients
                </div>
                <div style={{ fontSize: "11px", color: "#94a3b8" }}>
                  Served Successfully
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #why-choose > div > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}

