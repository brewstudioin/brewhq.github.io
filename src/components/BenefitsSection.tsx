import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { TrendingUp, Target, CheckCircle } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Higher velocity",
      description: "Less churn, fewer blockers, faster handoffs.",
      color: "bg-[#feb249]/5 hover:bg-[#feb249]/15"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Predictability",
      description: "Estimates tied to context, not guesses.",
      color: "bg-[#53d3d1]/5 hover:bg-[#53d3d1]/15"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality",
      description: "Clear acceptance criteria and definition of done built in.",
      color: "bg-[#feb249]/5 hover:bg-[#feb249]/15"
    }
  ];

  const metrics = [
    "−28% rework",
    "−22% cycle time",
    "+18% predictable throughput"
  ];

  return (
    <section className="w-full pt-16 pb-8 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-2">
              The Brew Benefits
            </h2>
            <p className="text-lg text-muted-foreground mb-8">Why teams love brewing with us</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className={`bg-white rounded-lg p-8 shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer ${benefit.color}`}>
                  <div className="relative">
                    <div className="bg-accent/20 rounded-lg p-4 w-fit mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <div className="text-primary">
                        {benefit.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="bg-secondary/40 rounded-lg p-8 mb-8 transition-all duration-300 hover:shadow-md">
              <p className="text-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
                Get velocity you can forecast. Brew reduces churn from missed dependencies and vague tickets. 
                Teams see shorter cycle times and steadier sprint velocity once impact and plans are linked to work items.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {metrics.map((metric, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm bg-accent text-primary hover:scale-110 transition-transform duration-200 cursor-pointer">
                    {metric}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={() => {
                const element = document.getElementById('how-it-works');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              How it works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}