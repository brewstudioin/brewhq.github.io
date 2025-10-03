import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function IntegrationsFAQSection() {
  const faqs = [
    {
      question: "Do we need admin rights in Jira?",
      answer: "Project‑level permissions are sufficient for most teams."
    },
    {
      question: "Is GitHub access required?",
      answer: "Yes, we read your code to generate the most accurate outputs."
    },
    {
      question: "Is there an API or webhooks for CICD/agents?",
      answer: "Yes, we provide comprehensive API endpoints and webhook support for CI/CD pipelines and agent integrations."
    },
    {
      question: "How are rate limits and retries handled?",
      answer: "We implement intelligent rate limiting and automatic retry mechanisms with exponential backoff to ensure reliable operation."
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about connecting your tools
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
                Need help with a specific integration?
              </p>
              <p className="text-sm">
                Our integration specialists are here to help at{" "}
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