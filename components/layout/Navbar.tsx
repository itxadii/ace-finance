"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileLoansOpen, setIsMobileLoansOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mainLinks = [
    { label: "Loans", href: "#", isDropdown: true },
    { label: "Credit Cards", href: "/credit-cards" },
    { label: "EMI Calculator", href: "/emicalculator" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const loanSubLinks = [
    { label: "Home Loan", href: "/home-loan" },
    { label: "Personal Loan", href: "/personal-loan" },
    { label: "Business Loan", href: "/business-loan" },
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
                {mainLinks.map((link) => {
                  if (link.isDropdown) {
                    return (
                      <div key={link.label} className="btn dropdown-btn">
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          {link.label} <span style={{ fontSize: "10px", marginTop: "2px" }}>▼</span>
                        </span>
                        <div className="dropdown-menu">
                          {loanSubLinks.map((subLink) => (
                            <Link key={subLink.href} href={subLink.href} className="dropdown-item">
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link key={link.href} href={link.href} className="btn">
                      {link.label}
                    </Link>
                  );
                })}

                {/* SVG Outline Box */}
                <svg className="outline" overflow="visible" width="100%" height="100%" viewBox="0 0 700 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <rect className="rect" pathLength={100} x={0} y={0} width="100%" height="100%" fill="transparent" strokeWidth={3} />
                </svg>
              </div>
            </div>
          </DesktopNavWrapper>

          {/* Primary CTA Button */}
          <div style={{ marginLeft: "24px" }}>
            <Link href="/contact" className="no-underline">
              <PrimaryButton>Apply Now</PrimaryButton>
            </Link>
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
          {mainLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.label} style={{ borderBottom: "1px solid rgba(16, 185, 129, 0.08)" }}>
                  <button
                    onClick={() => setIsMobileLoansOpen(!isMobileLoansOpen)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      color: "#475569",
                      background: "none",
                      border: "none",
                      fontSize: "15px",
                      fontWeight: "600",
                      padding: "12px 0",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ fontSize: "10px", transition: "transform 0.2s", transform: isMobileLoansOpen ? "rotate(90deg)" : "rotate(0)" }}>▶</span>
                  </button>
                  {isMobileLoansOpen && (
                    <div style={{ paddingLeft: "16px", paddingBottom: "8px", display: "flex", flexDirection: "column" }}>
                      {loanSubLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={() => {
                            setIsMobileOpen(false);
                            setIsMobileLoansOpen(false);
                          }}
                          style={{
                            color: "#64748b",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: "500",
                            padding: "8px 0",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.color = "#059669";
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.color = "#64748b";
                          }}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
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
            );
          })}

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center"
            }}
            onClick={() => setIsMobileOpen(false)}
          >
            <Link href="/contact" className="no-underline">
              <PrimaryButton>Apply Now</PrimaryButton>
            </Link>
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
  
  /* 1. Loans Dropdown */
  .btn:nth-child(1):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 2 7 80 7 4;
  }

  /* 2. Credit Cards */
  .btn:nth-child(2):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 11 7 62 7 13;
  }

  /* 3. EMI Calculator */
  .btn:nth-child(3):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 20 7 44 7 22;
  }

  /* 4. About Us */
  .btn:nth-child(4):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 29 7 26 7 31;
  }

  /* 5. Contact Us */
  .btn:nth-child(5):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 38 7 8 7 40;
  }

  .btn:hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s !important;
  }

  .dropdown-btn {
    position: relative;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(16, 185, 129, 0.15);
    border-radius: 12px;
    box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.15);
    padding: 8px 0;
    min-width: 170px;
    display: flex;
    flex-direction: column;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 100;
  }

  .dropdown-btn:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }

  .dropdown-item {
    padding: 10px 20px;
    color: #475569;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
    text-align: center;
    white-space: nowrap;
    display: block;
  }

  .dropdown-item:hover {
    background: rgba(16, 185, 129, 0.1);
    color: #059669;
  }
`;