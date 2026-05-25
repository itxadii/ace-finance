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
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === i
            ? "border-emerald-300 shadow-[0_8px_24px_rgba(16,185,129,0.1)]"
            : "border-slate-200 shadow-sm"
            }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center px-6 py-5 text-left bg-transparent border-none cursor-pointer gap-4"
          >
            <span className="text-base font-bold text-slate-900 flex-1">
              {faq.q}
            </span>
            <span
              className={`text-2xl font-black text-emerald-500 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : "rotate-0"
                }`}
            >
              +
            </span>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out px-6 text-sm text-slate-600 leading-relaxed overflow-hidden ${openIndex === i ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="pt-4 border-t border-slate-100">{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LoanPageLayout({ data }: { data: LoanPageData }) {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO SECTION ───────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center pt-36 pb-20 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50">

        {/* Glow Effects */}
        <div className="absolute top-1/2 -right-[10%] -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

        <div className="container mx-auto max-w-[1200px] px-6 relative z-10 w-full">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <span className="text-sm text-slate-400">›</span>
            <span className="text-sm font-bold text-emerald-600">{data.badge}</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-1.5 mb-6">
            <span className="text-base">{data.badgeIcon}</span>
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
              {data.badge}
            </span>
          </div>

          <h1 className="text-[clamp(38px,5.5vw,64px)] font-black text-slate-900 leading-[1.1] tracking-tight mb-5 max-w-[800px]">
            {data.heroTitle}{" "}
            <span className="text-emerald-500">{data.heroHighlight}</span>
            {data.heroTitleEnd ? ` ${data.heroTitleEnd}` : ""}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-[600px] mb-10">
            {data.heroDesc}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-[0_6px_20px_rgba(16,185,129,0.25)] hover:bg-emerald-700 hover:-translate-y-0.5 transition-all duration-300"
            >
              Apply Now →
            </a>
            <Link
              href="/emicalculator"
              className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-3.5 rounded-full font-bold text-base border-2 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300"
            >
              📊 EMI Calculator
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-emerald-100 pt-10 max-w-[900px]">
            {data.stats.map((s, idx) => (
              <div key={idx}>
                <div className="text-[clamp(24px,3vw,32px)] font-black text-emerald-600 tracking-tight">
                  {s.value}
                </div>
                <div className="text-[11px] text-slate-500 mt-1.5 font-bold uppercase tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES SECTION ────────────────────────────────── */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              DSA Advantages
            </span>
            <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight mb-4">
              Loan Features & Benefits
            </h2>
            <p className="text-base text-slate-600 max-w-[520px] mx-auto leading-relaxed">
              Work with us to access customized features from India's leading banks under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-2xl mb-6 text-emerald-600">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY & PROCESS SECTION ───────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Eligibility Column */}
            <div>
              <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
                Requirements
              </span>
              <h2 className="text-[clamp(28px,3.5vw,38px)] font-black text-slate-900 tracking-tight mb-5">
                Who Can Apply?
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                As a DSA, we evaluate profiles across multiple banks. Even if one lender rejects you, we can align your profile to other matching institutions.
              </p>

              <div className="flex flex-col gap-3">
                {data.eligibility.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 hover:translate-x-1 transition-all duration-200"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm text-slate-800 font-bold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps Column */}
            <div>
              <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
                DSA Journey
              </span>
              <h2 className="text-[clamp(28px,3.5vw,38px)] font-black text-slate-900 tracking-tight mb-8">
                Our Simple Process
              </h2>

              <div className="flex flex-col">
                {data.steps.map((step, i) => (
                  <div
                    key={i}
                    className={`flex gap-5 relative ${i < data.steps.length - 1 ? "pb-8" : ""}`}
                  >
                    {/* Line Connector */}
                    {i < data.steps.length - 1 && (
                      <div className="absolute left-[22px] top-[44px] w-[2px] bottom-0 bg-gradient-to-b from-emerald-200 to-transparent" />
                    )}

                    <div className="w-11 h-11 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center font-black text-emerald-600 z-10 relative flex-shrink-0 shadow-sm">
                      {step.num}
                    </div>

                    <div className="pt-2">
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
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
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-200/60">
        <div className="container mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              FAQ
            </span>
            <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <FAQAccordion faqs={data.faqs} />
        </div>
      </section>

      {/* ── CTA QUICK APPLY SECTION ─────────────────────────── */}
      <section id="apply" className="relative py-24 px-6 bg-white overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

        <div className="container mx-auto max-w-[1200px] relative z-10 text-center">
          <h2 className="text-[clamp(32px,4vw,48px)] font-black text-slate-900 tracking-tight mb-4">
            {data.ctaTitle}
          </h2>
          <p className="text-lg text-slate-600 max-w-[540px] mx-auto leading-relaxed mb-12">
            {data.ctaDesc}
          </p>

          {/* Quick Apply Form */}
          <div className="bg-white border border-emerald-100 shadow-[0_20px_50px_rgba(16,185,129,0.05)] rounded-[24px] p-8 md:p-10 max-w-[520px] mx-auto text-left relative z-20">
            {["Full Name", "Phone Number", "Expected Loan Amount (₹)"].map((placeholder, i) => (
              <div key={i} className="mb-4">
                <label
                  htmlFor={`apply-field-${i}`}
                  className="block text-[13px] font-bold text-slate-700 mb-2"
                >
                  {placeholder}
                </label>
                <input
                  id={`apply-field-${i}`}
                  type={i === 1 ? "tel" : i === 2 ? "number" : "text"}
                  placeholder={placeholder}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-[15px] outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            ))}

            <button
              id="apply-submit-btn"
              type="button"
              className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all duration-300 mt-2"
            >
              Get Free Consultation
            </button>

            <p className="text-xs text-slate-400 mt-4 text-center">
              🔒 100% Secure & confidential process. We never share details.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}