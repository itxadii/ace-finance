import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "ACE Finance — Loans in Nashik | Home, Personal & Business Loans",
  description:
    "Apply for home, personal, and business loans in Nashik with fast 24-hour approval, competitive interest rates, and minimal documentation. Trusted by 10,000+ clients.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}