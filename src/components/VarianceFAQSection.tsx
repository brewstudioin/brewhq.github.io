import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function VarianceFAQSection() {
  const faqs = [
    {
      question: "What does Variance actually check?",
      answer: "Variance continuously monitors your code changes against the approved impact analysis & implementation plan. It checks if commits and PRs match the defined impact map, validates that changes satisfy acceptance criteria, ensures tasks are implemented in the planned sequence, and flags any files modified outside the approved scope."
    },
    {
      question: "Will this spam us with alerts?",
      answer: "No. Variance includes configurable ignore rules and thresholds to prevent alert fatigue. You can set sensitivity levels, define exceptions for specific file types or patterns, and customize alert frequency. The system learns from your team's patterns and only surfaces actionable deviations that matter."
    },
    {
      question: "What's required to enable it?",
      answer: "You need an existing implementation plan created through Brew Studio, connected GitHub repositories, and integrated Slack/Jira accounts for notifications. The system automatically starts monitoring once these connections are established - no additional setup or code changes required."
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about variance analysis
            </p>
          </div>

          <div className="bg-background rounded-xl border border-border/50 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 last:border-b-0">
                  <AccordionTrigger className="px-6 py-4 hover:bg-secondary/20 transition-colors duration-200">
                    <span className="text-left font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Help Section */}
          <div className="mt-12 text-center">
            <div className="bg-background rounded-lg p-6 border border-border/50">
              <p className="text-muted-foreground mb-4">
                Need help understanding your variance patterns?
              </p>
              <p className="text-sm">
                Our analytics experts are here to help at{" "}
                <a 
                  href="mailto:support@brewstudio.in" 
                  className="text-accent hover:text-accent/80 underline underline-offset-4 transition-colors duration-200"
                >
                  support@brewstudio.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}