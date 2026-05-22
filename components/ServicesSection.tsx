"use client";

import Link from "next/link";

const loanServices = [
  {
    id: "personal-loan",
    icon: "👤",
    title: "Personal Loans",
    description:
      "Get quick, hassle-free personal loans with flexible repayment options and minimal paperwork.",
    href: "/personal-loan",
  },
  {
    id: "business-loan",
    icon: "🏢",
    title: "Business Loans",
    description:
      "Boost your business growth with affordable business loans tailored to your goals.",
    href: "/business-loan",
  },
  {
    id: "home-loan",
    icon: "🏠",
    title: "Home Loans",
    description:
      "Turn your dream home into reality with our easy home loan process and expert guidance.",
    href: "/home-loan",
    featured: true,
  },
  {
    id: "loan-against-property",
    icon: "🏗️",
    title: "Loan Against Property",
    description:
      "Unlock the value of your property and secure high-value loans at low interest rates, with simple documentation and quick disbursal.",
    href: "#contact",
  },
  {
    id: "used-car-loan",
    icon: "🚗",
    title: "Used Car Loans",
    description:
      "Own the pre-owned vehicle you want with our fast-approval used car loans and competitive rates.",
    href: "#contact",
  },
  {
    id: "credit-cards",
    icon: "💳",
    title: "Credit Cards",
    description:
      "Enjoy financial freedom with our wide range of credit card options designed to suit every lifestyle.",
    href: "#contact",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: "#ffffff",
        padding: "100px 24px",
        position: "relative",
      }}
    >
      {/* Decorative side gradient */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: 0,
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(191,221,240,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div className="container-max">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label">Our Loan Services</div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 46px)",
              fontWeight: "900",
              color: "#000000",
              letterSpacing: "-1.5px",
              lineHeight: "1.15",
              marginBottom: "16px",
            }}
          >
            Comprehensive Financial Solutions
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#4b5563",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Partnering with multiple banks to compare rates, terms, and eligibility — bringing you the best packages.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "28px",
          }}
        >
          {loanServices.map((service, i) => (
            <Link
              key={service.id}
              href={service.href}
              id={`service-card-${service.id}`}
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "36px",
                textDecoration: "none",
                display: "block",
                border: service.featured
                  ? "2px solid #000000"
                  : "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: service.featured
                  ? "0 10px 30px rgba(0, 0, 0, 0.05)"
                  : "0 4px 20px rgba(0, 0, 0, 0.02)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 16px 40px rgba(191, 221, 240, 0.35)";
                el.style.borderColor = "#BFDDF0";
                const line = el.querySelector(".card-accent-line") as HTMLElement;
                if (line) line.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = service.featured
                  ? "0 10px 30px rgba(0, 0, 0, 0.05)"
                  : "0 4px 20px rgba(0, 0, 0, 0.02)";
                el.style.borderColor = service.featured
                  ? "#000000"
                  : "rgba(0, 0, 0, 0.08)";
                const line = el.querySelector(".card-accent-line") as HTMLElement;
                if (line) line.style.opacity = "0";
              }}
            >
              {/* Featured badge */}
              {service.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "18px",
                    right: "18px",
                    background: "#000000",
                    color: "#BFDDF0",
                    fontSize: "11px",
                    fontWeight: "800",
                    letterSpacing: "0.1em",
                    padding: "4px 14px",
                    borderRadius: "50px",
                    textTransform: "uppercase",
                  }}
                >
                  Popular
                </div>
              )}

              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background: "rgba(191, 221, 240, 0.25)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  marginBottom: "24px",
                  border: "1px solid rgba(191, 221, 240, 0.4)",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "800",
                  color: "#000000",
                  marginBottom: "12px",
                  letterSpacing: "-0.3px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  color: "#4b5563",
                  lineHeight: "1.7",
                  marginBottom: "24px",
                }}
              >
                {service.description}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#000000",
                }}
              >
                Learn More <span style={{ color: "#a5cce5" }}>→</span>
              </div>

              {/* Bottom accent line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "#BFDDF0",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                className="card-accent-line"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
