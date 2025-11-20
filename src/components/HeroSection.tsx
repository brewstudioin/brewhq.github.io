import React from "react";
import { Button } from "./ui/button";
import { useState } from "react";

export function HeroSection() {
  const [hoveredShape, setHoveredShape] = useState<number | null>(null);
  const [clickedShapes, setClickedShapes] = useState<number[]>([]);

  const productOfferings = [
    { id: 1, name: "Requirements Analysis", color: "#feb249", description: "Clear, actionable requirements" },
    { id: 2, name: "Dependency Detection", color: "#53d3d1", description: "Surface hidden dependencies" },
    { id: 3, name: "Implementation Plans", color: "#53d3d1", description: "Dev-ready action plans" },
    { id: 4, name: "Impact Analysis", color: "#002447", description: "Understand project scope" },
    { id: 5, name: "Integrations", color: "#FBECEB", description: "Connect your tools", border: "#002447" }
  ];

  const handleShapeClick = (shapeId: number) => {
    setClickedShapes(prev => 
      prev.includes(shapeId) 
        ? prev.filter(id => id !== shapeId)
        : [...prev, shapeId]
    );
  };

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
      {/* Interactive product offering shapes - Triangles, Circles, Squares only */}
      <div className="absolute inset-0">
        {/* Requirements Analysis - Yellow Square */}
        <div 
          className={`absolute top-16 left-16 w-[60px] h-[60px] border-2 border-[#feb249] cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12 ${
            clickedShapes.includes(1) 
              ? 'bg-[#feb249] shadow-lg animate-spin' 
              : 'bg-[#feb249] animate-bounce'
          }`}
          style={{animationDelay: '0s', animationDuration: '3s'}}
          onClick={() => handleShapeClick(1)}
          onMouseEnter={() => setHoveredShape(1)}
          onMouseLeave={() => setHoveredShape(null)}
        >
          {hoveredShape === 1 && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg text-xs whitespace-nowrap border border-[#feb249]/30">
              <div className="font-medium text-[#002447]">Requirements Analysis</div>
              <div className="text-[#510701]">Clear, actionable requirements</div>
            </div>
          )}
        </div>

        {/* Dependency Detection - Teal Circle */}
        <div 
          className={`absolute top-32 right-24 w-[60px] h-[60px] rounded-full border-2 border-[#53d3d1] cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-6 ${
            clickedShapes.includes(2)
              ? 'bg-[#53d3d1] shadow-lg animate-bounce'
              : 'bg-[#53d3d1]'
          }`}
          style={{animationDelay: '2s'}}
          onClick={() => handleShapeClick(2)}
          onMouseEnter={() => setHoveredShape(2)}
          onMouseLeave={() => setHoveredShape(null)}
        >
          {hoveredShape === 2 && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg text-xs whitespace-nowrap border border-[#53d3d1]/30">
              <div className="font-medium text-[#002447]">Dependency Detection</div>
              <div className="text-[#510701]">Surface hidden dependencies</div>
            </div>
          )}
        </div>

        {/* Implementation Plans - Teal Triangle */}
        <div 
          className={`absolute bottom-24 left-32 cursor-pointer transition-all duration-300 hover:scale-110 hover:-rotate-12 ${
            clickedShapes.includes(3)
              ? 'animate-bounce'
              : ''
          }`}
          style={{
            animationDelay: '4s',
            width: 0,
            height: 0,
            borderLeft: '30px solid transparent',
            borderRight: '30px solid transparent',
            borderBottom: '60px solid #53d3d1',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
          }}
          onClick={() => handleShapeClick(3)}
          onMouseEnter={() => setHoveredShape(3)}
          onMouseLeave={() => setHoveredShape(null)}
        >
          {hoveredShape === 3 && (
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg text-xs whitespace-nowrap border border-[#53d3d1]/30">
              <div className="font-medium text-[#002447]">Implementation Plans</div>
              <div className="text-[#002447]">Dev-ready action plans</div>
            </div>
          )}
        </div>

        {/* Impact Analysis - Navy Square */}
        <div 
          className={`absolute bottom-32 right-16 w-[60px] h-[60px] border-2 border-[#002447] cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-45 ${
            clickedShapes.includes(4)
              ? 'bg-[#002447] shadow-lg animate-spin'
              : 'bg-[#002447]'
          }`}
          style={{animationDelay: '1s'}}
          onClick={() => handleShapeClick(4)}
          onMouseEnter={() => setHoveredShape(4)}
          onMouseLeave={() => setHoveredShape(null)}
        >
          {hoveredShape === 4 && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg text-xs whitespace-nowrap border border-[#002447]/30">
              <div className="font-medium text-[#002447]">Impact Analysis</div>
              <div className="text-[#510701]">Understand project scope</div>
            </div>
          )}
        </div>

        {/* Integrations - Pink Diamond */}
        <div 
          className={`absolute top-1/2 left-8 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-45 ${
            clickedShapes.includes(5)
              ? 'animate-bounce'
              : ''
          }`}
          style={{
            animationDelay: '3s',
            width: '32px',
            height: '32px',
            backgroundColor: '#FBECEB',
            transform: 'rotate(45deg)',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
          }}
          onClick={() => handleShapeClick(5)}
          onMouseEnter={() => setHoveredShape(5)}
          onMouseLeave={() => setHoveredShape(null)}
        >
          {hoveredShape === 5 && (
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 -rotate-45 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg text-xs whitespace-nowrap border border-[#FBECEB]/30">
              <div className="font-medium text-[#002447]">Integrations</div>
              <div className="text-[#510701]">Connect your tools</div>
            </div>
          )}
        </div>

        {/* Additional floating shapes - Triangles, Circles, Squares only */}
        {/* Small Yellow Triangle */}
        <div 
          className="absolute top-20 left-1/4 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-180 animate-bounce"
          style={{
            animationDelay: '0s', 
            animationDuration: '3s',
            width: 0,
            height: 0,
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderBottom: '16px solid #feb249',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
          }}
          title="Requirements Analysis"
        ></div>

        {/* Small Teal Circle */}
        <div 
          className="absolute top-40 right-1/3 w-6 h-6 bg-[#53d3d1] border border-[#53d3d1] rounded-full shadow-md cursor-pointer transition-all duration-300 hover:scale-125 animate-bounce"
          style={{animationDelay: '1s', animationDuration: '4s'}}
          title="Dependency Detection"
        ></div>

        {/* Small Navy Square */}
        <div 
          className="absolute bottom-40 left-1/5 w-4 h-4 bg-[#002447] border border-[#002447] shadow-sm cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-45"
          style={{animationDelay: '2s'}}
          title="Impact Analysis"
        ></div>

        {/* Small Navy Diamond */}
        <div 
          className="absolute top-1/3 right-20 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-90"
          style={{
            animationDelay: '3s',
            width: '20px',
            height: '20px',
            backgroundColor: '#002447',
            transform: 'rotate(45deg)',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
          }}
          title="Impact Analysis"
        ></div>

        {/* Large Yellow Diamond */}
        <div 
          className="absolute bottom-16 right-32 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-180 animate-bounce"
          style={{
            animationDelay: '4s',
            animationDuration: '5s',
            width: '40px',
            height: '40px',
            backgroundColor: '#feb249',
            transform: 'rotate(45deg)',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
          }}
          title="Requirements Analysis"
        ></div>

        {/* Medium Teal Diamond */}
        <div 
          className="absolute top-16 right-12 cursor-pointer transition-all duration-300 hover:scale-125 hover:-rotate-45"
          style={{
            animationDelay: '1.5s',
            width: '28px',
            height: '28px',
            backgroundColor: '#53d3d1',
            transform: 'rotate(45deg)',
            filter: 'drop-shadow(0 3px 5px rgba(0, 0, 0, 0.1))'
          }}
          title="Dependency Detection"
        ></div>
        
        {/* Brand-colored grid accent lines */}
        <div className="absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#feb249]/40 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-48 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#53d3d1]/40 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-[#510701]/30 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-[#002447]/30 to-transparent pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 leading-tight">
            Cut development time
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            AI that boosts team velocity and predictability.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-4xl mx-auto">
            No more goldfish memory. Get clear requirements, surface hidden dependencies and development-ready 
            implementation plans. All under one roof.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
              onClick={() => window.open('https://app.brewstudio.in/signup', '_blank')}
            >
              Sign-up
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