import Link from "next/link";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.06)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

        <div className="relative z-10 max-w-lg w-full text-center bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
          <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-8 shadow-sm">
            <FileQuestion size={40} />
          </div>

          <h1 className="text-8xl font-black text-slate-900 tracking-tight mb-2">404</h1>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-4">Page Not Found</h2>
          
          <p className="text-sm text-slate-600 leading-relaxed mb-10 max-w-sm mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-emerald-600/20 transition-all duration-300 border-none cursor-pointer text-sm no-underline"
            >
              <Home size={16} /> Go Back Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-bold py-3.5 px-8 rounded-xl border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 cursor-pointer text-sm no-underline"
            >
              <ArrowLeft size={16} /> Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
