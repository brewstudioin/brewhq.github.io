import React from "react";
import { Routes, Route } from "react-router-dom";
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
import { ScrollToTop } from "./components/ScrollToTop";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { SubprocessorPage } from "./components/SubprocessorPage";
import { SecurityPage } from "./components/SecurityPage";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingShapes />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SEO 
                  title="Raise Velocity with Context | Brew Studio"
                  description="Turn requirements into impact analysis and development-ready plans. Cut rework, reduce cycle time, and ship predictably."
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
                  title="Full-Stack Impact Analysis for Teams | Brew Studio"
                  description="Map dependencies, flag risks, and export impact summaries to Jira. Reduce rework and slips."
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
                  title="Clear Plans for Devs & AI Agents | Brew Studio"
                  description="Turn requirements into development-ready tasks with estimates. Cut rework, speed handoffs, and ship sustainably."
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
                  title="Integrations: Jira, Slack & GitHub | Brew Studio"
                  description="Plug Brew Studio into Jira, Slack, and GitHub to keep context intact from requirement to code. Roadmap: VS Code and agent adapters."
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
                  title="Variance: Requirement-vs-Code Guardrails | Brew Studio"
                  description="Continuous checks compare code to requirements and ACs, flagging discrepancies and opening follow-ups so teams fix issues fast."
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
                  title="Product Managers: Align & Ship Faster | Brew Studio"
                  description="Turn messy specs into clear impact maps and plans with ACs and estimates. Sync to Jira and reduce review cycles."
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
                  title="Predictable Velocity for Engineering | Brew Studio"
                  description="Protect velcoity with impact-aware planning. Reduce rework, improve estimates and quality, and ship on schedule with fewer surprises"
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
                  title="Clear Requirements for Developers | Brew Studio"
                  description="Turn requirements into executable plans. Fewer unknowns, cleaner reviews, and faster merges."
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
                  description="Our mission: remove chaos from software delivery. We craft tools for improving engineering teams' productivity."
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
                  title="Brew Studio Pricing — Start Free"
                  description="Choose Free, Starter, or Enterprise. Impact analysis, plans, and integrations. Add projects and repos as you grow."
                  path="/pricing"
                />
                <PricingPage />
              </>
            }
          />
          <Route
            path="/legal/subprocessor"
            element={
              <>
                <SEO 
                  title="Subprocessors | Brew Studio"
                  description="List of Brew Studio’s third‑party subprocessors and related FAQs."
                  path="/legal/subprocessor"
                />
                <SubprocessorPage />
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <SEO 
                  title="Privacy Policy | Brew Studio"
                  description="How Brew Studio collects, uses, and protects your data."
                  path="/privacy-policy"
                />
                <PrivacyPolicyPage />
              </>
            }
          />
          <Route
            path="/security"
            element={
              <>
                <SEO 
                  title="Security | Brew Studio"
                  description="How Brew Studio secures your data and Developer Content: encryption, VPC networking, RBAC, AI data use, and more."
                  path="/security"
                />
                <SecurityPage />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}