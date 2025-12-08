import React from "react";
import { HeroSection } from "./HeroSection";
import { VelocitySection } from "./VelocitySection";
import { BrewWaySection } from "./BrewWaySection";
import { BenefitsSection } from "./BenefitsSection";
import { TrustedBySection } from "./TrustedBySection";
import { HowItWorksSection } from "./HowItWorksSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <VelocitySection />
      <BrewWaySection />
      <BenefitsSection />
      <HowItWorksSection />
      <TrustedBySection />
    </>
  );
}