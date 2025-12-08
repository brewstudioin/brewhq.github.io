import React from "react";
import { Button } from "./ui/button";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "./ui/navigation-menu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { Separator } from "./ui/separator";
const logoBrand = new URL('../assets/logo_brand.png', import.meta.url).href;

export function Header() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (more precise detection)
      const scrollY = window.scrollY;
      // Hero section is typically around 600-700px tall (py-20 + content + some buffer)
      const heroHeight = Math.min(window.innerHeight * 0.7, 650); // Cap at 650px for better precision
      setIsScrolledPastHero(scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full bg-background/80 backdrop-blur-sm sticky top-0 z-50 relative transition-all duration-300 ${
      isScrolledPastHero ? 'border-b border-border' : 'border-b border-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link 
            to="/"
            className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-200 flex items-center space-x-3 w-full"
          >
            <img src={logoBrand} alt="Brew Studio" className="w-8 h-8" />
            Brew Studio
          </Link>
          {/* Navigation Menu */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex items-center space-x-2">
              
              {/* Product Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors bg-transparent hover:bg-accent/10 px-4 py-2 rounded-md">
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[280px] p-4 bg-background border border-border rounded-lg shadow-lg">
                  <div className="space-y-3">
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/impact-analysis/"
                        className="block p-3 rounded-md hover:bg-accent/10 transition-colors w-full text-left"
                      >
                        <div>
                          <div className="font-medium text-foreground">Impact maps</div>
                          <div className="text-sm text-muted-foreground">Analyze requirements and dependencies</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/implementation-plans/"
                        className="block p-3 rounded-md hover:bg-accent/10 transition-colors w-full text-left"
                      >
                        <div>
                          <div className="font-medium text-foreground">Implementation Plans</div>
                          <div className="text-sm text-muted-foreground">Step-by-step development plans</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/variance/"
                        className="block p-3 rounded-md hover:bg-accent/10 transition-colors w-full text-left"
                      >
                        <div>
                          <div className="font-medium text-foreground">Variance</div>
                          <div className="text-sm text-muted-foreground">Track project deviation</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/integrations/"
                        className="block p-3 rounded-md hover:bg-accent/10 transition-colors w-full text-left"
                      >
                        <div>
                          <div className="font-medium text-foreground">Integrations</div>
                          <div className="text-sm text-muted-foreground">Connect with your tools</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors bg-transparent hover:bg-accent/10 px-4 py-2 rounded-md">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[280px] p-4 bg-background border border-border rounded-lg shadow-lg">
                  <div className="space-y-3">
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/product-managers/"
                        className="block p-3 rounded-md hover:bg-accent/10 transition-colors w-full text-left"
                      >
                        <div>
                          <div className="font-medium text-foreground">For Product Managers</div>
                          <div className="text-sm text-muted-foreground">Turn requirements into clear plans</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/engineering-managers/" 
                        className="block p-3 rounded-md hover:bg-accent/10 transition-colors w-full text-left"
                      >
                        <div>
                          <div className="font-medium text-foreground">For Engineering Managers</div>
                          <div className="text-sm text-muted-foreground">Boost team velocity and predictability</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/developers/" 
                        className="block p-3 rounded-md hover:bg-accent/10 transition-colors w-full text-left"
                      >
                        <div>
                          <div className="font-medium text-foreground">For Developers</div>
                          <div className="text-sm text-muted-foreground">Get context-rich implementation plans</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Pricing Link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/pricing/"
                    className="text-foreground hover:text-primary transition-colors bg-transparent hover:bg-accent/10 px-4 py-2 rounded-md font-medium"
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>



            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Desktop actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-foreground hover:text-primary hover:scale-105 transition-all duration-200"
            onClick={() => window.open('https://app.brewstudio.in/login', '_blank')}
          >
            Log In
          </Button>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
            onClick={() => window.open('https://app.reclaim.ai/m/somangshu/meet-me', '_blank')}
          >
            Book a Demo
          </Button>
        </div>

        {/* Mobile hamburger menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] h-9 px-3 text-foreground p-2"
                aria-label="Open menu"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 max-w-[80vw]">
              <div className="p-4 space-y-4">
                <SheetHeader className="p-0">
                  <SheetTitle>Site navigation</SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>

                <div className="space-y-2">
                  <div className="text-muted-foreground text-sm uppercase">Product</div>
                  <nav className="flex flex-col">
                    <SheetClose asChild>
                      <Link to="/impact-analysis/" className="px-2 py-2 rounded-md hover:bg-accent/10">Impact maps</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/implementation-plans/" className="px-2 py-2 rounded-md hover:bg-accent/10">Implementation Plans</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/integrations/" className="px-2 py-2 rounded-md hover:bg-accent/10">Integrations</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/variance/" className="px-2 py-2 rounded-md hover:bg-accent/10">Variance</Link>
                    </SheetClose>
                  </nav>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="text-muted-foreground text-sm uppercase">Solutions</div>
                  <nav className="flex flex-col">
                    <SheetClose asChild>
                      <Link to="/product-managers/" className="px-2 py-2 rounded-md hover:bg-accent/10">For Product Managers</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/engineering-managers/" className="px-2 py-2 rounded-md hover:bg-accent/10">For Engineering Managers</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/developers/" className="px-2 py-2 rounded-md hover:bg-accent/10">For Developers</Link>
                    </SheetClose>
                  </nav>
                </div>
                <Separator />
                <div className="space-y-2">
                  <nav className="flex flex-col">
                    <SheetClose asChild>
                      <Link to="/pricing/" className="px-2 py-2 rounded-md hover:bg-accent/10">Pricing</Link>
                    </SheetClose>
                  </nav>
                </div>
                <Separator />
                <div className="pt-2 flex gap-2">
                  <Button
                    variant="secondary"
                    className="flex-1"
                    onClick={() => window.open('https://app.brewstudio.in/login', '_blank')}
                  >
                    Log In
                  </Button>
                  <Button
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => window.open('https://app.reclaim.ai/m/somangshu/meet-me', '_blank')}
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}