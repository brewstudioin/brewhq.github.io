import { VarianceHeroSection } from "./VarianceHeroSection";
import { VarianceWhatItDoesSection } from "./VarianceWhatItDoesSection";
import { VarianceHowItHelpsSection } from "./VarianceHowItHelpsSection";
import { VarianceFAQSection } from "./VarianceFAQSection";

export function VariancePage() {
  return (
    <>
      <VarianceHeroSection />
      <VarianceWhatItDoesSection />
      <VarianceHowItHelpsSection />
      <VarianceFAQSection />
    </>
  );
}