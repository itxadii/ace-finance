import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "ACE Financial Services — Loans in Dhule | Home, Personal & Business Loans",
  description:
    "Apply for home, personal, and business loans in Dhule with fast 24-hour approval, competitive interest rates, and minimal documentation. Trusted by 10,000+ clients.",
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