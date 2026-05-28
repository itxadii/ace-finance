"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
// 1. Imported the new icons from lucide-react
import { Landmark, Wallet, Banknote, Zap, ShieldCheck, Handshake, BadgePercent } from "lucide-react";
import CountUp from "@/components/CountUp";

// 2. Swapped emojis for Lucide components with proper sizing
const features = [
  {
    id: "feature-quick-approval",
    icon: <Zap size={24} strokeWidth={1.5} />,
    title: "Quick Approval",
    description: "Get loan approvals processed within 24–48 hours directly with bank credit teams."
  },
  {
    id: "feature-secure",
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    title: "Secure & Transparent",
    description: "Zero hidden fees. Complete transparency in interest rates and lender terms."
  },
  {
    id: "feature-expert",
    icon: <Handshake size={24} strokeWidth={1.5} />,
    title: "Multiple Bank Partners",
    description: "Partnered with 20+ top banks and NBFCs, offering you the absolute best market options."
  },
  {
    id: "feature-rates",
    icon: <BadgePercent size={24} strokeWidth={1.5} />,
    title: "No Service Charges",
    description: "Our expert consultation, eligibility checking, and process guidance are 100% free."
  },
];

const stats = [
  { prefix: "", to: 20, suffix: "+", label: "Partner Lenders" },
  { prefix: "", to: 98, suffix: "%", label: "Approval Rate" },
  { prefix: "", to: 24, suffix: " Hrs", label: "Avg. Turnaround" },
  { prefix: "₹", to: 0, suffix: "", label: "Service Charges" },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const transferProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const walletScale = useTransform(scrollYProgress, [0.9, 1], [1, 1.1]);
  const walletBorder = useTransform(scrollYProgress, [0.9, 1], ["#e2e8f0", "#10b981"]);
  const walletBg = useTransform(scrollYProgress, [0.9, 1], ["#f8fafc", "#ecfdf5"]);

  return (
    <section ref={sectionRef} id="why-choose" className="relative bg-white overflow-hidden py-24 px-6">

      {/* Decorative blobs */}
      <div className="absolute top-[10%] -right-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] -left-[80px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(16,185,129,0.04)_0%,transparent_70%)] rounded-full pointer-events-none" />
      {/* Background Pattern - Right Side */}
      <div className="absolute right-220 top-1/2 -translate-y-1/2 w-[70%] h-[100%] bg-[url('/pattern.png')] bg-contain bg-no-repeat bg-right opacity-[0.2] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">

          {/* LEFT COLUMN: Features & Stats */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-fit items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5">
              <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">Why Choose ACE Financial Services?</span>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[clamp(32px,4vw,46px)] font-black text-slate-900 tracking-tight leading-[1.15]">
                Your Direct Selling Agent Partner
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Instead of visiting multiple bank branches, wasting weeks, and filling out dozens of forms, we do the heavy lifting. We compare 20+ lenders to secure the lowest rates and highest eligibility for you.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col gap-4 mb-4">
              {features.map((f) => (
                <div key={f.id} className="bg-white rounded-2xl border border-slate-200 flex items-start gap-5 p-6 shadow-sm hover:border-emerald-500/30 hover:shadow-[0_10px_25px_rgba(16,185,129,0.08)] transition-all duration-300">
                  <div className="bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 text-white w-12 h-12 shadow-lg shadow-emerald-500/20">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-base mb-1">{f.title}</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{f.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid integrated with CountUp */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
              {stats.map((s, idx) => (
                <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="flex items-baseline font-black text-emerald-600 text-[26px] tracking-tight">
                    {s.prefix}
                    <CountUp to={s.to} duration={2.5} delay={0.1 * idx} />
                    {s.suffix}
                  </div>
                  <div className="font-bold uppercase tracking-wider text-[10px] text-slate-400 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Money Transfer Animation */}
          <div className="relative h-[600px] lg:h-full min-h-[600px] flex items-center justify-center">
            <div className="w-full max-w-sm h-full bg-slate-50 rounded-3xl border border-slate-200 shadow-xl p-8 flex flex-col items-center justify-between relative overflow-hidden">

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* 1. BANK (Top) */}
              <div className="relative z-10 flex flex-col items-center bg-slate-50 pb-2">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-800">
                  <Landmark size={32} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mt-4">Partner Bank</span>
              </div>

              {/* 2. THE TRACK (Middle) */}
              <div className="flex-1 w-2 bg-slate-200 rounded-full relative my-4 shadow-inner">

                {/* Green Fill Line mapping to scroll */}
                <motion.div
                  style={{ height: transferProgress }}
                  className="absolute top-0 left-0 w-full bg-emerald-500 rounded-full"
                />

                {/* 3. THE MONEY (Moving Element) */}
                <motion.div
                  style={{ top: transferProgress }}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-50 animate-pulse" />
                    <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(16,185,129,0.4)] border-4 border-slate-50 relative z-10 transition-transform hover:scale-110">
                      <Banknote size={24} strokeWidth={2} />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 4. WALLET (Bottom) */}
              <div className="relative z-10 flex flex-col items-center bg-slate-50 pt-2">
                <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest mb-4">Your Account</span>
                <motion.div
                  style={{ scale: walletScale, borderColor: walletBorder, backgroundColor: walletBg }}
                  className="w-16 h-16 border-2 text-slate-800 rounded-2xl flex items-center justify-center shadow-md relative overflow-hidden transition-colors"
                >
                  <Wallet size={32} strokeWidth={1.5} className="relative z-10 text-slate-700" />
                </motion.div>
              </div>

            </div>

            {/* Floating text badges attached to the animation panel */}
            <div className="absolute top-[20%] -right-4 bg-white border border-slate-100 rounded-xl p-3 shadow-lg hidden md:block animate-[float_4s_ease-in-out_infinite]">
              <span className="text-xs font-bold text-slate-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Processing
              </span>
            </div>

            <div className="absolute bottom-[20%] -left-4 bg-white border border-slate-100 rounded-xl p-3 shadow-lg hidden md:block animate-[float_4s_ease-in-out_infinite_1.5s]">
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-2">
                ⚡ Instant Disbursal
              </span>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
      `}</style>
    </section>
  );
}