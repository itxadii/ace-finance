import LoanPageLayout, { LoanPageData } from "@/components/layout/LoanPageLayout";

export const metadata = {
  title: "Loan Against Property in Dhule | ACE Financial Services",
  description:
    "Unlock the hidden value of your residential or commercial property in Dhule. Get maximum funding, low interest rates, and quick disbursal at zero service charges.",
};

const data: LoanPageData = {
  badge: "Loan Against Property",
  badgeIcon: "🏢",
  heroTitle: "Unlock Value From Your",
  heroHighlight: "Property",
  heroTitleEnd: "With Ease",
  heroDesc:
    "Get maximum financial leverage against your residential, commercial, or industrial property. Benefit from attractive interest rates, lower EMIs, and hassle-free processing.",
  primaryColor: "#10b981",
  gradientFrom: "#ecfdf5",
  gradientTo: "#ffffff",
  stats: [
    { value: "9.0%*", label: "Starting Interest Rate" },
    { value: "15 Yrs", label: "Max Tenure" },
    { value: "₹10 Cr+", label: "Max Loan Amount" },
    { value: "48 Hrs", label: "Approval Time" },
  ],
  features: [
    {
      icon: "🏢",
      title: "High Loan-to-Value (LTV)",
      desc: "Get funding up to 70% of the market value of your residential or commercial property.",
    },
    {
      icon: "📉",
      title: "Attractive Rates",
      desc: "Much lower interest rates compared to personal or business loans since it's secured.",
    },
    {
      icon: "⏳",
      title: "Long Repayment Tenure",
      desc: "Repay comfortably with flexible tenures extending up to 15 years to keep EMIs low.",
    },
    {
      icon: "🏭",
      title: "Any Property Type",
      desc: "Loans available against residential houses, commercial spaces, shops, or open plots.",
    },
    {
      icon: "🎯",
      title: "Flexible End-Use",
      desc: "Use the funds for business expansion, buying machinery, debt consolidation, or wedding expenses.",
    },
    {
      icon: "🤝",
      title: "Balance Transfer Facility",
      desc: "Transfer your existing high-cost property loan to us for lower interest rates and top-up options.",
    },
  ],
  eligibility: [
    { icon: "👤", text: "Indian citizen (salaried or self-employed) aged 21–65 years" },
    { icon: "📄", text: "Property must have a clear and marketable title deed" },
    { icon: "💰", text: "Minimum monthly net income ₹35,000" },
    { icon: "📊", text: "CIBIL score of 650 or above" },
    { icon: "🏢", text: "Property approval check by technical and legal valuation teams" },
    { icon: "📑", text: "Valid KYC documents (PAN, Aadhaar) & income proofs" },
  ],
  steps: [
    { num: "1", title: "Apply Online", desc: "Submit your details on our website or speak with our loan specialist." },
    { num: "2", title: "Property Evaluation", desc: "Our banking partner conducts technical evaluation and legal title checks." },
    { num: "3", title: "Document Submission", desc: "Provide your KYC documents, property papers, and income verification files." },
    { num: "4", title: "Sanction & Disbursal", desc: "Receive the formal sanction letter and get the loan amount credited to your bank account." },
  ],
  faqs: [
    {
      q: "Can I get a loan against a property that is currently rented out?",
      a: "Yes, you can get a loan against rented residential or commercial properties. Lenders will evaluate the rental income and lease agreements to estimate your repayment capacity.",
    },
    {
      q: "What is the difference between a home loan and a loan against property?",
      a: "A home loan is specifically used to buy or construct a new home. A loan against property (LAP) is a secured loan where you mortgage your existing property to raise funds for any personal or business use.",
    },
    {
      q: "Can self-employed individuals apply for this loan?",
      a: "Absolutely! Self-employed business owners, manufacturers, doctors, and professionals are highly eligible for loan against property based on their business financials and ITRs.",
    },
    {
      q: "What documents are required for property evaluation?",
      a: "You need to submit the registry chain, approved building plans, property tax receipts, and title deeds of the property you intend to mortgage.",
    },
    {
      q: "How is the loan amount determined?",
      a: "The loan amount depends on two factors: (1) The technical market valuation of the property (up to 60-70%), and (2) Your verifiable monthly income and debt-to-income ratio.",
    },
  ],
  ctaTitle: "Unlock the Value of Your Property Today",
  ctaDesc:
    "Contact our property loan consultants today. Get a free, zero-commitment evaluation of your property and loan eligibility.",
};

export default function LoanAgainstPropertyPage() {
  return <LoanPageLayout data={data} />;
}
