"use client";

import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { authClient } from "@/lib/auth-client";



interface GithubButtonProps {
  
  isLoading?: boolean;
}

export function GithubButton({
  
  isLoading = false,
}: GithubButtonProps) {

  async function handleGithubLogin(){
    await authClient.signIn.social({provider:"github"})
  }
  return (
    <Button
      onClick={handleGithubLogin}
      disabled={isLoading}
      size="lg"
      className="w-full h-12 rounded-xl text-base font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
    >
      <SiGithub className="mr-2 h-5 w-5" />

      {isLoading ? "Connecting..." : "Continue with GitHub"}
    </Button>
  );
}