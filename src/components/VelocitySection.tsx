import React from "react";

export function VelocitySection() {
  const painPoints = [
    { text: "Unclear specs" },
    { text: "Hidden dependencies" },
    { text: "Late surprises" },
    { text: "High costs" },
    { text: "Lost trust" }
  ];

  return (
    <section className="w-full py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/10 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/10 rounded-full animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
            Why teams fail to raise velocity
          </h2>
          
          {/* Pain points */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-secondary/20 rounded-full px-4 py-2 text-sm border border-border transition-all duration-300 hover:scale-105 cursor-default">
                <span className="text-muted-foreground">{point.text}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-secondary/30 rounded-lg p-8 transition-all duration-300 hover:shadow-lg">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Unclear specs hide dependencies. The cost paid is often too high and too late. It's not just time or money – it's trust, momentum and motivation of your users and your engineering teams.
            </p>
            
            <div className="mt-6 text-sm text-muted-foreground/80 italic">
              Sound familiar? You're not alone!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}