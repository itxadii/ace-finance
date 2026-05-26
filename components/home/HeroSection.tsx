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
    <section id="hero" className="relative min-h-screen pt-20 bg-gradient-to-br from-emerald-50 via-white to-slate-50 flex items-center overflow-hidden">

      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#0f172a 1.5px, transparent 1.5px)", backgroundSize: "44px 44px" }} />
        {/* Background Pattern - Right Side */}
        <div className="absolute right-220 top-1/2 -translate-y-1/2 w-[70%] h-[100%] bg-[url('/pattern.png')] bg-contain bg-no-repeat bg-right opacity-[0.2] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-32">

          {/* LEFT COLUMN */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">Your Direct Selling Agent Partner</span>
            </div>

            <h1 className="text-[clamp(36px,5vw,64px)] font-black text-slate-900 leading-[1.1] tracking-tight mb-8 w-full">
              <span className="block">Get the Best</span>
              {/* Added flex-nowrap to absolutely guarantee words stay on the same line */}
              <span className="flex items-center justify-center lg:justify-start whitespace-nowrap flex-nowrap my-3">
                <RotatingText
                  texts={["Home", "Business", "Personal"]}
                  mainClassName="text-emerald-500 inline-flex whitespace-nowrap"
                  staggerDuration={0.08}
                  rotationInterval={4500}
                  transition={{ type: "spring", damping: 30, stiffness: 120 }}
                />
                <span className="ml-3 whitespace-nowrap">Loan Offer</span>
              </span>
              <span className="block text-emerald-600">Tailored for You</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg mb-10">
              As a trusted direct selling agent in Nashik, we compare rates and terms across India's top lenders to find your perfect home, personal, or business loan.
              <strong className="text-slate-900 block mt-2">Zero fees, 100% bank-direct rates.</strong>
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <ContinueButton />
              <a href="#services" className="no-underline"><PrimaryButton>Compare Loans</PrimaryButton></a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-emerald-100 w-full">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start">
                  <div className="flex items-baseline font-black text-emerald-600 text-3xl">
                    {stat.prefix}<CountUp to={stat.to} duration={2} />{stat.suffix}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative w-full h-[400px] lg:h-[520px]">
            <Image src="/heroimage.png" alt="Loan Expert" fill className="object-contain" priority />

            {/* Badges - MOVED UP: Changed lg:top-[12%] to lg:-top-4 to push it higher */}
            <div className="absolute top-0 lg:-top-4 left-0 lg:left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite] z-20">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
              <div>
                <p className="font-extrabold text-sm text-slate-900">Best Rate Approved!</p>
                <p className="text-[10px] text-slate-500">Across 20+ banks</p>
              </div>
            </div>

            {/* Second badge */}
            <div className="absolute bottom-[10%] right-0 lg:right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2.5 animate-[float_4s_ease-in-out_infinite_1.5s] z-30">
              <span className="text-base">⚡</span>
              <span className="text-[10px] font-bold text-slate-900 tracking-wider uppercase">Zero Agent Charges</span>
            </div>

          </div>
        </div>
      </div>

      <style>{`@keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }`}</style>
    </section>
  );
}