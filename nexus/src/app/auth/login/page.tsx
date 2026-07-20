import { LoginCard } from "@/components/auth/LoginCard";
import { LoginHeader } from "@/components/auth/LoginHeader";
import { GithubButton } from "@/components/auth/GithubButton";
import { SecurityNotice } from "@/components/auth/SecurityNotice";
import { OnboardingSteps } from "@/components/auth/OnboardingSteps";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <LoginCard>
        <LoginHeader />
        <GithubButton />
        <SecurityNotice />
        <OnboardingSteps />
      </LoginCard>
    </main>
  );
}