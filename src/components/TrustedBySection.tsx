import React from "react";
const stratocyteLogo = new URL("../assets/logo3.png", import.meta.url).href;
const wingsBILogo = new URL("../assets/logo2.png", import.meta.url).href;
const optimeleonLogo = new URL("../assets/logo1.png", import.meta.url).href;

export function TrustedBySection() {
  // Company logos with actual images
  const companies = [
    { name: "Stratocyte", logo: stratocyteLogo, isPlaceholder: false },
    { name: "WingsBI", logo: wingsBILogo, isPlaceholder: false },
    { name: "Optimeleon", logo: optimeleonLogo, isPlaceholder: false }
  ];

  const testimonials = [
    {
      quote: "A huge help for developing apps and software. It breaks down requirements, finds dependencies early, and even suggests implementations which saves a lot of time. The impact analysis quickly shows what parts of the code might be affected by a change and reduces manual efforts to identify the same. Definitely a tool worth using",
      author: "Siddhant Mahajani",
      role: "Senior Engineer",
      company: "Saadian"
    },
    {
      quote: "Certain complex use cases were difficult to talk about in cursor, because either they were spreading across different repo or needed some kinda POC first to have the final arch. This is where Brew shined, it allowed me to first review the arch and from that it created a detailed prompt for my coding agent. It also helped me review this code easily by auto comparing it to the original arch and implementation prompt.",
      author: "Nikhilesh Vaishya", 
      role: "CTO",
      company: "Truxie"
    },
    {
      quote: "Finally, implementation plans that our developers actually want to follow.",
      author: "Alex Thompson",
      role: "CTO",
      company: "OptimeleonAI"
    }
  ];

  return (
    <section className="w-full pt-8 pb-16 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-2">
              Trusted by
            </h2>
            <p className="text-lg text-muted-foreground mb-12">Teams who've said goodbye to chaos</p>
            
            {/* Company logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
              {companies.map((company, index) => (
                <div key={index} className="bg-white rounded-lg px-6 py-4 shadow-sm border border-border hover:shadow-md hover:scale-105 transition-all duration-300 hover:border-accent/40 cursor-pointer group min-h-[80px] flex items-center justify-center">
                  {company.isPlaceholder ? (
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{company.name}</span>
                  ) : company.logo ? (
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="h-10 w-auto max-w-[160px] object-contain group-hover:scale-105 transition-transform duration-300"
                      style={company.name === "WingsBI" ? { filter: 'invert(1)' } : {}}
                      onError={(e) => {
                        console.log(`Failed to load logo for ${company.name}`);
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = `<span class="text-foreground font-medium">${company.name}</span>`;
                      }}
                    />
                  ) : (
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{company.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-accent/40 group relative overflow-hidden">
                
                <p className="text-muted-foreground mb-6 italic leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4 group-hover:border-accent/20 transition-colors duration-300">
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground font-medium">{testimonial.company}</p>
                </div>
                
                {/* Subtle background decoration */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent/15 rounded-full group-hover:bg-accent/25 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}