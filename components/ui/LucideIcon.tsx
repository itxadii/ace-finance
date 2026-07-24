"use client";

import React from "react";
import * as Icons from "lucide-react";

// Mappings from standard emojis to Lucide React component names
const EMOJI_MAP: Record<string, string> = {
  "🏠": "Home",
  "👤": "User",
  "🏢": "Building",
  "🚗": "Car",
  "🛡️": "Shield",
  "📈": "TrendingUp",
  "💱": "Coins",
  "💰": "CircleDollarSign",
  "📑": "FileText",
  "📄": "FileText",
  "🏦": "Landmark",
  "📱": "Smartphone",
  "📊": "BarChart3",
  "📉": "TrendingDown",
  "⚡": "Zap",
  "🔁": "RotateCcw",
  "🏗️": "Hammer",
  "🤝": "Handshake",
  "💼": "Briefcase",
  "📅": "Calendar",
  "⏳": "Hourglass",
  "🏭": "Factory",
  "🎯": "Target",
  "💸": "Banknote",
  "🔔": "Bell",
  "⚖️": "Scale",
  "🏥": "HeartPulse",
  "🔧": "Wrench",
  "🌎": "Globe",
  "💎": "Gem",
  "🪙": "Coins",
  "🟡": "Coins",
  "🔍": "Search",
  "🔒": "Lock",
};

interface LucideIconProps {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export default function LucideIcon({
  name,
  size = 24,
  strokeWidth = 1.5,
  className = "",
}: LucideIconProps) {
  // Resolve emoji or pass-through Lucide name
  const iconName = EMOJI_MAP[name] || name;
  const IconComponent = (Icons as any)[iconName];

  if (!IconComponent) {
    // Fallback if not found
    return <Icons.HelpCircle size={size} strokeWidth={strokeWidth} className={className} />;
  }

  return <IconComponent size={size} strokeWidth={strokeWidth} className={className} />;
}
