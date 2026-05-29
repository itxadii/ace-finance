import type { Metadata } from "next";
import { Lato, Geist } from "next/font/google";
import "./globals.css";
import "./bones/registry";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import { cn } from "@/lib/utils";
import Script from "next/script";

// ─── Font ─────────────────────────────────────────────────────────────────────
const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

// ─── Constants ────────────────────────────────────────────────────────────────
const siteUrl = "https://www.acefinancehub.in";
const siteName = "ACE Financial Services";
const defaultTitle = "ACE Financial Services | Home, Personal & Business Loans in Dhule";
const defaultDescription =
  "Get fast loan approvals in Dhule. ACE Financial Services offers home loans, personal loans, business loans, loan against property, and auto loans at competitive rates with minimal documentation.";
const ogImage = {
  url: `${siteUrl}/heroimage.png`,
  width: 1200,
  height: 630,
  alt: siteName,
};

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.ico`,
        width: 256,
        height: 256,
      },
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+91-99754-94945",
        url: `${siteUrl}/contact/`,
        areaServed: "IN",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: defaultDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,

  keywords: [
    "home loan Dhule",
    "personal loan Dhule",
    "business loan Dhule",
    "loan against property Dhule",
    "auto loan Dhule",
    "insurance broker Dhule",
    "mutual funds investment Dhule",
    "shares trading Dhule",
    "direct selling agent Dhule",
    "DSA partner Dhule",
    "ACE Financial Services",
    "loan approval",
  ],

  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage.url],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable, lato.variable)}>
      <head>
        {/* Theme color for mobile browser chrome */}
        <meta name="theme-color" content="#10b981" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X31YW0715L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-X31YW0715L');
          `}
        </Script>

        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}