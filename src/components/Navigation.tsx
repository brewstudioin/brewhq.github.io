import React from "react";
import { Button } from "./ui/button";

export function Navigation() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <div className="font-medium text-foreground">
          Logo
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Draw
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Product
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Solutions
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </a>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <Button variant="outline" className="rounded-full px-6">
          Log In
        </Button>
        <Button className="rounded-full px-6 bg-primary text-primary-foreground">
          Sign Up
        </Button>
      </div>
    </nav>
  );
}