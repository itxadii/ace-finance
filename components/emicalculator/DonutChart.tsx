"use client";

import React from "react";
import { formatINR } from "@/components/ui/Slider";

interface DonutChartProps {
  principal: number;
  interest: number;
}

export default function DonutChart({ principal, interest }: DonutChartProps) {
  const total = principal + interest;
  const principalPct = total > 0 ? (principal / total) * 100 : 50;
  const interestPct = 100 - principalPct;
  const r = 60;
  const circ = 2 * Math.PI * r;
  const principalDash = (principalPct / 100) * circ;
  const interestDash = (interestPct / 100) * circ;

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", marginBottom: "32px" }}>
      <svg width="170" height="170" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={r} fill="none" stroke="#f3f4f6" strokeWidth="18" />
        <circle
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke="#10B981"
          strokeWidth="18"
          strokeDasharray={`${principalDash} ${circ - principalDash}`}
          strokeDashoffset={circ / 4}
          strokeLinecap="round"
        />
        <circle
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke="#0f172a"
          strokeWidth="18"
          strokeDasharray={`${interestDash} ${circ - interestDash}`}
          strokeDashoffset={circ / 4 - principalDash}
          strokeLinecap="round"
        />
      </svg>
      <div style={{ position: "absolute", textAlign: "center" }}>
        <div style={{ fontSize: "10px", color: "#6b7280", fontWeight: "800", letterSpacing: "0.05em" }}>TOTAL DUE</div>
        <div style={{ fontSize: "15px", fontWeight: "900", color: "#000000", marginTop: "2px" }}>{formatINR(total)}</div>
      </div>
    </div>
  );
}
