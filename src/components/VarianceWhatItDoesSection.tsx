import React from "react";
import { GitCompare, AlertTriangle, MessageSquare, Plus, BarChart3 } from "lucide-react";
import varianceScreenshot from "../assets/variance.png";

export function VarianceWhatItDoesSection() {
  const features = [
    {
      icon: GitCompare,
      description: "Continuously compares commits and PRs against the approved requirement, impact map, tasks, and acceptance criteria.",
      color: "#002447"
    },
    {
      icon: AlertTriangle,
      description: "Detects drift - files changed outside the impact map, PRs that don't satisfy the acceptance criterias, or tasks implemented out of sequence.",
      color: "#510701"
    },
    {
      icon: MessageSquare,
      description: "Posts actionable alerts to Slack and Jira with a concise diff summary, affected areas, and suggested next steps.",
      color: "#53d3d1"
    },
    {
      icon: Plus,
      description: "Auto‑creates follow‑up Jira tickets linked to the PR for remediation or re‑scoping.",
      color: "#feb249"
    },
    {
      icon: BarChart3,
      description: "Generates a periodic variance report by requirement/epic/sprint with configurable ignore rules and thresholds.",
      color: "#510701"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-2">What it does</h2>
            <p className="text-lg text-muted-foreground mb-8">Turn delivery uncertainty into predictable outcomes with intelligent variance tracking</p>
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
                  src={varianceScreenshot} 
                  alt="Variance Detection Screenshot" 
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