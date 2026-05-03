"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

const LOAN_TYPES = [
  { id: "home", label: "Home Loan", icon: "🏠", color: "#1a56db", maxAmount: 10000000, maxTenure: 360, defaultRate: 8.5 },
  { id: "personal", label: "Personal Loan", icon: "👤", color: "#6366f1", maxAmount: 2500000, maxTenure: 60, defaultRate: 12 },
  { id: "business", label: "Business Loan", icon: "🏢", color: "#0ea5e9", maxAmount: 20000000, maxTenure: 84, defaultRate: 11 },
  { id: "car", label: "Used Car Loan", icon: "🚗", color: "#10b981", maxAmount: 2000000, maxTenure: 60, defaultRate: 13.5 },
  { id: "lap", label: "Loan Against Property", icon: "🏗️", color: "#f59e0b", maxAmount: 50000000, maxTenure: 240, defaultRate: 9.5 },
];

function formatINR(n: number): string {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

function Slider({
  id,
  label,
  value,
  min,
  max,
  step,
  onChange,
  displayValue,
  color,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  displayValue: string;
  color: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <label htmlFor={id} style={{ fontSize: "15px", fontWeight: "700", color: "#334155" }}>
          {label}
        </label>
        <span
          style={{
            fontSize: "16px",
            fontWeight: "900",
            color: color,
            background: color + "14",
            padding: "3px 12px",
            borderRadius: "20px",
          }}
        >
          {displayValue}
        </span>
      </div>
      <div style={{ position: "relative", height: "6px", background: "#e2e8f0", borderRadius: "3px" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${color}, ${color}cc)`,
            borderRadius: "3px",
            transition: "width 0.1s",
          }}
        />
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            opacity: 0,
            cursor: "pointer",
            height: "24px",
            top: "-9px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: `${pct}%`,
            transform: "translate(-50%, -50%)",
            width: "20px",
            height: "20px",
            background: "white",
            border: `3px solid ${color}`,
            borderRadius: "50%",
            boxShadow: `0 2px 8px ${color}44`,
            transition: "left 0.1s",
            pointerEvents: "none",
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
        <span style={{ fontSize: "12px", color: "#94a3b8" }}>Min: {min >= 100000 ? formatINR(min) : min + (id === "rate" ? "%" : id === "tenure" ? " mo" : "")}</span>
        <span style={{ fontSize: "12px", color: "#94a3b8" }}>Max: {max >= 100000 ? formatINR(max) : max + (id === "rate" ? "%" : id === "tenure" ? " mo" : "")}</span>
      </div>
    </div>
  );
}

function DonutChart({ principal, interest, color }: { principal: number; interest: number; color: string }) {
  const total = principal + interest;
  const principalPct = total > 0 ? (principal / total) * 100 : 50;
  const interestPct = 100 - principalPct;
  const r = 60;
  const circ = 2 * Math.PI * r;
  const principalDash = (principalPct / 100) * circ;
  const interestDash = (interestPct / 100) * circ;

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", marginBottom: "20px" }}>
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={r} fill="none" stroke="#e2e8f0" strokeWidth="18" />
        <circle
          cx="80" cy="80" r={r}
          fill="none"
          stroke={color}
          strokeWidth="18"
          strokeDasharray={`${principalDash} ${circ - principalDash}`}
          strokeDashoffset={circ / 4}
          strokeLinecap="round"
        />
        <circle
          cx="80" cy="80" r={r}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="18"
          strokeDasharray={`${interestDash} ${circ - interestDash}`}
          strokeDashoffset={circ / 4 - principalDash}
          strokeLinecap="round"
        />
      </svg>
      <div style={{ position: "absolute", textAlign: "center" }}>
        <div style={{ fontSize: "11px", color: "#94a3b8", fontWeight: "700" }}>TOTAL</div>
        <div style={{ fontSize: "14px", fontWeight: "900", color: "#0f172a" }}>{formatINR(total)}</div>
      </div>
    </div>
  );
}

export default function EMICalculatorPage() {
  const [activeLoanType, setActiveLoanType] = useState(LOAN_TYPES[0]);
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(LOAN_TYPES[0].defaultRate);
  const [tenure, setTenure] = useState(240);

  const handleLoanTypeChange = useCallback((lt: typeof LOAN_TYPES[0]) => {
    setActiveLoanType(lt);
    setRate(lt.defaultRate);
    setAmount(Math.min(amount, lt.maxAmount));
    setTenure(Math.min(tenure, lt.maxTenure));
  }, [amount, tenure]);

  const monthlyRate = rate / 12 / 100;
  const emi =
    monthlyRate === 0
      ? amount / tenure
      : (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;

  const col = activeLoanType.color;

  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: `linear-gradient(135deg, #0f172a 0%, #1e293b 60%, ${col}55 100%)`,
          padding: "120px 24px 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
        <div className="container-max" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#fcd34d"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
            >Home</Link>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>EMI Calculator</span>
          </div>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: "50px", padding: "6px 16px", marginBottom: "20px" }}>
            <span>📊</span>
            <span style={{ fontSize: "13px", fontWeight: "700", color: "#fcd34d", letterSpacing: "0.08em", textTransform: "uppercase" }}>Free EMI Calculator</span>
          </div>

          <h1 style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: "900", color: "white", letterSpacing: "-1.5px", lineHeight: "1.1", marginBottom: "16px" }}>
            Calculate Your{" "}
            <span style={{ background: "linear-gradient(135deg,#f59e0b,#fcd34d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Monthly EMI
            </span>
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.7)", maxWidth: "520px", margin: "0 auto", lineHeight: "1.7" }}>
            Plan your finances with confidence. Instantly calculate EMI, total interest, and repayment breakdown for any loan type.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section style={{ background: "#f8fafc", padding: "64px 24px 88px" }}>
        <div className="container-max">
          {/* Loan type tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "48px" }}>
            {LOAN_TYPES.map((lt) => (
              <button
                key={lt.id}
                id={`tab-${lt.id}`}
                onClick={() => handleLoanTypeChange(lt)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "50px",
                  border: activeLoanType.id === lt.id ? `2px solid ${lt.color}` : "2px solid #e2e8f0",
                  background: activeLoanType.id === lt.id ? lt.color + "14" : "white",
                  color: activeLoanType.id === lt.id ? lt.color : "#64748b",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                <span>{lt.icon}</span> {lt.label}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "start" }}>
            {/* Input Panel */}
            <div style={{ background: "white", borderRadius: "24px", padding: "40px", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid #f1f5f9" }}>
              <h2 style={{ fontSize: "20px", fontWeight: "900", color: "#0f172a", marginBottom: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span>{activeLoanType.icon}</span> {activeLoanType.label} Details
              </h2>

              <Slider
                id="amount"
                label="Loan Amount"
                value={amount}
                min={50000}
                max={activeLoanType.maxAmount}
                step={50000}
                onChange={setAmount}
                displayValue={formatINR(amount)}
                color={col}
              />
              <Slider
                id="rate"
                label="Interest Rate (% p.a.)"
                value={rate}
                min={6}
                max={24}
                step={0.25}
                onChange={setRate}
                displayValue={`${rate.toFixed(2)}%`}
                color={col}
              />
              <Slider
                id="tenure"
                label="Loan Tenure"
                value={tenure}
                min={6}
                max={activeLoanType.maxTenure}
                step={6}
                onChange={setTenure}
                displayValue={tenure >= 12 ? `${Math.floor(tenure / 12)} yr${Math.floor(tenure / 12) > 1 ? "s" : ""} ${tenure % 12 > 0 ? `${tenure % 12} mo` : ""}`.trim() : `${tenure} mo`}
                color={col}
              />

              {/* Apply CTA */}
              <a
                href={`/${activeLoanType.id === "home" ? "home-loan" : activeLoanType.id === "personal" ? "personal-loan" : activeLoanType.id === "business" ? "business-loan" : "#"}#apply`}
                id="emi-apply-link"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: `linear-gradient(135deg, ${col}, ${col}cc)`,
                  color: "white",
                  padding: "14px",
                  borderRadius: "50px",
                  fontWeight: "700",
                  fontSize: "15px",
                  textDecoration: "none",
                  marginTop: "8px",
                  transition: "all 0.3s ease",
                  boxShadow: `0 4px 16px ${col}44`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${col}66`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 16px ${col}44`;
                }}
              >
                Apply for {activeLoanType.label} →
              </a>
            </div>

            {/* Results Panel */}
            <div>
              {/* EMI Card */}
              <div
                style={{
                  background: `linear-gradient(135deg, #0f172a, ${col})`,
                  borderRadius: "24px",
                  padding: "36px",
                  marginBottom: "20px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Monthly EMI
                  </p>
                  <div style={{ fontSize: "clamp(36px, 6vw, 52px)", fontWeight: "900", color: "#fcd34d", letterSpacing: "-2px", marginBottom: "4px" }}>
                    {isFinite(emi) ? `₹${Math.round(emi).toLocaleString("en-IN")}` : "—"}
                  </div>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>per month for {tenure} months</p>
                </div>
              </div>

              {/* Breakdown Card */}
              <div style={{ background: "white", borderRadius: "24px", padding: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid #f1f5f9" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "900", color: "#0f172a", marginBottom: "24px", textAlign: "center" }}>
                  Repayment Breakdown
                </h3>

                <DonutChart principal={amount} interest={isFinite(totalInterest) ? totalInterest : 0} color={col} />

                {/* Legend */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { label: "Principal Amount", value: formatINR(amount), color: col, dot: col },
                    { label: "Total Interest", value: isFinite(totalInterest) ? formatINR(totalInterest) : "—", color: "#f59e0b", dot: "#f59e0b" },
                    { label: "Total Payment", value: isFinite(totalPayment) ? formatINR(totalPayment) : "—", color: "#0f172a", dot: "#0f172a" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "#f8fafc", borderRadius: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: item.dot, flexShrink: 0 }} />
                        <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>{item.label}</span>
                      </div>
                      <span style={{ fontSize: "15px", fontWeight: "900", color: item.color }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Amortization Note */}
          <div
            style={{
              marginTop: "32px",
              background: "white",
              borderRadius: "16px",
              padding: "20px 24px",
              border: "1px solid #e2e8f0",
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "20px", flexShrink: 0 }}>ℹ️</span>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.7", margin: 0 }}>
              <strong style={{ color: "#0f172a" }}>Disclaimer:</strong> The EMI calculated above is indicative. Actual EMI may vary based on your credit profile, lender terms, processing fees, and applicable taxes. Contact our loan advisors for an accurate quote.
            </p>
          </div>
        </div>
      </section>

      {/* WHY USE OUR CALC */}
      <section style={{ background: "#0f172a", padding: "80px 24px" }}>
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "900", color: "white", letterSpacing: "-1px" }}>
              Why Plan with ACE Finance?
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {[
              { icon: "⚡", title: "Instant Approval", desc: "Get loan decisions in 24–48 hours with our fast processing." },
              { icon: "📉", title: "Lowest Rates", desc: "We offer the most competitive interest rates in the market." },
              { icon: "🔒", title: "100% Secure", desc: "Bank-grade security for all your personal data and documents." },
              { icon: "🤝", title: "Expert Guidance", desc: "Our advisors help you choose the right loan and tenure." },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "18px",
                  padding: "28px 24px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
              >
                <div style={{ fontSize: "32px", marginBottom: "14px" }}>{item.icon}</div>
                <div style={{ fontSize: "16px", fontWeight: "700", color: "white", marginBottom: "8px" }}>{item.title}</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: "1.6" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #emi-calc-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
