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
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 text-center">
        {/* Glowing backdrop elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

        <div className="container mx-auto max-w-[1200px] relative z-10">

          {/* Breadcrumb */}
          <div className="flex justify-center gap-2 mb-6">
            <Link href="/" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <span className="text-sm text-slate-400">›</span>
            <span className="text-sm font-bold text-emerald-600">EMI Calculator</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-1.5 mb-6">
            <span>📊</span>
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
              Free Assessment Tool
            </span>
          </div>

          <h1 className="text-[clamp(38px,5.5vw,64px)] font-black text-slate-900 tracking-tight leading-[1.1] max-w-[800px] mx-auto mb-6">
            Calculate Your <span className="text-emerald-500">Monthly EMI</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-[560px] mx-auto leading-relaxed">
            Plan your loan path. Select your loan type, input details, and instantly analyze your interest breakdown and repayment schedule.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERACTION SECTION */}
      <section className="bg-white py-16 px-6 border-b border-slate-100">
        <div className="container mx-auto max-w-[1200px]">

          {/* Loan type tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {LOAN_TYPES.map((lt) => (
              <button
                key={lt.id}
                onClick={() => handleLoanTypeChange(lt)}
                className={`px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ${activeLoanType.id === lt.id
                    ? "bg-emerald-500 text-white border-2 border-emerald-500 shadow-[0_4px_12px_rgba(16,185,129,0.25)]"
                    : "bg-white text-slate-600 border-2 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50"
                  }`}
              >
                <span>{lt.icon}</span> {lt.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Input Panel */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3 border-b border-slate-100 pb-4">
                <span>{activeLoanType.icon}</span> {activeLoanType.label} Inputs
              </h2>

              <div className="flex flex-col gap-6">
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
                      ? `${Math.floor(tenure / 12)} yr${Math.floor(tenure / 12) > 1 ? "s" : ""} ${tenure % 12 > 0 ? `${tenure % 12} mo` : ""
                        }`.trim()
                      : `${tenure} mo`
                  }
                />
              </div>

              {/* Apply link dynamic */}
              <Link
                href={`/${activeLoanType.id === "home"
                    ? "home-loan"
                    : activeLoanType.id === "personal"
                      ? "personal-loan"
                      : activeLoanType.id === "business"
                        ? "business-loan"
                        : "home-loan"
                  }#apply`}
                className="block text-center mt-10 bg-emerald-600 text-white font-bold text-base py-4 rounded-full shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all duration-300"
              >
                Apply for {activeLoanType.label} →
              </Link>
            </div>

            {/* Results Panel */}
            <div className="flex flex-col gap-6">

              {/* Output Display Card */}
              <div className="bg-emerald-50 rounded-3xl p-10 relative overflow-hidden border border-emerald-100 shadow-[0_12px_30px_rgba(16,185,129,0.08)]">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" />
                <div className="relative z-10 text-center">
                  <p className="text-xs font-bold text-emerald-700 tracking-widest uppercase mb-3">
                    Your Estimated Monthly EMI
                  </p>
                  <div className="text-[clamp(38px,6.5vw,54px)] font-black text-emerald-600 tracking-tight mb-2">
                    {isFinite(emi) ? `₹${Math.round(emi).toLocaleString("en-IN")}` : "—"}
                  </div>
                  <p className="text-sm font-semibold text-slate-500">
                    payable monthly for {tenure} months
                  </p>
                </div>
              </div>

              {/* Breakdown Details */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <h3 className="text-base font-black text-slate-900 mb-8 text-center">
                  Repayment Split
                </h3>

                <DonutChart principal={amount} interest={isFinite(totalInterest) ? totalInterest : 0} />

                {/* Legend list */}
                <div className="flex flex-col gap-3 mt-8">
                  {[
                    { label: "Principal Amount", value: formatINR(amount), color: "text-slate-900", dot: "#10b981" },
                    {
                      label: "Total Interest",
                      value: isFinite(totalInterest) ? formatINR(totalInterest) : "—",
                      color: "text-slate-900",
                      dot: "#0f172a",
                    },
                    {
                      label: "Total Repayment",
                      value: isFinite(totalPayment) ? formatINR(totalPayment) : "—",
                      color: "text-slate-900",
                      dot: "#e2e8f0",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ background: item.dot }}
                        />
                        <span className="text-sm font-bold text-slate-600">{item.label}</span>
                      </div>
                      <span className={`text-base font-black ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Disclaimer */}
          <div className="mt-10 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex items-start gap-4">
            <span className="text-xl flex-shrink-0">ℹ️</span>
            <p className="text-sm text-slate-600 leading-relaxed m-0">
              <strong className="text-slate-900">Important Information:</strong> The outputs generated by this
              calculator are estimates for planning purposes only. DSAs compare multiple lenders to procure exact
              quotes. Your physical loan terms may vary depending on CIBIL verification, processing fees, insurance charges,
              and banking policy constraints.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-200">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              Why ACE Finance
            </span>
            <h2 className="text-[clamp(30px,4vw,42px)] font-black text-slate-900 tracking-tight mb-4">
              Beyond the Numbers
            </h2>
            <p className="text-base text-slate-600 max-w-[500px] mx-auto">
              Our direct selling agent process offers clear benefits that simple calculators can't capture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}