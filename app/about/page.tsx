import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/layout/ServiceCard";
import LucideIcon from "@/components/ui/LucideIcon";

export const metadata = {
  title: "About Us | ACE Financial Services — Leading DSA in Dhule",
  description:
    "Discover ACE Financial Services in Dhule. Meet our leadership team, explore our award-winning banking partner recognitions, and see how we help clients secure the best loan deals.",
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Client-First Advocacy",
      description: "Our loan relationship officers work exclusively in your interest to negotiate competitive rates across top lenders.",
      icon: "Handshake",
    },
    {
      title: "All Major Bank Partners",
      description: "Apply once with us to compare and negotiate rates across India's leading public and private banks and NBFCs.",
      icon: "Landmark",
    },
    {
      title: "Doorstep Documentation",
      description: "Our loan officers handle physical verification, documentation collection, and processing at your convenience.",
      icon: "FileText",
    },
    {
      title: "End-to-End Execution",
      description: "From credit score analysis and file preparation to legal clearances and bank disbursal, we guide you every step.",
      icon: "Activity",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Profile Match",
      description: "We evaluate your financial needs, analyze credit metrics, and select the optimal bank partner offering the best rate.",
    },
    {
      step: "02",
      title: "Doorstep Document Pick",
      description: "We collect and verify your financial documents from your doorstep or via secure digital channels.",
    },
    {
      step: "03",
      title: "Fast-Track File Submission",
      description: "We compile and present your loan application directly to credit decision-makers for priority appraisal.",
    },
    {
      step: "04",
      title: "Sanction & Disbursal",
      description: "We coordinate property valuation, legal clearance, and underwriter sign-offs for swift account crediting.",
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

  const awardPhotos = [
    { src: "/groupawardphoto.png", alt: "ACE Financial Services Team Receiving Banking Excellence Award", title: "National DSA Performance Convention", caption: "Recognized among top-tier DSA partners by leading banking institutions." },
    { src: "/groupawardphoto2.png", alt: "Banking Leadership Summit Award Ceremony", title: "Banking Leadership Summit", caption: "Honored for outstanding customer volume and loan disbursal excellence." },
    { src: "/groupawardphoto3.png", alt: "Partner Excellence Trophy Award Ceremony", title: "Top Partner Felicitation", caption: "Celebrating milestones in retail loan distribution and customer satisfaction." },
    { src: "/groupawardphoto4.png", alt: "Annual Partner Recognition Meet", title: "Annual DSA Convention", caption: "Consistently recognized as a trusted channel partner by major banks." },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO SECTION ───────────────────────────────────── */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
        <div className="absolute right-220 top-1/2 -translate-y-1/2 w-[70%] h-[100%] bg-[url('/pattern.png')] bg-contain bg-no-repeat bg-right opacity-[0.2] pointer-events-none" />

        <div className="container mx-auto max-w-[1200px] relative z-10">
          <div className="flex justify-center gap-2 mb-6">
            <Link href="/" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <span className="text-sm text-slate-400">›</span>
            <span className="text-sm font-bold text-emerald-600">About Us</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-1.5 mb-6">
            <LucideIcon name="Shield" size={14} className="text-emerald-600" />
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
              Award-Winning DSA Network
            </span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-black text-slate-900 tracking-tight leading-[1.1] max-w-[920px] mx-auto mb-6">
            Pioneering Financial <span className="text-emerald-500">Excellence & Trust</span> in Dhule
          </h1>

          <p className="text-lg text-slate-600 max-w-[720px] mx-auto leading-relaxed">
            ACE Financial Services is Dhule's leading Direct Selling Agent (DSA) partner. Grounded in transparency, expert advocacy, and deep banking partnerships, we simplify home, business, personal, and gold loans for thousands of satisfied clients.
          </p>
        </div>
      </section>

      {/* ── FOUNDER SPOTLIGHT ──────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Founder Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full max-w-[420px] mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <Image
                  src="/founder.png"
                  alt="Nilesh Gindodia - Founder & Managing Director"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block bg-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                    Founder & Managing Director
                  </div>
                  <h3 className="text-2xl font-black text-white leading-tight">Mr. Nilesh Gindodiya</h3>
                  <p className="text-emerald-300 text-xs font-semibold mt-1">ACE Financial Services — Dhule</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                  ★
                </div>
                <div>
                  <div className="font-extrabold text-sm text-slate-900">₹750 Cr+ Disbursed</div>
                  <div className="text-[10px] text-slate-500">Trusted by 10,000+ Borrowers</div>
                </div>
              </div>
            </div>

            {/* Founder Copy Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
                About ACE Financial Services – Dhule
              </span>
              <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight leading-tight mb-6">
                Led by Mr. Nilesh Gindodiya — Guidance with Clarity & Confidence
              </h2>
              
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                ACE Financial Services is a well-known financial service provider based in Dhule, offering reliable guidance for all types of loan and investment needs. Led by <strong>Mr. Nilesh Gindodiya</strong>, the firm has built a strong reputation over the years by helping clients choose the right financial solutions with clarity and confidence.
              </p>

              <p className="text-base text-slate-600 leading-relaxed mb-4">
                If you are looking for assistance with a home loan in Dhule, personal loan, business loan, or loan against property, our team ensures a smooth and hassle-free process. We also provide support for auto loans, along with financial products like life and health insurance, mutual funds, and investment services including commodity and share trading.
              </p>

              <p className="text-base text-slate-600 leading-relaxed mb-4">
                What sets ACE Financial Services apart is its simple and transparent approach. We understand that financial decisions can often feel confusing, especially when dealing with multiple banks and options. That is why we focus on explaining every step clearly — from selecting the right loan option to completing documentation and final approval.
              </p>

              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Over the years, many individuals and families in Dhule have trusted us for their financial needs. A large number of our clients come through referrals, which reflects the confidence and satisfaction they have experienced while working with us. Located at <strong>New Jayshankar Market, Dhule</strong>, we are here to guide you with dependable support.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                <div>
                  <div className="text-3xl font-black text-slate-900">All Major</div>
                  <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Bank Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">₹750Cr+</div>
                  <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Total Disbursal</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-emerald-500">98%</div>
                  <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Approval Rate</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── AWARDS & ACCOMPLISHMENTS SHOWCASE ──────────────── */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-200/60">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              Recognized Industry Leadership
            </span>
            <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight mb-4">
              Awards & Recognitions
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Honored for outstanding performance and excellence in loan distribution by ICICI Bank and top financial partners.
            </p>
          </div>

          {/* Featured Wazir Award Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-8 group">
              <div className="relative w-44 h-56 flex-shrink-0 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 p-2 shadow-inner">
                <Image
                  src="/award.png"
                  alt="ICICI Bank Wazir Season 3 Award Plaque"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="inline-block bg-amber-500/10 text-amber-700 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  Wazir Season 3 Award
                </span>
                <h3 className="text-xl font-black text-slate-900 mb-2">ICICI Bank Wazir Award</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Awarded to <strong>Mr. Nilesh Gindodiya</strong> for outstanding performance in the national <em>Wazir Season 3</em> campaign by ICICI Bank.
                </p>
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
                  <span>Presented by ICICI Bank</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-8 group">
              <div className="relative w-44 h-56 flex-shrink-0 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 p-2 shadow-inner">
                <Image
                  src="/awardholdingpic.png"
                  alt="Mr. Nilesh Gindodiya Receiving Wazir Award Trophy"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="inline-block bg-emerald-500/10 text-emerald-700 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  Award Presentation
                </span>
                <h3 className="text-xl font-black text-slate-900 mb-2">Wazir Performance Trophy</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  <strong>Mr. Nilesh Gindodiya</strong> receiving the prestigious Wazir Award trophy for retail credit excellence and customer satisfaction.
                </p>
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
                  <span>ICICI Bank Partner Convention</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Group Photo Gallery without Text Descriptions */}
          <div className="mt-12">
            <h3 className="text-xl font-black text-slate-900 text-center mb-8">
              Moments & Award Gallery
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["/groupawardphoto.png", "/groupawardphoto2.png", "/groupawardphoto3.png", "/groupawardphoto4.png"].map((imgSrc, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="relative w-full h-64 bg-slate-100 overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt={`Award Ceremony Gallery Photo ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CORE VALUES & PHILOSOPHY ───────────────────────── */}
      <section id="about-values" className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              Our Core Pillars
            </span>
            <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight">
              Why Borrowers & Businesses Choose ACE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, i) => (
              <ServiceCard
                key={i}
                title={value.title}
                description={value.description}
                icon={<LucideIcon name={value.icon} size={28} strokeWidth={1.5} />}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS WORKFLOW ──────────────────────────────── */}
      <section id="about-process" className="py-24 px-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase block mb-4">
              Seamless Execution
            </span>
            <h2 className="text-[clamp(30px,3.5vw,42px)] font-black text-slate-900 tracking-tight">
              How We Fast-Track Your Loan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:border-emerald-400 group shadow-sm">
                <div className="text-6xl font-black text-slate-100 absolute -top-2 -right-2 font-mono group-hover:text-emerald-50 transition-colors pointer-events-none">
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

      {/* ── CONSULTATION CTA BOX ──────────────────────────── */}
      <section id="about-cta" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 rounded-3xl p-10 lg:p-14 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-2xl sm:text-3xl font-black mb-4 relative z-10">Ready to Find Your Best Loan Offer?</h3>
            <p className="text-emerald-100 max-w-xl mx-auto mb-8 relative z-10 text-base">
              Speak with our senior loan officers in Dhule today. Get a customized rate comparison across top banks.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-slate-950 px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider shadow-lg hover:bg-emerald-400 transition-all duration-300 relative z-10 no-underline"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}