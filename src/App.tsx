import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SEO } from "./components/SEO";
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

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingShapes />
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SEO 
                  title="Brew Studio | Boost Engineering Velocity & Predictability"
                  description="AI-powered tool that helps development teams boost velocity and predictability by analyzing requirements, surfacing dependencies, and generating implementation plans."
                  path="/"
                />
                <HomePage />
              </>
            }
          />
          <Route
            path="/impact-analysis"
            element={
              <>
                <SEO 
                  title="Impact Maps | Brew Studio"
                  description="Analyze requirement dependencies, risks, and blast radius to prevent scope creep and delays."
                  path="/impact-analysis"
                />
                <ImpactAnalysisPage />
              </>
            }
          />
          <Route
            path="/implementation-plans"
            element={
              <>
                <SEO 
                  title="Implementation Plans | Brew Studio"
                  description="Generate step-by-step tasks with dependencies, estimates, and acceptance criteria in minutes."
                  path="/implementation-plans"
                />
                <ImplementationPlansPage />
              </>
            }
          />
          <Route
            path="/integrations"
            element={
              <>
                <SEO 
                  title="Integrations | Brew Studio"
                  description="Connect with Jira, Slack, GitHub and more to fit your existing workflow."
                  path="/integrations"
                />
                <IntegrationsPage />
              </>
            }
          />
          <Route
            path="/variance"
            element={
              <>
                <SEO 
                  title="Variance Tracking | Brew Studio"
                  description="Track project deviation and keep delivery on target with actionable insights."
                  path="/variance"
                />
                <VariancePage />
              </>
            }
          />
          <Route
            path="/product-managers"
            element={
              <>
                <SEO 
                  title="For Product Managers | Brew Studio"
                  description="Turn requirements into crisp implementation plans with clarity and confidence."
                  path="/product-managers"
                />
                <ProductManagersPage />
              </>
            }
          />
          <Route
            path="/engineering-managers"
            element={
              <>
                <SEO 
                  title="For Engineering Managers | Brew Studio"
                  description="Increase team velocity, reduce surprises, and improve predictability."
                  path="/engineering-managers"
                />
                <EngineeringManagersPage />
              </>
            }
          />
          <Route
            path="/developers"
            element={
              <>
                <SEO 
                  title="For Developers | Brew Studio"
                  description="Get context-rich, dependency-aware implementation plans to ship faster."
                  path="/developers"
                />
                <DevelopersPage />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <SEO 
                  title="About Brew Studio"
                  description="Learn about the team and mission behind Brew Studio."
                  path="/about"
                />
                <AboutUsPage />
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <SEO 
                  title="Pricing | Brew Studio"
                  description="Simple pricing to get started quickly with Brew Studio."
                  path="/pricing"
                />
                <PricingPage />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}