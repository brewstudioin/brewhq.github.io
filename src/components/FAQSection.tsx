import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How is impact generated?",
      answer: "For each requirement, Brew Studio analyzes your codebase, related requirements, and system architecture using a network of specialized agents. These agents understand dependency relationships between requirements and code, then produce an impact matrix highlighting affected areas and associated risks."
    },
    {
      question: "What inputs are required for best results?",
      answer: "Provide clear, specific requirement documentation and grant read-only access to your codebase. More system context yields more accurate and comprehensive impact analysis."
    },
    {
      question: "Can I customize impact and risk?",
      answer: "Yes. You can add, edit, or ignore items as needed: adjust risk scores, add notes, exclude irrelevant dependencies, or include additional considerations based on your team's knowledge."
    },
    {
      question: "Does BrewHQ change my code?",
      answer: "No. You grant Brew Studio read-only access to your repositories to generate context and vector embeddings that support planning. Brew Studio never modifies your code; it provides analysis and insights only."
    },
    {
      question: "Does BrewHQ need write access to GitHub?",
      answer: "No. Brew Studio requires read-only access to analyze repository structure and dependencies to generate context and embeddings. You retain full control. We employ tokenization and encryption at rest, and RBAC ensures only authorized team members can access your data."
    },
    {
      question: "What happens if my code repository is updated?",
      answer: "Brew Studio keeps context and embeddings up to date via webhooks. Changes are synced automatically to keep future analyses accurate. If you remove a repository from Brew Studio, the related webhook is cleaned up automatically."
    }, 
    {
      question: "How is my data managed?",
      answer: "Brew Studio organizes data by projects. A project can include one or more repositories, requirement documents, and integrations. Deleting an item removes it and its children from the database. Backups are retained for 30 days."
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Impact Analysis
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