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
          question: "Do we need to change our SDLC?",
          answer: "No; Brew slots into grooming and planning."
        },
        {
          question: "Can we enforce governance?",
          answer: "Yes. Talk to us for enterprise plans."
        },
        {
          question: "Security posture?",
          answer: "Read‑only for code; granular OAuth; SSO on Business+."
        }
      ]}
    />
  );
}