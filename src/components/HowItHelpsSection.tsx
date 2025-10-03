import React from "react";
import { Grid3X3, Tag, BarChart3, GitBranch, FileDown, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function HowItHelpsSection() {
  const helps = [
    {
      icon: Grid3X3,
      title: "Impact matrix (Data / Server / Client / UI/UX) with editable notes.",
      color: "#feb249",
      bgColor: "bg-[#feb249]/10"
    },
    {
      icon: Tag,
      title: "Change type tags (new, modify, remove, deprecate) per element.",
      color: "#53d3d1",
      bgColor: "bg-[#53d3d1]/10"
    },
    {
      icon: BarChart3,
      title: "Complexity & risk scoring to inform estimates.",
      color: "#510701",
      bgColor: "bg-[#510701]/10"
    },
    {
      icon: GitBranch,
      title: "Link to code adjacency (from GitHub) for likely modules/files.",
      color: "#002447",
      bgColor: "bg-[#002447]/10"
    },
    {
      icon: FileDown,
      title: "Export impact summary into Jira description or a linked doc.",
      color: "#510701",
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
            <p className="text-lg text-muted-foreground mb-8">Practical tools and insights to make informed development decisions with confidence</p>
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
              <h3 className="text-2xl mb-6">Map what changes, who's affected, and what can break—before it does.</h3>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://app.brewstudio.in/signup', '_blank')}
              >
                Try Impact Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}