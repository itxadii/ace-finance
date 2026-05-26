import Link from "next/link";

export const metadata = {
  title: "About Us | ACE Finance — Direct Selling Agent (DSA) in Nashik",
  description:
    "Learn about ACE Finance, the leading Direct Selling Agent (DSA) in Nashik. We partner with 20+ top banks to find you the best loan deals at zero service charges.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Zero Service Charges",
      description: "Our consultation, comparison, and documentation processing are 100% free. We are compensated directly by our partner banks.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "20+ Banking Partners",
      description: "Instead of visiting multiple banks, apply once with us. We compare and negotiate rates across top public and private lenders.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Doorstep Documentation",
      description: "Our loan relationship officers handle all physical verification and document collection, saving you multiple branch visits.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "End-to-End Tracking",
      description: "From credit scoring analysis, application submission, to final verification and disbursal, we guide you at every step.",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Match",
      description: "We understand your loan requirements, review your CIBIL score, and match you with the best available bank interest rates.",
    },
    {
      step: "02",
      title: "Document Collection",
      description: "We collect your financial documents from your doorstep or via our secure portal. No visiting banks or photocopy runs required.",
    },
    {
      step: "03",
      title: "Application Submission",
      description: "We compile, verify, and submit your loan file to the banks best matching your profile to guarantee maximum approval odds.",
    },
    {
      step: "04",
      title: "Disbursal & Support",
      description: "We track valuation, legal clearances, and coordinate with bank underwriters to ensure disbursal directly to your account.",
    },
  ];

  const partnerBanks = [
    { name: "State Bank of India", logoText: "SBI", desc: "Public Sector Leader" },
    { name: "HDFC Bank", logoText: "HDFC", desc: "Private Banking Giant" },
    { name: "ICICI Bank", logoText: "ICICI", desc: "Retail Loan Pioneer" },
    { name: "Axis Bank", logoText: "AXIS", desc: "Diverse Credit Options" },
    { name: "Kotak Mahindra", logoText: "KOTAK", desc: "Fast Digital Processing" },
    { name: "IDFC FIRST Bank", logoText: "IDFC", desc: "Customer-Centric Rates" },
    { name: "Bajaj Finserv", logoText: "BAJAJ", desc: "Instant Approvals" },
    { name: "Tata Capital", logoText: "TATA", desc: "Flexible Repayments" },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Header */}
      <section id="about-hero" className="relative pt-40 pb-24 px-6 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 text-center">
        {/* Glowing backdrop elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
        {/* Background Pattern */}
        <div className="absolute right-220 top-1/2 -translate-y-1/2 w-[70%] h-[100%] bg-[url('/pattern.png')] bg-contain bg-no-repeat bg-right opacity-[0.2] pointer-events-none" />

        <div className="container mx-auto max-w-[1200px] relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-1.5 mb-8">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
              Direct Selling Agent Model
            </span>
          </div>

          <h1 className="text-[clamp(40px,6vw,64px)] font-black text-slate-900 tracking-tight leading-[1.1] max-w-[800px] mx-auto mb-6">
            A Smarter Way to Secure Your <span className="text-emerald-500">Finances</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-[600px] mx-auto leading-relaxed">
            ACE Finance connects you to India's premier financial institutions under one single platform. We manage the paperwork, compare rates, and fast-track approvals for free.
          </p>
        </div>
      </section>

      {/* Identity Section */}
      <section id="about-identity" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
                Who We Are
              </span>
              <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight leading-tight mb-6">
                Your personal loan advocate. Not a single bank's salesman.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-5">
                Going directly to a single bank locks you into their criteria, products, and interest rates. If your profile doesn't perfectly fit their checklist, you face delays or rejection.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-10">
                As a Direct Selling Agent (DSA) partner, ACE Finance offers a unified bridge. We evaluate your financial health, match it with lending guidelines of over 20+ banks, structure your files correctly, and coordinate directly with bank managers to ensure fast disbursal.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                <div>
                  <div className="text-4xl font-black text-slate-900">20+</div>
                  <div className="text-sm font-bold text-slate-500 mt-1 uppercase tracking-wider">Lending Partners</div>
                </div>
                <div className="hidden sm:block w-px bg-slate-200" />
                <div>
                  <div className="text-4xl font-black text-slate-900">₹500Cr+</div>
                  <div className="text-sm font-bold text-slate-500 mt-1 uppercase tracking-wider">Disbursed Loans</div>
                </div>
                <div className="hidden sm:block w-px bg-slate-200" />
                <div>
                  <div className="text-4xl font-black text-emerald-500">0%</div>
                  <div className="text-sm font-bold text-slate-500 mt-1 uppercase tracking-wider">Service Charge</div>
                </div>
              </div>
            </div>

            {/* Visual illustration in Emerald & White */}
            <div className="relative bg-emerald-700 rounded-3xl p-10 lg:p-12 shadow-2xl overflow-hidden text-white">
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-emerald-500/40 rounded-full blur-3xl pointer-events-none" />

              <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8 backdrop-blur-md border border-white/10">
                DSA Guarantee
              </span>

              <h3 className="text-2xl font-black mb-5 text-white">
                How do we operate for FREE?
              </h3>
              <p className="text-emerald-50 text-sm leading-relaxed mb-5">
                Banks spend heavy capital on customer acquisition, sales teams, and marketing. They outsource this process to Direct Selling Agents (DSAs) and pay a finder's fee upon successful disbursal.
              </p>
              <p className="text-white text-sm leading-relaxed font-medium">
                This structure allows us to support you 100% free of charge. You get premium service, custom comparisons, and expert documentation at the exact same or even better interest rates than walking into the bank branch yourself!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values / Benefits Grid */}
      <section id="about-values" className="py-24 px-6 bg-slate-50 border-y border-slate-200/60">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              Our Philosophy
            </span>
            <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight">
              Why Borrowers Trust ACE Finance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The DSA Process Flow */}
      <section id="about-process" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              Our Workflow
            </span>
            <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight">
              The Seamless Loan Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:border-emerald-400 group">
                <div className="text-6xl font-black text-slate-50 absolute -top-2 -right-2 font-mono group-hover:text-emerald-50 transition-colors pointer-events-none">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 mt-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Banks Section */}
      <section id="about-partners" className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              Our Lending Partners
            </span>
            <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight mb-4">
              Compare & Secure from Leading Banks
            </h2>
            <p className="text-base text-slate-600 max-w-[500px] mx-auto">
              We collaborate with top public, private, and NBFC lenders in India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnerBanks.map((bank, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-10 bg-emerald-50 border border-emerald-100 rounded-lg text-sm font-black text-emerald-600 tracking-widest mb-4">
                  {bank.logoText}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {bank.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">{bank.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/#contact"
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}