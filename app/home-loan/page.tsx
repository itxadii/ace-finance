import LoanPageLayout, { LoanPageData } from "@/components/layout/LoanPageLayout";

export const metadata = {
  title: "Home Loan in Nashik | ACE Finance — Low Rates, Quick Approval",
  description:
    "Get your dream home with ACE Finance Home Loans. Attractive interest rates, minimal documentation, and approval within 24–48 hours in Nashik.",
};

const data: LoanPageData = {
  badge: "Home Loan",
  badgeIcon: "🏠",
  heroTitle: "Turn Your",
  heroHighlight: "Dream Home",
  heroTitleEnd: "Into Reality",
  heroDesc:
    "Own the home you've always wanted with our easy home loan solutions. Attractive interest rates, simple documentation, and personalized support every step of the way.",
  primaryColor: "#BFDDF0",
  gradientFrom: "#000000",
  gradientTo: "#0a0d14",
  stats: [
    { value: "8.5%*", label: "Starting Interest Rate" },
    { value: "30 Yrs", label: "Max Tenure" },
    { value: "₹5 Cr+", label: "Max Loan Amount" },
    { value: "24 Hrs", label: "Approval Time" },
  ],
  features: [
    {
      icon: "📉",
      title: "Low Interest Rates",
      desc: "Competitive home loan rates starting from 8.5% p.a. with no hidden charges.",
    },
    {
      icon: "📄",
      title: "Minimal Documentation",
      desc: "Simple paperwork requirements — just your KYC, income proof, and property documents.",
    },
    {
      icon: "⚡",
      title: "Quick Disbursal",
      desc: "Loan disbursed directly to the seller/builder's account within 48 hours of approval.",
    },
    {
      icon: "🔁",
      title: "Flexible Repayment",
      desc: "Repayment tenures up to 30 years with EMI options tailored to your income.",
    },
    {
      icon: "🏗️",
      title: "Under-Construction Homes",
      desc: "Financing available for under-construction properties and builder floors.",
    },
    {
      icon: "🤝",
      title: "Dedicated Manager",
      desc: "A personal relationship manager guides you from application to disbursal.",
    },
  ],
  eligibility: [
    { icon: "👤", text: "Indian citizen aged 21–65 years" },
    { icon: "💼", text: "Salaried or self-employed with stable income" },
    { icon: "💰", text: "Minimum monthly income ₹25,000" },
    { icon: "📊", text: "CIBIL score of 650 or above" },
    { icon: "🏠", text: "Property must have clear title deed" },
    { icon: "📑", text: "Valid KYC documents (Aadhaar, PAN)" },
  ],
  steps: [
    { num: "1", title: "Apply Online or Visit Us", desc: "Fill out our quick application form or walk into our Nashik office." },
    { num: "2", title: "Document Submission", desc: "Submit your income proof, property papers, and KYC documents." },
    { num: "3", title: "Loan Processing & Approval", desc: "Our team verifies documents and approves the loan within 24–48 hours." },
    { num: "4", title: "Disbursal", desc: "Funds are transferred directly to the seller/builder's account." },
  ],
  faqs: [
    {
      q: "What is the maximum home loan amount I can get?",
      a: "You can get a home loan up to ₹5 crore based on your income, property value, and repayment capacity. We finance up to 80% of the property value.",
    },
    {
      q: "What is the minimum CIBIL score required?",
      a: "A CIBIL score of 650 or above is generally required. A higher score improves your chances of getting better interest rates.",
    },
    {
      q: "Can I apply for a joint home loan?",
      a: "Yes, you can apply with a co-applicant (spouse, parent, or sibling). A joint application can increase your eligibility.",
    },
    {
      q: "Are there any prepayment or foreclosure charges?",
      a: "For floating rate home loans, there are no prepayment penalties as per RBI guidelines. Fixed-rate loans may have nominal charges.",
    },
    {
      q: "How long does the entire loan process take?",
      a: "Once all documents are submitted, the loan is typically approved within 24–48 hours and disbursed within 3–5 working days.",
    },
  ],
  ctaTitle: "Ready to Move Into Your Dream Home?",
  ctaDesc:
    "Speak with our home loan experts today. Get a free eligibility check and personalized interest rate quote.",
};

export default function HomeLoanPage() {
  return <LoanPageLayout data={data} />;
}
