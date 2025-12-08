import React from "react";
import { Target, FileText, GitCompare, CheckCircle } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Confident change decisions",
      subtitle: "See exactly which services, repos and teams a change touches before you start.",
      description: "Help engineers and PMs estimate work accurately, reduce release risk, and make go-to-market decisions with confidence.",
      color: "bg-[#53d3d1]/5 hover:bg-[#53d3d1]/15"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Execution-ready work",
      subtitle: "Turn vague tickets into clear, step-by-step implementation plans.",
      description: "Translate product requirements into dev-ready tasks your engineers and AI coding agents can follow—cutting back-and-forth, reducing rework, and speeding up delivery.",
      color: "bg-[#feb249]/5 hover:bg-[#feb249]/15"
    },
    {
      icon: <GitCompare className="w-8 h-8" />,
      title: "Auto drift detection",
      subtitle: "Catch requirements drift and scope creep before they derail a release.",
      description: "Continuously compare commits to the original requirement, highlighting missing coverage, silent scope creep and misaligned changes so engineering managers can intervene early.",
      color: "bg-[#53d3d1]/5 hover:bg-[#53d3d1]/15"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Single source of truth",
      subtitle: "Keep PMs, developers and engineering leaders on the same page.",
      description: "Bring requirements, impact analysis, implementation plans and commit history into a single shared view—reducing contextual debt, improving team alignment, and helping engineering teams ship faster with fewer surprises.",
      color: "bg-[#feb249]/5 hover:bg-[#feb249]/15"
    }
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className={`bg-white rounded-lg p-8 shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer ${benefit.color} flex flex-col h-full`}>
                  <div className="relative">
                    <div className="bg-accent/20 rounded-lg p-4 w-fit mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <div className="text-primary">
                        {benefit.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-3 leading-relaxed">
                    {benefit.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}