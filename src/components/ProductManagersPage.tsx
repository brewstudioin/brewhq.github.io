import React from "react";
import { SolutionsPageTemplate } from "./SolutionsPageTemplate";
const impactSummaryImg = new URL("../assets/impact_summary.png", import.meta.url).href;
import { Users, CheckCircle, ArrowRight, AlertTriangle, FileText, GitPullRequest, Slack, Eye } from "lucide-react";

export function ProductManagersPage() {
  return (
    <SolutionsPageTemplate
      hero={{
        title: (
          <>
            <span className="text-primary relative inline-block">
              Clarity
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/30 -skew-y-1 transform"></div>
            </span>
            {" from day one."}
          </>
        ),
        tagline: "Turn messy requirements into impact maps and implementation plans that help stakeholders stay aligned.",
        description: "",
        ctaText: "Get Started",
        ctaLink: "#"
      }}
      sideImage={impactSummaryImg}
      sideImageAlt="Impact summary illustration"
      pain={{
        title: "Pain",
        description: "Vague specs, shifting scope, endless reviews and plan-splaning."
      }}
      promise={{
        title: "Promise",
        description: "A shared impact map and development‑ready plan that removes ambiguity and speeds sign‑off."
      }}
      benefits={[
        {
          icon: <Users className="w-8 h-8" />,
          title: "Aligned scope",
          description: "Everyone sees the same blast radius across the board.",
          color: "bg-[#feb249]/5 hover:bg-[#feb249]/15"
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          title: "Faster approvals",
          description: "Plans with acceptance criteria and definition of done reduce debate.",
          color: "bg-[#53d3d1]/5 hover:bg-[#53d3d1]/15"
        },
        {
          icon: <ArrowRight className="w-8 h-8" />,
          title: "Cleaner handoffs",
          description: "Dev‑ready tickets with context avoid rework.",
          color: "bg-[#feb249]/5 hover:bg-[#feb249]/15"
        },
        {
          icon: <AlertTriangle className="w-8 h-8" />,
          title: "Variance protection",
          description: "Coming soon: alerts on scope drift vs the approved requirement.",
          color: "bg-[#53d3d1]/5 hover:bg-[#53d3d1]/15"
        }
      ]}
      whatYouCanDo={{
        title: "What you can do",
        subtitle: "",
        features: [
          {
            title: "Publish a requirement and auto‑generate its impact analysis.",
            description: "",
            icon: <FileText className="w-6 h-6" />
          },
          {
            title: "Produce an implementation plan with acceptance criterias, estimates, and risks along with mitigation plans.",
            description: "",
            icon: <GitPullRequest className="w-6 h-6" />
          },
          {
            title: "Sync to Jira and share to Slack for review.",
            description: "",
            icon: <Slack className="w-6 h-6" />
          },
          {
            title: "Triage Variance alerts when implementation strays from scope (coming soon).",
            description: "",
            icon: <Eye className="w-6 h-6" />
          }
        ]
      }}
      quote={{
        text: "Less time herding comments. More time moving work."
      }}
      faqs={[
        {
          question: "Can stakeholders comment?",
          answer: "Yes, you can even sync your comments with JIRA."
        },
        {
          question: "How does this fit sprint rituals?",
          answer: "Often teams get distracted by too many details and hence don't plan well. Use Brew in backlog grooming and Sprint pre-planning to understand task complexity before hand and have pre-set estimates created on demand for a more efficient sprint planning."
        }
      ]}
    />
  );
}