"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Slider, { formatINR } from "@/components/ui/Slider";
import DonutChart from "@/components/emicalculator/DonutChart";

const LOAN_TYPES = [
  { id: "home", label: "Home Loan", icon: "🏠", maxAmount: 10000000, maxTenure: 360, defaultRate: 8.5 },
  { id: "personal", label: "Personal Loan", icon: "👤", maxAmount: 2500000, maxTenure: 60, defaultRate: 12.0 },
  { id: "business", label: "Business Loan", icon: "🏢", maxAmount: 20000000, maxTenure: 84, defaultRate: 11.0 },
  { id: "car", label: "Used Car Loan", icon: "🚗", maxAmount: 2000000, maxTenure: 60, defaultRate: 13.5 },
  { id: "lap", label: "Loan Against Property", icon: "🏗️", maxAmount: 50000000, maxTenure: 240, defaultRate: 9.5 },
];

export default function EMICalculatorPage() {
  const [activeLoanType, setActiveLoanType] = useState(LOAN_TYPES[0]);
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(LOAN_TYPES[0].defaultRate);
  const [tenure, setTenure] = useState(240);

  const handleLoanTypeChange = useCallback(
    (lt: typeof LOAN_TYPES[0]) => {
      setActiveLoanType(lt);
      setRate(lt.defaultRate);
      setAmount(Math.min(amount, lt.maxAmount));
      setTenure(Math.min(tenure, lt.maxTenure));
    },
    [amount, tenure]
  );

  const monthlyRate = rate / 12 / 100;
  const emi =
    monthlyRate === 0
      ? amount / tenure
      : (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;

  return (
    <main style={{ minHeight: "100vh", background: "#ffffff" }}>
      {/* HERO SECTION */}
      <section
        style={{
          background: "var(--surface-dark)",
          padding: "160px 24px 96px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
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
            background: "radial-gradient(circle, rgba(191, 221, 240, 0.15) 0%, transparent 70%)",
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

        <div className="container-max" style={{ position: "relative", zIndex: 2 }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "20px" }}>
            <Link
              href="/"
              style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#BFDDF0"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255, 255, 255, 0.75)"; }}
            >
              Home
            </Link>
            <span style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "14px" }}>›</span>
            <span style={{ color: "#BFDDF0", fontSize: "14px", fontWeight: "600" }}>EMI Calculator</span>
          </div>

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
            <span>📊</span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#BFDDF0",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Free Assessment Tool
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(38px, 5.5vw, 64px)",
              fontWeight: "900",
              color: "#ffffff",
              letterSpacing: "-2.5px",
              lineHeight: "1.1",
              marginBottom: "20px",
              maxWidth: "800px",
              margin: "0 auto 24px",
            }}
          >
            Calculate Your <span style={{ color: "#BFDDF0" }}>Monthly EMI</span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.92)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: "1.75",
            }}
          >
            Plan your loan path. Select your loan type, input details, and instantly analyze your interest breakdown and repayment schedule.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERACTION SECTION */}
      <section style={{ background: "#f9fafb", padding: "80px 24px 100px", borderBottom: "1px solid #e5e7eb" }}>
        <div className="container-max">
          {/* Loan type tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "48px" }}>
            {LOAN_TYPES.map((lt) => (
              <button
                key={lt.id}
                id={`tab-${lt.id}`}
                onClick={() => handleLoanTypeChange(lt)}
                style={{
                  padding: "12px 24px",
                  borderRadius: "50px",
                  border: activeLoanType.id === lt.id ? "2px solid #BFDDF0" : "2px solid #e5e7eb",
                  background: activeLoanType.id === lt.id ? "#BFDDF0" : "#ffffff",
                  color: activeLoanType.id === lt.id ? "#000000" : "#4b5563",
                  fontWeight: "800",
                  fontSize: "14px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: activeLoanType.id === lt.id ? "0 4px 12px rgba(191, 221, 240, 0.25)" : "none",
                }}
              >
                <span>{lt.icon}</span> {lt.label}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              alignItems: "start",
            }}
            className="calc-grid"
          >
            {/* Input Panel */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "40px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
              }}
            >
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "900",
                  color: "#000000",
                  marginBottom: "32px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  borderBottom: "1px solid #f3f4f6",
                  paddingBottom: "16px",
                }}
              >
                <span>{activeLoanType.icon}</span> {activeLoanType.label} Inputs
              </h2>

              <Slider
                id="amount"
                label="Required Amount"
                value={amount}
                min={50000}
                max={activeLoanType.maxAmount}
                step={50000}
                onChange={setAmount}
                displayValue={formatINR(amount)}
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
              />
              <Slider
                id="tenure"
                label="Repayment Tenure"
                value={tenure}
                min={6}
                max={activeLoanType.maxTenure}
                step={6}
                onChange={setTenure}
                displayValue={
                  tenure >= 12
                    ? `${Math.floor(tenure / 12)} yr${Math.floor(tenure / 12) > 1 ? "s" : ""} ${
                        tenure % 12 > 0 ? `${tenure % 12} mo` : ""
                      }`.trim()
                    : `${tenure} mo`
                }
              />

              {/* Apply link dynamic */}
              <Link
                href={`/${
                  activeLoanType.id === "home"
                    ? "home-loan"
                    : activeLoanType.id === "personal"
                    ? "personal-loan"
                    : activeLoanType.id === "business"
                    ? "business-loan"
                    : "home-loan"
                }#apply`}
                id="emi-apply-link"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "#BFDDF0",
                  color: "#000000",
                  padding: "15px",
                  borderRadius: "50px",
                  fontWeight: "800",
                  fontSize: "15px",
                  textDecoration: "none",
                  marginTop: "16px",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 4px 12px rgba(191, 221, 240, 0.25)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#000000";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#BFDDF0";
                  (e.currentTarget as HTMLElement).style.color = "#000000";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Apply for {activeLoanType.label} →
              </Link>
            </div>

            {/* Results Panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Output Display Card */}
              <div
                style={{
                  background: "var(--gradient-card)",
                  borderRadius: "24px",
                  padding: "44px 36px",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(191, 221, 240, 0.12)",
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-50px",
                    right: "-50px",
                    width: "200px",
                    height: "200px",
                    background: "radial-gradient(circle, rgba(191, 221, 240, 0.08) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                />
                <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(255, 255, 255, 0.75)",
                      fontWeight: "700",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    Your Estimated Monthly EMI
                  </p>
                  <div
                    style={{
                      fontSize: "clamp(38px, 6.5vw, 54px)",
                      fontWeight: "900",
                      color: "#BFDDF0",
                      letterSpacing: "-2px",
                      marginBottom: "6px",
                    }}
                  >
                    {isFinite(emi) ? `₹${Math.round(emi).toLocaleString("en-IN")}` : "—"}
                  </div>
                  <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.72)", fontWeight: "500" }}>
                    payable monthly for {tenure} months
                  </p>
                </div>
              </div>

              {/* Breakdown Details */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "24px",
                  padding: "36px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "900",
                    color: "#000000",
                    marginBottom: "28px",
                    textAlign: "center",
                  }}
                >
                  Repayment Split
                </h3>

                <DonutChart principal={amount} interest={isFinite(totalInterest) ? totalInterest : 0} />

                {/* Legend list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { label: "Principal Amount", value: formatINR(amount), color: "#000000", dot: "#BFDDF0" },
                    {
                      label: "Total Interest",
                      value: isFinite(totalInterest) ? formatINR(totalInterest) : "—",
                      color: "#000000",
                      dot: "#000000",
                    },
                    {
                      label: "Total Repayment",
                      value: isFinite(totalPayment) ? formatINR(totalPayment) : "—",
                      color: "#000000",
                      dot: "rgba(0,0,0,0.15)",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "14px 18px",
                        background: "#f9fafb",
                        border: "1px solid #f3f4f6",
                        borderRadius: "12px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            background: item.dot,
                            border: idx === 1 ? "1px solid #000000" : "none",
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: "14px", color: "#4b5563", fontWeight: "600" }}>{item.label}</span>
                      </div>
                      <span style={{ fontSize: "15px", fontWeight: "900", color: item.color }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Disclaimer */}
          <div
            style={{
              marginTop: "40px",
              background: "#ffffff",
              borderRadius: "16px",
              padding: "24px",
              border: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <span style={{ fontSize: "20px", flexShrink: 0 }}>ℹ️</span>
            <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.7", margin: 0 }}>
              <strong style={{ color: "#000000" }}>Important Information:</strong> The outputs generated by this
              calculator are estimates for planning purposes only. DSAs compare multiple lenders to procure exact
              quotes. Your physical loan terms may vary depending on CIBIL verification, processing fees, insurance charges,
              and banking policy constraints.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section style={{ background: "var(--surface-dark)", padding: "100px 24px", color: "#ffffff" }}>
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "800",
                color: "#BFDDF0",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "12px",
              }}
            >
              Why ACE Finance
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: "900",
                color: "#ffffff",
                letterSpacing: "-1.5px",
              }}
            >
              Beyond the Numbers
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.82)",
                maxWidth: "500px",
                margin: "12px auto 0",
              }}
            >
              Our direct selling agent process offers clear benefits that simple calculators can't capture.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: "⚡",
                title: "Pre-Approval Matching",
                desc: "We scan your eligibility profile against 20+ banks so you only apply where your approval odds are highest.",
              },
              {
                icon: "📉",
                title: "Custom Interest Reduction",
                desc: "We negotiate with retail heads of different banks to procure interest concessions for qualified profiles.",
              },
              {
                icon: "🔒",
                title: "Complete Confidentiality",
                desc: "Your data is stored in bank-grade secure channels and shared only with selected lending partners.",
              },
              {
                icon: "🤝",
                title: "Single Relationship Liaison",
                desc: "One dedicated relationship manager collects documents, schedules valuations, and guides you to disbursal.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  textAlign: "center",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="benefit-card"
              >
                <div style={{ fontSize: "36px", marginBottom: "18px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff", marginBottom: "10px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.55)", lineHeight: "1.65" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .calc-grid {
          grid-template-columns: 1fr 1fr;
        }
        .benefit-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(191, 221, 240, 0.3) !important;
          box-shadow: 0 8px 24px rgba(191, 221, 240, 0.05);
        }
        @media (max-width: 992px) {
          .calc-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </main>
  );
}
