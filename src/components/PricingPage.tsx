import React from "react";
import { Button } from "./ui/button";
import { Check, X, ArrowRight } from "lucide-react";

export function PricingPage() {
  const features = [
    {
      name: "Impact Analysis (Data / Server / Client / UI/UX)",
      free: true,
      starter: true,
      enterprise: true
    },
    {
      name: "Related requirements (duplicates)",
      free: false,
      starter: true,
      enterprise: true
    },
    {
      name: "Risk level",
      free: true,
      starter: true,
      enterprise: true
    },
    {
      name: "Mitigation plans to Risks",
      free: true,
      starter: true,
      enterprise: true
    },
    {
      name: "Implementation Plan generator (tasks, dependencies, ACs, estimates)",
      free: true,
      starter: true,
      enterprise: true
    },
    {
      name: "Test framework in implementation plans",
      free: false,
      starter: true,
      enterprise: true
    },
    {
      name: "Velocity preview & basic forecasting",
      free: false,
      starter: "Limited",
      enterprise: "Full"
    },
    {
      name: "Export to Jira (epic/story/sub-tasks)",
      free: false,
      starter: true,
      enterprise: true
    },
    {
      name: "Slack integration (share, approvals, notifications)",
      free: false,
      starter: true,
      enterprise: true
    },
    {
      name: "GitHub (read-only) code adjacency & PR context links",
      free: "Limited",
      starter: true,
      enterprise: true
    },
    {
      name: "Variance (pipeline — drift detection)",
      free: false,
      starter: "Optional add-on",
      enterprise: "Full"
    },
    {
      name: "Roles & permissions",
      free: "Basic",
      starter: "Basic",
      enterprise: "Advanced (RBAC, approvers)"
    },
    {
      name: "SSO (SAML/OIDC)",
      free: false,
      starter: false,
      enterprise: true
    },
    {
      name: "SCIM user provisioning",
      free: false,
      starter: false,
      enterprise: true
    },
    {
      name: "Audit logs & exports",
      free: false,
      starter: false,
      enterprise: true
    },
    {
      name: "Support",
      free: "Community",
      starter: "Email",
      enterprise: "Priority + SLA"
    }
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individual developers and small projects",
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "For growing teams that need comprehensive development tools",
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Advanced features for large organizations with specific needs",
      cta: "Contact Sales",
      popular: false
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-accent mx-auto" />;
    } else if (value === false) {
      return <X className="w-5 h-5 text-muted-foreground mx-auto" />;
    } else {
      return <span className="text-sm text-foreground">{value}</span>;
    }
  };

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
                Pricing
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/30 -skew-y-1 transform"></div>
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Choose the perfect plan for your team. Start free and scale as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Overview Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-secondary/40 rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  plan.popular 
                    ? 'border-accent bg-secondary shadow-lg scale-105' 
                    : 'border-border hover:border-accent/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-medium text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <Button 
                  className={`w-full py-3 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg group text-lg ${
                    plan.popular 
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                  onClick={() => {
                    if (plan.cta === "Get Started Free" || plan.cta === "Start Free Trial") {
                      window.open('https://app.brewstudio.in/signup', '_blank');
                    } else if (plan.cta === "Contact Sales") {
                      window.open('mailto:support@brewstudio.in', '_blank');
                    }
                  }}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Compare Features
            </h2>
            <p className="text-lg text-muted-foreground">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/40 border-b border-border">
                    <th className="text-left py-4 px-6 font-medium text-foreground">Feature</th>
                    <th className="text-center py-4 px-6 font-medium text-foreground">Free</th>
                    <th className="text-center py-4 px-6 font-medium text-foreground bg-accent/10">
                      <div className="relative">
                        Starter
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                          <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs">
                            Popular
                          </span>
                        </div>
                      </div>
                    </th>
                    <th className="text-center py-4 px-6 font-medium text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="border-b border-border hover:bg-secondary/20 transition-colors">
                      <td className="py-4 px-6 text-foreground font-medium">{feature.name}</td>
                      <td className="py-4 px-6 text-center">
                        {renderFeatureValue(feature.free)}
                      </td>
                      <td className="py-4 px-6 text-center bg-accent/5">
                        {renderFeatureValue(feature.starter)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderFeatureValue(feature.enterprise)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Included Limits Table */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
              Included Limits (per account)
            </h3>
            <p className="text-lg text-muted-foreground">
              Usage limits and capacity for each plan
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/40 border-b border-border">
                    <th className="text-left py-4 px-6 font-medium text-foreground">Limit</th>
                    <th className="text-center py-4 px-6 font-medium text-foreground">Free</th>
                    <th className="text-center py-4 px-6 font-medium text-foreground bg-accent/10">Starter</th>
                    <th className="text-center py-4 px-6 font-medium text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-6 text-foreground font-medium">Projects included</td>
                    <td className="py-4 px-6 text-center text-foreground">1</td>
                    <td className="py-4 px-6 text-center text-foreground bg-accent/5">5</td>
                    <td className="py-4 px-6 text-center text-foreground">25 (expandable)</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-6 text-foreground font-medium">Connected repos (GitHub)</td>
                    <td className="py-4 px-6 text-center text-foreground">1</td>
                    <td className="py-4 px-6 text-center text-foreground bg-accent/5">2 for each project</td>
                    <td className="py-4 px-6 text-center text-foreground">25 (expandable)</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-6 text-foreground font-medium">Monthly impact analyses</td>
                    <td className="py-4 px-6 text-center text-foreground">5</td>
                    <td className="py-4 px-6 text-center text-foreground bg-accent/5">200</td>
                    <td className="py-4 px-6 text-center text-foreground">Custom</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-6 text-foreground font-medium">Monthly plan generations</td>
                    <td className="py-4 px-6 text-center text-foreground">3</td>
                    <td className="py-4 px-6 text-center text-foreground bg-accent/5">200</td>
                    <td className="py-4 px-6 text-center text-foreground">Custom</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-6 text-foreground font-medium">Read-only seats</td>
                    <td className="py-4 px-6 text-center text-foreground">0</td>
                    <td className="py-4 px-6 text-center text-foreground bg-accent/5">Unlimited</td>
                    <td className="py-4 px-6 text-center text-foreground">Unlimited</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-6 text-foreground font-medium">Editor seats</td>
                    <td className="py-4 px-6 text-center text-foreground">1</td>
                    <td className="py-4 px-6 text-center text-foreground bg-accent/5">10</td>
                    <td className="py-4 px-6 text-center text-foreground">Custom</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-6 text-foreground font-medium">API rate limit</td>
                    <td className="py-4 px-6 text-center">
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center text-foreground bg-accent/5">Standard</td>
                    <td className="py-4 px-6 text-center text-foreground">Priority</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              Add-Ons
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Expand your plan with additional capacity and features
            </p>
            <p className="text-sm text-muted-foreground italic">
              *The free tier can just run on Add-ons, no base pack needed.*
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Packs */}
            <div className="bg-secondary/40 rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-medium text-foreground mb-4">Packs</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">+ 5 Projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">+ 5 Requirements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">+ 5 Repos</span>
                </li>
              </ul>
            </div>

            {/* User Boosters */}
            <div className="bg-secondary/40 rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-medium text-foreground mb-4">User Boosters</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">Extra seats</span>
                </li>
              </ul>
            </div>

            {/* Usage Boosters */}
            <div className="bg-secondary/40 rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-medium text-foreground mb-4">Usage Boosters</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Additional Impact Analysis Pack (+200 runs/month)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground font-medium">Plan Generation Pack (+200 runs/month)</span>
                </li>
              </ul>
            </div>

            {/* Variance (Pipeline) */}
            <div className="bg-secondary/40 rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-medium text-foreground mb-4">Variance (Pipeline)</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium">Variance Enablement (per workspace)</span>
                    <span className="text-sm text-muted-foreground">Starter add-on</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Support & Compliance */}
            <div className="bg-secondary/40 rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 md:col-span-2">
              <h3 className="text-xl font-medium text-foreground mb-4">Support & Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium">Priority Support</span>
                    <span className="text-sm text-muted-foreground">Starter add-on</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium">SLA Package</span>
                    <span className="text-sm text-muted-foreground">Enterprise only</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium">Data Residency / Private Cloud</span>
                    <span className="text-sm text-muted-foreground">Enterprise option</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-medium text-primary-foreground mb-6">Ready to get started?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of development teams who are building faster and shipping with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group text-lg"
                onClick={() => window.open('https://app.brewstudio.in/signup', '_blank')}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 hover:scale-105 transition-all duration-200 text-lg bg-primary-foreground"
                onClick={() => window.open('mailto:support@brewstudio.in', '_blank')}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}