import React from "react";
import { Button } from "./ui/button";


export function ImplementationHeroSection() {
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden" style={{
      backgroundImage: `
        linear-gradient(to right, #feb249 1px, transparent 1px),
        linear-gradient(to bottom, #53d3d1 1px, transparent 1px),
        linear-gradient(45deg, #510701/8 25%, transparent 25%),
        linear-gradient(-45deg, #002447/5 25%, transparent 25%)
      `,
      backgroundSize: '60px 60px, 60px 60px, 120px 120px, 120px 120px'
    }}>
      {/* Brand-colored grid accent lines and floating shapes - same as homepage */}
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

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 leading-tight">
            <span className="block mb-2">
              <span className="relative">
                Development ready plans
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/30 -skew-y-1 transform"></div>
              </span>
              {" "}in minutes
            </span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-4xl mx-auto">
            From requirement to a clear, executable checklist—tasks, dependencies, success criteria, estimates, and acceptance criteria included.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
              onClick={() => window.open('https://app.brewstudio.in/signup', '_blank')}
            >
              Create a Plan
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg hover:scale-105 transition-transform duration-200"
              onClick={() => window.open('https://app.reclaim.ai/m/somangshu/meet-me', '_blank')}
            >
              Book a Demo
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
}