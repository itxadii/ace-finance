"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CreditCard from "./CreditCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ContinueButton from "@/components/ui/ContinueButton";
import { Check, ShieldCheck, Zap, Award, Plane, Star, ArrowRight, User, Phone, Mail, IndianRupee, Briefcase, HelpCircle, Gift, ChevronRight } from "lucide-react";

interface CardTier {
  id: string;
  name: string;
  badge: string;
  theme: "emerald" | "gold" | "black";
  cardNumber: string;
  expiry: string;
  cvv: string;
  heading: string;
  tagline: string;
  fee: string;
  keyBenefit: string;
  accentColor: string;
  bgColor: string;
  benefits: string[];
}

const CARD_TIERS: CardTier[] = [
  {
    id: "cashback",
    name: "ACE Titanium CashBack",
    badge: "Maximum Cashback",
    theme: "emerald",
    cardNumber: "4321 8765 2468 1357",
    expiry: "05 / 31",
    cvv: "789",
    heading: "ACE CASHBACK",
    tagline: "Unbeatable 5% flat cashback on all online spends.",
    fee: "₹499 (Waived on spending ₹1L/year)",
    keyBenefit: "5% cashback on Swiggy, Zomato, Amazon & Flipkart",
    accentColor: "text-emerald-500 border-emerald-500/20 bg-emerald-500/10",
    bgColor: "bg-emerald-50",
    benefits: [
      "5% Unlimited Cashback on Swiggy, Zomato, Amazon, Flipkart, Myntra",
      "1% Flat Cashback on all other online and offline spends",
      "Complementary ₹500 Amazon welcome voucher on card activation",
      "1% Fuel surcharge waiver at all petrol pumps in India",
      "No joining fee for the first year"
    ]
  },
  {
    id: "travel",
    name: "ACE Platinum Travel",
    badge: "Lifetime Free & Lounge Access",
    theme: "gold",
    cardNumber: "5544 9988 2211 6633",
    expiry: "09 / 30",
    cvv: "456",
    heading: "ACE PLATINUM",
    tagline: "Free domestic airport lounge access and zero annual fee.",
    fee: "LIFETIME FREE (₹0 Annual Fee)",
    keyBenefit: "4 complimentary domestic airport lounge visits per year",
    accentColor: "text-amber-500 border-amber-500/20 bg-amber-500/10",
    bgColor: "bg-amber-50/50",
    benefits: [
      "LIFETIME FREE Card — No joining or annual fees ever",
      "4 Complimentary domestic airport lounge visits per year",
      "2 Reward Points for every ₹100 spent (1 RP = ₹0.25)",
      "Complimentary air accident cover up to ₹50 Lakhs",
      "Discounts up to 20% at partner dining restaurants"
    ]
  },
  {
    id: "signature",
    name: "ACE Signature Black",
    badge: "Elite Luxury & Rewards",
    theme: "black",
    cardNumber: "9759 2484 5269 6576",
    expiry: "12 / 29",
    cvv: "123",
    heading: "ACE SIGNATURE",
    tagline: "Unlimited lounge visits, concierge services, and premium perks.",
    fee: "₹2,999 (Waived on spending ₹5L/year)",
    keyBenefit: "Unlimited Domestic & International Lounge access",
    accentColor: "text-slate-900 border-slate-900/10 bg-slate-100",
    bgColor: "bg-slate-50",
    benefits: [
      "Unlimited Complimentary Domestic & International Airport Lounge access",
      "5x Reward Points on international transactions and premium dining",
      "Dedicated 24/7 Personal Concierge Desk for travel & dining bookings",
      "2 Complimentary rounds of Golf per month at premium golf courses",
      "Luxury welcome vouchers worth ₹3,000 from leading brands"
    ]
  }
];

export default function CreditCardsPageClient() {
  const [selectedTier, setSelectedTier] = useState<CardTier>(CARD_TIERS[0]);
  const [previewName, setPreviewName] = useState<string>("Bruce Wayne");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    employmentType: "Salaried",
    income: "",
    preferredCard: CARD_TIERS[0].id
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);


  const applyFormRef = useRef<HTMLDivElement>(null);

  // Sync preferred card selection in the form when selectedTier changes in hero
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      preferredCard: selectedTier.id
    }));
  }, [selectedTier]);

  const handleSelectTier = (tier: CardTier) => {
    setSelectedTier(tier);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Simple validation
    if (!formData.fullName.trim()) {
      setFormError("Full Name is required.");
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      setFormError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!formData.income || Number(formData.income) <= 0) {
      setFormError("Please enter a valid monthly net income.");
      return;
    }

    if (!agreedToPrivacy) {
      setFormError("You must agree to the Privacy Policy to proceed.");
      return;
    }

    setFormSubmitted(true);
  };


  const scrollToApply = (tierId?: string) => {
    if (tierId) {
      const tier = CARD_TIERS.find(t => t.id === tierId);
      if (tier) setSelectedTier(tier);
    }
    applyFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const faqs = [
    {
      q: "Are there any hidden fees or charges for using ACE Finance's credit card services?",
      a: "Absolutely not! ACE Finance is an authorized Direct Selling Agent (DSA) partner for top banks. Our card assessment, recommendation, and application assistance are 100% free of charge. Any card-related fees (annual/joining fees) are charged directly by the issuing bank and are fully transparent."
    },
    {
      q: "What is the minimum CIBIL credit score required for card approval?",
      a: "A CIBIL credit score of 700 or above is ideal and ensures quick approval with maximum limits. However, even if you are new to credit (no credit score) or have a slightly lower score, we work with multiple partner banks to match your profile to the right card product."
    },
    {
      q: "How does the annual fee waiver work?",
      a: "For cards with annual fees (e.g. ₹499 for Cashback and ₹2,999 for Signature Black), the bank waives the next year's fee automatically if you spend above the threshold in your membership year (₹1 Lakh for Cashback, ₹5 Lakhs for Signature Black). The Platinum Travel card is Lifetime Free and has ₹0 annual fee."
    },
    {
      q: "What documents are required to apply for a card?",
      a: "The required documentation is minimal and completely digital: (1) Identity & Address proof (Aadhaar & PAN card), (2) Income proof (last 3 months' salary slips for salaried employees, or latest ITR with computation of income for self-employed), and (3) Last 3 months' bank statements."
    },
    {
      q: "How long does it take for the card to be approved and delivered?",
      a: "Once you submit your application through our portal, our expert checks it and forwards it to the bank. The bank's digital verification and Video KYC take 1–2 days. Upon approval, your physical card is dispatched and delivered to your doorstep within 3 to 5 working days."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO SECTION WITH INTERACTIVE CUSTOMIZER ────────────────── */}
      <section className="relative min-h-[90vh] flex items-center pt-36 pb-20 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50">
        {/* Decorative Background */}
        <div className="absolute top-1/2 -right-[10%] -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />
        {/* Background Pattern */}
        <div className="absolute right-220 top-1/2 -translate-y-1/2 w-[70%] h-[100%] bg-[url('/pattern.png')] bg-contain bg-no-repeat bg-right opacity-[0.2] pointer-events-none" />

        <div className="container mx-auto max-w-[1200px] px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT COLUMN: Texts & Controls */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-6">
                <Link href="/" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">
                  Home
                </Link>
                <span className="text-sm text-slate-400">›</span>
                <span className="text-sm font-bold text-emerald-600">Credit Cards</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-1.5 mb-6">
                <span className="text-base">💳</span>
                <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
                  Premium Selection
                </span>
              </div>

              <h1 className="text-[clamp(36px,5vw,60px)] font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
                Get a Card Tailored to{" "}
                <span className="text-emerald-500">Your Lifestyle</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-[550px] mb-8">
                Design your financial journey. Choose between high cashback, lifetime free travel perks, or elite rewards. Preview your card and apply in 5 minutes!
              </p>

              {/* Interactive Name Customizer */}
              <div className="w-full max-w-[400px] bg-white border border-slate-200 shadow-sm rounded-2xl p-6 mb-8 text-left">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">
                  1. Customize Your Card Name
                </h3>
                <div className="relative mb-6">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="text"
                    maxLength={20}
                    value={previewName}
                    onChange={(e) => setPreviewName(e.target.value || "BRUCE WAYNE")}
                    placeholder="Enter Your Name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 text-sm font-medium outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 text-[10px] font-bold">
                    {previewName.length}/20
                  </span>
                </div>

                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  2. Select Card Tier
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {CARD_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => handleSelectTier(tier)}
                      className={`text-[11px] font-extrabold uppercase py-2.5 px-1 rounded-lg border transition-all duration-300 cursor-pointer ${selectedTier.id === tier.id
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm"
                          : "border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                        }`}
                    >
                      {tier.id === "signature" ? "Signature" : tier.id === "travel" ? "Travel" : "Cashback"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <ContinueButton onClick={() => scrollToApply()}>
                  Apply Online Now
                </ContinueButton>
                <a
                  href="#showcase"
                  className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-3.5 rounded-full font-bold text-base border-2 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 no-underline"
                >
                  Compare Benefits
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Live Card Preview Visualizer */}
            <div className="flex flex-col items-center justify-center relative w-full">
              {/* Floating glow behind card */}
              <div className="absolute w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />

              {/* Card Container with Interactive Hover Indicator */}
              <div className="relative group p-6 bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] flex flex-col items-center justify-center min-w-[290px] min-h-[220px]">
                <div className="absolute top-3 right-4 bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                  Hover to Flip Card
                </div>

                <CreditCard
                  name={previewName}
                  number={selectedTier.cardNumber}
                  expiry={selectedTier.expiry}
                  cvv={selectedTier.cvv}
                  theme={selectedTier.theme}
                  heading={selectedTier.heading}
                />
              </div>

              {/* Live Info details */}
              <div className="mt-8 text-center bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-5 shadow-sm max-w-[340px] w-full">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase border mb-3 ${selectedTier.accentColor}`}>
                  {selectedTier.badge}
                </div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-1">{selectedTier.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{selectedTier.tagline}</p>
                <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase font-bold">Annual Fee</span>
                    <strong className="text-slate-800">{selectedTier.fee.split(" ")[0]}</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[9px] uppercase font-bold">Best Benefit</span>
                    <strong className="text-emerald-600 font-extrabold">Instant Approval</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARD SHOWCASE SECTION ─────────────────────────────────── */}
      <section id="showcase" className="bg-slate-50 py-24 px-6 border-b border-slate-200/60 relative">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              Explore Options
            </span>
            <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight mb-4">
              Compare Credit Card Tiers
            </h2>
            <p className="text-base text-slate-600 max-w-[540px] mx-auto leading-relaxed">
              Find the perfect balance of benefits, rewards, and fees that matches your monthly lifestyle spends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARD_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Header card color block */}
                <div className={`p-8 border-b border-slate-100 relative ${tier.bgColor}`}>
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase border mb-4 ${tier.accentColor}`}>
                    {tier.badge}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 font-medium">{tier.tagline}</p>

                  <div className="mt-6">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      Joining & Annual Fee
                    </span>
                    <span className="text-lg font-black text-slate-800 tracking-tight block mt-1">
                      {tier.fee}
                    </span>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6 flex-1">
                    <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-4">
                      Key Privileges & Rewards
                    </h4>
                    <ul className="flex flex-col gap-3.5">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="text-emerald-500 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-xs text-slate-600 leading-relaxed font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <PrimaryButton onClick={() => scrollToApply(tier.id)}>
                    Select & Apply Now
                  </PrimaryButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARD FEATURES & BENEFITS SECTION ──────────────────────── */}
      <section className="bg-white py-24 px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              Premium Perks
            </span>
            <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight mb-4">
              Unmatched Credit Card Benefits
            </h2>
            <p className="text-base text-slate-600 max-w-[500px] mx-auto leading-relaxed">
              Every ACE card gives you access to core privileges carefully curated to elevate your everyday experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Plane className="text-emerald-600" size={24} />,
                title: "Airport Lounge Access",
                desc: "Relax in luxury prior to boarding with access to airport lounges across India and worldwide."
              },
              {
                icon: <Zap className="text-emerald-600" size={24} />,
                title: "Instant CashBack",
                desc: "Get cashback credited directly to your statement, reducing your monthly payments automatically."
              },
              {
                icon: <Gift className="text-emerald-600" size={24} />,
                title: "Premium Vouchers",
                desc: "Receive activation gift cards from partners like Amazon, Flipkart, MakeMyTrip, and BookMyShow."
              },
              {
                icon: <Award className="text-emerald-600" size={24} />,
                title: "Fuel Surcharge Waiver",
                desc: "Enjoy 1% fuel surcharge waiver across petrol stations in India on spending between ₹400 and ₹4,000."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY & DOCUMENTATION SECTION ───────────────────── */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Eligibility checks */}
            <div>
              <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
                Criteria
              </span>
              <h2 className="text-[clamp(28px,3.5vw,38px)] font-black text-slate-900 tracking-tight mb-5">
                Who Can Apply?
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                We work as a DSA to evaluate and process profiles through our bank partners. Our high approval rate means we match you to the lender most likely to approve your card.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { title: "Age Requirement", val: "Between 21 and 65 years" },
                  { title: "Employment Type", val: "Salaried employee or Self-Employed business owner" },
                  { title: "Minimum Net Salary", val: "₹15,000 per month (ITR of ₹3 Lakhs/year for Self-Employed)" },
                  { title: "CIBIL Score", val: "700 or above preferred (cards available for fresh credit profiles too)" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 transition-colors">
                    <span className="text-xs font-bold text-slate-800">{item.title}</span>
                    <span className="text-xs font-black text-emerald-600 text-right">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Documentation checklist */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-sm">
              <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
                Paperless Verification
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-6">
                Documents Checklist
              </h2>
              <p className="text-xs text-slate-600 mb-6">
                Keep the following digital copies handy to complete your application in under 5 minutes through Video KYC:
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { label: "Identity & Address Proof", desc: "Aadhaar Card & PAN Card" },
                  { label: "Salary/Income Proof", desc: "Last 3 months' salary slips or latest ITR file" },
                  { label: "Bank Statement", desc: "Last 3 months' PDF account statements showing salary deposits" },
                  { label: "KYC Photo", desc: "A clear selfie during Video KYC (no physical documents needed)" }
                ].map((doc, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-600 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900">{doc.label}</h4>
                      <p className="text-xs text-slate-500 mt-1">{doc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIMPLE STEPS PROCESS ─────────────────────────────────── */}
      <section className="bg-white py-24 px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              Easy Application
            </span>
            <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-base text-slate-600 max-w-[500px] mx-auto leading-relaxed">
              Applying for your credit card is simple, secure, and entirely digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Line connector for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-slate-100 -z-10" />

            {[
              { step: "1", title: "Select Tier", desc: "Choose the Cashback, Travel, or Signature card that suits you." },
              { step: "2", title: "Apply Online", desc: "Fill in the income and contact details in our secure form." },
              { step: "3", title: "Video KYC", desc: "Complete verification in 2 minutes on call with the partner bank." },
              { step: "4", title: "Card Delivered", desc: "Get your credit card delivered at your doorstep within 3-5 days." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white border-2 border-emerald-500 text-emerald-600 rounded-full flex items-center justify-center font-black text-lg shadow-sm mb-6 z-10">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ──────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24 px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              FAQ
            </span>
            <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${openFaqIndex === i
                    ? "border-emerald-300 shadow-[0_8px_24px_rgba(16,185,129,0.1)]"
                    : "border-slate-200 shadow-sm"
                  }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left bg-transparent border-none cursor-pointer gap-4"
                >
                  <span className="text-sm md:text-base font-bold text-slate-900 flex-1">
                    {faq.q}
                  </span>
                  <span
                    className={`text-2xl font-black text-emerald-500 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === i ? "rotate-45" : "rotate-0"
                      }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out px-6 text-[13px] md:text-sm text-slate-600 leading-relaxed overflow-hidden ${openFaqIndex === i ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="pt-4 border-t border-slate-100">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM SECTION ──────────────────────────────── */}
      <section ref={applyFormRef} className="relative py-24 px-6 bg-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

        <div className="container mx-auto max-w-[1200px] relative z-10 text-center">
          <h2 className="text-[clamp(32px,4vw,48px)] font-black text-slate-900 tracking-tight mb-4">
            Apply For Your Credit Card
          </h2>
          <p className="text-base text-slate-600 max-w-[540px] mx-auto leading-relaxed mb-12">
            Get your instant eligibility check in minutes. Fill in your details below, and our card team will process it immediately.
          </p>

          <div className="bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[32px] p-6 sm:p-8 md:p-10 max-w-[600px] mx-auto text-left relative z-20">
            {formSubmitted ? (
              <div className="text-center py-10 px-4">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-3xl mx-auto mb-6 shadow-sm">
                  ✓
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">
                  Application Submitted!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Your credit card registration request is received and currently under processing.
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs text-left text-slate-500 mb-6 flex flex-col gap-2">
                  <div>
                    <span className="font-bold text-slate-700 block uppercase text-[9px] mb-0.5">Reference ID</span>
                    <span className="font-mono text-emerald-600 font-bold text-sm">ACE-CC-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 block uppercase text-[9px] mb-0.5">Selected Product</span>
                    <strong className="text-slate-800">
                      {CARD_TIERS.find(t => t.id === formData.preferredCard)?.name || "Credit Card"}
                    </strong>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 block uppercase text-[9px] mb-0.5">Mobile Contact</span>
                    <span className="text-slate-800">+91 {formData.phone}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  📞 An ACE Finance credit card consultant will call you within 2 hours (between 9:00 AM and 6:00 PM) to help you complete the digital Video KYC.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      fullName: "",
                      phone: "",
                      email: "",
                      employmentType: "Salaried",
                      income: "",
                      preferredCard: selectedTier.id
                    });
                    setAgreedToPrivacy(false);
                  }}

                  className="w-full bg-slate-100 text-slate-700 py-3.5 rounded-xl font-bold text-sm border-none hover:bg-slate-200 transition-all cursor-pointer"
                >
                  Apply For Another Card
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-bold px-4 py-3 rounded-xl">
                    ⚠️ {formError}
                  </div>
                )}

                {/* 1. Card Selection */}
                <div>
                  <label htmlFor="preferredCard" className="block text-[13px] font-bold text-slate-700 mb-2">
                    Select Preferred Credit Card
                  </label>
                  <select
                    id="preferredCard"
                    name="preferredCard"
                    value={formData.preferredCard}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-[14px] font-medium outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                  >
                    {CARD_TIERS.map((tier) => (
                      <option key={tier.id} value={tier.id}>
                        {tier.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 2. Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-[13px] font-bold text-slate-700 mb-2">
                      Full Name (as on PAN card)
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Bruce Wayne"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 text-[14px] outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* 3. Mobile Number */}
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-bold text-slate-700 mb-2">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        pattern="[0-9]*"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit number"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 text-[14px] outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 4. Email */}
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-bold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="yourname@email.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 text-[14px] outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* 5. Net Monthly Income */}
                  <div>
                    <label htmlFor="income" className="block text-[13px] font-bold text-slate-700 mb-2">
                      Net Monthly Income (₹)
                    </label>
                    <div className="relative">
                      <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input
                        id="income"
                        type="number"
                        name="income"
                        value={formData.income}
                        onChange={handleInputChange}
                        placeholder="e.g. 45000"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 text-[14px] outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* 6. Employment Type */}
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2">
                    Employment Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Salaried", "Self-Employed", "Other"].map((type) => (
                      <label
                        key={type}
                        className={`flex items-center justify-center border rounded-xl py-3 text-xs font-bold cursor-pointer transition-all ${formData.employmentType === type
                            ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-extrabold"
                            : "border-slate-200 text-slate-500 bg-slate-50/50 hover:bg-slate-50"
                          }`}
                      >
                        <input
                          type="radio"
                          name="employmentType"
                          value={type}
                          checked={formData.employmentType === type}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        {type === "Self-Employed" ? "Business" : type}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="flex items-start gap-3 mt-1 mb-2">
                  <input
                    type="checkbox"
                    id="cc-privacy"
                    checked={agreedToPrivacy}
                    onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                    className="mt-1 w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 cursor-pointer"
                  />
                  <label htmlFor="cc-privacy" className="text-xs text-slate-500 leading-normal cursor-pointer select-none">
                    I agree to the <Link href="/privacy" className="text-emerald-600 underline font-bold hover:text-emerald-700">Privacy Policy</Link> and authorize ACE Finance to contact me.
                  </label>
                </div>

                <div className="mt-3">
                  <button
                    id="credit-card-apply-submit"
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all duration-300 border-none cursor-pointer flex items-center justify-center gap-1 mt-2"
                  >
                    Check Card Eligibility <ChevronRight size={18} />
                  </button>
                </div>


                <p className="text-xs text-slate-400 text-center mt-3">
                  🔒 256-Bit SSL Secured application process. Your information is strictly encrypted and confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
