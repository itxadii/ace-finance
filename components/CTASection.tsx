"use client";

export default function CTASection() {
  return (
    <section
      id="contact"
      style={{
        background: "#ffffff",
        padding: "100px 24px",
      }}
    >
      <div className="container-max">
        <div
          style={{
            background: "linear-gradient(135deg, #1e3a5f 0%, #2f5f8f 100%)",
            borderRadius: "32px",
            padding: "72px 64px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(191, 221, 240, 0.16)",
            boxShadow: "0 24px 60px rgba(30, 58, 95, 0.15)",
          }}
          className="cta-card"
        >
          {/* Decorative radial glows */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "320px",
              height: "320px",
              background:
                "radial-gradient(circle, rgba(191, 221, 240, 0.1) 0%, transparent 70%)",
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
                "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
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
                background: "rgba(191, 221, 240, 0.1)",
                border: "1px solid rgba(191, 221, 240, 0.2)",
                borderRadius: "50px",
                padding: "6px 20px",
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
                Get Started Today
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: "900",
                color: "#ffffff",
                letterSpacing: "-2px",
                lineHeight: "1.15",
                marginBottom: "20px",
              }}
            >
              Ready to Apply for Your Loan?
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: "520px",
                margin: "0 auto 48px",
                lineHeight: "1.7",
              }}
            >
              Speak with a professional direct selling agent. We will handle your documentation, match you with the best bank, and secure approvals at no cost.
            </p>

            {/* Contact form */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "24px",
                padding: "40px",
                maxWidth: "560px",
                margin: "0 auto",
              }}
              className="cta-form-container"
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "16px",
                }}
                className="cta-form-row"
              >
                <div>
                  <label
                    htmlFor="cta-name"
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "rgba(255, 255, 255, 0.7)",
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
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "10px",
                      padding: "13px 16px",
                      color: "#ffffff",
                      fontSize: "15px",
                      outline: "none",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#BFDDF0";
                      e.target.style.boxShadow = "0 0 10px rgba(191, 221, 240, 0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
                      e.target.style.boxShadow = "none";
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
                      color: "rgba(255, 255, 255, 0.7)",
                      marginBottom: "8px",
                      textAlign: "left",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    id="cta-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    style={{
                      width: "100%",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "10px",
                      padding: "13px 16px",
                      color: "#ffffff",
                      fontSize: "15px",
                      outline: "none",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#BFDDF0";
                      e.target.style.boxShadow = "0 0 10px rgba(191, 221, 240, 0.15)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.12)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="cta-loan-type"
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "rgba(255, 255, 255, 0.7)",
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
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "10px",
                    padding: "13px 16px",
                    color: "#ffffff",
                    fontSize: "15px",
                    outline: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  <option
                    value=""
                    style={{ background: "#0a0d14", color: "#ffffff" }}
                  >
                    Select loan type
                  </option>
                  <option
                    value="home"
                    style={{ background: "#0a0d14", color: "#ffffff" }}
                  >
                    Home Loan
                  </option>
                  <option
                    value="personal"
                    style={{ background: "#0a0d14", color: "#ffffff" }}
                  >
                    Personal Loan
                  </option>
                  <option
                    value="business"
                    style={{ background: "#0a0d14", color: "#ffffff" }}
                  >
                    Business Loan
                  </option>
                  <option
                    value="lap"
                    style={{ background: "#0a0d14", color: "#ffffff" }}
                  >
                    Loan Against Property
                  </option>
                  <option
                    value="car"
                    style={{ background: "#0a0d14", color: "#ffffff" }}
                  >
                    Used Car Loan
                  </option>
                  <option
                    value="credit-card"
                    style={{ background: "#0a0d14", color: "#ffffff" }}
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
                  background: "#BFDDF0",
                  color: "#000000",
                  padding: "15px 24px",
                  borderRadius: "50px",
                  fontWeight: "800",
                  fontSize: "16px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#ffffff";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 12px 30px rgba(191, 221, 240, 0.35)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#BFDDF0";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                Get Free Consultation
              </button>

              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(255, 255, 255, 0.75)",
                  marginTop: "14px",
                }}
              >
                🔒 Your information is 100% secure & never shared
              </p>
            </div>

            {/* Phone CTA */}
            <p
              style={{
                marginTop: "36px",
                fontSize: "15px",
                color: "rgba(255, 255, 255, 0.82)",
              }}
            >
              Or speak with an advisor directly:{" "}
              <a
                href="tel:+919529602759"
                id="cta-phone-link"
                style={{
                  color: "#BFDDF0",
                  fontWeight: "800",
                  textDecoration: "none",
                }}
              >
                +91 95296 02759
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-card {
            padding: 48px 24px !important;
          }
          .cta-form-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .cta-form-container {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
