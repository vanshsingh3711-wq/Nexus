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
  return (
    <main className="min-h-screen flex items-center justify-center bg-black p-6">

      <Card className="w-full max-w-2xl">

        <CardHeader>

          <CardTitle className="text-3xl">
            🚀 Setting up your workspace
          </CardTitle>

          <p className="text-muted-foreground">
            We're preparing Nexus for your repositories.
          </p>

        </CardHeader>

        <CardContent className="space-y-8">

          <Progress value={58} />

          <div className="space-y-4">

            <Step
              completed
              title="Connected GitHub"
            />

            <Step
              completed
              title="Fetching repositories"
            />

            <Step
              completed
              title="Creating database records"
            />

            <Step
              loading
              title="Indexing repository..."
            />

            <Step
              title="Building AI knowledge"
            />

          </div>

          <div className="text-sm text-muted-foreground">
            Estimated time: 20–40 seconds
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

      {completed && (
        <CheckCircle2 className="h-5 w-5 text-green-500" />
      )}

      {loading && (
        <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
      )}

      {!completed && !loading && (
        <div className="h-5 w-5 rounded-full border" />
      )}

      <span>{title}</span>

    </div>
  );
}