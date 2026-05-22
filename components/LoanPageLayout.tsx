"use client";

import Link from "next/link";
import { useState } from "react";

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

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            border: `1px solid ${openIndex === i ? "#BFDDF0" : "#e5e7eb"}`,
            overflow: "hidden",
            transition: "all 0.2s ease",
            boxShadow: openIndex === i ? "0 8px 24px rgba(191, 221, 240, 0.15)" : "0 2px 8px rgba(0,0,0,0.01)",
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
            <span style={{ fontSize: "16px", fontWeight: "700", color: "#000000", flex: 1 }}>
              {faq.q}
            </span>
            <span
              style={{
                fontSize: "22px",
                color: "#BFDDF0",
                fontWeight: "800",
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
                color: "#4b5563",
                lineHeight: "1.75",
                borderTop: "1px solid #f3f4f6",
                paddingTop: "16px",
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
    <main style={{ minHeight: "100vh", background: "#ffffff" }}>
      {/* ── HERO SECTION ───────────────────────────────────── */}
      <section
        style={{
          background: "var(--surface-dark)",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "140px 24px 80px",
        }}
      >
        {/* Glow Effects */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-10%",
            transform: "translateY(-50%)",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(191, 221, 240, 0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        <div className="container-max" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <Link
              href="/"
              style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#BFDDF0"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255, 255, 255, 0.75)"; }}
            >
              Home
            </Link>
            <span style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "14px" }}>›</span>
            <span style={{ color: "#BFDDF0", fontSize: "14px", fontWeight: "600" }}>{data.badge}</span>
          </div>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(191, 221, 240, 0.08)",
              border: "1px solid rgba(191, 221, 240, 0.15)",
              borderRadius: "50px",
              padding: "6px 18px",
              marginBottom: "24px",
            }}
          >
            <span style={{ fontSize: "16px" }}>{data.badgeIcon}</span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#BFDDF0",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {data.badge}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(38px, 5.5vw, 64px)",
              fontWeight: "900",
              color: "#ffffff",
              lineHeight: "1.1",
              letterSpacing: "-2.5px",
              marginBottom: "20px",
              maxWidth: "800px",
            }}
          >
            {data.heroTitle}{" "}
            <span style={{ color: "#BFDDF0" }}>
              {data.heroHighlight}
            </span>
            {data.heroTitleEnd ? ` ${data.heroTitleEnd}` : ""}
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.92)",
              lineHeight: "1.75",
              maxWidth: "600px",
              marginBottom: "40px",
            }}
          >
            {data.heroDesc}
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "64px" }}>
            <a
              href="#apply"
              id="loan-hero-apply"
              style={{
                background: "#BFDDF0",
                color: "#000000",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: "800",
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 6px 20px rgba(191, 221, 240, 0.25)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#ffffff";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 25px rgba(191, 221, 240, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#BFDDF0";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(191, 221, 240, 0.25)";
              }}
            >
              Apply Now →
            </a>
            <Link
              href="/emicalculator"
              style={{
                background: "transparent",
                color: "#ffffff",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: "700",
                fontSize: "16px",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.2)";
              }}
            >
              📊 EMI Calculator
            </Link>
          </div>

          {/* Stats Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "32px",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              paddingTop: "40px",
              maxWidth: "800px",
            }}
          >
            {data.stats.map((s, idx) => (
              <div key={idx}>
                <div style={{ fontSize: "32px", fontWeight: "900", color: "#BFDDF0", letterSpacing: "-1px" }}>
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "rgba(255, 255, 255, 0.75)",
                    marginTop: "6px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES SECTION ────────────────────────────────── */}
      <section style={{ background: "#f9fafb", padding: "100px 24px", borderBottom: "1px solid #e5e7eb" }}>
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "800",
                color: "#6b7280",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "12px",
              }}
            >
              DSA Advantages
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 3.5vw, 42px)",
                fontWeight: "900",
                color: "#000000",
                letterSpacing: "-1.5px",
                marginBottom: "16px",
              }}
            >
              Loan Features & Benefits
            </h2>
            <p style={{ fontSize: "16px", color: "#4b5563", maxWidth: "520px", margin: "0 auto", lineHeight: "1.7" }}>
              Work with us to access customized features from India's leading banks under one roof.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            {data.features.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "36px 32px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.01)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="feature-card"
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(191, 221, 240, 0.25)",
                    border: "1px solid rgba(191, 221, 240, 0.3)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    marginBottom: "20px",
                  }}
                >
                  {f.icon}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#000000", marginBottom: "10px" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.65" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY & PROCESS SECTION ───────────────────── */}
      <section style={{ background: "#ffffff", padding: "100px 24px" }}>
        <div className="container-max">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
            }}
            className="eligibility-grid"
          >
            {/* Eligibility Column */}
            <div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "800",
                  color: "#6b7280",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                Requirements
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 38px)",
                  fontWeight: "900",
                  color: "#000000",
                  letterSpacing: "-1.5px",
                  marginBottom: "20px",
                }}
              >
                Who Can Apply?
              </h2>
              <p style={{ fontSize: "16px", color: "#4b5563", lineHeight: "1.7", marginBottom: "36px" }}>
                As a DSA, we evaluate profiles across multiple banks. Even if one lender rejects you, we can align your profile to other matching institutions.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {data.eligibility.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px 20px",
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      borderRadius: "14px",
                      transition: "all 0.2s ease",
                    }}
                    className="eligibility-item"
                  >
                    <span style={{ fontSize: "20px" }}>{item.icon}</span>
                    <span style={{ fontSize: "15px", color: "#1f2937", fontWeight: "600" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps Column */}
            <div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "800",
                  color: "#6b7280",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                DSA Journey
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 38px)",
                  fontWeight: "900",
                  color: "#000000",
                  letterSpacing: "-1.5px",
                  marginBottom: "36px",
                }}
              >
                Our Simple Process
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {data.steps.map((step, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "20px",
                      paddingBottom: i < data.steps.length - 1 ? "32px" : "0",
                      position: "relative",
                    }}
                  >
                    {/* Line Connector */}
                    {i < data.steps.length - 1 && (
                      <div
                        style={{
                          position: "absolute",
                          left: "22px",
                          top: "44px",
                          width: "2px",
                          bottom: 0,
                          background: "linear-gradient(to bottom, #BFDDF0 50%, transparent)",
                        }}
                      />
                    )}

                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        background: "#000000",
                        border: "2px solid #BFDDF0",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "800",
                        fontSize: "15px",
                        color: "#BFDDF0",
                        flexShrink: 0,
                        zIndex: 1,
                      }}
                    >
                      {step.num}
                    </div>

                    <div style={{ paddingTop: "2px" }}>
                      <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#000000", marginBottom: "6px" }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ─────────────────────────────────────── */}
      <section style={{ background: "#f9fafb", padding: "100px 24px", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
        <div className="container-max" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "800",
                color: "#6b7280",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "12px",
              }}
            >
              FAQ
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 3.5vw, 42px)",
                fontWeight: "900",
                color: "#000000",
                letterSpacing: "-1.5px",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <FAQAccordion faqs={data.faqs} />
        </div>
      </section>

      {/* ── CTA QUICK APPLY SECTION ─────────────────────────── */}
      <section
        id="apply"
        style={{
          background: "var(--surface-dark)",
          padding: "100px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(191, 221, 240, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        <div className="container-max" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: "900",
              color: "#ffffff",
              letterSpacing: "-2px",
              marginBottom: "16px",
            }}
          >
            {data.ctaTitle}
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "540px",
              margin: "0 auto 44px",
              lineHeight: "1.7",
            }}
          >
            {data.ctaDesc}
          </p>

          {/* Quick Apply Form */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "24px",
              padding: "40px",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            {["Full Name", "Phone Number", "Expected Loan Amount (₹)"].map((placeholder, i) => (
              <div key={i} style={{ marginBottom: "16px", textAlign: "left" }}>
                <label
                  htmlFor={`apply-field-${i}`}
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "rgba(255, 255, 255, 0.7)",
                    marginBottom: "8px",
                  }}
                >
                  {placeholder}
                </label>
                <input
                  id={`apply-field-${i}`}
                  type={i === 1 ? "tel" : i === 2 ? "number" : "text"}
                  placeholder={placeholder}
                  style={{
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "10px",
                    padding: "13px 16px",
                    color: "#ffffff",
                    fontSize: "15px",
                    outline: "none",
                    fontFamily: "inherit",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#BFDDF0";
                    e.target.style.boxShadow = "0 0 10px rgba(191, 221, 240, 0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            ))}

            <button
              id="apply-submit-btn"
              type="button"
              style={{
                width: "100%",
                background: "#BFDDF0",
                color: "#000000",
                padding: "15px 24px",
                borderRadius: "50px",
                fontWeight: "800",
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                marginTop: "8px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#ffffff";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 30px rgba(191, 221, 240, 0.35)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#BFDDF0";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Get Free Consultation
            </button>

            <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.72)", marginTop: "14px" }}>
              🔒 100% Secure & confidential process. We never share details.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .feature-card:hover {
          transform: translateY(-6px);
          border-color: #BFDDF0 !important;
          box-shadow: 0 12px 28px rgba(191, 221, 240, 0.2) !important;
        }
        .eligibility-item:hover {
          background: rgba(191, 221, 240, 0.12) !important;
          border-color: rgba(191, 221, 240, 0.4) !important;
          transform: translateX(4px);
        }
        @media (max-width: 992px) {
          .eligibility-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </main>
  );
}
