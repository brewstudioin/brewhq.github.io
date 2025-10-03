import React from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { ImpactAnalysisPage } from "./components/ImpactAnalysisPage";
import { ImplementationPlansPage } from "./components/ImplementationPlansPage";
import { IntegrationsPage } from "./components/IntegrationsPage";
import { VariancePage } from "./components/VariancePage";
import { ProductManagersPage } from "./components/ProductManagersPage";
import { EngineeringManagersPage } from "./components/EngineeringManagersPage";
import { DevelopersPage } from "./components/DevelopersPage";
import { AboutUsPage } from "./components/AboutUsPage";
import { PricingPage } from "./components/PricingPage";
import { Footer } from "./components/Footer";
import { FloatingShapes } from "./components/FloatingShapes";
import { RouterProvider, useRouter } from "./components/Router";

function AppContent() {
  const { currentPage } = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <FloatingShapes />
      <Header />
      <main>
        {currentPage === "home" && <HomePage />}
        {currentPage === "impact-analysis" && (
          <ImpactAnalysisPage />
        )}
        {currentPage === "implementation-plans" && (
          <ImplementationPlansPage />
        )}
        {currentPage === "integrations" && <IntegrationsPage />}
        {currentPage === "variance" && <VariancePage />}
        {currentPage === "product-managers" && (
          <ProductManagersPage />
        )}
        {currentPage === "engineering-managers" && (
          <EngineeringManagersPage />
        )}
        {currentPage === "developers" && <DevelopersPage />}
        {currentPage === "about" && <AboutUsPage />}
        {currentPage === "pricing" && <PricingPage />}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}