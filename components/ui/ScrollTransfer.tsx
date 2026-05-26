"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Landmark, Wallet, Banknote, CheckCircle2, ShieldCheck, ArrowRightLeft } from "lucide-react";

export default function ScrollTransfer() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track the scroll progress within this specific section (0 to 1)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to text opacities (fading in and out)
    const step1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 1, 0.3]);
    const step2Opacity = useTransform(scrollYProgress, [0.25, 0.45, 0.65], [0.3, 1, 0.3]);
    const step3Opacity = useTransform(scrollYProgress, [0.6, 0.85, 1], [0.3, 1, 1]);

    // Map scroll progress to the Green Money vertical position (0% to 100% of the track)
    const moneyProgress = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

    return (
        // The outer container is very tall (300vh) to allow for plenty of scrolling
        <section ref={containerRef} className="relative h-[300vh] bg-white border-y border-slate-100">

            {/* The inner container sticks to the screen while you scroll through the 300vh */}
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* Background glow for the theme */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.03)_0%,transparent_70%)] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

                    {/* LEFT SIDE: Descriptive Text */}
                    <div className="flex flex-col gap-16 relative">

                        {/* Step 1 */}
                        <motion.div style={{ opacity: step1Opacity }} className="transition-opacity duration-300">
                            <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 mb-4 shadow-sm">
                                <Landmark size={24} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
                                Initiating Transfer
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Once approved, the bank releases your approved loan amount. Our direct API integrations ensure the process begins instantly.
                            </p>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div style={{ opacity: step2Opacity }} className="transition-opacity duration-300">
                            <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
                                Secure Processing
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Funds travel through heavily encrypted, RBI-compliant banking networks ensuring absolute safety and zero manual interference.
                            </p>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div style={{ opacity: step3Opacity }} className="transition-opacity duration-300">
                            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-600/20">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="text-3xl font-black text-emerald-600 mb-3 tracking-tight">
                                Funds Received
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Money drops directly into your registered bank account. You are now ready to fuel your dreams, grow your business, or buy your home!
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: The Visual Track */}
                    <div className="h-[60vh] md:h-[70vh] flex flex-col items-center relative py-10">

                        {/* The Bank (Top) */}
                        <div className="absolute top-0 z-20 flex flex-col items-center bg-white pb-2">
                            <div className="w-20 h-20 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-xl border border-slate-800">
                                <Landmark size={40} strokeWidth={1.5} />
                            </div>
                            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mt-4">Partner Bank</span>
                        </div>

                        {/* The Track (Line) */}
                        <div className="w-2 h-full bg-slate-100 rounded-full relative overflow-hidden my-4 shadow-inner">
                            {/* Dynamic green fill line that grows as money moves */}
                            <motion.div
                                style={{ height: moneyProgress }}
                                className="w-full bg-emerald-300 absolute top-0 left-0"
                            />
                        </div>

                        {/* The Green Money (Moving Element) */}
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full py-[100px] pointer-events-none">
                            <div className="relative w-full h-full">
                                <motion.div
                                    style={{ top: moneyProgress }}
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                                >
                                    <div className="relative">
                                        {/* Glowing pulse behind the money */}
                                        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-40 animate-pulse" />

                                        {/* The Money Icon */}
                                        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(16,185,129,0.4)] border-4 border-white relative z-10">
                                            <Banknote size={28} strokeWidth={2} />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* The Customer Wallet (Bottom) */}
                        <div className="absolute bottom-0 z-20 flex flex-col items-center bg-white pt-2">
                            <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest mb-4">Your Account</span>
                            <div className="w-20 h-20 bg-white border-2 border-slate-200 text-slate-800 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden">
                                <div className="absolute inset-0 bg-slate-50 opacity-50" />
                                <Wallet size={40} strokeWidth={1.5} className="relative z-10" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}