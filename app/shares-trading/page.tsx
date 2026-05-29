import LoanPageLayout, { LoanPageData } from "@/components/layout/LoanPageLayout";

export const metadata = {
  title: "Shares Trading & Demat in Dhule | ACE Financial Services",
  description:
    "Open a free Demat account in Dhule. Invest in equity shares, ETFs, and IPOs on BSE & NSE with advanced trading platforms and research tools.",
  alternates: {
    canonical: "/shares-trading/",
  },
};

const data: LoanPageData = {
  badge: "Shares Trading",
  badgeIcon: "📈",
  heroTitle: "Take Control Of Your",
  heroHighlight: "Stock Trading",
  heroTitleEnd: "And Investments",
  heroDesc:
    "Access BSE & NSE stock markets with high-speed trading platforms. Open your Demat account, get daily research recommendations, and trade shares with low brokerage.",
  primaryColor: "#10b981",
  gradientFrom: "#ecfdf5",
  gradientTo: "#ffffff",
  stats: [
    { value: "0*", label: "Demat Account Opening Fee" },
    { value: "4x*", label: "Margin Trade Funding (MTF)" },
    { value: "Daily", label: "Technical Research Calls" },
    { value: "4.8★", label: "Trading App Rating" },
  ],
  features: [
    {
      icon: "📈",
      title: "Equity Delivery & Intraday",
      desc: "Buy shares for long-term delivery or trade actively with high-speed intraday execution.",
    },
    {
      icon: "🏢",
      title: "Free Demat Account",
      desc: "Open your digital Demat and Trading account within 10 minutes with zero paper documentation.",
    },
    {
      icon: "🎯",
      title: "IPO Applications",
      desc: "Apply seamlessly for upcoming mainboard and SME IPOs using simple UPI payment handles.",
    },
    {
      icon: "📊",
      title: "Advanced Charting Tools",
      desc: "Analyze price actions with advanced TradingView charts, custom indicators, and historical data.",
    },
    {
      icon: "💸",
      title: "Margin Trading Facility (MTF)",
      desc: "Boost your buying power. Get up to 4x margin funding to buy shares and hold them for longer periods.",
    },
    {
      icon: "🔔",
      title: "Real-time Research Alerts",
      desc: "Receive intraday research calls, long-term stock recommendations, and market analysis on your phone.",
    },
  ],
  eligibility: [
    { icon: "👤", text: "Indian citizen aged 18 years or above" },
    { icon: "📄", text: "PAN Card is mandatory for Demat account opening" },
    { icon: "🏦", text: "Active bank account to link with Demat for funds transfer" },
    { icon: "📱", text: "Mobile number linked with Aadhaar card for online e-sign" },
    { icon: "📑", text: "Address proof (Aadhaar, Passport, or Voter ID)" },
    { icon: "📊", text: "Income proof (required only for activating Futures & Options trading segment)" },
  ],
  steps: [
    { num: "1", title: "Fill Details Online", desc: "Submit your basic personal and contact details on our registration portal." },
    { num: "2", title: "Document Upload", desc: "Upload clear photos of your PAN card, Aadhaar card, cancelled check, and signature." },
    { num: "3", title: "In-Person Verification", desc: "Complete quick digital video verification using your smartphone camera." },
    { num: "4", title: "Online E-Sign", desc: "E-sign the account opening document using Aadhaar OTP to activate your account." },
  ],
  faqs: [
    {
      q: "What is a Demat account and why do I need one?",
      a: "A Demat (Dematerialized) account holds your shares and securities in electronic form, similar to how a bank account holds cash. It is mandatory in India to have a Demat account to buy, sell, or invest in equity shares.",
    },
    {
      q: "Are there any annual maintenance charges (AMC) for the Demat account?",
      a: "Demat accounts feature zero account opening charges. Annual maintenance charges (AMC) are nominal (often waived for the first year) and billed directly by the clearing house repository.",
    },
    {
      q: "How long does it take to open a Demat account?",
      a: "If your mobile is linked to Aadhaar and you have clear copies of your PAN and bank details, the entire digital application takes under 10 minutes. Once e-signed, your trading ID is activated within 4 to 24 hours.",
    },
    {
      q: "Can I trade Futures & Options (F&O) with this account?",
      a: "Yes, you can trade derivatives. To activate the F&O segment, SEBI rules require you to upload a valid income proof, such as your last 6 months' bank statement or latest ITR.",
    },
    {
      q: "How does Nilesh Gindodia's desk support Demat clients?",
      a: "We act as your local customer partner. We guide you through account opening, help resolve technical issues on the trading application, and provide expert daily research calls to assist your trading decisions.",
    },
  ],
  ctaTitle: "Open Your Demat & Trading Account Now",
  ctaDesc:
    "Ready to step into the stock market? Start your equity investment journey today. Our team will guide you through the 100% digital account opening process.",
};

export default function SharesTradingPage() {
  return <LoanPageLayout data={data} />;
}
