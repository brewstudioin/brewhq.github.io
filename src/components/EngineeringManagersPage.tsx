import React from "react";
import { SolutionsPageTemplate } from "./SolutionsPageTemplate";
import { Target, RotateCcw, CheckCircle2, Shield, Eye, ClipboardCheck, TrendingUp, AlertCircle } from "lucide-react";

export function EngineeringManagersPage() {
  return (
    <SolutionsPageTemplate
      hero={{
        title: (
          <>
            <span className="text-primary relative inline-block">
              Velocity
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/30 -skew-y-1 transform"></div>
            </span>
            {" You Can Forecast"}
          </>
        ),
        tagline: "Stabilize sprint outputs with context‑driven planning—fewer surprises, better estimates, higher quality.",
        description: "",
        ctaText: "Book a Demo",
        ctaLink: "#"
      }}
      pain={{
        title: "Pain",
        description: "Output volatility, slipped sprints, quality regressions."
      }}
      promise={{
        title: "Promise",
        description: "Impact‑aware plans that reduce churn and make velocity predictable."
      }}
      benefits={[
        {
          icon: <Target className="w-8 h-8" />,
          title: "Predictable delivery",
          description: "Estimates grounded in impact and risk.",
          color: "bg-[#feb249]/5 hover:bg-[#feb249]/15"
        },
        {
          icon: <RotateCcw className="w-8 h-8" />,
          title: "Less rework",
          description: "Catch, highlight and notify cross‑team dependencies early.",
          color: "bg-[#53d3d1]/5 hover:bg-[#53d3d1]/15"
        },
        {
          icon: <CheckCircle2 className="w-8 h-8" />,
          title: "Quality up",
          description: "Acceptance criteria and tests built into every plan.",
          color: "bg-[#feb249]/5 hover:bg-[#feb249]/15"
        },
        {
          icon: <Shield className="w-8 h-8" />,
          title: "Governance",
          description: "Variance (pipeline) will flag drift from plan and open follow‑ups automatically.",
          color: "bg-[#53d3d1]/5 hover:bg-[#53d3d1]/15"
        }
      ]}
      whatYouCanDo={{
        title: "What you can do",
        subtitle: "",
        features: [
          {
            title: "Review impact matrices for upcoming work and resolve dependencies before sprint start.",
            description: "",
            icon: <Eye className="w-6 h-6" />
          },
          {
            title: "Approve implementation plans with capacity and risk in view.",
            description: "",
            icon: <ClipboardCheck className="w-6 h-6" />
          },
          {
            title: "Track velocity preview and forecast with fewer unknowns.",
            description: "",
            icon: <TrendingUp className="w-6 h-6" />
          },
          {
            title: "Monitor Variance reports and enforce guardrails (coming soon).",
            description: "",
            icon: <AlertCircle className="w-6 h-6" />
          }
        ]
      }}
      quote={{
        text: "Raise velocity without raising chaos."
      }}
      faqs={[
        {
          question: "I am hesitent to give access to my code, is it safe?",
          answer: "Yes. You only permit Brew with read access to your code. It's for generating context that aids planning in the future. We store related embeddings securely in an opensearch instance that is only accessible through compute instances in a private VPC. We also have multiple security controls in place, like, tokenization, encryption at rest, psedonimization, etc. If this does not satisfy you still, you can connect with us for a fully managed database solution where you will own the infra for storing your data."
        },
        {
          question: "Do we need to change our SDLC?",
          answer: "No; Brew fits well into your own engineering rituals. You can use it independently to Analyze your requirements and is also good at keeping track of incoming changes. This way you as an engineering manager can keep track of the overaching goals of your org."
        },
        {
          question: "Can we enforce governance?",
          answer: "Yes. Talk to us for enterprise plans."
        },
        {
          question: "Security posture?",
          answer: "We have multiple security controls in place, like, tokenization, encryption at rest, psedonimization, etc. You can read more about our privacy-policy here: https://brew.studio/privacy-policy"
        },
        {
          question: "Does BrewHQ need write access to GitHub?",
          answer: "No, Brew Studio only requires read access to your repositories. This allows us to analyze your codebase structure and dependencies to generate context and vector embeddings without posing any risk to your code. You maintain complete control over your repositories. Brew studio also employees tokenization & encryption at rest to ensure the security of your data. Further with RBAC enabled, only you and your team members can access the data."
        },
        {
          question: "What happens if my code repository is updated?",
          answer: "Brew Studio automatically syncs with your repositories through a webhook to keep the context & vector embeddings up to date. This ensures that any future impact analysis is always accurate and relevant. If you delete a repo in Brew studio, we will cleanup the related webhook automatically for you."
        }
      ]}
    />
  );
}