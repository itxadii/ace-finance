import LoanPageLayout, { LoanPageData } from "@/components/layout/LoanPageLayout";

export const metadata = {
  title: "Mutual Funds Investment in Dhule | ACE Financial Services",
  description:
    "Grow your wealth with top-performing mutual funds in Dhule. Get personalized SIP & lumpsum investment advice at zero service fees.",
  alternates: {
    canonical: "/mutual-funds/",
  },
};

const data: LoanPageData = {
  badge: "Mutual Funds",
  badgeIcon: "📈",
  heroTitle: "Grow Your Wealth",
  heroHighlight: "Invest Smarter",
  heroTitleEnd: "For Tomorrow",
  heroDesc:
    "Secure your financial goals with mutual funds tailored to your risk appetite. Invest systematically through SIPs or build capital with lumpsum investments, all managed with professional oversight.",
  primaryColor: "#10b981",
  gradientFrom: "#ecfdf5",
  gradientTo: "#ffffff",
  stats: [
    { value: "12% - 15%*", label: "Historic Returns (CAGR)" },
    { value: "₹500/Mo", label: "Min SIP Investment" },
    { value: "40+", label: "Fund Houses Covered" },
    { value: "0%", label: "Advisory Consultation Fee" },
  ],
  features: [
    {
      icon: "📅",
      title: "Systematic Investment Plan (SIP)",
      desc: "Start small. Invest a fixed amount (as low as ₹500) monthly or quarterly to benefit from rupee cost averaging.",
    },
    {
      icon: "📊",
      title: "Goal-Based Investment",
      desc: "Align your portfolios to specific long-term goals like children's higher education, marriage, or buying a property.",
    },
    {
      icon: "💼",
      title: "Professional Management",
      desc: "Your money is managed by top-tier, certified fund managers who monitor market trends daily.",
    },
    {
      icon: "📈",
      title: "Diverse Schemes",
      desc: "Choose from Equity (high growth), Debt (stable returns), Hybrid (balanced risk), or Liquid funds (instant liquidity).",
    },
    {
      icon: "🛡️",
      title: "Tax-Saving (ELSS) Funds",
      desc: "Save up to ₹46,800 in tax annually under Section 80C with tax-saving mutual funds (lock-in period of only 3 years).",
    },
    {
      icon: "📱",
      title: "Instant Digital Tracking",
      desc: "Track your investment values, growth, and returns in real-time through simple dashboard reports.",
    },
  ],
  eligibility: [
    { icon: "👤", text: "Indian citizens, NRI, or corporate entities" },
    { icon: "📄", text: "KYC compliant (Aadhaar & PAN linked with active verification)" },
    { icon: "🏦", text: "Requires an active bank account linked with internet banking or UPI" },
    { icon: "💰", text: "SIP starting at just ₹500, or Lumpsum starting at ₹1,000" },
    { icon: "📑", text: "Must provide basic risk profile answers (conservative, moderate, aggressive)" },
    { icon: "📈", text: "Minimum age 18 years (minor accounts can be opened with guardians)" },
  ],
  steps: [
    { num: "1", title: "Risk Profile Assessment", desc: "Consult with us to determine your investment risk capacity and timeline." },
    { num: "2", title: "Fund & Portfolio Selection", desc: "We recommend a diversified set of top-performing schemes matching your goals." },
    { num: "3", title: "Digital KYC Setup", desc: "Complete your paperless KYC registration online in under 5 minutes." },
    { num: "4", title: "Activate SIP/Lumpsum", desc: "Set up auto-debit (ECS mandate) for monthly SIP or transfer lumpsum amount to initiate growth." },
  ],
  faqs: [
    {
      q: "What is an SIP (Systematic Investment Plan)?",
      a: "SIP is an investment route where you regularly invest a fixed amount of money in your selected mutual fund scheme. It helps average out purchase cost over time and enforces disciplined monthly savings.",
    },
    {
      q: "Are mutual funds safe?",
      a: "Mutual fund investments are subject to market risks, meaning returns are not guaranteed. However, they are highly regulated by SEBI in India and historically outperform bank FDs and inflation over long periods.",
    },
    {
      q: "What is ELSS and how does it save taxes?",
      a: "ELSS (Equity Linked Savings Scheme) is a diversified equity mutual fund that offers tax deductions up to ₹1.5 Lakhs under Section 80C. It features a 3-year lock-in, which is the shortest among all 80C tax saving options.",
    },
    {
      q: "Can I stop or pause my SIP at any time?",
      a: "Yes, mutual funds offer maximum flexibility. You can pause, modify, or completely stop your SIP online at any point without any penalties or fees.",
    },
    {
      q: "What charges apply when investing through ACE Financial Services?",
      a: "Our portfolio consultation, advisory matching, and account setup assistance are 100% free of charge. Mutual fund houses pay commission directly out of the fund's expense ratio.",
    },
  ],
  ctaTitle: "Start Your Wealth Building Journey",
  ctaDesc:
    "Get in touch with our certified mutual fund advisors. Let us design a balanced portfolio to secure your future financial freedom at zero service fee.",
};

export default function MutualFundsPage() {
  return <LoanPageLayout data={data} />;
}
