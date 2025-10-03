import React from "react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useNavigate } from "react-router-dom";

export function FeaturesSection() {
  const navigate = useNavigate();
  
  const features = [
    {
      id: "impact",
      title: "Requirement Impact",
      shape: (
        <div 
          className="w-6 h-6 bg-[#002447] transition-all duration-300 group-hover:rotate-45"
          style={{
            transform: 'rotate(45deg)',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
          }}
        />
      ),
      headline: "Predict the 'blast radius'",
      description: "Uncover dependencies so that development times do not get inflated mid-sprint. Catch forward/backward impacts, related requirements, and risks early."
    },
    {
      id: "plans",
      title: "Implementation Plans", 
      shape: (
        <div className="w-6 h-6 rounded-full bg-[#53d3d1] transition-all duration-300 group-hover:scale-110" />
      ),
      headline: "Get implementation ready in minutes",
      description: "Get step wise tasks, with dependencies, estimates, acceptance criteria, and test ideas. Used by both humans and AI agents."
    },
    {
      id: "integrations",
      title: "Integrations",
      shape: (
        <div 
          className="transition-all duration-300 group-hover:rotate-180"
          style={{
            width: 0,
            height: 0,
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent',
            borderBottom: '20px solid #feb249',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
          }}
        />
      ),
      headline: "Meet your existing stack",
      description: "Jira for issues, Slack for updates, GitHub for code adjacency. Start fast—no snowballing."
    }
  ];

  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="impact" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-secondary/40 h-auto rounded-xl">
              {features.map((feature) => (
                <TabsTrigger 
                  key={feature.id} 
                  value={feature.id}
                  className="flex items-center space-x-3 py-4 px-6 data-[state=active]:bg-card data-[state=active]:text-foreground text-base font-medium data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105 relative group rounded-lg"
                >
                  <div className="w-6 h-6 flex items-center justify-center transition-transform duration-300">
                    {feature.shape}
                  </div>
                  <span className="text-lg font-semibold">{feature.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {features.map((feature) => (
              <TabsContent key={feature.id} value={feature.id} className="mt-8">
                <div className="text-center max-w-4xl mx-auto bg-secondary/20 rounded-xl p-8 transition-all duration-500 hover:shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
                    {feature.headline}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  <Button 
                    onClick={() => {
                      if (feature.id === 'impact') {
                        navigate('/impact-analysis');
                      } else if (feature.id === 'plans') {
                        navigate('/implementation-plans');
                      } else if (feature.id === 'integrations') {
                        navigate('/integrations');
                      }
                    }}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}