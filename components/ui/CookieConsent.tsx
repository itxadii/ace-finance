"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Prevent SSR hydration issues by checking localStorage on the client side only
    const consent = localStorage.getItem("ace_cookie_consent");
    if (!consent) {
      // Small delay before popping up for better UX feel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ace_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("ace_cookie_consent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm md:max-w-md w-[calc(100%-48px)] bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[24px] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.1)] flex flex-col gap-4"
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
                <Cookie size={20} />
              </div>
              <div>
                <h4 className="text-[15px] font-black text-slate-900 tracking-tight leading-none m-0">
                  Cookie Consent
                </h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 m-0">
                  Privacy Settings
                </p>
              </div>
            </div>
            <button
              onClick={handleReject}
              className="text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-slate-100 rounded-lg border-none bg-transparent cursor-pointer"
              aria-label="Close panel"
            >
              <X size={16} />
            </button>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-600 leading-relaxed m-0">
            We use cookies to optimize calculator presets, store secure form consents, and analyze site metrics. By clicking &quot;Accept All&quot;, you agree to our cookie settings. Read our{" "}
            <Link
              href="/cookie-policy"
              onClick={() => setIsVisible(false)}
              className="text-emerald-600 font-bold hover:underline no-underline"
            >
              Cookie Policy
            </Link>{" "}
            for details.
          </p>

          {/* Actions */}
          <div className="flex gap-2.5 items-center w-full mt-1">
            <button
              type="button"
              onClick={handleReject}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 px-4 rounded-xl transition-all border-none cursor-pointer"
            >
              Reject Optional
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md shadow-emerald-600/10 hover:shadow-lg transition-all border-none cursor-pointer"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
