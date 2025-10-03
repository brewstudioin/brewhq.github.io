import React from "react";
import { IntegrationsHeroSection } from "./IntegrationsHeroSection";
import { IntegrationsWhatItDoesSection } from "./IntegrationsWhatItDoesSection";
import { IntegrationsHowItHelpsSection } from "./IntegrationsHowItHelpsSection";
import { IntegrationsFAQSection } from "./IntegrationsFAQSection";

export function IntegrationsPage() {
  return (
    <>
      <IntegrationsHeroSection />
      <IntegrationsWhatItDoesSection />
      <IntegrationsHowItHelpsSection />
      <IntegrationsFAQSection />
    </>
  );
}