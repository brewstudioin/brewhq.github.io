import React from "react";

export function IntegrationsWhatItDoesSection() {
  const integrations = [
    {
      title: "Jira",
      status: "available",
      description: "Create/update issues with impact summary, tasks, acceptance criteria, and estimates.",
      features: [
        "Promote impact and risks into full requirements",
        "Link backs to the full impact map and plan in BrewHQ"
      ]
    },
    {
      title: "Slack",
      status: "upcoming",
      description: "Share plans to channels/DMs for review and approvals.",
      features: [
        "Notifications for plan updates, sign‑offs, and risk flags",
        "Slash actions - generate impact from a message thread"
      ]
    },
    {
      title: "GitHub",
      status: "upcoming",
      description: "Code adjacency hints to surface likely repos/files from requirement terms.",
      features: [
        "PR context links so reviewers see impact + plan alongside diffs",
        "Read‑only by default; no code writes"
      ]
    }
  ];



  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">Integrations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect your entire development ecosystem to maintain consistency, 
              reduce context switching, and keep everyone aligned.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-medium text-foreground">
                    {integration.title}
                  </h3>
                  {integration.status === "upcoming" && (
                    <span className="ml-3 text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
                      Upcoming
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {integration.description}
                </p>
                <div className="space-y-2">
                  {integration.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}