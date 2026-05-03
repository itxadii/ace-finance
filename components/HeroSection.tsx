import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1a56db 100%)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(26,86,219,0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      {/* Grid dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-max"
        style={{
          position: "relative",
          zIndex: 2,
          padding: "120px 24px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Text Content */}
        <div className="animate-fade-left">
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(245,158,11,0.15)",
              border: "1px solid rgba(245,158,11,0.3)",
              borderRadius: "50px",
              padding: "6px 16px",
              marginBottom: "28px",
            }}
          >
            <span style={{ fontSize: "16px" }}>🏠</span>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#fcd34d",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Trusted Loan Partner in Nashik
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: "900",
              color: "white",
              lineHeight: "1.1",
              letterSpacing: "-2px",
              marginBottom: "24px",
              fontFamily: "Lato, sans-serif",
            }}
          >
            Turn Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f59e0b, #fcd34d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Dream Home
            </span>{" "}
            Into Reality
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: "1.75",
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            Own the home you've always wanted with our easy home loan solutions. 
            Benefit from attractive interest rates, simple documentation, and 
            personalized support—making the home buying process stress-free and smooth.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-accent" id="hero-cta-apply">
              Apply Now
              <span>→</span>
            </a>
            <a href="#services" className="btn-secondary" id="hero-cta-services">
              Explore Loans
            </a>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "56px",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "10,000+", label: "Happy Clients" },
              { value: "24 hrs", label: "Approval Time" },
              { value: "₹500Cr+", label: "Loans Disbursed" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: "800",
                    color: "#fcd34d",
                    lineHeight: "1",
                    letterSpacing: "-1px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    marginTop: "4px",
                    fontWeight: "500",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div
          className="animate-fade-right animate-float"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Glow behind image */}
          <div
            style={{
              position: "absolute",
              inset: "20px",
              background: "radial-gradient(circle, rgba(26,86,219,0.4) 0%, transparent 70%)",
              filter: "blur(30px)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "520px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)",
            }}
          >
            <Image
              src="/hero-home.png"
              alt="Dream Home with ACE Finance"
              width={520}
              height={380}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
            {/* Floating approval badge */}
            <div
              className="animate-float"
              style={{
                position: "absolute",
                bottom: "24px",
                left: "24px",
                background: "rgba(15,23,42,0.9)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "16px",
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg,#22c55e,#16a34a)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  animation: "pulse-ring 2s infinite",
                }}
              >
                ✓
              </div>
              <div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  Loan Approved!
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  Within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "white",
          clipPath: "ellipse(60% 100% at 50% 100%)",
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          #hero > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #hero > div > div:last-child {
            display: none;
          }
          #hero > div > div:first-child > div:nth-child(4) {
            justify-content: center;
          }
          #hero > div > div:first-child > div:nth-child(5) {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

