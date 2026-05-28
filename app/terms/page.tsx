import Link from "next/link";
import { FileText, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Terms of Service | ACE Financial Services",
  description:
    "Review the terms and conditions for using ACE Financial Services' consultation, evaluation, and application assistance services for loans and credit cards.",
  keywords: "terms of service, conditions, loan agreement terms, credit card consultancy terms, ACE Financial Services rules",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO HEADER ───────────────────────────────────── */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 text-center border-b border-slate-200/60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />
        {/* Background Pattern */}
        <div className="absolute right-220 top-1/2 -translate-y-1/2 w-[70%] h-[100%] bg-[url('/pattern.png')] bg-contain bg-no-repeat bg-right opacity-[0.2] pointer-events-none" />

        <div className="container mx-auto max-w-[1200px] relative z-10">
          {/* Breadcrumb */}
          <div className="flex justify-center gap-2 mb-6">
            <Link href="/" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <span className="text-sm text-slate-400">›</span>
            <span className="text-sm font-bold text-emerald-600">Terms of Service</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-1.5 mb-6">
            <FileText className="text-emerald-600" size={16} />
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
              Service Guidelines
            </span>
          </div>

          <h1 id="terms-title" className="text-[clamp(36px,5.5vw,54px)] font-black text-slate-900 leading-[1.1] tracking-tight mb-4">
            Terms of <span className="text-emerald-500">Service</span>
          </h1>

          <p className="text-sm text-slate-500 max-w-[480px] mx-auto font-medium">
            Last Updated: May 27, 2026. Please read these terms carefully before utilizing our services.
          </p>
        </div>
      </section>

      {/* ── CONTENT SECTION ────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-50 border border-slate-200/80 rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col gap-10 text-slate-700">
            
            <div>
              <h2 id="terms-scope" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                1. Scope of Services
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                <strong>ACE Financial Services</strong> functions as an authorized Direct Selling Agent (DSA) partner for banks and financial institutions in India. We provide consulting, evaluation, and application routing services to help you match with, and apply for, credit cards and loans.
              </p>
              <p className="text-sm leading-relaxed">
                We do not issue credit cards or disburse loans directly. All final credit approvals, limit definitions, interest rates, and loan terms are determined solely by the issuing banks and are subject to their credit review procedures.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 id="terms-eligibility" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                2. User Eligibility & Accuracy
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                By using this site and submitting details through our portal, you guarantee that:
              </p>
              <ul className="list-disc pl-5 text-sm flex flex-col gap-2">
                <li>You are an Indian resident of legal age (at least 18 years old).</li>
                <li>All personal, contact, and income information you submit is accurate, truthful, and matches your official government-issued identity documents (Aadhaar & PAN card).</li>
                <li>You will not submit documents or information belonging to any other person.</li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 id="terms-fees" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                3. Zero Charges & Free Consultation
              </h2>
              <p className="text-sm leading-relaxed">
                Our consultancy, recommendation, and application processing services are <strong>100% free of charge to customers</strong>. ACE Financial Services will never ask you to pay any advisory fee or processing charges directly. Any application or processing fees are charged directly by the issuing bank and are included in the bank's official terms.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 id="terms-disclaimer" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                4. Financial Disclaimers & Advice Exclusion
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                The information provided on this website (such as interest rates, reward calculations, and product comparisons) is for informational purposes only. It does not constitute formal financial, investment, or legal advice.
              </p>
              <p className="text-sm leading-relaxed">
                Interest rates and card benefits change frequently. While we strive to keep details up-to-date, users are advised to verify rates and terms directly with the bank at the time of signing.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 id="terms-liability" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                5. Limitation of Liability
              </h2>
              <p className="text-sm leading-relaxed">
                ACE Financial Services, its directors, and employees shall not be liable for any direct, indirect, or incidental damages resulting from the denial of credit by partner banks, technical downtime of website forms, or errors in rates published. We act strictly as an intermediary advisor.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 id="terms-law" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                6. Governing Law
              </h2>
              <p className="text-sm leading-relaxed">
                These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of the use of our services or website shall be subject to the exclusive jurisdiction of the courts located in Dhule, Maharashtra.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center">
              <h3 className="text-base font-extrabold text-emerald-800 mb-2">Need clarification on these terms?</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Our support team is available to explain our terms and operations.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors no-underline">
                Contact Legal Representative <ChevronRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
