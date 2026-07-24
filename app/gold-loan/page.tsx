import LoanPageLayout, { LoanPageData } from "@/components/layout/LoanPageLayout";

export const metadata = {
  title: "Gold Loan in Dhule | ACE Financial Services",
  description:
    "Get instant cash against your gold ornaments in Dhule. Enjoy attractive interest rates, high LTV, minimal documentation, and secure bank vault storage.",
  alternates: {
    canonical: "/gold-loan/",
  },
};

const data: LoanPageData = {
  badge: "Gold Loan",
  badgeIcon: "🪙",
  heroTitle: "Instant Cash Against Your",
  heroHighlight: "Gold Ornaments",
  heroTitleEnd: "With Ease",
  heroDesc:
    "Unlock immediate liquidity against your gold jewelry or coins. Benefit from competitive interest rates, transparent valuation, high LTV, and safe bank vault storage.",
  primaryColor: "#10b981",
  gradientFrom: "#ecfdf5",
  gradientTo: "#ffffff",
  stats: [
    { value: "9.2%*", label: "Starting Interest Rate" },
    { value: "36 Mos", label: "Max Tenure" },
    { value: "₹1 Cr+", label: "Max Loan Amount" },
    { value: "72 Hrs", label: "Approval Time" },
  ],
  features: [
    {
      icon: "⚖️",
      title: "Transparent Valuation",
      desc: "Get your gold weight and purity evaluated accurately by certified bank valuers.",
    },
    {
      icon: "📉",
      title: "Competitive Interest Rates",
      desc: "Attractive rates starting from 9.2% p.a. with multiple bank and NBFC partners.",
    },
    {
      icon: "🪙",
      title: "Up to 75% LTV",
      desc: "Borrow up to 75% of the current market value of your gold as per RBI guidelines.",
    },
    {
      icon: "🔒",
      title: "Bank Vault Security",
      desc: "Your gold is insured and safely stored in high-security bank lockers until full loan repayment.",
    },
    {
      icon: "🔁",
      title: "Flexible Repayment",
      desc: "Choose from monthly interest-only payments, bullet repayment, or regular EMI options.",
    },
    {
      icon: "📄",
      title: "Minimal Documentation",
      desc: "Hassle-free processing requiring only basic KYC proof without complex income verification.",
    },
  ],
  eligibility: [
    { icon: "👤", text: "Indian resident aged 18–75 years" },
    { icon: "🪙", text: "Gold ornaments or coins with purity between 18k and 24k" },
    { icon: "📄", text: "Valid identity proof (PAN card & Aadhaar card)" },
    { icon: "🏦", text: "Active bank account for direct loan disbursal" },
    { icon: "📑", text: "Proof of address (Aadhaar, Voter ID, or Utility bill)" },
    { icon: "📊", text: "No income proof or high credit score required" },
  ],
  steps: [
    { num: "1", title: "Apply & Valuation", desc: "Bring your gold ornaments for evaluation or consult our relationship manager." },
    { num: "2", title: "Purity Verification", desc: "Certified valuers test purity and calculate the maximum eligible loan amount." },
    { num: "3", title: "Submit KYC", desc: "Provide basic identity and address proof for quick verification." },
    { num: "4", title: "Instant Disbursal", desc: "Loan amount is credited directly to your bank account while gold is safely vaulted." },
  ],
  faqs: [
    {
      q: "How is the gold loan amount calculated?",
      a: "The loan amount depends on the purity (karat) and net weight of the gold ornaments, calculated against the daily market gold rate up to RBI's LTV cap (75%).",
    },
    {
      q: "Is my gold safe during the loan tenure?",
      a: "Yes, your gold is sealed in tamper-proof packaging in your presence and deposited into high-security bank vaults with full insurance coverage.",
    },
    {
      q: "Do I need a high CIBIL score to get a gold loan?",
      a: "No, since gold loans are fully secured assets, complex income proof or high CIBIL scores are generally not required for approval.",
    },
    {
      q: "What happens when I repay the loan in full?",
      a: "Upon complete loan repayment (principal + interest), your sealed gold packet is handed back to you intact in the exact same condition.",
    },
    {
      q: "What repayment options are available?",
      a: "You can pay monthly EMIs, pay interest monthly and principal at maturity, or select a bullet repayment option based on the lender's terms.",
    },
  ],
  ctaTitle: "Unlock the Value of Your Gold Today",
  ctaDesc:
    "Connect with our gold loan specialists. Get transparent valuation, low interest rates, and quick disbursal across top bank partners.",
};

export default function GoldLoanPage() {
  return <LoanPageLayout data={data} />;
}
