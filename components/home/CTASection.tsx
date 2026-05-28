"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loanType, setLoanType] = useState("Select loan type");
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Full Name is required.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (loanType === "Select loan type") {
      setError("Please select a loan type.");
      return;
    }
    if (!agreedToPrivacy) {
      setError("You must agree to the Privacy Policy to proceed.");
      return;
    }

    setIsSending(true);
    try {
      const dataToSend = new FormData();
      dataToSend.append("access_key", "4176dc02-645c-44a1-b4ec-ca55a7c18982");
      dataToSend.append("name", name);
      dataToSend.append("phone", phone);
      dataToSend.append("loan_type", loanType);
      dataToSend.append("subject", `Consultation: ${loanType}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSend
      });

      const resData = await response.json();
      if (resData.success) {
        setSubmitted(true);
      } else {
        setError(resData.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while sending your request. Please check your internet connection.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 px-6 bg-white">
      {/* Background Pattern - Right Side */}


      <div className="container mx-auto max-w-5xl">

        {/* Main CTA Card - Switched to White/Emerald theme */}
        <div className="relative rounded-[32px] p-8 md:p-16 text-center overflow-hidden border border-emerald-100 shadow-[0_20px_50px_rgba(16,185,129,0.05)] bg-emerald-200">

          {/* Decorative background accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-1.5 mb-6">
              <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">Get Started Today</span>
            </div>

            <h2 className="text-[clamp(32px,4vw,48px)] font-black text-slate-900 tracking-tight leading-tight mb-6">
              Ready to Apply for Your Loan?
            </h2>

            <p className="text-lg text-slate-600 max-w-xl mx-auto mb-12 leading-relaxed">
              Speak with a professional direct selling agent. We will handle your documentation, match you with the best bank, and secure approvals at no cost.
            </p>

            {/* Form */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10 max-w-xl mx-auto shadow-sm text-left">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-emerald-100 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 text-2xl mx-auto mb-4 shadow-sm">
                    ✓
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    Consultation Requested!
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
                    Thank you, <strong>{name}</strong>. Your request for a <strong>{loanType}</strong> consultation has been received. Our loan specialist will call you at <strong>+91 {phone}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setPhone("");
                      setLoanType("Select loan type");
                      setAgreedToPrivacy(false);
                    }}
                    className="w-full py-3.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs transition-colors cursor-pointer border-none"
                  >
                    Request Another Consultation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-bold px-4 py-3 rounded-xl">
                      ⚠️ {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none focus:border-emerald-500 transition-colors"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none focus:border-emerald-500 transition-colors"
                      required
                    />
                  </div>

                  <select
                    value={loanType}
                    onChange={(e) => setLoanType(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors text-slate-600 text-sm"
                  >
                    <option>Select loan type</option>
                    <option>Home Loan</option>
                    <option>Personal Loan</option>
                    <option>Business Loan</option>
                  </select>

                  {/* Privacy Consent Checkbox */}
                  <div className="flex items-start gap-3 mt-1 mb-2">
                    <input
                      type="checkbox"
                      id="cta-privacy"
                      checked={agreedToPrivacy}
                      onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                      className="mt-1 w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 cursor-pointer"
                    />
                    <label htmlFor="cta-privacy" className="text-xs text-slate-500 leading-normal cursor-pointer select-none">
                      I agree to the <Link href="/privacy" className="text-emerald-600 underline font-bold hover:text-emerald-700">Privacy Policy</Link> and authorize ACE Financial Services to contact me regarding my request.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all duration-300 border-none cursor-pointer flex items-center justify-center gap-1"
                  >
                    {isSending ? "Sending..." : "Get Free Consultation"} <ChevronRight size={18} />
                  </button>

                  <p className="text-xs text-slate-400 text-center mt-2 m-0">
                    🔒 Your information is 100% secure & never shared
                  </p>
                </form>
              )}
            </div>

            {/* Direct Contact */}
            <p className="mt-10 text-slate-600">
              Or speak with Nilesh Gindodia directly:{" "}
              <a href="tel:+919975494945" className="text-emerald-600 font-extrabold hover:underline">
                +91 99754 94945
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}