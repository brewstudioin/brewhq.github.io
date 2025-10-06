import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 bg-white relative overflow-hidden" style={{
        backgroundImage: `
          linear-gradient(to right, #feb249 1px, transparent 1px),
          linear-gradient(to bottom, #53d3d1 1px, transparent 1px),
          linear-gradient(45deg, #510701/8 25%, transparent 25%),
          linear-gradient(-45deg, #002447/5 25%, transparent 25%)
        `,
        backgroundSize: '60px 60px, 60px 60px, 120px 120px, 120px 120px'
      }}>
        {/* Brand-colored grid accent lines and floating shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#feb249]/40 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-48 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#53d3d1]/40 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-[#510701]/30 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-[#002447]/30 to-transparent pointer-events-none"></div>
          
          {/* Floating accent shapes to match homepage aesthetic */}
          <div 
            className="absolute top-20 left-16 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-180 animate-bounce"
            style={{
              animationDelay: '0s', 
              animationDuration: '3s',
              width: 0,
              height: 0,
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderBottom: '24px solid #feb249',
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
            }}
          ></div>
          
          <div 
            className="absolute top-32 right-24 w-8 h-8 bg-[#53d3d1] border border-[#53d3d1] rounded-full shadow-md cursor-pointer transition-all duration-300 hover:scale-125 animate-bounce"
            style={{animationDelay: '1s', animationDuration: '4s'}}
          ></div>
          
          <div 
            className="absolute bottom-32 left-32 w-6 h-6 bg-[#002447] border border-[#002447] shadow-sm cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-45"
            style={{animationDelay: '2s'}}
          ></div>
          
          <div 
            className="absolute bottom-24 right-20 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-90"
            style={{
              animationDelay: '3s',
              width: '24px',
              height: '24px',
              backgroundColor: '#002447',
              transform: 'rotate(45deg)',
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-tight">
              <span className="relative">
                About Us
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/30 -skew-y-1 transform"></div>
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8">Our Philosophy</h2>
            <p className="text-lg text-foreground leading-relaxed">
              At Brew, we believe software teams deserve absolute clarity—from the moment a requirement is conceived to the instant it goes live. We blend cutting-edge AI with a human-first approach, ensuring every insight enhances developer productivity without removing their ultimate authority. Our aim is simple: eliminate blind spots, empower teams to move faster with fewer surprises, and enable seamless evolution of even the most complex systems. By making impact analysis part of everyday development, we're helping teams build, ship, and innovate with confidence—every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8">Our Story</h2>
            <p className="text-lg text-foreground leading-relaxed">
              While working as a Product Manager (Richa) and Engineering Manager (Somangshu) across multiple products, we saw firsthand how poor requirements repeatedly cost clients time and money. We began envisioning a visual graph of the product—one that clearly shows how code modules depend on each other and flags the impact of new requirements on existing systems. This dream soon grew to include curating test cases, attaching design screens, and ensuring everything was mapped back to the requirements for complete coverage. With over 20 years of collective SaaS experience, we combined our skills as a Solution Architect and Product Manager to brew Brew—a platform driven by the passion to empower teams with the clarity, confidence, and magic they need to ship quality code.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-medium text-primary-foreground mb-6">Ready to experience absolute clarity?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join teams who are building, shipping, and innovating with confidence every single day.
            </p>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group text-lg"
              onClick={() => window.open('https://app.brewstudio.in/signup', '_blank')}
            >
              Try Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}