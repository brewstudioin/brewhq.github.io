import React from "react";
import { List, Target, TrendingUp, ShieldCheck, GitBranch } from "lucide-react";

// Import will be added once the image file exists
// import implementationScreenshot from "../assets/implementation_prompt.png";

export function ImplementationWhatItDoesSection() {
  const features = [
    {
      icon: List,
      title: "Stepwise plan",
      description: "Ordered tasks with dependencies and owners.",
      color: "#feb249"
    },
    {
      icon: Target,
      title: "Acceptance criteria",
      description: "Concrete \"done\" definitions prevent rework.",
      color: "#53d3d1"
    },
    {
      icon: TrendingUp,
      title: "Estimates that stick",
      description: "Context‑weighted sizing from impact signals.",
      color: "#510701"
    },
    {
      icon: ShieldCheck,
      title: "Test ideas & risks",
      description: "Bake quality into the plan from day one.",
      color: "#002447"
    },
    {
      icon: GitBranch,
      title: "Sync to Jira",
      description: "Create or update issues/epics with full context.",
      color: "#feb249"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-2">What it does</h2>
            <p className="text-lg text-muted-foreground mb-8">Comprehensive implementation planning with AI-powered insights</p>
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
                      <feature.icon 
                        className="w-6 h-6 mt-1 group-hover:scale-110 transition-transform duration-200" 
                        style={{ color: feature.color }}
                      />
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
            {/* TODO: Add implementation_prompt.png to src/assets/, then uncomment the import above and this section */}
            <div className="flex items-stretch h-full">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-border/50 bg-white p-3 flex items-center justify-center">
                <div className="text-muted-foreground text-center">
                  <p className="text-sm">Add implementation_prompt.png to src/assets/</p>
                  <p className="text-xs mt-2">Image will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}