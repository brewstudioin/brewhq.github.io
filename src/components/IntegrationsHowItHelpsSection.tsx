import React from "react";
import { Button } from "./ui/button";

export function IntegrationsHowItHelpsSection() {
  const roadmapFeatures = [
    {
      title: "VS Code panel for requirement analysis and plan context inline",
      description: "Access requirements and implementation plans directly within your IDE, reducing context switching and keeping developers aligned with project goals.",
      benefit: "Seamless developer workflow"
    },
    {
      title: "MCP for imbibing the agentic coding tools with a little Brew",
      description: "Model Context Protocol integration that enriches AI coding assistants with Brew's requirements understanding and planning intelligence.",
      benefit: "Enhanced AI development"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">On the roadmap (IDE/Agents)</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The future of development workflow integration is coming to your favorite tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {roadmapFeatures.map((feature, index) => (
              <div key={index} className="bg-secondary/20 rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-medium text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="bg-accent/10 rounded-lg p-3">
                  <span className="text-sm font-medium text-accent-foreground">
                    {feature.benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>



          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-accent/10 via-primary/5 to-[#53d3d1]/10 rounded-3xl p-12">
              <h3 className="text-2xl mb-6">Granular OAuth scopes. Read‑only by default for code; you control what's shared</h3>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://app.brewstudio.in/signup', '_blank')}
              >
                Explore Integrations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}