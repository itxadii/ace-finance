"use client";

import Image from "next/image";
import ContinueButton from "@/components/ui/ContinueButton";
import PrimaryButton from "@/components/ui/PrimaryButton";
import RotatingText from "@/components/RotatingText";
import CountUp from "@/components/CountUp";

const stats = [
  { prefix: "", to: 20, suffix: "+", label: "Lender Partners" },
  { prefix: "", to: 24, suffix: " Hrs", label: "Avg. Approval Time" },
  { prefix: "₹", to: 500, suffix: "Cr+", label: "Loans Disbursed" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ecfdf5 0%, #ffffff 50%, #f8fafc 100%)",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-96px", left: "10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(15,23,42,0.03) 1.5px, transparent 1.5px)", backgroundSize: "44px 44px" }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "48px", alignItems: "center", paddingTop: "112px", paddingBottom: "112px" }}
          className="lg:grid-cols-hero lg:gap-20 lg:py-36"
        >

          {/* LEFT COLUMN */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }} className="lg:items-start lg:text-left">

            {/* 1. Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: "9999px", padding: "6px 16px", marginBottom: "40px",
            }}>
              <span style={{ fontSize: "14px" }}>🏦</span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#059669", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Direct Selling Agent for 20+ Banks
              </span>
            </div>

            {/* 2. Heading */}
            <h1 style={{
              fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: "#0f172a",
              lineHeight: 1.15, letterSpacing: "-0.02em", margin: 0, marginBottom: "40px", width: "100%",
            }}>
              <span style={{ display: "block" }}>Get the Best</span>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap" }} className="lg:justify-start">
                <RotatingText
                  texts={["Home", "Business", "Personal"]}
                  mainClassName="text-emerald-500 inline-flex"
                  staggerDuration={0.08}
                  rotationInterval={4500}
                  transition={{ type: "spring", damping: 30, stiffness: 120 }}
                />
                <span>Loan Offer</span>
              </span>
              <span style={{ display: "block", background: "linear-gradient(to right, #10b981, #059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", paddingBottom: "4px" }}>
                Tailored for You
              </span>
            </h1>

            {/* 3. Description */}
            <p style={{ fontSize: "18px", color: "#475569", lineHeight: 1.75, maxWidth: "560px", marginBottom: "48px" }}>
              As a trusted direct selling agent in Nashik, we compare rates and
              terms across India's top lenders to find your perfect home,
              personal, or business loan.{" "}
              <strong style={{ color: "#0f172a" }}>Zero fees, 100% bank-direct rates.</strong>
            </p>

            {/* 4. CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "56px", width: "100%" }} className="lg:justify-start">
              <ContinueButton />
              <a href="#services" style={{ textDecoration: "none" }}>
                <PrimaryButton>Compare Loans</PrimaryButton>
              </a>
            </div>

            {/* 5. Stats — CountUp */}
            <div
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px", paddingTop: "32px", borderTop: "1px solid rgba(16,185,129,0.1)", width: "100%" }}
              className="lg:justify-start lg:gap-16"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                  className="lg:items-start"
                >
                  {/* Number row: prefix + CountUp + suffix all inline */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "2px", lineHeight: 1, letterSpacing: "-0.02em" }}>
                    {stat.prefix && (
                      <span style={{ fontSize: "clamp(24px,2.5vw,36px)", fontWeight: 900, color: "#059669" }}>
                        {stat.prefix}
                      </span>
                    )}
                    <CountUp
                      from={0}
                      to={stat.to}
                      separator=","
                      direction="up"
                      duration={1.5}
                      delay={0.2 * idx}
                      className="count-up-text"
                    />
                    <span style={{ fontSize: "clamp(24px,2.5vw,36px)", fontWeight: 900, color: "#059669" }}>
                      {stat.suffix}
                    </span>
                  </div>

                  <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ position: "relative", width: "100%", height: "420px" }} className="lg:h-[520px]">
            <div style={{ position: "relative", width: "100%", height: "100%", zIndex: 10 }}>
              <Image src="/heroimage.png" alt="Ace Finance Loan Agent showing approval" fill priority className="object-contain" />
            </div>

            <div style={{ position: "absolute", top: 0, left: "5%", zIndex: 20, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(24px)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "16px", padding: "16px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 24px 60px rgba(16,185,129,0.12)", animation: "float 4s ease-in-out infinite" }} className="lg:top-[8%] lg:-left-[8%]">
              <div style={{ width: "40px", height: "40px", background: "#10b981", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: "18px", animation: "pulse-ring 2s infinite" }}>✓</div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a" }}>Best Rate Approved!</div>
                <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "2px" }}>Across 20+ banks</div>
              </div>
            </div>

            <div style={{ position: "absolute", bottom: "5%", right: "5%", zIndex: 20, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(24px)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "16px", padding: "12px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 20px 40px rgba(16,185,129,0.12)", animation: "float 4s ease-in-out infinite 1.5s" }} className="lg:bottom-[12%] lg:-right-[4%]">
              <span style={{ fontSize: "16px" }}>⚡</span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#0f172a", letterSpacing: "0.1em", textTransform: "uppercase" }}>Zero Agent Charges</span>
            </div>
          </div>

        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40px", background: "white", clipPath: "ellipse(60% 100% at 50% 100%)", zIndex: 30 }} />

      <style>{`
        .count-up-text {
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 900;
          color: #059669;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-hero { grid-template-columns: 1.1fr 0.9fr !important; }
          .lg\\:gap-20 { gap: 80px !important; }
          .lg\\:py-36 { padding-top: 144px !important; padding-bottom: 144px !important; }
          .lg\\:items-start { align-items: flex-start !important; }
          .lg\\:text-left { text-align: left !important; }
          .lg\\:justify-start { justify-content: flex-start !important; }
          .lg\\:gap-16 { gap: 64px !important; }
          .lg\\:h-\\[520px\\] { height: 520px !important; }
          .lg\\:top-\\[8\\%\\] { top: 8% !important; }
          .lg\\:-left-\\[8\\%\\] { left: -8% !important; }
          .lg\\:bottom-\\[12\\%\\] { bottom: 12% !important; }
          .lg\\:-right-\\[4\\%\\] { right: -4% !important; }
        }
        @keyframes float {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
          70%  { box-shadow: 0 0 0 10px rgba(16,185,129,0); }
          100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
        }
      `}</style>
    </section>
  );
}