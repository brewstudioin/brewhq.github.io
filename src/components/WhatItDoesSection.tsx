import React from "react";
import { CheckCircle } from "lucide-react";
import impactScreenshot from "../assets/impact_summary.png";

export function WhatItDoesSection() {
  const features = [
    {
      title: "Full‑stack perspective",
      description: "One view of how a requirement touches data models, services, clients, and UI."
    },
    {
      title: "Forward & backward impact",
      description: "Track downstream effects and upstream dependencies."
    },
    {
      title: "Related requirements",
      description: "Surface adjacent work to consolidate or de‑duplicate."
    },
    {
      title: "Risk flags",
      description: "Identify migrations, breaking contracts, and cross‑team handoffs."
    },
    {
      title: "Decision trails",
      description: "Notes and assumptions captured alongside the analysis."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-2">What it does</h2>
            <p className="text-lg text-muted-foreground mb-8">Comprehensive impact analysis across your entire technology stack</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left column - Feature boxes */}
            <div className="space-y-6 flex flex-col">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-secondary/20 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-accent mt-1 group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <div>
                      <h3 className="mb-2 group-hover:text-primary transition-colors duration-200">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column - Screenshot */}
            <div className="flex items-stretch h-full">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-border/50 bg-white p-3 flex items-center justify-center">
                <img 
                  src={impactScreenshot} 
                  alt="Impact Analysis Screenshot" 
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}