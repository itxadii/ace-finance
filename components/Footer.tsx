"use client";

import Link from "next/link";

const loanLinks = [
  { label: "Home Loan", href: "/home-loan" },
  { label: "Personal Loan", href: "/personal-loan" },
  { label: "Business Loan", href: "/business-loan" },
  { label: "Loan Against Property", href: "/#services" },
  { label: "Used Car Loan", href: "/#services" },
  { label: "Credit Cards", href: "/#services" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/#why-choose" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#000000",
        color: "rgba(255, 255, 255, 0.82)",
        padding: "80px 24px 36px",
        borderTop: "1px solid rgba(191, 221, 240, 0.1)",
      }}
    >
      <div className="container-max">
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "48px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <Link
              href="/"
              id="footer-logo"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "#ffffff",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "900",
                  fontSize: "17px",
                  color: "#000000",
                  border: "1px solid #BFDDF0",
                }}
              >
                A
              </div>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "800",
                  color: "#ffffff",
                  letterSpacing: "-0.5px",
                }}
              >
                ACE <span style={{ color: "#BFDDF0" }}>Finance</span>
              </span>
            </Link>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.75",
                maxWidth: "280px",
                marginBottom: "28px",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              Your premier direct selling loan agent in Nashik. We partner with India's leading banks to secure the best loan rates for you at zero service charge.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { id: "footer-social-fb", icon: "f", label: "Facebook" },
                { id: "footer-social-wa", icon: "w", label: "WhatsApp" },
                { id: "footer-social-ig", icon: "ig", label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.id}
                  href="#"
                  id={s.id}
                  aria-label={s.label}
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "rgba(255, 255, 255, 0.78)",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#BFDDF0";
                    (e.currentTarget as HTMLElement).style.color = "#000000";
                    (e.currentTarget as HTMLElement).style.borderColor = "#BFDDF0";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.05)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255, 255, 255, 0.6)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.08)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Loan Products */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#ffffff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Loan Products
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {loanLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255, 255, 255, 0.82)",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 0.2s ease",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "#BFDDF0";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "rgba(255, 255, 255, 0.6)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#ffffff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255, 255, 255, 0.82)",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "#BFDDF0";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "rgba(255, 255, 255, 0.6)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#ffffff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Get In Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "📍", text: "Nashik, Maharashtra, India" },
                { icon: "📞", text: "+91 95296 02759", href: "tel:+919529602759" },
                { icon: "✉️", text: "info@acefinance.in", href: "mailto:info@acefinance.in" },
                { icon: "🕒", text: "Mon–Sat: 9 AM – 6 PM" },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                >
                  <span style={{ fontSize: "16px", flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontSize: "14px",
                        color: "rgba(255, 255, 255, 0.6)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = "#BFDDF0";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = "rgba(255, 255, 255, 0.82)";
                      }}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)" }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.72)" }}>
            © {new Date().getFullYear()} ACE Finance. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.72)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#BFDDF0";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(255, 255, 255, 0.72)";
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
