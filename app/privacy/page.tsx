import Link from "next/link";
import { Shield, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | ACE Financial Services",
  description:
    "Learn about how ACE Financial Services collects, uses, and safeguards your personal data. We are committed to transparency and maintaining secure application processes.",
  keywords: "privacy policy, data protection, security, ACE Financial Services privacy, credit card application safety",
};

export default function PrivacyPage() {
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
            <span className="text-sm font-bold text-emerald-600">Privacy Policy</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-1.5 mb-6">
            <Shield className="text-emerald-600" size={16} />
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
              Data Security First
            </span>
          </div>

          <h1 id="privacy-title" className="text-[clamp(36px,5.5vw,54px)] font-black text-slate-900 leading-[1.1] tracking-tight mb-4">
            Privacy <span className="text-emerald-500">Policy</span>
          </h1>

          <p className="text-sm text-slate-500 max-w-[480px] mx-auto font-medium">
            Last Updated: May 27, 2026. Your privacy and trust are paramount to us.
          </p>
        </div>
      </section>

      {/* ── CONTENT SECTION ────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-50 border border-slate-200/80 rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col gap-10 text-slate-700">
            
            <div>
              <h2 id="policy-intro" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                1. Introduction
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Welcome to <strong>ACE Financial Services</strong>. We operate as an authorized Direct Selling Agent (DSA) partner for leading banks and financial institutions in India. This Privacy Policy details how we collect, process, share, and protect your personal identification information and credit application details when you interact with our website or apply for financial products through us.
              </p>
              <p className="text-sm leading-relaxed">
                By submitting your details via our online forms, you consent to the data collection and sharing practices outlined in this policy.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 id="policy-data-collection" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                2. Information We Collect
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                To evaluate your eligibility and assist in securing approvals for credit cards or loans, we collect information including:
              </p>
              <ul className="list-disc pl-5 text-sm flex flex-col gap-2">
                <li><strong>Identity Details:</strong> Full Name (as printed on PAN card), Date of Birth, Gender, and Aadhaar Card details.</li>
                <li><strong>Contact Details:</strong> Phone Number, Email Address, and Residential Address.</li>
                <li><strong>Employment & Income Details:</strong> Employment type (Salaried, Business Owner, Self-employed), net monthly income, current employer, or company turnover details.</li>
                <li><strong>Technical Information:</strong> IP address, device details, browser types, and usage data collected automatically via cookies.</li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 id="policy-data-use" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                3. How We Use Your Information
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Your data helps us offer customized financial services. Specifically, we use it to:
              </p>
              <ul className="list-disc pl-5 text-sm flex flex-col gap-2">
                <li>Pre-assess your credit eligibility before submitting details to bank portals.</li>
                <li>Match your profile with the best bank products (lowest interest rates, highest limits).</li>
                <li>Facilitate the digital Video KYC (Know Your Customer) process.</li>
                <li>Reach out to you via call, email, or WhatsApp to assist with paperwork and documentation.</li>
                <li>Operate, secure, and improve our website structure.</li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 id="policy-sharing" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                4. Data Sharing & Disclosure
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                <strong>We do not sell or rent your personal information to third-party marketers.</strong> As a Direct Selling Agent, your application files are shared strictly with our partner banks for the express purpose of processing your card or loan application.
              </p>
              <p className="text-sm leading-relaxed">
                These partner banks operate under their own strict privacy policies and regulatory frameworks. We only transfer your encrypted application documentation through secure bank-directed APIs and portals.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 id="policy-security" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                5. Data Security
              </h2>
              <p className="text-sm leading-relaxed">
                We employ industry-standard security measures, including 256-bit SSL encryption for data transmission, to prevent unauthorized access, alteration, or distribution of your confidential income and contact data. All databases are hosted inside highly secured environments.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 id="policy-rights" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                6. Your Rights
              </h2>
              <p className="text-sm leading-relaxed">
                You have the right to request access to the data we hold, ask for corrections, or request that we delete your contact files from our internal databases. To exercise these rights, please email us directly at <a href="mailto:priyanka.agrawal@iiflpartner.com" className="text-emerald-600 font-bold hover:underline">priyanka.agrawal@iiflpartner.com</a>.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center">
              <h3 className="text-base font-extrabold text-emerald-800 mb-2">Have questions about your data privacy?</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Our support team is happy to help you understand our secure data practices.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors no-underline">
                Contact Privacy Officer <ChevronRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
