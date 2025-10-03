import { CheckCircle, Search, Settings, FileText, Link } from "lucide-react";

export function BrewWaySection() {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Requirement Analysis",
      description: "Brew will analyze the 'blast radius', and break it down by impact category and risks.",
      color: "hover:bg-[#53d3d1]/10"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Supervision",
      description: "Gives you complete control you can choose what to include and what to exclude",
      color: "hover:bg-[#feb249]/10"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Generate Implementation Plans",
      description: "Gives a step-by-step plan for your developer - human or otherwise.",
      color: "hover:bg-[#53d3d1]/10"
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Integrations",
      description: "Sync everything straight to where your team works, ensuring single source of truth",
      color: "hover:bg-[#feb249]/10"
    }
  ];

  return (
    <section className="w-full py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-2">
              The Brew Way
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Every time you discover a new requirement, Brew will automatically...
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer ${feature.color} relative`}>
                
                <div className="bg-accent/20 rounded-lg p-3 w-fit mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Step indicator */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}