"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { User, Briefcase, Home, Landmark, Car, CreditCard } from "lucide-react";

const loanServices = [
  {
    id: "personal-loan",
    icon: <User size={28} strokeWidth={1.5} />,
    title: "Personal Loans",
    description: "Get quick, hassle-free personal loans with flexible repayment options and minimal paperwork.",
    href: "/personal-loan",
  },
  {
    id: "business-loan",
    icon: <Briefcase size={28} strokeWidth={1.5} />,
    title: "Business Loans",
    description: "Boost your business growth with affordable business loans tailored to your goals.",
    href: "/business-loan",
  },
  {
    id: "home-loan",
    icon: <Home size={28} strokeWidth={1.5} />,
    title: "Home Loans",
    description: "Turn your dream home into reality with our easy home loan process and expert guidance.",
    href: "/home-loan",
  },
  {
    id: "loan-against-property",
    icon: <Landmark size={28} strokeWidth={1.5} />,
    title: "Loan Against Property",
    description: "Unlock the value of your property and secure high-value loans at low interest rates, with simple documentation and quick disbursal.",
    href: "#contact",
  },
  {
    id: "used-car-loan",
    icon: <Car size={28} strokeWidth={1.5} />,
    title: "Used Car Loans",
    description: "Own the pre-owned vehicle you want with our fast-approval used car loans and competitive rates.",
    href: "#contact",
  },
  {
    id: "credit-cards",
    icon: <CreditCard size={28} strokeWidth={1.5} />,
    title: "Credit Cards",
    description: "Enjoy financial freedom with our wide range of credit card options designed to suit every lifestyle.",
    href: "#contact",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        position: "relative",
        background: "#ffffff",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      {/* Blob — scoped overflow */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{
          position: "absolute",
          top: "10%",
          left: 0,
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        {/* Background Pattern - Right Side */}

      </div>

      <div style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px",
      }}>

        {/* Heading block */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "80px",   /* ← SPACING: heading → cards */
        }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex",
            padding: "6px 20px",
            marginBottom: "24px",   /* ← SPACING: badge → h2 */
            borderRadius: "9999px",
            background: "rgba(16,185,129,0.1)",
            color: "#059669",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>
            Our Loan Services
          </div>

          {/* H2 */}
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 46px)",
            fontWeight: 900,
            color: "#0f172a",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "24px",   /* ← SPACING: h2 → paragraph */
            width: "100%",
          }}>
            Comprehensive Financial Solutions
          </h2>

          {/* Subheading */}
          <p style={{
            fontSize: "18px",
            color: "#475569",
            maxWidth: "520px",
            lineHeight: 1.75,
            margin: 0,
          }}>
            Partnering with multiple banks to compare rates, terms, and
            eligibility — bringing you the best packages.
          </p>
        </div>

        {/* Cards grid — inline style for gap too */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: "32px",
        }} className="md:grid-cols-2 lg:grid-cols-3">
          {loanServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}