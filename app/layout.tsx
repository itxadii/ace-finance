import type { Metadata } from "next";
import { Lato, Geist } from "next/font/google";
import "./globals.css";
import "./bones/registry";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACE Financial Services — Home, Personal & Business Loans in Dhule",
  description:
    "Get fast loan approvals in Dhule. ACE Financial Services offers home loans, personal loans, business loans, loan against property, and used car loans at competitive rates with minimal documentation.",
  keywords: "home loan Dhule, personal loan Dhule, business loan Dhule, ACE Financial Services, loan approval",
  openGraph: {
    title: "ACE Financial Services — Loans in Dhule",
    description:
      "Turn your dream home into reality with ACE Financial Services. Quick approval, low rates, expert guidance.",
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
        <CookieConsent />
      </body>
    </html>
  );
}