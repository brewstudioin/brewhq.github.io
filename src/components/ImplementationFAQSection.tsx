import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function ImplementationFAQSection() {
  const faqs = [
    {
      question: "Can we enforce our Acceptance criterias?",
      answer: "Yes, customize task templates and checklists."
    },
    {
      question: "How do estimates work?",
      answer: "Derived from complexity/risk tags; you can edit, sync to JIRA."
    },
    {
      question: "Can my coding agents pull plans directly?",
      answer: "You can share links with teammates or copy and paste where you want it. We will soon introduce an MCP that can allow your agent to talk to brew directly."
    },
    {
      question: "What's the structure of a generated task, can we customise it?",
      answer: "Tasks include title, description, acceptance criteria, dependencies, and estimated effort. You can customize templates, add your own fields, and modify the structure to match your team's workflow."
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Implementation Plans
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
                Still have questions?
              </p>
              <p className="text-sm">
                Reach out to us at{" "}
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