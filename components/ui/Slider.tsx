"use client";

import React from "react";

export function formatINR(n: number): string {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

interface SliderProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  displayValue: string;
}

export default function Slider({
  id,
  label,
  value,
  min,
  max,
  step,
  onChange,
  displayValue,
}: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <label htmlFor={id} style={{ fontSize: "14px", fontWeight: "700", color: "#1f2937" }}>
          {label}
        </label>
        <span
          style={{
            fontSize: "14px",
            fontWeight: "800",
            color: "#059669",
            background: "rgba(16, 185, 129, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            padding: "3px 12px",
            borderRadius: "20px",
          }}
        >
          {displayValue}
        </span>
      </div>
      <div style={{ position: "relative", height: "6px", background: "#e5e7eb", borderRadius: "3px" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: `${pct}%`,
            background: "#10B981",
            borderRadius: "3px",
            transition: "width 0.1s",
          }}
        />
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            opacity: 0,
            cursor: "pointer",
            height: "24px",
            top: "-9px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: `${pct}%`,
            transform: "translate(-50%, -50%)",
            width: "20px",
            height: "20px",
            background: "#ffffff",
            border: "3px solid #10B981",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(16, 185, 129, 0.3)",
            transition: "left 0.1s",
            pointerEvents: "none",
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
        <span style={{ fontSize: "11px", color: "#6b7280", fontWeight: "600" }}>
          Min: {min >= 100000 ? formatINR(min) : min + (id === "rate" ? "%" : id === "tenure" ? " mo" : "")}
        </span>
        <span style={{ fontSize: "11px", color: "#6b7280", fontWeight: "600" }}>
          Max: {max >= 100000 ? formatINR(max) : max + (id === "rate" ? "%" : id === "tenure" ? " mo" : "")}
        </span>
      </div>
    </div>
  );
}
