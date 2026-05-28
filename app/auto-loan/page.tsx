import LoanPageLayout, { LoanPageData } from "@/components/layout/LoanPageLayout";

export const metadata = {
  title: "Auto Loan in Dhule | ACE Financial Services",
  description:
    "Drive home your dream car with competitive interest rates and up to 100% on-road funding in Dhule. Easy processing and flexible tenures at zero service fees.",
};

const data: LoanPageData = {
  badge: "Auto Loan",
  badgeIcon: "🚗",
  heroTitle: "Drive Home Your",
  heroHighlight: "Dream Car",
  heroTitleEnd: "Today",
  heroDesc:
    "Make vehicle purchase hassle-free with custom-tailored auto loans. Enjoy lower interest rates, up to 100% funding on select models, and rapid processing times.",
  primaryColor: "#10b981",
  gradientFrom: "#ecfdf5",
  gradientTo: "#ffffff",
  stats: [
    { value: "8.8%*", label: "Starting Interest Rate" },
    { value: "7 Yrs", label: "Max Tenure" },
    { value: "₹1 Cr+", label: "Max Loan Amount" },
    { value: "24 Hrs", label: "Approval Time" },
  ],
  features: [
    {
      icon: "💸",
      title: "Up to 100% Funding",
      desc: "Get up to 100% on-road financing (including registration, road tax, and insurance) on select car models.",
    },
    {
      icon: "📉",
      title: "Competitive Interest Rates",
      desc: "Attractive rates starting from 8.8% p.a. with multiple bank partners to choose from.",
    },
    {
      icon: "⏱️",
      title: "Super Fast Disbursal",
      desc: "Get your auto loan sanctioned and disbursed in under 24 hours of documentation.",
    },
    {
      icon: "🚘",
      title: "New & Used Vehicles",
      desc: "Financing options available for brand new cars, premium SUVs, commercial vehicles, and pre-owned cars.",
    },
    {
      icon: "📅",
      title: "Flexible Repayment Tenures",
      desc: "Select a repayment tenure ranging from 1 to 7 years to keep your monthly EMIs highly affordable.",
    },
    {
      icon: "🚫",
      title: "No Service Fees",
      desc: "Get expert advice, comparison, and file routing at zero cost to you.",
    },
  ],
  eligibility: [
    { icon: "👤", text: "Indian resident aged 21–65 years at the time of loan maturity" },
    { icon: "💼", text: "Salaried individuals, self-employed business owners, or agriculturists" },
    { icon: "💰", text: "Minimum annual income ₹3 Lakhs" },
    { icon: "📊", text: "CIBIL score of 700 or above preferred" },
    { icon: "📄", text: "Valid identity proof (PAN, Aadhaar) & latest income proof" },
    { icon: "🏦", text: "Last 6 months' bank account statement" },
  ],
  steps: [
    { num: "1", title: "Select Your Vehicle", desc: "Choose your new or pre-owned vehicle and request a quotation from the dealer." },
    { num: "2", title: "Apply Online", desc: "Fill out our brief form or contact Nilesh's relationship desk directly." },
    { num: "3", title: "Submit Documents", desc: "Submit basic documents: KYC, income proof, and dealer invoice quotation." },
    { num: "4", title: "Approval & Delivery", desc: "The bank issues the loan sanction and pay order directly to the dealer so you can drive home." },
  ],
  faqs: [
    {
      q: "Can I get a loan for a second-hand/used car?",
      a: "Yes, we arrange loans for pre-owned cars. The car age should generally not exceed 8-10 years at the time of loan maturity, and interest rates vary slightly compared to new cars.",
    },
    {
      q: "What is 'On-Road' funding?",
      a: "On-road funding covers the complete cost of buying the car, which includes the ex-showroom price, state registration charges, road tax, and first-year comprehensive motor insurance.",
    },
    {
      q: "Can agriculturalists apply for an auto loan?",
      a: "Yes, agriculturists are highly eligible. Most partner banks offer special auto loan schemes based on agricultural land holdings and cropping income.",
    },
    {
      q: "Are there any foreclosure charges if I pay off the loan early?",
      a: "For individual borrowers who take a floating-rate car loan, there are usually zero foreclosure charges under RBI rules. Commercial car loans may have a nominal charge.",
    },
    {
      q: "How does my CIBIL score affect my auto loan?",
      a: "A CIBIL score of 700 or above helps secure the lowest interest rates and highest loan amount. Lower scores may still get approved but at slightly higher rates.",
    },
  ],
  ctaTitle: "Get Behind the Wheel of Your Dream Car",
  ctaDesc:
    "Connect with our auto loan specialists. We compare rates across top banks to find you the best loan deals at zero service charges.",
};

export default function AutoLoanPage() {
  return <LoanPageLayout data={data} />;
}
