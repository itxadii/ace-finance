"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Mail, Phone, MessageSquare, MapPin, Clock, Send, Check, ChevronRight } from "lucide-react";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit mobile number.");
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
      dataToSend.append("name", formData.name);
      dataToSend.append("email", formData.email);
      dataToSend.append("phone", formData.phone);
      dataToSend.append("subject", formData.subject || "Contact Inquiry");
      dataToSend.append("message", formData.message);

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
      setError("An error occurred while sending the message. Please check your internet connection.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO SECTION ───────────────────────────────────── */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 text-center border-b border-slate-200/60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />
        {/* Background Pattern */}
        <div className="absolute right-220 top-1/2 -translate-y-1/2 w-[70%] h-[100%] bg-[url('/pattern.png')] bg-contain bg-no-repeat bg-right opacity-[0.2] pointer-events-none" />

        <div className="container mx-auto max-w-[1200px] relative z-10">
          {/* Breadcrumb */}
          <div className="flex justify-center gap-2 mb-6">
            <Link href="/" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <span className="text-sm text-slate-400">›</span>
            <span className="text-sm font-bold text-emerald-600">Contact Us</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-1.5 mb-6">
            <span>📞</span>
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
              24/7 Availability
            </span>
          </div>

          <h1 className="text-[clamp(38px,5.5vw,60px)] font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
            Get in Touch <span className="text-emerald-500">With Us</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-[560px] mx-auto leading-relaxed">
            Our team is here to assist you with any questions regarding loan applications, interest rates, or eligibility. Send us a message below!
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* LEFT COLUMN: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-[32px] p-6 sm:p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12 px-4">
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-3xl mx-auto mb-6 shadow-sm">
                    <Check size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-md mx-auto">
                    Thank you for reaching out, <strong className="text-slate-800">{formData.name}</strong>. Our customer liaison representative will check your query and email you at <span className="text-emerald-600 font-bold">{formData.email}</span> within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                      setAgreedToPrivacy(false);
                    }}

                    className="py-3 px-8 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-xl font-bold text-sm tracking-wide border-none transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                  <h3 className="text-xl font-black text-slate-900 mb-2 border-b border-slate-100 pb-4">
                    Send Us a Message
                  </h3>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-bold px-4 py-3 rounded-xl">
                      ⚠️ {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-[13px] font-bold text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. John Doe"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-[13px] font-bold text-slate-700 mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          maxLength={10}
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="10-digit number"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-[13px] font-bold text-slate-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-[13px] font-bold text-slate-700 mb-2">
                        Subject
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="e.g. Loan Inquiry"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[13px] font-bold text-slate-700 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type details of your request or question here..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all resize-none"
                      required
                    />
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="flex items-start gap-3 mt-1 mb-4">
                    <input
                      type="checkbox"
                      id="contact-privacy"
                      checked={agreedToPrivacy}
                      onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                      className="mt-1 w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 cursor-pointer"
                    />
                    <label htmlFor="contact-privacy" className="text-xs text-slate-500 leading-normal cursor-pointer select-none">
                      I agree to the <Link href="/privacy" className="text-emerald-600 underline font-bold hover:text-emerald-700">Privacy Policy</Link> and authorize ACE Financial Services to contact me.
                    </label>
                  </div>

                  <div className="mt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all duration-300 border-none cursor-pointer flex items-center justify-center gap-1"
                    >
                      {isSending ? "Sending..." : "Send Message Now"} <ChevronRight size={18} />
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* RIGHT COLUMN: Contact Details (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">

              {/* Info Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col gap-6">
                <h3 className="text-lg font-black text-slate-900 border-b border-slate-200/80 pb-3">
                  Direct Contact Info
                </h3>

                {[
                  {
                    icon: <MapPin className="text-emerald-600" size={20} />,
                    title: "Our Location",
                    lines: [
                      "S-301-305, 'B' Wing, 2nd Floor,",
                      "New Jayshankar Market,",
                      "Opp. Urdu High School,",
                      "Dhule - 424001, Maharashtra, India"
                    ]
                  },
                  {
                    icon: <Phone className="text-emerald-600" size={20} />,
                    title: "Phone Numbers",
                    lines: [
                      "+91 99754 94945 (Mobile)",
                      "02562-280033 / 34 / 35 (Landline)",
                      "Mon-Sat, 9:00 AM - 6:00 PM"
                    ]
                  },
                  {
                    icon: <Mail className="text-emerald-600" size={20} />,
                    title: "Email Channels",
                    lines: ["priyanka.agrawal@iiflpartner.com"]
                  },
                  {
                    icon: <Clock className="text-emerald-600" size={20} />,
                    title: "Operational Hours",
                    lines: ["Monday - Saturday: 9 AM - 6 PM", "Sunday: Closed"]
                  }
                ].map((info, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{info.title}</h4>
                      {info.lines.map((line, lIdx) => (
                        <p key={lIdx} className="text-sm font-extrabold text-slate-800 mt-1 leading-normal m-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Styled Visual Map Placeholder */}
              <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm relative overflow-hidden h-[240px] flex flex-col items-center justify-center text-center">
                {/* Simulated Grid/Map Background */}
                <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Simulated Location Pin */}
                <div className="relative z-10 mb-4 animate-bounce">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <MapPin size={22} />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/10 rounded-full blur-sm" />
                </div>

                <h4 className="text-sm font-black text-slate-900 z-10">ACE Financial Services HQ</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-[200px] leading-relaxed z-10">
                  Visit us in Dhule for a detailed loan consultation.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
