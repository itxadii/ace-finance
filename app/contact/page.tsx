import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata = {
  title: "Contact Us | ACE Finance — Loan Agents in Nashik",
  description:
    "Get in touch with ACE Finance, Nashik's premier direct selling agent. Speak to our experts for home loans, personal loans, business loans, or credit cards. Response in 2 hours.",
  keywords: "contact ACE Finance, loan agent Nashik, finance expert Nashik, home loan assistance, business loan advice",
  openGraph: {
    title: "Contact Us | ACE Finance",
    description: "Reach out to our experts for free, direct assistance with loans and credit cards. Fast responses.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
