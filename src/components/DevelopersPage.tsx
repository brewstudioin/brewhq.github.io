import React from "react";
import { SolutionsPageTemplate } from "./SolutionsPageTemplate";
import { Zap, Clock, FileText, AlertTriangle, Play, Eye, RefreshCw, AlertCircle } from "lucide-react";

export function DevelopersPage() {
  return (
    <SolutionsPageTemplate
      hero={{
        title: (
          <>
            {"Fewer Unknowns. Better Requirements. "}
            <span className="text-primary relative inline-block">
              Faster Ships.
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/30 -skew-y-1 transform"></div>
            </span>
          </>
        ),
        tagline: "Get development‑ready implementation plans —so you can build, not chase context.",
        description: "",
        ctaText: "Try Now",
        ctaLink: "#"
      }}
      pain={{
        title: "Pain",
        description: "Vague tickets, missing context, constant back‑and‑forth."
      }}
      promise={{
        title: "Promise",
        description: "Clear, executable tasks that keep you unblocked and shipping."
      }}
      benefits={[
        {
          icon: <Zap className="w-8 h-8" />,
          title: "Less thrash",
          description: "Context and rationale live with the work.",
          color: "bg-[#feb249]/5 hover:bg-[#feb249]/15"
        },
        {
          icon: <Clock className="w-8 h-8" />,
          title: "Quicker starts",
          description: "Steps and dependencies are already mapped.",
          color: "bg-[#53d3d1]/5 hover:bg-[#53d3d1]/15"
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: "Cleaner PRs",
          description: "Reviewers see the impact and plan next to diffs.",
          color: "bg-[#feb249]/5 hover:bg-[#feb249]/15"
        },
        {
          icon: <AlertTriangle className="w-8 h-8" />,
          title: "Variance",
          description: "Coming soon: commit/PR checks that flag drift vs actual requirement.",
          color: "bg-[#53d3d1]/5 hover:bg-[#53d3d1]/15"
        }
      ]}
      whatYouCanDo={{
        title: "What you can do",
        subtitle: "",
        features: [
          {
            title: "Open the implementation plan and pick up tasks with ACs.",
            description: "",
            icon: <Play className="w-6 h-6" />
          },
          {
            title: "View code adjacency hints (from GitHub) to find likely modules.",
            description: "",
            icon: <Eye className="w-6 h-6" />
          },
          {
            title: "Sync tasks to Jira and update status from your flow.",
            description: "",
            icon: <RefreshCw className="w-6 h-6" />
          },
          {
            title: "Resolve Variance alerts right from PRs or Slack (coming soon).",
            description: "",
            icon: <AlertCircle className="w-6 h-6" />
          }
        ]
      }}
      quote={{
        text: "From requirement to executable plan—without guesswork"
      }}
      faqs={[
        {
          question: "Will Brew change my code?",
          answer: "Never. It's context and planning, read‑only for code."
        },
        {
          question: "How detailed are Acceptance Criteria?",
          answer: "Detailed enough to code against, concise enough to read quickly."
        },
        {
          question: "Does this replace Jira?",
          answer: "No—Brew enriches tickets and syncs to Jira."
        }
      ]}
    />
  );
}