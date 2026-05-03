"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home Loan", href: "/home-loan" },
    { label: "Personal Loan", href: "/personal-loan" },
    { label: "Business Loan", href: "/business-loan" },
    { label: "EMI Calculator", href: "/emicalculator" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: isScrolled
          ? "rgba(15, 23, 42, 0.95)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "none",
        boxShadow: isScrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
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
              letterSpacing: "-1px",
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

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "500",
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                (e.target as HTMLElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.color = "rgba(255,255,255,0.85)";
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            id="nav-cta"
            style={{
              background: "#1a56db",
              color: "white",
              padding: "10px 22px",
              borderRadius: "50px",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              marginLeft: "8px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(26,86,219,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = "#1e40af";
              (e.target as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "#1a56db";
              (e.target as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle mobile menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "white",
            fontSize: "24px",
          }}
          className="show-mobile"
        >
          {isMobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          style={{
            background: "rgba(15, 23, 42, 0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileOpen(false)}
            style={{
              display: "block",
              background: "#1a56db",
              color: "white",
              padding: "14px 24px",
              borderRadius: "50px",
              fontSize: "15px",
              fontWeight: "600",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            Apply Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
