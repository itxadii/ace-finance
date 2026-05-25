"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
import PrimaryButton from "@/components/ui/PrimaryButton";

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
        /* ========================================= */
        /* CHANGED: 80% Translucency (0.8 alpha)     */
        /* ========================================= */
        background: isScrolled
          ? "rgba(255, 255, 255, 0.8)" // 80% white when scrolled
          : "rgba(255, 255, 255, 0)",  // 0% white (fully transparent) at the top
        /* ========================================= */
        /* CHANGED: Increased blur for frosted glass */
        /* ========================================= */
        backdropFilter: isScrolled ? "blur(24px)" : "blur(0px)",
        WebkitBackdropFilter: isScrolled ? "blur(24px)" : "blur(0px)", // For Safari support

        borderBottom: isScrolled
          ? "1px solid rgba(16, 185, 129, 0.15)"
          : "1px solid transparent",
        boxShadow: isScrolled ? "0 10px 30px -10px rgba(16, 185, 129, 0.1)" : "none",
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
              color: "#059669",
              border: "2px solid #10B981",
              boxShadow: "0 0 15px rgba(16, 185, 129, 0.2)",
            }}
          >
            A
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "800",
              color: "#0f172a",
              letterSpacing: "-0.5px",
            }}
          >
            ACE <span style={{ color: "#059669" }}>Finance</span>
          </span>
        </Link>

        {/* Desktop Links - Replaced with UIverse Animated Nav */}
        <div className="hidden-mobile" style={{ display: "flex", alignItems: "center" }}>

          <DesktopNavWrapper>
            <div className="nav">
              <div className="container">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="btn">
                    {link.label}
                  </Link>
                ))}

                {/* SVG Outline Box */}
                <svg className="outline" overflow="visible" width="100%" height="100%" viewBox="0 0 700 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <rect className="rect" pathLength={100} x={0} y={0} width="100%" height="100%" fill="transparent" strokeWidth={3} />
                </svg>
              </div>
            </div>
          </DesktopNavWrapper>

          {/* Primary CTA Button */}
          <div style={{ marginLeft: "24px" }}>
            <PrimaryButton>Apply Now</PrimaryButton>
          </div>

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
            color: "#0f172a",
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
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(16, 185, 129, 0.1)",
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
                color: "#475569",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "600",
                padding: "12px 0",
                borderBottom: "1px solid rgba(16, 185, 129, 0.08)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#059669";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#475569";
              }}
            >
              {link.label}
            </Link>
          ))}

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center"
            }}
            onClick={() => setIsMobileOpen(false)}
          >
            <PrimaryButton>Apply Now</PrimaryButton>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 993px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}

/* ==============================================================
   UIVERSE ANIMATED NAVBAR (STYLED-COMPONENTS) 
   Customized for 5 elements and Light Green Theme
============================================================== */
const DesktopNavWrapper = styled.div`
  .outline {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .rect {
    stroke-dashoffset: 5;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s;
    stroke: #10B981; /* Emerald Green Stroke */
  }

  .nav {
    position: relative;
    width: 650px; /* Expanded width to fit all 5 links perfectly */
    height: 48px;
  }

  .container:hover .outline .rect {
    transition: 999999s;
    stroke-dashoffset: 1;
    stroke-dasharray: 0;
  }

  .container {
    position: absolute;
    inset: 0;
    background: rgba(16, 185, 129, 0.08); /* Very light green glass background */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }

  .btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #475569; /* Slate 600 text for readability */
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s;
  }

  .btn:hover {
    background: rgba(16, 185, 129, 0.15); /* Slightly darker green highlight */
    color: #059669; /* Emerald 600 text */
  }

  /* Calculated SVG Path Lengths for exactly 5 items.
    Format: 0 [start-top] [length-top] [gap-to-bottom] [length-bottom] [gap-to-end]
  */
  
  /* 1. Home Loan */
  .btn:nth-child(1):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 2 7 80 7 4;
  }

  /* 2. Personal Loan */
  .btn:nth-child(2):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 11 7 62 7 13;
  }

  /* 3. Business Loan */
  .btn:nth-child(3):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 20 7 44 7 22;
  }

  /* 4. EMI Calculator */
  .btn:nth-child(4):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 29 7 26 7 31;
  }

  /* 5. About Us */
  .btn:nth-child(5):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 38 7 8 7 40;
  }

  .btn:hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s !important;
  }
`;