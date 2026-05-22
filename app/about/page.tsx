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
        <svg style={{ width: "24px", height: "24px", color: "#000000" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "20+ Banking Partners",
      description: "Instead of visiting multiple banks, apply once with us. We compare and negotiate rates across top public and private lenders.",
      icon: (
        <svg style={{ width: "24px", height: "24px", color: "#000000" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Doorstep Documentation",
      description: "Our loan relationship officers handle all physical verification and document collection, saving you multiple branch visits.",
      icon: (
        <svg style={{ width: "24px", height: "24px", color: "#000000" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "End-to-End Tracking",
      description: "From credit scoring analysis, application submission, to final verification and disbursal, we guide you at every step.",
      icon: (
        <svg style={{ width: "24px", height: "24px", color: "#000000" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <main style={{ minHeight: "100vh", background: "#ffffff" }}>
      {/* Hero Header */}
      <section
        id="about-hero"
        style={{
          background: "var(--surface-dark)",
          padding: "160px 24px 100px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Glowing backdrop elements */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(191, 221, 240, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />

        <div className="container-max" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(191, 221, 240, 0.08)",
              border: "1px solid rgba(191, 221, 240, 0.15)",
              borderRadius: "50px",
              padding: "6px 18px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#BFDDF0",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Direct Selling Agent Model
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: "900",
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: "1.1",
              maxWidth: "800px",
              margin: "0 auto 24px",
            }}
          >
            A Smarter Way to Secure Your <span style={{ color: "#BFDDF0" }}>Finances</span>
          </h1>

          <p
            style={{
              fontSize: "19px",
              color: "rgba(255, 255, 255, 0.92)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.75",
            }}
          >
            ACE Finance connects you to India's premier financial institutions under one single platform. We manage the paperwork, compare rates, and fast-track approvals for free.
          </p>
        </div>
      </section>

      {/* Identity Section */}
      <section
        id="about-identity"
        style={{
          padding: "100px 24px",
          background: "#ffffff",
        }}
      >
        <div className="container-max">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
            className="about-grid"
          >
            <div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "800",
                  color: "#555555",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                Who We Are
              </span>
              <h2
                style={{
                  fontSize: "clamp(30px, 3.5vw, 42px)",
                  fontWeight: "800",
                  color: "#000000",
                  letterSpacing: "-1.5px",
                  lineHeight: "1.2",
                  marginBottom: "24px",
                }}
              >
                Your personal loan advocate. Not a single bank's salesman.
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4b5563",
                  lineHeight: "1.75",
                  marginBottom: "20px",
                }}
              >
                Going directly to a single bank locks you into their criteria, products, and interest rates. If your profile doesn't perfectly fit their checklist, you face delays or rejection.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4b5563",
                  lineHeight: "1.75",
                  marginBottom: "28px",
                }}
              >
                As a Direct Selling Agent (DSA) partner, ACE Finance offers a unified bridge. We evaluate your financial health, match it with lending guidelines of over 20+ banks, structure your files correctly, and coordinate directly with bank managers to ensure fast disbursal.
              </p>

              <div style={{ display: "flex", gap: "24px" }} className="about-stats-row">
                <div>
                  <div style={{ fontSize: "36px", fontWeight: "900", color: "#000000" }}>20+</div>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#6b7280" }}>Lending Partners</div>
                </div>
                <div style={{ width: "1px", background: "#e5e7eb" }} />
                <div>
                  <div style={{ fontSize: "36px", fontWeight: "900", color: "#000000" }}>₹500Cr+</div>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#6b7280" }}>Disbursed Loans</div>
                </div>
                <div style={{ width: "1px", background: "#e5e7eb" }} />
                <div>
                  <div style={{ fontSize: "36px", fontWeight: "900", color: "#000000" }}>0%</div>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#6b7280" }}>Service Charge</div>
                </div>
              </div>
            </div>

            {/* Visual illustration in Black & Ice Blue */}
            <div
              style={{
                position: "relative",
                background: "#000000",
                borderRadius: "24px",
                padding: "48px",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                color: "#ffffff",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "-50px",
                  right: "-50px",
                  width: "250px",
                  height: "250px",
                  background: "radial-gradient(circle, rgba(191, 221, 240, 0.12) 0%, transparent 70%)",
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#BFDDF0",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "rgba(191, 221, 240, 0.1)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  display: "inline-block",
                  marginBottom: "24px",
                }}
              >
                DSA Guarantee
              </span>

              <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "16px", color: "#ffffff" }}>
                How do we operate for FREE?
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.88)", fontSize: "15px", lineHeight: "1.7", marginBottom: "20px" }}>
                Banks spend heavy capital on customer acquisition, sales teams, and marketing. They outsource this process to Direct Selling Agents (DSAs) and pay a finder's fee upon successful disbursal.
              </p>
              <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "15px", lineHeight: "1.7", marginBottom: "0px" }}>
                This structure allows us to support you 100% free of charge. You get premium service, custom comparisons, and expert documentation at the exact same or even better interest rates than walking into the bank branch yourself!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Benefits Grid */}
      <section
        id="about-values"
        style={{
          padding: "100px 24px",
          background: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "800",
                color: "#6b7280",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "12px",
              }}
            >
              Our Philosophy
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 3.5vw, 42px)",
                fontWeight: "800",
                color: "#000000",
                letterSpacing: "-1px",
              }}
            >
              Why Borrowers Trust ACE Finance
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "32px",
            }}
          >
            {coreValues.map((value, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "20px",
                  padding: "32px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                }}
                className="value-card"
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "#BFDDF0",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  {value.icon}
                </div>
                <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#000000", marginBottom: "12px" }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The DSA Process Flow */}
      <section
        id="about-process"
        style={{
          padding: "100px 24px",
          background: "#ffffff",
        }}
      >
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "800",
                color: "#6b7280",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "12px",
              }}
            >
              Our Workflow
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 3.5vw, 42px)",
                fontWeight: "800",
                color: "#000000",
                letterSpacing: "-1px",
              }}
            >
              The Seamless Loan Journey
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
              position: "relative",
            }}
            className="process-grid"
          >
            {processSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "20px",
                  padding: "32px 24px",
                  position: "relative",
                  transition: "border-color 0.2s",
                }}
                className="process-card"
              >
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "900",
                    color: "rgba(191, 221, 240, 0.5)",
                    position: "absolute",
                    top: "16px",
                    right: "24px",
                    fontFamily: "monospace",
                  }}
                >
                  {step.step}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#000000",
                    marginBottom: "12px",
                    marginTop: "16px",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: "1.6" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Banks Section */}
      <section
        id="about-partners"
        style={{
          padding: "100px 24px",
          background: "var(--surface-dark)",
          color: "#ffffff",
        }}
      >
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "800",
                color: "#BFDDF0",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "12px",
              }}
            >
              Our Lending Partners
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 3.5vw, 42px)",
                fontWeight: "800",
                color: "#ffffff",
                letterSpacing: "-1.5px",
              }}
            >
              Compare & Secure from Leading Banks
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.82)",
                maxWidth: "500px",
                margin: "12px auto 0",
              }}
            >
              We collaborate with top public, private, and NBFC lenders in India.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {partnerBanks.map((bank, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "24px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                className="bank-card"
              >
                {/* Stylized Logo Placeholder */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "64px",
                    height: "36px",
                    background: "rgba(191, 221, 240, 0.1)",
                    border: "1px solid rgba(191, 221, 240, 0.2)",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: "900",
                    color: "#BFDDF0",
                    letterSpacing: "1px",
                    marginBottom: "16px",
                  }}
                >
                  {bank.logoText}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff", marginBottom: "4px" }}>
                  {bank.name}
                </h3>
                <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.72)" }}>{bank.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <Link
              href="/#contact"
              style={{
                display: "inline-block",
                background: "#BFDDF0",
                color: "#000000",
                padding: "16px 36px",
                borderRadius: "50px",
                fontWeight: "800",
                textDecoration: "none",
                fontSize: "16px",
                transition: "all 0.3s ease",
              }}
              className="about-cta-btn"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr 1fr;
        }
        .value-card:hover {
          transform: translateY(-4px);
          border-color: #BFDDF0 !important;
          box-shadow: 0 10px 24px rgba(191, 221, 240, 0.15) !important;
        }
        .process-card:hover {
          border-color: #BFDDF0 !important;
        }
        .bank-card:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(191, 221, 240, 0.3) !important;
          box-shadow: 0 8px 24px rgba(191, 221, 240, 0.05);
        }
        .about-cta-btn:hover {
          background: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(191, 221, 240, 0.3);
        }
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 600px) {
          .about-stats-row {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .about-stats-row > div:nth-child(even) {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}
