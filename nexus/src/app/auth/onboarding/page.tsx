"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function OnboardingPage() {
  // Temporary data (replace with API later)
  const progress = 58;
  const completedRepos = 4;
  const totalRepos = 7;
  const currentRepository = "Nexus";

  const steps = [
    {
      title: "Connected GitHub",
      completed: true,
    },
    {
      title: "Fetched repositories",
      completed: true,
    },
    {
      title: "Created database records",
      completed: true,
    },
    {
      title: `Indexing "${currentRepository}"`,
      loading: true,
    },
    {
      title: "Building AI knowledge",
    },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-6">
      <Card className="w-full max-w-2xl">
        <CardHeader className="space-y-3">
          <CardTitle className="text-3xl">
            🚀 Setting up your workspace
          </CardTitle>

          <p className="text-muted-foreground">
            We're importing, indexing, and preparing your repositories for AI-powered search.
          </p>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>

            <Progress value={progress} />
          </div>

          <div className="rounded-lg border p-4">
            <div className="text-sm text-muted-foreground">
              Repository Progress
            </div>

            <div className="mt-1 text-xl font-semibold">
              {completedRepos} of {totalRepos} repositories indexed
            </div>

            <div className="mt-3 text-sm">
              <span className="text-muted-foreground">
                Current Repository:
              </span>{" "}
              <span className="font-medium">
                {currentRepository}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <Step
                key={step.title}
                title={step.title}
                completed={step.completed}
                loading={step.loading}
              />
            ))}
          </div>

          <div className="text-sm text-muted-foreground">
            Estimated time remaining: 20–40 seconds
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

interface StepProps {
  title: string;
  completed?: boolean;
  loading?: boolean;
}

function Step({
  title,
  completed,
  loading,
}: StepProps) {
  return (
    <div className="flex items-center gap-3">
      {completed ? (
        <CheckCircle2 className="h-5 w-5 text-green-500" />
      ) : loading ? (
        <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
      ) : (
        <div className="h-5 w-5 rounded-full border" />
      )}

      <span>{title}</span>
    </div>
  );
}