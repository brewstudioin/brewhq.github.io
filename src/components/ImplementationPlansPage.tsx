import React from "react";
import { ImplementationHeroSection } from "./ImplementationHeroSection";
import { ImplementationWhatItDoesSection } from "./ImplementationWhatItDoesSection";
import { ImplementationHowItHelpsSection } from "./ImplementationHowItHelpsSection";
import { ImplementationFAQSection } from "./ImplementationFAQSection";

export function ImplementationPlansPage() {
  return (
    <>
      <ImplementationHeroSection />
      <ImplementationWhatItDoesSection />
      <ImplementationHowItHelpsSection />
      <ImplementationFAQSection />
    </>
  );
}