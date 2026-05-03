"use client";

import Link from "next/link";

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface EligibilityItem {
  icon: string;
  text: string;
}

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface FAQItem {
  q: string;
  a: string;
}

export interface LoanPageData {
  badge: string;
  badgeIcon: string;
  heroTitle: string;
  heroHighlight: string;
  heroTitleEnd?: string;
  heroDesc: string;
  primaryColor: string;
  gradientFrom: string;
  gradientTo: string;
  stats: { value: string; label: string }[];
  features: Feature[];
  eligibility: EligibilityItem[];
  steps: Step[];
  faqs: FAQItem[];
  ctaTitle: string;
  ctaDesc: string;
}

import { useState } from "react";

function FAQAccordion({ faqs, primaryColor }: { faqs: FAQItem[]; primaryColor: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{
            background: "white",
            borderRadius: "14px",
            border: `1px solid ${openIndex === i ? primaryColor + "44" : "#e2e8f0"}`,
            overflow: "hidden",
            transition: "border-color 0.2s ease",
            boxShadow: openIndex === i ? `0 4px 16px ${primaryColor}18` : "none",
          }}
        >
          <button
            id={`faq-btn-${i}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 24px",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              gap: "16px",
            }}
          >
            <span style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", flex: 1 }}>
              {faq.q}
            </span>
            <span
              style={{
                fontSize: "20px",
                color: primaryColor,
                flexShrink: 0,
                transition: "transform 0.3s ease",
                transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          {openIndex === i && (
            <div
              style={{
                padding: "0 24px 20px",
                fontSize: "15px",
                color: "#64748b",
                lineHeight: "1.75",
              }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function LoanPageLayout({ data }: { data: LoanPageData }) {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, #0f172a 0%, ${data.gradientFrom} 50%, ${data.gradientTo} 100%)`,
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "120px 24px 80px",
        }}
      >
        {/* bg dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            background: `radial-gradient(circle, ${data.gradientTo}44 0%, transparent 70%)`,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div className="container-max" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <Link
              href="/"
              style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#fcd34d"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
            >
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>{data.badge}</span>
          </div>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(245,158,11,0.15)",
              border: "1px solid rgba(245,158,11,0.3)",
              borderRadius: "50px",
              padding: "6px 16px",
              marginBottom: "24px",
            }}
          >
            <span style={{ fontSize: "16px" }}>{data.badgeIcon}</span>
            <span style={{ fontSize: "13px", fontWeight: "700", color: "#fcd34d", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {data.badge}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: "900",
              color: "white",
              lineHeight: "1.1",
              letterSpacing: "-1.5px",
              marginBottom: "20px",
              maxWidth: "700px",
            }}
          >
            {data.heroTitle}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f59e0b, #fcd34d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {data.heroHighlight}
            </span>
            {data.heroTitleEnd ? ` ${data.heroTitleEnd}` : ""}
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.72)",
              lineHeight: "1.75",
              maxWidth: "580px",
              marginBottom: "40px",
            }}
          >
            {data.heroDesc}
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "60px" }}>
            <a
              href="#apply"
              className="btn-accent"
              id="loan-hero-apply"
              style={{
                background: "linear-gradient(135deg,#f59e0b,#fcd34d)",
                color: "#0f172a",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: "700",
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 16px rgba(245,158,11,0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Apply Now →
            </a>
            <a
              href="/emicalculator"
              style={{
                background: "transparent",
                color: "white",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: "600",
                fontSize: "16px",
                border: "2px solid rgba(255,255,255,0.35)",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              📊 EMI Calculator
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
            {data.stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "26px", fontWeight: "900", color: "#fcd34d", letterSpacing: "-1px" }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginTop: "4px", fontWeight: "700", letterSpacing: "0.05em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "88px 24px" }}>
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-label">Why Choose Our Loan?</div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: "900",
                color: "#0f172a",
                letterSpacing: "-1px",
                marginBottom: "14px",
              }}
            >
              Benefits Built for You
            </h2>
            <p style={{ fontSize: "17px", color: "#64748b", maxWidth: "480px", margin: "0 auto", lineHeight: "1.7" }}>
              Everything you need to make your loan experience smooth and rewarding.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {data.features.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  border: "2px solid transparent",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-6px)";
                  el.style.borderColor = data.primaryColor + "55";
                  el.style.boxShadow = `0 16px 40px ${data.primaryColor}18`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "transparent";
                  el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    background: data.primaryColor + "14",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    marginBottom: "18px",
                  }}
                >
                  {f.icon}
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ─────────────────────────────────────── */}
      <section style={{ background: "white", padding: "88px 24px" }}>
        <div className="container-max">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "72px",
              alignItems: "center",
            }}
          >
            <div>
              <div className="section-label">Eligibility Criteria</div>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontWeight: "900",
                  color: "#0f172a",
                  letterSpacing: "-1px",
                  marginBottom: "14px",
                }}
              >
                Who Can Apply?
              </h2>
              <p style={{ fontSize: "17px", color: "#64748b", lineHeight: "1.75", marginBottom: "36px" }}>
                Our eligibility criteria are designed to be as inclusive as possible so more people can access the financing they need.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {data.eligibility.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "14px 18px",
                      background: "#f8fafc",
                      borderRadius: "12px",
                      border: "1px solid #e2e8f0",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = data.primaryColor + "0d";
                      (e.currentTarget as HTMLElement).style.borderColor = data.primaryColor + "33";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#f8fafc";
                      (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>{item.icon}</span>
                    <span style={{ fontSize: "15px", color: "#334155", fontWeight: "600" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div>
              <div className="section-label">How to Apply</div>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontWeight: "900",
                  color: "#0f172a",
                  letterSpacing: "-1px",
                  marginBottom: "36px",
                }}
              >
                Simple 4-Step Process
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {data.steps.map((step, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "20px",
                      paddingBottom: i < data.steps.length - 1 ? "28px" : "0",
                      position: "relative",
                    }}
                  >
                    {/* Connector line */}
                    {i < data.steps.length - 1 && (
                      <div
                        style={{
                          position: "absolute",
                          left: "24px",
                          top: "52px",
                          width: "2px",
                          bottom: "0",
                          background: `linear-gradient(to bottom, ${data.primaryColor}55, transparent)`,
                        }}
                      />
                    )}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        background: `linear-gradient(135deg, ${data.primaryColor}, ${data.gradientTo})`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "900",
                        fontSize: "16px",
                        color: "white",
                        flexShrink: 0,
                        boxShadow: `0 4px 12px ${data.primaryColor}44`,
                      }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <div style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "4px" }}>
                        {step.title}
                      </div>
                      <div style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #eligibility-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "88px 24px" }}>
        <div className="container-max" style={{ maxWidth: "760px" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="section-label">FAQ</div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: "900",
                color: "#0f172a",
                letterSpacing: "-1px",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={data.faqs} primaryColor={data.primaryColor} />
        </div>
      </section>

      {/* ── CTA APPLY ───────────────────────────────────────── */}
      <section
        id="apply"
        style={{
          background: `linear-gradient(135deg, #0f172a 0%, ${data.gradientFrom} 50%, ${data.gradientTo} 100%)`,
          padding: "88px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
        <div className="container-max" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: "900",
              color: "white",
              letterSpacing: "-1.5px",
              marginBottom: "16px",
            }}
          >
            {data.ctaTitle}
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "500px",
              margin: "0 auto 40px",
              lineHeight: "1.7",
            }}
          >
            {data.ctaDesc}
          </p>

          {/* Quick apply form */}
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "24px",
              padding: "36px",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            {["Full Name", "Phone Number", "Loan Amount (₹)"].map((placeholder, i) => (
              <input
                key={i}
                id={`apply-field-${i}`}
                type={i === 1 ? "tel" : i === 2 ? "number" : "text"}
                placeholder={placeholder}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "10px",
                  padding: "13px 16px",
                  color: "white",
                  fontSize: "15px",
                  outline: "none",
                  marginBottom: "14px",
                  fontFamily: "Lato, sans-serif",
                }}
                onFocus={(e) => { e.target.style.borderColor = "#f59e0b"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; }}
              />
            ))}
            <button
              id="apply-submit-btn"
              style={{
                width: "100%",
                background: "linear-gradient(135deg,#f59e0b,#fcd34d)",
                color: "#0f172a",
                padding: "15px",
                borderRadius: "50px",
                fontWeight: "700",
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "Lato, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(245,158,11,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Get Free Consultation
            </button>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "12px" }}>
              🔒 Your information is 100% secure
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

