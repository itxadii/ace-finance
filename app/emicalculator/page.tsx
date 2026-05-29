import EMICalculatorClient from "@/components/emicalculator/EMICalculatorClient";

export const metadata = {
  title: "EMI & Investment Calculator | ACE Financial Services",
  description:
    "Estimate your monthly loan EMIs or calculate future returns on your SIP/Lumpsum investments with our free, all-in-one financial calculator.",
  alternates: {
    canonical: "/emicalculator/",
  },
};

export default function EMICalculatorPage() {
  return <EMICalculatorClient />;
}