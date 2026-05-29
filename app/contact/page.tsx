import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata = {
  title: "Contact Us | ACE Financial Services — Loan Agents in Dhule",
  description:
    "Get in touch with ACE Financial Services, Dhule's premier direct selling agent. Speak to our experts for home loans, personal loans, business loans, or credit cards. Response in 2 hours.",
  keywords: "contact ACE Financial Services, loan agent Dhule, finance expert Dhule, home loan assistance, business loan advice",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact Us | ACE Financial Services",
    description: "Reach out to our experts for free, direct assistance with loans and credit cards. Fast responses.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
