"use client";

const loanServices = [
  {
    id: "personal-loan",
    icon: "👤",
    title: "Personal Loans",
    description:
      "Get quick, hassle-free personal loans with flexible repayment options and minimal paperwork.",
    color: "#6366f1",
    bgColor: "rgba(99,102,241,0.08)",
    href: "/personal-loan",
  },
  {
    id: "business-loan",
    icon: "🏢",
    title: "Business Loans",
    description:
      "Boost your business growth with affordable business loans tailored to your goals.",
    color: "#0ea5e9",
    bgColor: "rgba(14,165,233,0.08)",
    href: "/business-loan",
  },
  {
    id: "home-loan",
    icon: "🏠",
    title: "Home Loans",
    description:
      "Turn your dream home into reality with our easy home loan process and expert guidance.",
    color: "#1a56db",
    bgColor: "rgba(26,86,219,0.08)",
    href: "/home-loan",
    featured: true,
  },
  {
    id: "loan-against-property",
    icon: "🏗️",
    title: "Loan Against Property",
    description:
      "Unlock the value of your property and secure funds whenever you need them. High-value loans at low interest rates, with simple documentation and quick disbursal.",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.08)",
    href: "#",
  },
  {
    id: "used-car-loan",
    icon: "🚗",
    title: "Used Car Loan",
    description:
      "Own the car you want with our easy used car loans. Fast approvals, competitive interest rates, and flexible repayment plans for pre-owned vehicles.",
    color: "#10b981",
    bgColor: "rgba(16,185,129,0.08)",
    href: "#",
  },
  {
    id: "credit-cards",
    icon: "💳",
    title: "Credit Cards",
    description:
      "Enjoy financial freedom with our wide range of credit card options, designed to suit every lifestyle and spending habit.",
    color: "#ef4444",
    bgColor: "rgba(239,68,68,0.08)",
    href: "#",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: "#f8fafc",
        padding: "100px 24px",
      }}
    >
      <div className="container-max">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label">Our Loan Services</div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: "800",
              color: "#0f172a",
              letterSpacing: "-1.5px",
              lineHeight: "1.15",
              marginBottom: "16px",
              fontFamily: "Lato, sans-serif",
            }}
          >
            Comprehensive Financial Solutions
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#64748b",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Tailored to meet your every need — from home loans to business
            financing and beyond.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {loanServices.map((service, i) => (
            <a
              key={service.id}
              href={service.href}
              id={`service-card-${service.id}`}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "32px",
                textDecoration: "none",
                display: "block",
                border: service.featured
                  ? `2px solid ${service.color}`
                  : "2px solid transparent",
                boxShadow: service.featured
                  ? `0 8px 32px rgba(26,86,219,0.15)`
                  : "0 2px 12px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = `0 16px 48px rgba(0,0,0,0.12)`;
                el.style.borderColor = service.color;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = service.featured
                  ? "0 8px 32px rgba(26,86,219,0.15)"
                  : "0 2px 12px rgba(0,0,0,0.06)";
                el.style.borderColor = service.featured
                  ? service.color
                  : "transparent";
              }}
            >
              {/* Featured badge */}
              {service.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: service.color,
                    color: "white",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.1em",
                    padding: "4px 12px",
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
                  width: "60px",
                  height: "60px",
                  background: service.bgColor,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#0f172a",
                  marginBottom: "10px",
                  letterSpacing: "-0.3px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  color: "#64748b",
                  lineHeight: "1.7",
                  marginBottom: "20px",
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
                  fontWeight: "600",
                  color: service.color,
                }}
              >
                Learn More <span>→</span>
              </div>

              {/* Bottom accent line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: service.color,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                className="card-accent-line"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

