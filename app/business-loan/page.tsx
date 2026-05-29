import LoanPageLayout, { LoanPageData } from "@/components/layout/LoanPageLayout";

export const metadata = {
  title: "Business Loan in Dhule | ACE Financial Services — Grow Your Business",
  description:
    "Fuel your business growth with ACE Financial Services business loans in Dhule. Affordable rates, flexible repayment, and fast approvals for SMEs and startups.",
  alternates: {
    canonical: "/business-loan/",
  },
};

const data: LoanPageData = {
  badge: "Business Loan",
  badgeIcon: "🏢",
  heroTitle: "Fuel Your",
  heroHighlight: "Business Growth",
  heroDesc:
    "Boost your business with affordable business loans tailored to your unique goals. From working capital to expansion funding — we provide the financial muscle your business deserves.",

  // UPDATED TO EMERALD THEME
  primaryColor: "#10b981", // Emerald 500
  gradientFrom: "#ecfdf5", // Emerald 50 (Very light green)
  gradientTo: "#ffffff",   // Pure White

  stats: [
    { value: "11%*", label: "Starting Interest Rate" },
    { value: "7 Yrs", label: "Max Tenure" },
    { value: "₹2 Cr", label: "Max Loan Amount" },
    { value: "48 Hrs", label: "Approval Time" },
  ],
  features: [
    {
      icon: "💼",
      title: "Working Capital",
      desc: "Fund day-to-day operations, payroll, and inventory without disrupting cash flow.",
    },
    {
      icon: "📈",
      title: "Business Expansion",
      desc: "Open new branches, upgrade equipment, or enter new markets with our flexible loans.",
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      desc: "Business loan approved within 48 hours — so you never miss a growth opportunity.",
    },
    {
      icon: "🔒",
      title: "Secured & Unsecured",
      desc: "Choose from collateral-backed or unsecured loans based on your business needs.",
    },
    {
      icon: "📊",
      title: "Customized Repayment",
      desc: "Seasonal repayment plans aligned with your business cash flow cycles.",
    },
    {
      icon: "🤝",
      title: "Relationship Banking",
      desc: "Dedicated business loan managers who understand your industry and goals.",
    },
  ],
  eligibility: [
    { icon: "🏢", text: "Business operational for at least 2 years" },
    { icon: "💰", text: "Annual turnover of ₹20 lakhs or more" },
    { icon: "📊", text: "Healthy financials with positive EBITDA" },
    { icon: "📑", text: "GST registration and ITR filing required" },
    { icon: "👤", text: "Proprietor/Partner/Director aged 21–65 years" },
    { icon: "🏦", text: "Current account with 6+ months statements" },
  ],
  steps: [
    { num: "1", title: "Business Assessment", desc: "Our expert reviews your business profile and assesses the right loan amount." },
    { num: "2", title: "Document Collection", desc: "Submit financials, GST returns, bank statements, and KYC documents." },
    { num: "3", title: "Credit Evaluation", desc: "Rapid credit appraisal of your business financials and collateral (if any)." },
    { num: "4", title: "Loan Disbursal", desc: "Funds credited to your current account within 48 hours of approval." },
  ],
  faqs: [
    {
      q: "What types of businesses can apply for a business loan?",
      a: "We cater to sole proprietors, partnerships, private limited companies, LLPs, and MSMEs across all industries including manufacturing, trading, and services.",
    },
    {
      q: "Is collateral required for a business loan?",
      a: "Both secured and unsecured business loans are available. Unsecured loans up to ₹50 lakhs are available for businesses with strong financials. Larger amounts may require collateral.",
    },
    {
      q: "What financial documents do I need?",
      a: "Typically: last 2 years ITR, last 6 months bank statements, GST returns, and audited financials (for loans above ₹25 lakhs).",
    },
    {
      q: "Can I get a business loan if my credit score is low?",
      a: "We evaluate the overall health of your business, not just the credit score. Strong revenue, existing client contracts, or collateral can support approval even with a lower score.",
    },
    {
      q: "What is the repayment structure like?",
      a: "Flexible monthly EMI or bullet repayment options. We also offer moratorium periods for businesses with seasonal cash flows.",
    },
  ],
  ctaTitle: "Ready to Take Your Business to the Next Level?",
  ctaDesc:
    "Our business loan specialists will craft the right financing solution for your unique goals.",
};

export default function BusinessLoanPage() {
  return <LoanPageLayout data={data} />;
}