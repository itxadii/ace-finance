import LoanPageLayout, { LoanPageData } from "@/components/LoanPageLayout";

export const metadata = {
  title: "Personal Loan in Nashik | ACE Finance — Instant Approval",
  description:
    "Get a hassle-free personal loan in Nashik with ACE Finance. Flexible repayment, minimal paperwork, and same-day disbursals for urgent financial needs.",
};

const data: LoanPageData = {
  badge: "Personal Loan",
  badgeIcon: "👤",
  heroTitle: "Quick Cash,",
  heroHighlight: "Zero Hassle",
  heroDesc:
    "Get quick, hassle-free personal loans with flexible repayment options and minimal paperwork. Whether it's a medical emergency, wedding, travel, or education — we've got you covered.",
  primaryColor: "#BFDDF0",
  gradientFrom: "#000000",
  gradientTo: "#0a0d14",
  stats: [
    { value: "10.5%*", label: "Starting Interest Rate" },
    { value: "5 Yrs", label: "Max Tenure" },
    { value: "₹25 L", label: "Max Loan Amount" },
    { value: "Same Day", label: "Disbursal" },
  ],
  features: [
    {
      icon: "⚡",
      title: "Instant Approval",
      desc: "Get your loan approved within hours — sometimes on the same day you apply.",
    },
    {
      icon: "📄",
      title: "No Collateral Needed",
      desc: "Personal loans are completely unsecured — no need to pledge any asset.",
    },
    {
      icon: "🎯",
      title: "Use for Any Purpose",
      desc: "Medical, travel, education, wedding, home renovation — use funds freely.",
    },
    {
      icon: "🔁",
      title: "Flexible EMI Options",
      desc: "Choose EMI amounts that fit your monthly budget with tenures up to 5 years.",
    },
    {
      icon: "📱",
      title: "Paperless Process",
      desc: "Apply online with minimal documents — Aadhaar, PAN, and bank statement.",
    },
    {
      icon: "💸",
      title: "No Hidden Charges",
      desc: "100% transparent loan with no hidden fees or surprise charges.",
    },
  ],
  eligibility: [
    { icon: "👤", text: "Age between 21 and 60 years" },
    { icon: "💼", text: "Salaried employee or self-employed professional" },
    { icon: "💰", text: "Minimum monthly income ₹15,000" },
    { icon: "📊", text: "CIBIL score of 650 or above preferred" },
    { icon: "📑", text: "Valid Aadhaar and PAN card" },
    { icon: "🏦", text: "Active bank account with 3+ months statements" },
  ],
  steps: [
    { num: "1", title: "Check Eligibility", desc: "Use our quick online tool or call us to check your eligibility in 2 minutes." },
    { num: "2", title: "Submit Documents", desc: "Upload your KYC docs and bank statements online — no branch visit needed." },
    { num: "3", title: "Get Approved", desc: "Our team reviews your application and approves within a few hours." },
    { num: "4", title: "Money in Your Account", desc: "Loan amount is credited directly to your bank account on the same day." },
  ],
  faqs: [
    {
      q: "What is the maximum personal loan amount I can get?",
      a: "You can avail a personal loan of up to ₹25 lakhs, depending on your income, credit score, and repayment capacity.",
    },
    {
      q: "Do I need to provide any collateral or security?",
      a: "No. Personal loans are completely unsecured, meaning you don't need to pledge any asset or property.",
    },
    {
      q: "What can I use a personal loan for?",
      a: "Personal loans are multi-purpose. You can use them for medical emergencies, travel, education, weddings, home renovation, or any personal financial need.",
    },
    {
      q: "How quickly can I get the loan?",
      a: "Once documents are verified, approval is typically within a few hours and funds are disbursed on the same day or next working day.",
    },
    {
      q: "What documents do I need to apply?",
      a: "You'll need your Aadhaar card, PAN card, last 3 months' bank statement, and salary slips (for salaried individuals).",
    },
  ],
  ctaTitle: "Need Cash Fast? We're Here to Help.",
  ctaDesc:
    "Apply in minutes and get your personal loan approved the same day. Our experts are available to guide you.",
};

export default function PersonalLoanPage() {
  return <LoanPageLayout data={data} />;
}
