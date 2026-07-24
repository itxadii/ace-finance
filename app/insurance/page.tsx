import LoanPageLayout, { LoanPageData } from "@/components/layout/LoanPageLayout";

export const metadata = {
  title: "Life & Health Insurance in Dhule | ACE Financial Services",
  description:
    "Secure your family's future and your wealth with comprehensive Life & Health Insurance policies in Dhule. Expert guidance and dedicated claims support.",
  alternates: {
    canonical: "/insurance/",
  },
};

const data: LoanPageData = {
  badge: "Life & Health Insurance",
  badgeIcon: "🛡️",
  heroTitle: "Secure What Matters",
  heroHighlight: "Protect Your Family",
  heroTitleEnd: "And Future",
  heroDesc:
    "Protect your loved ones and your hard-earned savings from medical emergencies and life's uncertainties. Get expert consultation to select terms tailored to your age and health.",
  primaryColor: "#10b981",
  gradientFrom: "#ecfdf5",
  gradientTo: "#ffffff",
  stats: [
    { value: "₹1 Cr+*", label: "Term Cover Starts At" },
    { value: "₹500/Mo", label: "Starting Premiums" },
    { value: "10k+", label: "Cashless Hospitals" },
    { value: "99%*", label: "Settlement Ratio" },
  ],
  features: [
    {
      icon: "🏥",
      title: "Comprehensive Health Cover",
      desc: "Stay protected against heavy hospitalization bills with cashless access to top hospitals.",
    },
    {
      icon: "🛡️",
      title: "Term Life Protection",
      desc: "Secure your family's financial stability and lifestyle with high-cover term plans at very low premium costs.",
    },
    {
      icon: "💳",
      title: "Cashless Treatment",
      desc: "Access instant cashless treatment at over 10,000 network hospitals in India with zero out-of-pocket hassle.",
    },
    {
      icon: "🩺",
      title: "Pre & Post Hospitalization",
      desc: "Coverage extending to medical checkups, diagnostic tests, consultations, and post-discharge medicines.",
    },
    {
      icon: "📈",
      title: "Tax Savings (80C / 80D)",
      desc: "Save up to ₹75,000 in income tax annually under sections 80C (Life Insurance) and 80D (Health Insurance).",
    },
    {
      icon: "🤝",
      title: "Dedicated Claim Support",
      desc: "Nilesh Gindodia's desk assists your family personally during claims, coordinating directly with insurance managers.",
    },
  ],
  eligibility: [
    { icon: "👤", text: "Indian citizen aged 18–65 years" },
    { icon: "📄", text: "Requires basic identity verification (Aadhaar, PAN)" },
    { icon: "💰", text: "Stable income source for premium payments" },
    { icon: "🩺", text: "Satisfactory health declaration (pre-policy medical test for older ages)" },
    { icon: "📑", text: "Valid address proof and passport size photograph" },
    { icon: "🏢", text: "Income tax returns or salary slips (for high term insurance coverages)" },
  ],
  steps: [
    { num: "1", title: "Consultation Request", desc: "Share your coverage requirements, family member ages, and medical history with us." },
    { num: "2", title: "Plan Comparison", desc: "Our specialists compare top policies from India's leading insurance companies." },
    { num: "3", title: "Application & KYC", desc: "Fill out the health declaration and submit basic KYC documents digitally." },
    { num: "4", title: "Policy Issuance", desc: "Complete the online payment, undergo tele-medical checkup if needed, and receive your active policy document." },
  ],
  faqs: [
    {
      q: "What is term life insurance and why do I need it?",
      a: "Term insurance is the purest form of life insurance. It provides high cover amount (e.g. ₹1 crore) at very low premiums (e.g. ₹600/month). In the event of the policyholder's untimely demise, the lump sum is paid to the family to clear loans and support children's education.",
    },
    {
      q: "Does health insurance cover pre-existing diseases?",
      a: "Yes, most health policies cover pre-existing conditions (like diabetes or hypertension) after a waiting period, typically ranging from 2 to 4 years of continuous policy renewals.",
    },
    {
      q: "How does cashless hospitalization work?",
      a: "When admitted to a network hospital, you present your insurance card at the TPA desk. The hospital coordinates directly with the insurer for approvals, allowing you to walk out without paying the bill (except non-medical charges).",
    },
    {
      q: "Do I need to undergo medical checkups to buy a policy?",
      a: "For term insurance or health insurance at younger ages (usually under 45), policies are often issued based on a tele-medical questionnaire. Older ages or very high cover amounts require basic medical screening, which is fully paid for by the insurer.",
    },
    {
      q: "How does ACE Financial Services assist during claims?",
      a: "We provide dedicated claim relationship assistance. If a medical emergency arises or in case of a life claim, we help compile documentation, check eligibility guidelines, and follow up directly with the underwriting company.",
    },
  ],
  ctaTitle: "Safeguard Your Family's Health & Wealth",
  ctaDesc:
    "Get in touch with our insurance advisory experts today. Protect your family's future and compare plans from leading insurers.",
};

export default function InsurancePage() {
  return <LoanPageLayout data={data} />;
}
