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
    { label: "About Us", href: "/about" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        background: isScrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: isScrolled
          ? "1px solid rgba(30, 58, 95, 0.08)"
          : "1px solid rgba(30, 58, 95, 0.04)",
        boxShadow: isScrolled ? "0 10px 30px -10px rgba(30, 58, 95, 0.12)" : "none",
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
          height: "76px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              background: "#ffffff",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "900",
              fontSize: "18px",
              color: "#1e3a5f",
              border: "2px solid #BFDDF0",
              boxShadow: "0 0 15px rgba(191, 221, 240, 0.25)",
            }}
          >
            A
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "800",
              color: "#1e3a5f",
              letterSpacing: "-0.5px",
            }}
          >
            ACE <span style={{ color: "#334e68" }}>Finance</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                color: "rgba(30, 58, 95, 0.9)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                padding: "8px 16px",
                borderRadius: "20px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "rgba(191, 221, 240, 0.25)";
                (e.target as HTMLElement).style.color = "#1e3a5f";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.color = "rgba(30, 58, 95, 0.9)";
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            id="nav-cta"
            style={{
              background: "#1e3a5f",
              color: "#ffffff",
              padding: "10px 22px",
              borderRadius: "50px",
              fontSize: "14px",
              fontWeight: "700",
              textDecoration: "none",
              marginLeft: "12px",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(30, 58, 95, 0.18)",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = "#334e68";
              (e.target as HTMLElement).style.boxShadow = "0 8px 20px rgba(30, 58, 95, 0.25)";
              (e.target as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "#1e3a5f";
              (e.target as HTMLElement).style.boxShadow = "0 4px 12px rgba(30, 58, 95, 0.18)";
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
            color: "#ffffff",
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
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(30, 58, 95, 0.08)",
            padding: "16px 24px 28px",
            animation: "fadeInUp 0.3s ease",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              style={{
                display: "block",
                color: "rgba(30, 58, 95, 0.9)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "600",
                padding: "12px 0",
                borderBottom: "1px solid rgba(30, 58, 95, 0.08)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#1e3a5f";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "rgba(30, 58, 95, 0.9)";
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
              background: "#BFDDF0",
              color: "#000000",
              padding: "14px 24px",
              borderRadius: "50px",
              fontSize: "15px",
              fontWeight: "700",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "20px",
              boxShadow: "0 4px 12px rgba(191, 221, 240, 0.25)",
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
