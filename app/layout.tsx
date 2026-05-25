import type { Metadata } from "next";
import { Lato, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACE Finance — Home, Personal & Business Loans in Nashik",
  description:
    "Get fast loan approvals in Nashik. ACE Finance offers home loans, personal loans, business loans, loan against property, and used car loans at competitive rates with minimal documentation.",
  keywords: "home loan Nashik, personal loan Nashik, business loan Nashik, ACE Finance, loan approval",
  openGraph: {
    title: "ACE Finance — Loans in Nashik",
    description:
      "Turn your dream home into reality with ACE Finance. Quick approval, low rates, expert guidance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable, lato.variable)}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}