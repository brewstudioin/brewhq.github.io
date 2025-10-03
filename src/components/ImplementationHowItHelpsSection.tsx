import React from "react";
import { Settings, FileText, Layout, TrendingUp, FileDown, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function ImplementationHowItHelpsSection() {
  const helps = [
    {
      icon: Settings,
      title: "Plan generator: seeded by impact matrix + your conventions.",
      color: "#002447",
      bgColor: "bg-[#002447]/10",
      textColor: "text-[#002447]"
    },
    {
      icon: FileText,
      title: "Task anatomy: title, description, dependencies, ACs, estimate, risk notes.",
      color: "#53d3d1",
      bgColor: "bg-[#53d3d1]/10",
      textColor: "text-[#002447]"
    },
    {
      icon: Layout,
      title: "Plan views: by stream (Data/Server/Client/UI) or by sequence.",
      color: "#feb249",
      bgColor: "bg-[#feb249]/10",
      textColor: "text-[#002447]"
    },
    {
      icon: TrendingUp,
      title: "Velocity preview: roll‑ups for capacity and forecast.",
      color: "#510701",
      bgColor: "bg-[#510701]/10",
      textColor: "text-[#002447]"
    },
    {
      icon: FileDown,
      title: "Exports: Jira issues, markdown, or shareable link.",
      color: "#002447",
      bgColor: "bg-[#FBECEB]",
      textColor: "text-[#002447]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-2">How it helps</h2>
            <p className="text-lg text-muted-foreground mb-8">Transform requirements into actionable implementation roadmaps</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {helps.map((help, index) => (
              <div 
                key={index}
                className="group transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${help.bgColor} rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-200`}>
                    <help.icon 
                      className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" 
                      style={{ color: help.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`group-hover:text-primary transition-colors duration-200 ${help.textColor || 'text-[#002447]'}`}>
                      {help.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <div className="bg-gradient-to-r from-accent/10 via-primary/5 to-[#53d3d1]/10 rounded-3xl p-12">
              <h3 className="text-2xl mb-6">Give developers and AI agents the same, unambiguous plan.</h3>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://app.brewstudio.in/signup', '_blank')}
              >
                Create a Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}