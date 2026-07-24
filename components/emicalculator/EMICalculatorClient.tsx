"use client";

import { useState } from "react";
import Link from "next/link";
import DonutChart from "@/components/emicalculator/DonutChart";
import ServiceCard from "@/components/layout/ServiceCard";
import LucideIcon from "@/components/ui/LucideIcon";
import {
  IndianRupee,
  Percent,
  Calendar,
  Settings,
  Info,
  ChevronRight,
  TrendingUp,
  Coins
} from "lucide-react";

// Standard formatting function for INR display
function formatINR(n: number): string {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

const PRESETS = [
  { id: "home", label: "Home Loan", icon: "Home", amount: 4000000, rate: 8.5, tenureYears: 20 },
  { id: "personal", label: "Personal Loan", icon: "User", amount: 500000, rate: 12.0, tenureYears: 5 },
  { id: "business", label: "Business Loan", icon: "Briefcase", amount: 2000000, rate: 11.0, tenureYears: 5 },
  { id: "car", label: "Used Car Loan", icon: "Car", amount: 800000, rate: 13.5, tenureYears: 5 },
  { id: "lap", label: "Loan Against Property", icon: "Building", amount: 5000000, rate: 9.5, tenureYears: 15 },
];

export default function EMICalculatorClient() {
  // Main Tab State: "emi" | "investment"
  const [calculatorTab, setCalculatorTab] = useState<"emi" | "investment">("emi");

  // ─── EMI CALCULATOR STATES ─────────────────────────────
  const [activePreset, setActivePreset] = useState("home");
  const [amount, setAmount] = useState(4000000);
  const [rate, setRate] = useState(8.5);
  const [tenureUnit, setTenureUnit] = useState<"years" | "months">("years");
  const [tenureValue, setTenureValue] = useState(20);

  // ─── INVESTMENT CALCULATOR STATES ──────────────────────
  // Sub-Tab State: "sip" | "lumpsum"
  const [investmentType, setInvestmentType] = useState<"sip" | "lumpsum">("sip");
  const [investmentAmount, setInvestmentAmount] = useState(10000); // 10k per month or one-time
  const [expectedReturn, setExpectedReturn] = useState(12.0); // 12% p.a.
  const [investmentPeriod, setInvestmentPeriod] = useState(10); // 10 years

  // Preset quick fill
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
      const calculated = Math.round(tenureValue / 12);
      setTenureValue(Math.max(1, Math.min(30, calculated)));
    } else {
      const calculated = tenureValue * 12;
      setTenureValue(Math.max(12, Math.min(360, calculated)));
    }
  };

  // ─── EMI Calculations ─────────────────────────────────
  const totalMonths = tenureUnit === "years" ? tenureValue * 12 : tenureValue;
  const clampedMonths = Math.max(1, totalMonths);
  const monthlyRate = rate / 12 / 100;
  const emi =
    monthlyRate === 0
      ? amount / clampedMonths
      : (amount * monthlyRate * Math.pow(1 + monthlyRate, clampedMonths)) / (Math.pow(1 + monthlyRate, clampedMonths) - 1);

  const totalPayment = emi * clampedMonths;
  const totalInterest = totalPayment - amount;

  // ─── Investment Calculations ──────────────────────────
  const isSIP = investmentType === "sip";
  let investedAmount = 0;
  let totalValue = 0;

  if (isSIP) {
    const i = expectedReturn / 12 / 100;
    const n = investmentPeriod * 12;
    investedAmount = investmentAmount * n;
    totalValue = i === 0
      ? investedAmount
      : investmentAmount * (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
  } else {
    // Lumpsum
    investedAmount = investmentAmount;
    totalValue = investmentAmount * Math.pow(1 + expectedReturn / 100, investmentPeriod);
  }

  const estimatedReturns = Math.max(0, totalValue - investedAmount);

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
            <span className="text-sm font-bold text-emerald-600">Calculators</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-1.5 mb-6">
            <LucideIcon name="Settings" size={14} className="text-emerald-600" />
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
              Financial Assessment Tools
            </span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,64px)] font-black text-slate-900 tracking-tight leading-[1.1] max-w-[900px] mx-auto mb-6">
            Calculate Your <span className="text-emerald-500">EMI & Investments</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-[620px] mx-auto leading-relaxed">
            Estimate your monthly payments or calculate future SIP/Lumpsum returns. Simple adjustments, instant graphical breakdown.
          </p>

          {/* Calculator Category Tabs */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => setCalculatorTab("emi")}
              className={`px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all duration-300 cursor-pointer border-none shadow-[0_4px_12px_rgba(0,0,0,0.03)] ${calculatorTab === "emi"
                  ? "bg-emerald-600 text-white shadow-emerald-600/20 shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                }`}
            >
              <Settings size={18} /> Loan EMI Calculator
            </button>
            <button
              onClick={() => setCalculatorTab("investment")}
              className={`px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all duration-300 cursor-pointer border-none shadow-[0_4px_12px_rgba(0,0,0,0.03)] ${calculatorTab === "investment"
                  ? "bg-emerald-600 text-white shadow-emerald-600/20 shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                }`}
            >
              <Coins size={18} /> Investment Calculator (SIP / Lumpsum)
            </button>
          </div>
        </div>
      </section>

      {/* CALCULATOR PANEL */}
      <section className="bg-white py-16 px-6 border-b border-slate-100">
        <div className="container mx-auto max-w-[1200px]">

          {calculatorTab === "emi" ? (
            // ─── EMI CALCULATOR INTERFACE ─────────────────────────
            <div>
              {/* Preset Buttons */}
              <div className="text-center mb-6">
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block mb-4">
                  Select Loan Type Preset
                </span>
                <div className="flex flex-wrap gap-2.5 justify-center">
                  {PRESETS.map((lt) => (
                    <button
                      key={lt.id}
                      onClick={() => handleApplyPreset(lt.id)}
                      className={`px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 transition-all duration-300 cursor-pointer border-none ${activePreset === lt.id
                          ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/15"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                    >
                      <LucideIcon name={lt.icon} size={14} /> {lt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-10">
                {/* Inputs Panel (7 Cols) */}
                <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm flex flex-col gap-8">
                  <h3 className="text-lg font-black text-slate-900 m-0 flex items-center gap-2 border-b border-slate-100 pb-4">
                    <Settings size={20} className="text-emerald-600" /> EMI Parameters
                  </h3>

                  <div className="flex flex-col gap-8">
                    {/* Amount Input */}
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

                    {/* Interest Rate Input */}
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

                    {/* Tenure Input */}
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <label htmlFor="tenure-input" className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5">
                          <Calendar size={15} className="text-slate-400" /> Repayment Tenure
                        </label>
                        <div className="flex items-center gap-3">
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

                  <Link href="/contact/" className="block text-center mt-4 bg-emerald-600 text-white font-bold text-base py-4 rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all duration-300 no-underline">
                    Apply Online Now <ChevronRight className="inline-block ml-1" size={18} />
                  </Link>
                </div>

                {/* Results Panel (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
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

                  <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                    <h4 className="text-sm font-black text-slate-900 mb-6 text-center uppercase tracking-wider">
                      Payment Breakdown
                    </h4>
                    <DonutChart principal={amount} interest={isFinite(totalInterest) ? totalInterest : 0} centerLabel="TOTAL DUE" />
                    <div className="flex flex-col gap-2.5">
                      {[
                        { label: "Principal Amount", value: formatINR(amount), dot: "#10b981" },
                        { label: "Total Interest", value: isFinite(totalInterest) ? formatINR(totalInterest) : "—", dot: "#0f172a" },
                        { label: "Total Payable Due", value: isFinite(totalPayment) ? formatINR(totalPayment) : "—", dot: "#f1f5f9", isBorder: true },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex justify-between items-center p-3.5 rounded-xl ${item.isBorder ? "bg-slate-100/50 border border-slate-200" : "bg-slate-50 border border-slate-50"
                            }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: item.dot, border: item.dot === "#f1f5f9" ? "1px solid #cbd5e1" : "none" }} />
                            <span className="text-xs font-bold text-slate-500">{item.label}</span>
                          </div>
                          <span className="text-sm font-black text-slate-900">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // ─── INVESTMENT CALCULATOR INTERFACE ──────────────────
            <div>
              {/* Preset/Type Selector inside panel */}
              <div className="text-center mb-6">
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block mb-4">
                  Select Investment Strategy
                </span>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => setInvestmentType("sip")}
                    className={`px-6 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 transition-all duration-300 cursor-pointer border-none ${investmentType === "sip"
                        ? "bg-emerald-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                  >
                    <Coins size={14} /> SIP (Systematic Investment)
                  </button>
                  <button
                    onClick={() => setInvestmentType("lumpsum")}
                    className={`px-6 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 transition-all duration-300 cursor-pointer border-none ${investmentType === "lumpsum"
                        ? "bg-emerald-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                  >
                    <TrendingUp size={14} /> Lumpsum (One-time)
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-10">
                {/* Inputs Panel (7 Cols) */}
                <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm flex flex-col gap-8">
                  <h3 className="text-lg font-black text-slate-900 m-0 flex items-center gap-2 border-b border-slate-100 pb-4">
                    <TrendingUp size={20} className="text-emerald-600" /> Investment Parameters
                  </h3>

                  <div className="flex flex-col gap-8">
                    {/* Amount Input */}
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <label htmlFor="invest-amount-input" className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5">
                          <IndianRupee size={15} className="text-slate-400" /> {isSIP ? "Monthly Investment" : "One-time Investment"}
                        </label>
                        <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus-within:border-emerald-500 focus-within:bg-white transition-all">
                          <span className="text-xs font-bold text-slate-400">₹</span>
                          <input
                            id="invest-amount-input"
                            type="number"
                            min={100}
                            max={100000000}
                            value={investmentAmount}
                            onChange={(e) => setInvestmentAmount(Math.min(100000000, Math.max(0, Number(e.target.value))))}
                            className="bg-transparent border-none outline-none text-right font-black text-slate-900 w-28 text-sm p-0 m-0"
                          />
                        </div>
                      </div>
                      <input
                        type="range"
                        min={isSIP ? 500 : 1000}
                        max={100000}
                        step={isSIP ? 500 : 1000}
                        value={Math.min(100000, investmentAmount)}
                        onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                        className="w-full accent-emerald-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer appearance-none transition-all"
                      />
                      <div className="flex justify-between text-[10px] font-bold text-slate-400">
                        <span>Min: {isSIP ? "₹500" : "₹1,000"}</span>
                        <span className="text-right">Max: {formatINR(100000)} <span className="font-medium text-slate-400/80">(Type for more)</span></span>
                      </div>
                    </div>

                    {/* Expected Annual Returns */}
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <label htmlFor="return-input" className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5">
                          <Percent size={15} className="text-slate-400" /> Expected Annual Returns
                        </label>
                        <div className="flex items-center gap-0.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus-within:border-emerald-500 focus-within:bg-white transition-all">
                          <input
                            id="return-input"
                            type="number"
                            step={0.1}
                            min={1}
                            max={30}
                            value={expectedReturn}
                            onChange={(e) => setExpectedReturn(Math.min(30, Math.max(0, Number(e.target.value))))}
                            className="bg-transparent border-none outline-none text-right font-black text-slate-900 w-16 text-sm p-0 m-0"
                          />
                          <span className="text-xs font-bold text-slate-400">%</span>
                        </div>
                      </div>
                      <input
                        type="range"
                        min={2}
                        max={25}
                        step={0.1}
                        value={expectedReturn}
                        onChange={(e) => setExpectedReturn(Number(e.target.value))}
                        className="w-full accent-emerald-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer appearance-none transition-all"
                      />
                      <div className="flex justify-between text-[10px] font-bold text-slate-400">
                        <span>Min: 2%</span>
                        <span>Max: 25%</span>
                      </div>
                    </div>

                    {/* Investment Time Period */}
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <label htmlFor="period-input" className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5">
                          <Calendar size={15} className="text-slate-400" /> Time Period
                        </label>
                        <div className="flex items-center gap-0.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus-within:border-emerald-500 focus-within:bg-white transition-all">
                          <input
                            id="period-input"
                            type="number"
                            min={1}
                            max={40}
                            value={investmentPeriod}
                            onChange={(e) => setInvestmentPeriod(Math.min(40, Math.max(0, Number(e.target.value))))}
                            className="bg-transparent border-none outline-none text-right font-black text-slate-900 w-12 text-sm p-0 m-0"
                          />
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Yrs</span>
                        </div>
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={30}
                        step={1}
                        value={Math.min(30, investmentPeriod)}
                        onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                        className="w-full accent-emerald-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer appearance-none transition-all"
                      />
                      <div className="flex justify-between text-[10px] font-bold text-slate-400">
                        <span>Min: 1 Yr</span>
                        <span>Max: 30 Yrs <span className="font-medium text-slate-400/80">(Type up to 40)</span></span>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact/" className="block text-center mt-4 bg-emerald-600 text-white font-bold text-base py-4 rounded-xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all duration-300 no-underline">
                    Start Investing Now <ChevronRight className="inline-block ml-1" size={18} />
                  </Link>
                </div>

                {/* Results Panel (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="bg-emerald-50 rounded-[32px] p-8 md:p-10 relative overflow-hidden border border-emerald-100 shadow-[0_12px_30px_rgba(16,185,129,0.06)] text-center">
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" />
                    <div className="relative z-10">
                      <p className="text-[10px] font-extrabold text-emerald-700 tracking-widest uppercase mb-2">
                        Total Value of Investment
                      </p>
                      <div className="text-[clamp(34px,5.5vw,46px)] font-black text-emerald-600 tracking-tight leading-none mb-2">
                        {isFinite(totalValue) ? `₹${Math.round(totalValue).toLocaleString("en-IN")}` : "—"}
                      </div>
                      <p className="text-xs font-semibold text-slate-500 m-0">
                        after {investmentPeriod} years of accumulation
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                    <h4 className="text-sm font-black text-slate-900 mb-6 text-center uppercase tracking-wider">
                      Investment Breakdown
                    </h4>
                    <DonutChart principal={investedAmount} interest={estimatedReturns} centerLabel="TOTAL VALUE" />
                    <div className="flex flex-col gap-2.5">
                      {[
                        { label: "Invested Amount", value: formatINR(investedAmount), dot: "#10b981" },
                        { label: "Est. Returns Growth", value: isFinite(estimatedReturns) ? formatINR(estimatedReturns) : "—", dot: "#0f172a" },
                        { label: "Future Valuation", value: isFinite(totalValue) ? formatINR(totalValue) : "—", dot: "#f1f5f9", isBorder: true },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex justify-between items-center p-3.5 rounded-xl ${item.isBorder ? "bg-slate-100/50 border border-slate-200" : "bg-slate-50 border border-slate-50"
                            }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: item.dot, border: item.dot === "#f1f5f9" ? "1px solid #cbd5e1" : "none" }} />
                            <span className="text-xs font-bold text-slate-500">{item.label}</span>
                          </div>
                          <span className="text-sm font-black text-slate-900">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Calculator Disclaimer info panel */}
          <div className="mt-10 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex items-start gap-4">
            <Info size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-500 leading-relaxed m-0">
              <strong className="text-slate-900">Important Disclaimer:</strong> These figures are calculated as estimates for general financial planning. ACE Financial Services functions as a direct selling agent (DSA) matching profiles to top bank partners. Actual returns, rates, loan limits, Processing Fees, and tenures are determined strictly by market conditions, lender approvals, and verification of customer eligibility.
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
              We help translate these numbers into approved assets. Our authorized agent team simplifies every step of your application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Zap",
                title: "Pre-Approval Matching",
                desc: "We screen your profile details against the approval metrics of all major partner banks to maximize odds before you apply.",
              },
              {
                icon: "TrendingDown",
                title: "Concessional Rates",
                desc: "We negotiate directly with bank branch managers to secure interest rate and processing fee discounts for you.",
              },
              {
                icon: "Lock",
                title: "Confidential Data",
                desc: "Your credit and identification parameters are secure and are shared only with the selected processing bank.",
              },
              {
                icon: "Handshake",
                title: "Dedicated Assistance",
                desc: "Your personal loan manager schedules valuations, prepares files, and resolves queries all the way to disbursal.",
              },
            ].map((item, index) => (
              <ServiceCard
                key={index}
                title={item.title}
                description={item.desc}
                icon={<LucideIcon name={item.icon} size={24} strokeWidth={1.5} />}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
