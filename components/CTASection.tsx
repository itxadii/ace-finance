"use client";

export default function CTASection() {
  return (
    <section
      id="contact"
      style={{
        background: "#f8fafc",
        padding: "100px 24px",
      }}
    >
      <div className="container-max">
        <div
          style={{
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1a56db 100%)",
            borderRadius: "32px",
            padding: "72px 64px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "320px",
              height: "320px",
              background:
                "radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-60px",
              left: "-60px",
              width: "280px",
              height: "280px",
              background:
                "radial-gradient(circle, rgba(26,86,219,0.3) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(245,158,11,0.15)",
                border: "1px solid rgba(245,158,11,0.3)",
                borderRadius: "50px",
                padding: "6px 20px",
                marginBottom: "24px",
              }}
            >
              <span style={{ fontSize: "14px" }}></span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#fcd34d",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Get Started Today
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: "900",
                color: "white",
                letterSpacing: "-2px",
                lineHeight: "1.1",
                marginBottom: "20px",
                fontFamily: "Lato, sans-serif",
              }}
            >
              Ready to Apply for Your Loan?
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.7)",
                maxWidth: "520px",
                margin: "0 auto 48px",
                lineHeight: "1.7",
              }}
            >
              Join thousands of happy clients who achieved their financial goals
              with ACE Finance. Our experts are ready to help you.
            </p>

            {/* Contact form */}
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "24px",
                padding: "40px",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <label
                    htmlFor="cta-name"
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: "8px",
                      textAlign: "left",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    placeholder="Your name"
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "10px",
                      padding: "12px 16px",
                      color: "white",
                      fontSize: "15px",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#f59e0b";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.2)";
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="cta-phone"
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: "8px",
                      textAlign: "left",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    id="cta-phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "10px",
                      padding: "12px 16px",
                      color: "white",
                      fontSize: "15px",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#f59e0b";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.2)";
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label
                  htmlFor="cta-loan-type"
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "8px",
                    textAlign: "left",
                  }}
                >
                  Loan Type
                </label>
                <select
                  id="cta-loan-type"
                  style={{
                    width: "100%",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "white",
                    fontSize: "15px",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option
                    value=""
                    style={{ background: "#0f172a", color: "white" }}
                  >
                    Select loan type
                  </option>
                  <option
                    value="home"
                    style={{ background: "#0f172a", color: "white" }}
                  >
                    Home Loan
                  </option>
                  <option
                    value="personal"
                    style={{ background: "#0f172a", color: "white" }}
                  >
                    Personal Loan
                  </option>
                  <option
                    value="business"
                    style={{ background: "#0f172a", color: "white" }}
                  >
                    Business Loan
                  </option>
                  <option
                    value="lap"
                    style={{ background: "#0f172a", color: "white" }}
                  >
                    Loan Against Property
                  </option>
                  <option
                    value="car"
                    style={{ background: "#0f172a", color: "white" }}
                  >
                    Used Car Loan
                  </option>
                  <option
                    value="credit-card"
                    style={{ background: "#0f172a", color: "white" }}
                  >
                    Credit Card
                  </option>
                </select>
              </div>

              <button
                id="cta-submit"
                type="button"
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg,#f59e0b,#fcd34d)",
                  color: "#0f172a",
                  padding: "16px 24px",
                  borderRadius: "50px",
                  fontWeight: "700",
                  fontSize: "16px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 12px 32px rgba(245,158,11,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                Get Free Consultation
              </button>

              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  marginTop: "12px",
                }}
              >
                🔒 Your information is 100% secure and never shared
              </p>
            </div>

            {/* Phone CTA */}
            <p
              style={{
                marginTop: "32px",
                fontSize: "15px",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Or call us directly:{" "}
              <a
                href="tel:+919876543210"
                id="cta-phone-link"
                style={{
                  color: "#fcd34d",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                +91 98765 43210
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #contact > div > div {
            padding: 48px 24px !important;
          }
          #contact > div > div > div:nth-child(4) > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

