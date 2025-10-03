import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useRouter } from "./Router";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { navigateTo } = useRouter();

  const productLinks = [
    { label: "Impact maps", href: "#impact-analysis", page: "impact-analysis" as const },
    { label: "Implementation Plans", href: "#implementation-plans", page: "implementation-plans" as const },
    { label: "Integrations", href: "#integrations", page: "integrations" as const },
    { label: "Variance", href: "#variance", page: "variance" as const }
  ];

  const solutionLinks = [
    { label: "For Product Managers", href: "#product-managers", page: "product-managers" as const },
    { label: "For Engineering Managers", href: "#engineering-managers", page: "engineering-managers" as const },
    { label: "For Developers", href: "#developers", page: "developers" as const }
  ];

  const companyLinks = [
    { label: "Blog", href: "#blog" },
    { label: "About us", href: "#about", page: "about" as const }
  ];

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            {/* Company Info & CTA */}
            <div>
              <div className="mb-6">
                <button 
                  onClick={() => navigateTo('home')}
                  className="text-xl font-medium mb-4 text-left hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  Brew Studio
                </button>
                <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                  AI-powered tool that helps development teams boost velocity and predictability by analyzing requirements, surfacing dependencies, and generating implementation plans.
                </p>
              </div>
              
              {/* CTA */}
              <div className="mb-8">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
                  onClick={() => window.open('https://app.brewstudio.in/signup', '_blank')}
                >
                  Try Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    {link.page ? (
                      <button 
                        onClick={() => navigateTo(link.page)}
                        className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 inline-block group text-left w-full"
                      >
                        {link.label}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">→</span>
                      </button>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 inline-block group"
                      >
                        {link.label}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">→</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* Contact Email */}
              <div className="mt-6 pt-4 border-t border-primary-foreground/20">
                <div className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 group cursor-pointer">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <a href="mailto:support@brewstudio.in" className="hover:underline">
                    support@brewstudio.in
                  </a>
                </div>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    {link.page ? (
                      <button 
                        onClick={() => navigateTo(link.page)}
                        className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 inline-block group text-left w-full"
                      >
                        {link.label}
                        {link.comingSoon && (
                          <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full ml-2">
                            Soon
                          </span>
                        )}
                        {!link.comingSoon && (
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">→</span>
                        )}
                      </button>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 inline-block group"
                      >
                        {link.label}
                        {link.comingSoon && (
                          <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full ml-2">
                            Soon
                          </span>
                        )}
                        {!link.comingSoon && (
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">→</span>
                        )}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-medium mb-4">Solutions</h4>
              <ul className="space-y-3">
                {solutionLinks.map((link, index) => (
                  <li key={index}>
                    {link.page ? (
                      <button 
                        onClick={() => navigateTo(link.page)}
                        className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 inline-block group text-left w-full"
                      >
                        {link.label}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">→</span>
                      </button>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-primary-foreground/80 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200 inline-block group"
                      >
                        {link.label}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">→</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="bg-primary-foreground/20 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} Brew Studio. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#terms" 
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm hover:scale-105 transition-all duration-200 hover:underline decoration-accent underline-offset-4"
              >
                Terms of Use
              </a>
              <a 
                href="#privacy" 
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm hover:scale-105 transition-all duration-200 hover:underline decoration-accent underline-offset-4"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}