import React from "react";
import { Button } from "./ui/button";
import { FileText, Target, Zap, GitCompare } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Requirement",
      description: "Paste or write it in BrewHQ. You can also export from your PM tool",
      number: "01",
      hoverColor: "hover:bg-[#feb249]/10"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Analyze impact",
      description: "Auto‑map dependencies across the stack. Customise to your needs, if required.",
      number: "02",
      hoverColor: "hover:bg-[#53d3d1]/10"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Generate the plan",
      description: "Get devlopment‑ready tasks and sync to Jira. Share with your coder",
      number: "03",
      hoverColor: "hover:bg-[#feb249]/10"
    },
    {
      icon: <GitCompare className="w-8 h-8" />,
      title: "Variance Detection",
      description: "Flag any drifts and tie a commit to the requirement automatically",
      number: "04",
      hoverColor: "hover:bg-[#53d3d1]/10"
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-20 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-2">
              How it works
            </h2>
            <p className="text-lg text-muted-foreground mb-8">From messy requirements to shipped code</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group flex flex-col">
                <div className={`bg-white rounded-lg p-6 shadow-sm border border-border mb-4 relative hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-accent/40 ${step.hoverColor} flex flex-col h-full`}>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-0.5 bg-accent animate-pulse"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-accent">→</div>
                    </div>
                  )}
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.number}
                  </div>
                  

                  
                  <div className="bg-accent/20 rounded-lg p-4 w-fit mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <div className="text-primary">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Video Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-6 text-center">
              From our CTO's desk
            </h3>
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/KI6mcP5EFaU?si=v-I_3NsDlwI_TZVX"
                title="How brew works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-secondary/20 rounded-lg p-6 mb-8 transition-all duration-300 hover:shadow-lg">
              <p className="text-muted-foreground mb-2 italic text-center">
                Keep context intact from requirement to code.
              </p>
              <p className="text-sm text-muted-foreground text-center">No more "what were we building again?" moments!</p>
            </div>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
              onClick={() => window.open('https://app.brewstudio.in/signup', '_blank')}
            >
              Try Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}