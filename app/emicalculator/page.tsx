"use client";

import { useState } from "react";
import Link from "next/link";
import DonutChart from "@/components/emicalculator/DonutChart";
import { 
  ChevronRight, 
  Percent, 
  Calendar, 
  IndianRupee, 
  Home, 
  User, 
  Briefcase, 
  Car, 
  Landmark, 
  Settings, 
  Info, 
  Zap, 
  TrendingDown, 
  Lock, 
  Handshake 
} from "lucide-react";

// Standard formatting function for INR display
function formatINR(n: number): string {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

const PRESETS = [
  { id: "home", label: "Home Loan", icon: Home, amount: 4000000, rate: 8.5, tenureYears: 20 },
  { id: "personal", label: "Personal Loan", icon: User, amount: 500000, rate: 12.0, tenureYears: 5 },
  { id: "business", label: "Business Loan", icon: Briefcase, amount: 2000000, rate: 11.0, tenureYears: 5 },
  { id: "car", label: "Used Car Loan", icon: Car, amount: 800000, rate: 13.5, tenureYears: 5 },
  { id: "lap", label: "Loan Against Property", icon: Landmark, amount: 5000000, rate: 9.5, tenureYears: 15 },
];

export default function EMICalculatorPage() {
  const [activePreset, setActivePreset] = useState("home");

  // Unified inputs
  const [amount, setAmount] = useState(4000000);
  const [rate, setRate] = useState(8.5);

  // Tenure states
  const [tenureUnit, setTenureUnit] = useState<"years" | "months">("years");
  const [tenureValue, setTenureValue] = useState(20); // 20 years default

  // Preset quick fill - modifies input values without restricting boundaries
  const handleApplyPreset = (presetId: string) => {
    setActivePreset(presetId);
    const preset = PRESETS.find((p) => p.id === presetId);
    if (preset) {
      setAmount(preset.amount);
      setRate(preset.rate);
      if (tenureUnit === "years") {
        setTenureValue(preset.tenureYears);
      } else {
        setTenureValue(preset.tenureYears * 12);
      }
    }
  };

  // Convert tenure value on unit toggle
  const handleUnitToggle = (unit: "years" | "months") => {
    if (unit === tenureUnit) return;
    setTenureUnit(unit);
    if (unit === "years") {
      // months to years
      const calculated = Math.round(tenureValue / 12);
      setTenureValue(Math.max(1, Math.min(30, calculated)));
    } else {
      // years to months
      const calculated = tenureValue * 12;
      setTenureValue(Math.max(12, Math.min(360, calculated)));
    }
  };

  // Calculations
  const totalMonths = tenureUnit === "years" ? tenureValue * 12 : tenureValue;
  const clampedMonths = Math.max(1, totalMonths);
  const monthlyRate = rate / 12 / 100;

  const emi =
    monthlyRate === 0
      ? amount / clampedMonths
      : (amount * monthlyRate * Math.pow(1 + monthlyRate, clampedMonths)) / (Math.pow(1 + monthlyRate, clampedMonths) - 1);

  const totalPayment = emi * clampedMonths;
  const totalInterest = totalPayment - amount;

  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
        {/* Background Pattern */}
        <div className="absolute right-220 top-1/2 -translate-y-1/2 w-[70%] h-[100%] bg-[url('/pattern.png')] bg-contain bg-no-repeat bg-right opacity-[0.2] pointer-events-none" />
        <div className="container mx-auto max-w-[1200px] relative z-10">
          {/* Breadcrumb */}
          <div className="flex justify-center gap-2 mb-6">
            <Link href="/" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <span className="text-sm text-slate-400">›</span>
            <span className="text-sm font-bold text-emerald-600">EMI Calculator</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-1.5 mb-6">
            <span>📊</span>
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
              Free Assessment Tool
            </span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,64px)] font-black text-slate-900 tracking-tight leading-[1.1] max-w-[800px] mx-auto mb-6">
            Calculate Your <span className="text-emerald-500">Monthly EMI</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-[560px] mx-auto leading-relaxed">
            Plan your payments easily. Drag the sliders or type in your numbers to analyze your interest breakdown and repayments instantly.
          </p>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="bg-white py-16 px-6 border-b border-slate-100">
        <div className="container mx-auto max-w-[1200px]">

          {/* Preset Buttons for Quick Fill */}
          <div className="text-center mb-6">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block mb-4">
              Select Loan Type Preset
            </span>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {PRESETS.map((lt) => {
                const IconComponent = lt.icon;
                return (
                  <button
                    key={lt.id}
                    onClick={() => handleApplyPreset(lt.id)}
                    className={`px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 transition-all duration-300 cursor-pointer border-none ${activePreset === lt.id
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/15"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                  >
                    <IconComponent size={14} /> {lt.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-10">

            {/* INPUT PANEL (7 Columns) */}
            <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm flex flex-col gap-8">
              <h3 className="text-lg font-black text-slate-900 m-0 flex items-center gap-2 border-b border-slate-100 pb-4">
                <Settings size={20} className="text-emerald-600" /> EMI Calculator
              </h3>

              <div className="flex flex-col gap-8">

                {/* 1. Loan Amount */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="amount-input" className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5">
                      <IndianRupee size={15} className="text-slate-400" /> Loan Amount
                    </label>
                    <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus-within:border-emerald-500 focus-within:bg-white transition-all">
                      <span className="text-xs font-bold text-slate-400">₹</span>
                      <input
                        id="amount-input"
                        type="number"
                        min={10000}
                        max={100000000}
                        value={amount}
                        onChange={(e) => setAmount(Math.min(100000000, Math.max(0, Number(e.target.value))))}
                        className="bg-transparent border-none outline-none text-right font-black text-slate-900 w-28 text-sm p-0 m-0"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={50000}
                    max={10000000}
                    step={50000}
                    value={Math.min(10000000, amount)}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer appearance-none transition-all"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-slate-400">
                    <span>Min: {formatINR(50000)}</span>
                    <span className="text-right">Max: {formatINR(10000000)} <span className="font-medium text-slate-400/80">(Type for more)</span></span>
                  </div>
                </div>

                {/* 2. Interest Rate */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="rate-input" className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5">
                      <Percent size={15} className="text-slate-400" /> Interest Rate
                    </label>
                    <div className="flex items-center gap-0.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus-within:border-emerald-500 focus-within:bg-white transition-all">
                      <input
                        id="rate-input"
                        type="number"
                        step={0.1}
                        min={1}
                        max={30}
                        value={rate}
                        onChange={(e) => setRate(Math.min(30, Math.max(0, Number(e.target.value))))}
                        className="bg-transparent border-none outline-none text-right font-black text-slate-900 w-16 text-sm p-0 m-0"
                      />
                      <span className="text-xs font-bold text-slate-400">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={25}
                    step={0.1}
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer appearance-none transition-all"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-slate-400">
                    <span>Min: 5%</span>
                    <span>Max: 25%</span>
                  </div>
                </div>

                {/* 3. Repayment Tenure */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="tenure-input" className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5">
                      <Calendar size={15} className="text-slate-400" /> Repayment Tenure
                    </label>
                    <div className="flex items-center gap-3">
                      {/* Unit Selector tabs */}
                      <div className="flex border border-slate-200 rounded-lg overflow-hidden bg-slate-100 p-0.5">
                        <button
                          type="button"
                          onClick={() => handleUnitToggle("years")}
                          className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md transition-all cursor-pointer border-none ${tenureUnit === "years" ? "bg-white text-emerald-600 shadow-sm" : "bg-transparent text-slate-500"
                            }`}
                        >
                          Years
                        </button>
                        <button
                          type="button"
                          onClick={() => handleUnitToggle("months")}
                          className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md transition-all cursor-pointer border-none ${tenureUnit === "months" ? "bg-white text-emerald-600 shadow-sm" : "bg-transparent text-slate-500"
                            }`}
                        >
                          Months
                        </button>
                      </div>

                      <div className="flex items-center gap-0.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus-within:border-emerald-500 focus-within:bg-white transition-all">
                        <input
                          id="tenure-input"
                          type="number"
                          min={1}
                          max={360}
                          value={tenureValue}
                          onChange={(e) => setTenureValue(Math.max(0, Number(e.target.value)))}
                          className="bg-transparent border-none outline-none text-right font-black text-slate-900 w-12 text-sm p-0 m-0"
                        />
                        <span className="text-[10px] font-bold text-slate-400 uppercase">
                          {tenureUnit === "years" ? "Yrs" : "Mos"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={tenureUnit === "years" ? 1 : 12}
                    max={tenureUnit === "years" ? 30 : 360}
                    step={1}
                    value={tenureValue}
                    onChange={(e) => setTenureValue(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer appearance-none transition-all"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-slate-400">
                    <span>Min: {tenureUnit === "years" ? "1 Yr" : "12 Mos"}</span>
                    <span>Max: {tenureUnit === "years" ? "30 Yrs" : "360 Mos"}</span>
                  </div>
                </div>

              </div>

              {/* Conversion Redirect Link */}
              <Link
                href="/contact"
                className="block text-center mt-4 bg-emerald-600 text-white font-bold text-base py-4 rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all duration-300 no-underline"
              >
                Apply Online Now <ChevronRight className="inline-block ml-1" size={18} />
              </Link>
            </div>

            {/* RESULTS PANEL (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Estimated Monthly EMI Output Card */}
              <div className="bg-emerald-50 rounded-[32px] p-8 md:p-10 relative overflow-hidden border border-emerald-100 shadow-[0_12px_30px_rgba(16,185,129,0.06)] text-center">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <p className="text-[10px] font-extrabold text-emerald-700 tracking-widest uppercase mb-2">
                    Estimated Monthly EMI
                  </p>
                  <div className="text-[clamp(34px,5.5vw,46px)] font-black text-emerald-600 tracking-tight leading-none mb-2">
                    {isFinite(emi) ? `₹${Math.round(emi).toLocaleString("en-IN")}` : "—"}
                  </div>
                  <p className="text-xs font-semibold text-slate-500 m-0">
                    payable monthly for {totalMonths} months
                  </p>
                </div>
              </div>

              {/* Repayment Breakdown Split */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                <h4 className="text-sm font-black text-slate-900 mb-6 text-center uppercase tracking-wider">
                  Payment Breakdown
                </h4>

                <DonutChart principal={amount} interest={isFinite(totalInterest) ? totalInterest : 0} />

                {/* Legend labels */}
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: "Principal Amount", value: formatINR(amount), dot: "#10b981" },
                    {
                      label: "Total Interest",
                      value: isFinite(totalInterest) ? formatINR(totalInterest) : "—",
                      dot: "#0f172a",
                    },
                    {
                      label: "Total Payable Due",
                      value: isFinite(totalPayment) ? formatINR(totalPayment) : "—",
                      dot: "#f1f5f9",
                      isBorder: true,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex justify-between items-center p-3.5 rounded-xl ${item.isBorder ? "bg-slate-100/50 border border-slate-200" : "bg-slate-50 border border-slate-50"
                        }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ background: item.dot, border: item.dot === "#f1f5f9" ? "1px solid #cbd5e1" : "none" }}
                        />
                        <span className="text-xs font-bold text-slate-500">{item.label}</span>
                      </div>
                      <span className="text-sm font-black text-slate-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Calculator Disclaimer info panel */}
          <div className="mt-10 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex items-start gap-4">
            <Info size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500 leading-relaxed m-0">
              <strong className="text-slate-900">Important Disclaimer:</strong> These figures are calculated as estimates for general financial planning. ACE Financial Services functions as a direct selling agent (DSA) matching profiles to top bank partners. Actual rates, loan limits, Processing Fees, and tenures are determined strictly by lender approvals and validation of your credit score.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE ACE FINANCE LIST SECTION */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              Direct Selling Advantage
            </span>
            <h2 className="text-[clamp(30px,4vw,40px)] font-black text-slate-900 tracking-tight mb-4">
              More Than Just Calculations
            </h2>
            <p className="text-sm text-slate-600 max-w-[480px] mx-auto leading-relaxed">
              We help translate these numbers into approved loans. Our authorized agent team simplifies every step of your application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap size={24} strokeWidth={1.5} />,
                title: "Pre-Approval Matching",
                desc: "We screen your profile details against the approval metrics of 20+ partner banks to maximize odds before you apply.",
              },
              {
                icon: <TrendingDown size={24} strokeWidth={1.5} />,
                title: "Concessional Rates",
                desc: "We negotiate directly with bank branch managers to secure interest rate and processing fee discounts for you.",
              },
              {
                icon: <Lock size={24} strokeWidth={1.5} />,
                title: "Confidential Data",
                desc: "Your credit and identification parameters are secure and are shared only with the selected processing bank.",
              },
              {
                icon: <Handshake size={24} strokeWidth={1.5} />,
                title: "Dedicated Assistance",
                desc: "Your personal loan manager schedules valuations, prepares files, and resolves queries all the way to disbursal.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
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