import LoanPageLayout, { LoanPageData } from "@/components/layout/LoanPageLayout";

export const metadata = {
  title: "Commodity & Currency Trading in Dhule | ACE Financial Services",
  description:
    "Diversify your trading portfolio. Access commodities like Gold, Crude Oil, and major currency pairs in Dhule with low brokerage and high speed.",
  alternates: {
    canonical: "/commodity-currency/",
  },
};

const data: LoanPageData = {
  badge: "Commodity & Currency",
  badgeIcon: "💱",
  heroTitle: "Diversify Your Portfolio",
  heroHighlight: "Trade Global Markets",
  heroTitleEnd: "With Confidence",
  heroDesc:
    "Access global commodity values (Gold, Silver, Crude Oil) and currency markets (USD, EUR, GBP). Leverage expert advisory, daily research reports, and top-tier trading applications.",
  primaryColor: "#10b981",
  gradientFrom: "#ecfdf5",
  gradientTo: "#ffffff",
  stats: [
    { value: "10x*", label: "Max Leverage/Margin" },
    { value: "24/5", label: "Market Support Hours" },
    { value: "10ms", label: "Trade Execution Speed" },
    { value: "Low", label: "Brokerage Rates" },
  ],
  features: [
    {
      icon: "🪙",
      title: "Metal Trading",
      desc: "Trade high-liquidity contracts in Gold, Silver, Copper, and Aluminum on MCX.",
    },
    {
      icon: "🛢️",
      title: "Energy & Agri Commodities",
      desc: "Capitalize on movements in Crude Oil, Natural Gas, Cotton, Mentha Oil, and spices.",
    },
    {
      icon: "💵",
      title: "Currency Derivatives",
      desc: "Hedge currency risks and trade pairs like USD-INR, EUR-INR, GBP-INR, and JPY-INR on NSE.",
    },
    {
      icon: "📊",
      title: "Hedging Opportunities",
      desc: "Protect your physical import-export businesses from raw material price fluctuations.",
    },
    {
      icon: "💡",
      title: "Expert Daily Calls",
      desc: "Receive technical research reports and buy/sell signals on commodities directly via SMS or WhatsApp.",
    },
    {
      icon: "🛡️",
      title: "Real-time Risk Management",
      desc: "Advanced trading interfaces with automated stop-loss, bracket orders, and trail limits.",
    },
  ],
  eligibility: [
    { icon: "👤", text: "Indian resident aged 18 years or above" },
    { icon: "📄", text: "Requires active PAN card & linked Aadhaar card" },
    { icon: "🏦", text: "Linked bank account with active internet banking" },
    { icon: "📈", text: "Mandatory income proof: last 6 months' bank statements, ITR, or salary slip" },
    { icon: "📑", text: "Active Demat & Trading Account activated for MCX/NSE-CD segments" },
    { icon: "🤝", text: "Completed KYC verification and signed client agreement form" },
  ],
  steps: [
    { num: "1", title: "Demat & Trading Activation", desc: "Open or activate commodity and currency trading segments on your Demat account." },
    { num: "2", title: "Segment Authorization", desc: "Upload income proof (ITR or bank statement) to comply with SEBI guidelines." },
    { num: "3", title: "Margin Allocation", desc: "Transfer funds from your bank account to allocate trading margins." },
    { num: "4", title: "Trade Execution", desc: "Begin trading global metals, crude oil, or currencies using our mobile/desktop app." },
  ],
  faqs: [
    {
      q: "What are the market hours for commodity trading in India?",
      a: "Commodity trading on MCX operates for extended hours compared to equity markets. Typically, agricultural commodities trade from 9:00 AM to 5:00 PM, while metals and energy trade from 9:00 AM to 11:30 PM (or 11:55 PM during daylight savings).",
    },
    {
      q: "What is currency trading (NSE-CD)?",
      a: "Currency trading involves buying and selling currency contracts. In India, retail traders can trade exchange-traded currency derivatives (ETCD) on major currency pairs against the Indian Rupee (INR) on NSE and BSE.",
    },
    {
      q: "Why is income proof mandatory for commodity/currency activation?",
      a: "As per SEBI regulations, derivatives trading (including commodities futures/options and currency pairs) involves leverage and risk. Traders must provide financial proof to confirm they have the capital capacity.",
    },
    {
      q: "Can I trade commodities on my mobile phone?",
      a: "Absolutely! We provide state-of-the-art mobile trading applications with advanced charts, indicators, real-time pricing feeds, and one-click order placement.",
    },
    {
      q: "What is the leverage provided in commodity futures?",
      a: "Leverage varies depending on exchange rules and contract volatility, typically ranging from 5x to 10x. This allows you to trade larger contract values with smaller margin deposits, though it also increases risk.",
    },
  ],
  ctaTitle: "Diversify Your Assets into Global Markets",
  ctaDesc:
    "Consult our trading account relationship desk. Open your account or activate commodity/currency trading segments today at zero hassle.",
};

export default function CommodityCurrencyPage() {
  return <LoanPageLayout data={data} />;
}
