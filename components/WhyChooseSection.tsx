"use client";

const features = [
  {
    id: "feature-quick-approval",
    icon: "⚡",
    title: "Quick Approval",
    description:
      "Get loan approvals processed within 24–48 hours directly with bank credit teams.",
  },
  {
    id: "feature-secure",
    icon: "🔒",
    title: "Secure & Transparent",
    description:
      "Zero hidden fees. Complete transparency in interest rates and lender terms.",
  },
  {
    id: "feature-expert",
    icon: "🤝",
    title: "Multiple Bank Partners",
    description:
      "Partnered with 20+ top banks and NBFCs, offering you the absolute best market options.",
  },
  {
    id: "feature-rates",
    icon: "📊",
    title: "No Service Charges",
    description:
      "Our expert consultation, eligibility checking, and process guidance are 100% free.",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      style={{
        background: "#f9fafb",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative BG Glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(191,221,240,0.15) 0%, transparent 70%)",
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
          className="why-choose-grid"
        >
          {/* Left side text */}
          <div>
            <div className="section-label">Why Choose ACE Finance?</div>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 46px)",
                fontWeight: "900",
                color: "#000000",
                letterSpacing: "-1.5px",
                lineHeight: "1.15",
                marginBottom: "20px",
              }}
            >
              Your Direct Selling Agent Partner
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#4b5563",
                lineHeight: "1.8",
                marginBottom: "40px",
              }}
            >
              Instead of visiting multiple bank branches, wasting weeks, and filling out dozens of forms, we do the heavy lifting. We compare 20+ lenders to secure the lowest rates and highest eligibility for you.
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
                    gap: "18px",
                    padding: "18px 22px",
                    borderRadius: "20px",
                    background: "#ffffff",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.01)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateX(6px)";
                    el.style.borderColor = "#BFDDF0";
                    el.style.boxShadow = "0 10px 25px rgba(191, 221, 240, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateX(0)";
                    el.style.borderColor = "rgba(0, 0, 0, 0.06)";
                    el.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.01)";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "#000000",
                      color: "#BFDDF0",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "800",
                        color: "#000000",
                        marginBottom: "6px",
                      }}
                    >
                      {f.title}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#4b5563",
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
          <div style={{ position: "relative" }} className="visual-panel-container">
            {/* Main card */}
            <div
              style={{
                background: "var(--gradient-card)",
                borderRadius: "28px",
                padding: "48px 40px",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 30px 70px rgba(0, 0, 0, 0.35)",
              }}
            >
              {/* Grid pattern */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(rgba(191, 221, 240, 0.04) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Logo mark */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "#ffffff",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    fontWeight: "900",
                    color: "#000000",
                    marginBottom: "28px",
                    border: "2px solid #BFDDF0",
                  }}
                >
                  A
                </div>

                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: "900",
                    color: "#ffffff",
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
                    color: "rgba(255, 255, 255, 0.85)",
                    lineHeight: "1.7",
                    marginBottom: "32px",
                  }}
                >
                  Get personalized guidance from our direct selling loan experts. Compare bank quotes and save thousands.
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
                    { val: "20+", label: "Partner Lenders" },
                    { val: "98%", label: "Approval Rate" },
                    { val: "24 hrs", label: "Avg. Turnaround" },
                    { val: "₹0", label: "Service Charges" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        borderRadius: "16px",
                        padding: "18px 12px",
                        textAlign: "center",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "22px",
                          fontWeight: "900",
                          color: "#BFDDF0",
                          letterSpacing: "-0.5px",
                        }}
                      >
                        {s.val}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "rgba(255, 255, 255, 0.75)",
                          marginTop: "6px",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.02em",
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
                    background: "#BFDDF0",
                    color: "#000000",
                    textAlign: "center",
                    padding: "15px 24px",
                    borderRadius: "50px",
                    fontWeight: "700",
                    fontSize: "15px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 16px rgba(191, 221, 240, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#ffffff";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(191, 221, 240, 0.4)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#BFDDF0";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(191, 221, 240, 0.2)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
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
                background: "#ffffff",
                borderRadius: "16px",
                padding: "12px 18px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "24px" }}>🏆</span>
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "800",
                    color: "#000000",
                  }}
                >
                  #1 Loan Agent
                </div>
                <div style={{ fontSize: "11px", color: "#6b7280" }}>
                  In Nashik Region
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
                background: "#ffffff",
                borderRadius: "16px",
                padding: "12px 18px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "24px" }}>✅</span>
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "800",
                    color: "#000000",
                  }}
                >
                  10k+ Approvals
                </div>
                <div style={{ fontSize: "11px", color: "#6b7280" }}>
                  100% Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
    </section>
  );
}
