"use client";

import Link from "next/link";

const loanLinks = [
  { label: "Home Loan", href: "/home-loan" },
  { label: "Personal Loan", href: "/personal-loan" },
  { label: "Business Loan", href: "/business-loan" },
  { label: "Loan Against Property", href: "#" },
  { label: "Used Car Loan", href: "#" },
  { label: "Credit Cards", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Why Choose Us", href: "#why-choose" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "rgba(255,255,255,0.7)",
        padding: "72px 24px 32px",
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
        >
          {/* Brand column */}
          <div>
            <Link
              href="/"
              id="footer-logo"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #1a56db, #f59e0b)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "900",
                  fontSize: "18px",
                  color: "white",
                }}
              >
                A
              </div>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "800",
                  color: "white",
                  letterSpacing: "-0.5px",
                }}
              >
                ACE <span style={{ color: "#f59e0b" }}>Finance</span>
              </span>
            </Link>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
                maxWidth: "280px",
                marginBottom: "24px",
              }}
            >
              Your trusted financial partner in Nashik. We make loans simple,
              fast, and transparent.
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
                    width: "40px",
                    height: "40px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#1a56db";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.6)";
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
                fontSize: "14px",
                fontWeight: "700",
                color: "white",
                letterSpacing: "0.08em",
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
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      fontSize: "15px",
                      transition: "color 0.2s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "#fcd34d";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.6)";
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
                fontSize: "14px",
                fontWeight: "700",
                color: "white",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      fontSize: "15px",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "#fcd34d";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.6)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "white",
                letterSpacing: "0.08em",
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
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontSize: "15px",
                        color: "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = "#fcd34d";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color =
                          "rgba(255,255,255,0.6)";
                      }}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ fontSize: "15px" }}>{item.text}</span>
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
          <p style={{ fontSize: "14px" }}>
            © {new Date().getFullYear()} ACE Finance. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#fcd34d";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)";
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
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

