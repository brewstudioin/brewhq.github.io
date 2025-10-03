import React from "react";
import { ImpactHeroSection } from "./ImpactHeroSection";
import { WhatItDoesSection } from "./WhatItDoesSection";
import { HowItHelpsSection } from "./HowItHelpsSection";
import { FAQSection } from "./FAQSection";

export function ImpactAnalysisPage() {
  return (
    <>
      <ImpactHeroSection />
      <WhatItDoesSection />
      <HowItHelpsSection />
      <FAQSection />
    </>
  );
}