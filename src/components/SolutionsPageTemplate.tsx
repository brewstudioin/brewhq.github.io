import React from "react";
import { Button } from "./ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface SolutionsPageTemplateProps {
  hero: {
    title: string | React.ReactNode;
    tagline: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  };
  pain: {
    title: string;
    description: string;
  };
  promise: {
    title: string;
    description: string;
  };
  benefits: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
  }>;
  whatYouCanDo: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
      icon: React.ReactNode;
    }>;
  };
  quote: {
    text: string;
    author?: string;
    company?: string;
  };


  sideImage?: string;
  sideImageAlt?: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function SolutionsPageTemplate({
  hero,
  pain,
  promise,
  benefits,
  whatYouCanDo,
  quote,
  sideImage,
  sideImageAlt,
  faqs
}: SolutionsPageTemplateProps) {
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
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-tight">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {hero.tagline}
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              {hero.description}
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
              onClick={() => {
                if (hero.ctaText === "Try Now" || hero.ctaText === "Get Started") {
                  window.open('https://app.brewstudio.in/signup', '_blank');
                } else {
                  window.open(hero.ctaLink, '_blank');
                }
              }}
            >
              {hero.ctaText}
            </Button>
          </div>
        </div>
      </section>

      {/* Pain & Promise Section */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1 md:order-none">
                <img
                  src={sideImage}
                  alt={sideImageAlt || `${pain.title} illustration`}
                  className="w-full h-auto rounded-xl border border-border shadow-sm object-cover"
                />
              </div>
              <div className="order-2 md:order-none space-y-8">
                {/* Pain */}
                <div className="bg-secondary/40 rounded-lg p-8 border border-border mb-3">
                  <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-6">
                    {pain.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {pain.description}
                  </p>
                </div>
                {/* Promise */}
                <div className="bg-secondary/40 rounded-lg p-8 border border-border mb-3">
                  <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-6">
                    {promise.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 bg-gradient-to-br from-secondary/20 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
                Key Benefits
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className={`bg-white rounded-lg p-8 shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer ${benefit.color}`}>
                  <div className="bg-accent/20 rounded-lg p-4 w-fit mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <div className="text-primary">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-300 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
                {whatYouCanDo.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {whatYouCanDo.subtitle}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {whatYouCanDo.features.map((feature, index) => (
                <div key={index} className="bg-secondary/40 rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <div className="bg-accent/20 rounded-lg p-3 w-fit mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-accent/10 via-primary/5 to-[#53d3d1]/10 rounded-3xl p-12">
              <h3 className="text-2xl mb-6">
                {quote.text}
              </h3>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://app.reclaim.ai/m/somangshu/meet-me', '_blank')}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="bg-secondary/40 rounded-lg p-8 border border-border">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 last:border-b-0">
                    <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}