import {
  
  FolderGit2,
  DatabaseZap,
  MessageSquareCode,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
const steps = [
  {
    icon: SiGithub,
    title: "Connect GitHub",
    description: "Securely sign in with your GitHub account.",
  },
  {
    icon: FolderGit2,
    title: "Choose Repository",
    description: "Select the project you want Nexus to understand.",
  },
  {
    icon: DatabaseZap,
    title: "Analyze Codebase",
    description: "Nexus indexes your repository and builds context.",
  },
  {
    icon: MessageSquareCode,
    title: "Start Exploring",
    description: "Ask questions, understand architecture, and contribute faster.",
  },
];

export function OnboardingSteps() {
  return (
    <div className="space-y-4 border-t border-border pt-6">
      <div>
        <h3 className="text-sm font-semibold">
          What happens next?
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Setting up your workspace only takes a few moments.
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-muted">
                  <Icon className="h-4 w-4" />
                </div>

                {index < steps.length - 1 && (
                  <div className="mt-2 h-8 w-px bg-border" />
                )}
              </div>

              <div className="pb-2">
                <h4 className="text-sm font-medium">
                  {step.title}
                </h4>

                <p className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}