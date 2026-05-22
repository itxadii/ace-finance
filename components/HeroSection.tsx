"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const flowRef = useRef<HTMLDivElement | null>(null);
  const [flowActive, setFlowActive] = useState(false);

  useEffect(() => {
    if (!flowRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFlowActive(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(flowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fbff 0%, #eef4fb 50%, #ffffff 100%)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Decorative background glows */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(191, 221, 240, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Grid dots overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.02) 1.5px, transparent 1.5px)",
          backgroundSize: "44px 44px",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-max hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          padding: "150px 24px 90px",
          display: "grid",
          gridTemplateColumns: "1.25fr 0.75fr",
          gap: "60px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Text Content */}
        <div className="animate-fade-left">
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(191, 221, 240, 0.08)",
              border: "1px solid rgba(191, 221, 240, 0.2)",
              borderRadius: "50px",
              padding: "6px 18px",
              marginBottom: "28px",
            }}
          >
            <span style={{ fontSize: "14px" }}>🏦</span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#BFDDF0",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Direct Selling Agent for 20+ Banks
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(38px, 5.5vw, 64px)",
              fontWeight: "900",
              color: "#102a43",
              lineHeight: "1.1",
              letterSpacing: "-2.5px",
              marginBottom: "24px",
            }}
          >
            Get the Best Loan Offer{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #BFDDF0 30%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tailored for You
            </span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(30, 58, 95, 0.78)",
              lineHeight: "1.75",
              marginBottom: "40px",
              maxWidth: "560px",
            }}
          >
            As a trusted direct selling agent in Nashik, we compare rates and terms across India's top lenders to find your perfect home, personal, or business loan. <strong>Zero fees, 100% bank-direct rates.</strong>
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }} className="hero-btn-row">
            <a
              href="#contact"
              className="btn-primary"
              id="hero-cta-apply"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
              }}
            >
              Apply Now
              <span style={{ fontSize: "16px", fontWeight: "700" }}>→</span>
            </a>
            <a
              href="#services"
              className="btn-secondary"
              id="hero-cta-services"
              style={{
                textDecoration: "none",
              }}
            >
              Compare Loans
            </a>
          </div>

          <div
            ref={flowRef}
            className={`money-flow ${flowActive ? "flow-active" : ""}`}
            style={{
              marginTop: "44px",
              padding: "24px",
              borderRadius: "28px",
              background: "rgba(255, 255, 255, 0.96)",
              border: "1px solid rgba(30, 58, 95, 0.08)",
              boxShadow: "0 20px 50px rgba(30, 58, 95, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                minWidth: "170px",
                padding: "18px 20px",
                borderRadius: "22px",
                background: "#eef4fb",
                color: "#1e3a5f",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              <span style={{ fontSize: "20px" }}>🏦</span>
              Bank
            </div>
            <div
              style={{
                position: "relative",
                flex: "1 1 280px",
                minWidth: "260px",
                height: "68px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "8px",
                  borderRadius: "999px",
                  background: "rgba(30, 58, 95, 0.08)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "4px",
                  right: "4px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "rgba(30, 58, 95, 0.35)", fontWeight: "700" }}>Sending</span>
                <span style={{ color: "rgba(30, 58, 95, 0.35)", fontWeight: "700" }}>Receiving</span>
              </div>
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="money-chip"
                  style={{
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  ₹
                </div>
              ))}
            </div>
            <div
              style={{
                minWidth: "170px",
                padding: "18px 20px",
                borderRadius: "22px",
                background: "#d8e9f8",
                color: "#1e3a5f",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              <span style={{ fontSize: "20px" }}>👤</span>
              Customer
            </div>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "48px",
              marginTop: "64px",
              flexWrap: "wrap",
              borderTop: "1px solid rgba(30, 58, 95, 0.08)",
              paddingTop: "32px",
            }}
            className="hero-stats-row"
          >
            {[
              { value: "20+", label: "Lender Partners" },
              { value: "24 Hrs", label: "Avg. Approval Time" },
              { value: "₹500Cr+", label: "Loans Disbursed" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "900",
                    color: "#BFDDF0",
                    lineHeight: "1",
                    letterSpacing: "-1px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(30, 58, 95, 0.55)",
                    marginTop: "6px",
                    fontWeight: "700",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Floating Glassmorphic Badges */}
        <div
          className="animate-fade-right hero-right-panel"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            height: "100%",
            minHeight: "220px",
          }}
        >
          {/* Floating approval badge */}
          <div
            className="animate-float floating-badge-1"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(191, 221, 240, 0.35)",
              borderRadius: "20px",
              padding: "18px 24px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              boxShadow: "0 24px 60px rgba(30, 58, 95, 0.08)",
              marginRight: "20px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                background: "#BFDDF0",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#000000",
                fontWeight: "bold",
                animation: "pulse-ring 2.0s infinite",
              }}
            >
              ✓
            </div>
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "#102a43",
                  letterSpacing: "-0.2px",
                }}
              >
                Best Rate Approved!
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(30, 58, 95, 0.55)",
                  marginTop: "2px",
                }}
              >
                Compared across 20+ partner banks
              </div>
            </div>
          </div>

          {/* Floating fee badge */}
          <div
            className="animate-float delay-300 floating-badge-2"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(191, 221, 240, 0.35)",
              borderRadius: "16px",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 20px 40px rgba(30, 58, 95, 0.08)",
              marginTop: "24px",
              marginRight: "80px",
            }}
          >
            <span style={{ fontSize: "16px" }}>⚡</span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#1e3a5f",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Zero Agent Charges
            </span>
          </div>
        </div>
      </div>

      {/* Bottom wave curve transition */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40px",
          background: "#ffffff",
          clipPath: "ellipse(60% 100% at 50% 100%)",
        }}
      />

      <style>{`
        .money-flow .money-chip {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: #BFDDF0;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          box-shadow: 0 10px 24px rgba(30, 58, 95, 0.12);
          animation: slide-money 2s ease-in-out infinite paused;
        }
        .money-flow.flow-active .money-chip {
          animation-play-state: running;
        }
        .money-flow .money-chip:nth-child(2) {
          top: 45%;
        }
        .money-flow .money-chip:nth-child(3) {
          top: 55%;
        }
        @keyframes slide-money {
          0% {
            left: 0;
            opacity: 0.65;
          }
          35% {
            opacity: 1;
          }
          100% {
            left: calc(100% - 28px);
            opacity: 0.65;
          }
        }

        @media (max-width: 992px) {
          #hero {
            background: linear-gradient(135deg, #f8fbff 0%, #eef4fb 50%, #ffffff 100%) !important;
            background-size: cover !important;
            background-position: center !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding-top: 130px !important;
            gap: 40px !important;
          }
          .hero-btn-row {
            justify-content: center !important;
          }
          .hero-stats-row {
            justify-content: center !important;
          }
          .hero-right-panel {
            align-items: center !important;
            min-height: auto !important;
            margin-top: 20px;
          }
          .floating-badge-1, .floating-badge-2 {
            margin-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
