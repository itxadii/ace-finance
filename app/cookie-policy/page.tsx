import Link from "next/link";
import { Cookie, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | ACE Financial Services",
  description:
    "Learn about how ACE Financial Services uses cookies to optimize your experience, process credit card and loan applications securely, and perform site analytics.",
  keywords: "cookie policy, cookies, data storage, user tracking, ACE Financial Services cookies",
  alternates: {
    canonical: "/cookie-policy/",
  },
};

export default function CookiePolicyPage() {
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
            <span className="text-sm font-bold text-emerald-600">Cookie Policy</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-1.5 mb-6">
            <Cookie className="text-emerald-600" size={16} />
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
              Web Customization
            </span>
          </div>

          <h1 id="cookie-title" className="text-[clamp(36px,5.5vw,54px)] font-black text-slate-900 leading-[1.1] tracking-tight mb-4">
            Cookie <span className="text-emerald-500">Policy</span>
          </h1>

          <p className="text-sm text-slate-500 max-w-[480px] mx-auto font-medium">
            Last Updated: May 27, 2026. Learn how we utilize cookies to enhance your credit matching experience.
          </p>
        </div>
      </section>

      {/* ── CONTENT SECTION ────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-50 border border-slate-200/80 rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col gap-10 text-slate-700">
            
            <div>
              <h2 id="cookie-intro" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                1. What are Cookies?
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit websites. They are widely used to make websites work more efficiently, improve speed, remember user preferences, and provide analytical information to the site owners.
              </p>
              <p className="text-sm leading-relaxed">
                At <strong>ACE Financial Services</strong>, we use cookies to streamline credit application processing, remember your inputs on calculators, and analyze user traffic patterns.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 id="cookie-types" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                2. Types of Cookies We Use
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                We categorize our cookies into three main types depending on their purpose:
              </p>
              <ul className="list-disc pl-5 text-sm flex flex-col gap-3">
                <li>
                  <strong>Essential / Technical Cookies:</strong> These cookies are critical for basic site navigation, form submission, and verification states. For example, they record consent preferences and ensure that forms (Home CTA, Contact, and Credit Cards) function securely without losing data across steps.
                </li>
                <li>
                  <strong>Preference Cookies:</strong> These remember details you enter, such as inputs on our EMI Calculator presets, saving you from re-keying calculations when navigating back to the page.
                </li>
                <li>
                  <strong>Analytics & Performance Cookies:</strong> We use lightweight analytics tools to collect aggregated data about how visitors interact with our site (e.g., page views, loan preset selections, average time on site). This helps us improve website layout and resolve loading speed issues. This data is strictly anonymous.
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 id="cookie-third-party" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                3. Third-Party & Bank Partner Cookies
              </h2>
              <p className="text-sm leading-relaxed">
                When you click out to finalize credit applications or proceed to Video KYC verification on our partner bank portals, those banking sites may place their own cookies to trace application referrals or handle secure session logins. We do not manage nor access these partner cookies, which operate under the respective banks' policy frameworks.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h2 id="cookie-manage" className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                4. Managing & Deleting Cookies
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                You can block, disable, or delete cookies at any time through your browser settings:
              </p>
              <ul className="list-disc pl-5 text-sm flex flex-col gap-2">
                <li>For Google Chrome: Settings → Privacy & Security → Cookies and other site data.</li>
                <li>For Apple Safari: Preferences → Privacy → Manage Website Data.</li>
                <li>For Mozilla Firefox: Options → Privacy & Security → Cookies and Site Data.</li>
              </ul>
              <p className="text-sm leading-relaxed mt-4">
                Please note that blocking essential cookies may prevent interactive features, such as our EMI calculator presets or instant form submissions, from functioning correctly.
              </p>
            </div>

            <hr className="border-slate-200" />

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center">
              <h3 className="text-base font-extrabold text-emerald-800 mb-2">Want to manage your cookies?</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                You can click the Accept or Reject buttons in the consent banner to register your choice instantly.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors no-underline">
                Ask a Question <ChevronRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
