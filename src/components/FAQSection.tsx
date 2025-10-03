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
      answer: "Brew Studio analyzes your codebase, requirements, and system architecture to automatically map dependencies and potential impact areas. Our AI understands relationships between components and can predict how changes will ripple through your system."
    },
    {
      question: "Does BrewHQ change my code?",
      answer: "No. Read‑only analysis; optional links to code for context. Brew Studio never modifies your code - it only provides analysis and insights to help you make informed decisions."
    },
    {
      question: "Can I customise the impact and/or risk?",
      answer: "Yes, add, edit or ignore as you wish. You have full control over the impact analysis - modify risk scores, add custom notes, ignore irrelevant dependencies, or include additional considerations based on your team's knowledge."
    },
    {
      question: "Does BrewHQ need write access to GitHub?",
      answer: "No, Brew Studio only requires read access to your repositories. This allows us to analyze your codebase structure and dependencies without any risk to your code. You maintain complete control over your repositories."
    },
    {
      question: "What inputs are required for best results?",
      answer: "For optimal impact analysis, provide clear requirements documentation, access to your codebase, and any existing architectural documentation. The more context Brew Studio has about your system, the more accurate and comprehensive the impact analysis will be."
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