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
      answer: "For a requirement you generate, Brew Studio analyzes your codebase, other listed requirements, and system architecture to automatically map potential impact areas. Its done through a network of agents that are supplied with a set of varied tools which enable them to understand the dependency graph between requirements and code. With this context, it creates a matrix to show all impacted area and risks assiciated with them."
    },
    {
      question: "Does BrewHQ change my code?",
      answer: "No. You only permit Brew to with read access to your code. It's for generating context & vector embeddings that aids tool use & planning in the future. Brew Studio never modifies your code - it only provides analysis and insights to help you make informed decisions."
    },
    {
      question: "Can I customise the impact and/or risk?",
      answer: "Yes, add, edit or ignore as you wish. You have full control over the impact analysis - modify risk scores, add custom notes, ignore irrelevant dependencies, or include additional considerations based on your team's knowledge."
    },
    {
      question: "Does BrewHQ need write access to GitHub?",
      answer: "No, Brew Studio only requires read access to your repositories. This allows us to analyze your codebase structure and dependencies to generate context and vector embeddings without posing any risk to your code. You maintain complete control over your repositories. Brew studio also employees tokenization & encryption at rest to ensure the security of your data. Further with RBAC enabled, only you and your team members can access the data."
    },
    {
      question: "What happens if my code repository is updated?",
      answer: "Brew Studio automatically syncs with your repositories through a webhook to keep the context & vector embeddings up to date. This ensures that any future impact analysis is always accurate and relevant."
    },
    {
      question: "How is my data managed?",
      answer: "When you delete anything in the data hierarchy, it & its children get deleted from the database. Projects are the top of hierarchy in Brew Studio. A project consists of 1 or more code repository, requirement documents and other integrations. Further, Every requirement document consists of impact analysis and related data. \n We retain backups for 30 days."
    },
    {
      question: "What inputs are required for best results?",
      answer: "For optimal impact analysis, just provide clear, specific requirements documentation & access to your codebase. The more context Brew Studio has about your system, the more accurate and comprehensive the impact analysis will be."
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