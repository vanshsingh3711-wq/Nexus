"use client";

import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";


interface GithubButtonProps {
  
  isLoading?: boolean;
}

export function GithubButton(){

  const [isLoading, setIsLoading] = useState(false);


  async function login(){
    
    try{
      setIsLoading(true)
     const result=  await authClient.signIn.social({
      provider:"github",
      callbackURL : "/auth/repositories"
    
    });
     console.log(result);

    }
    catch(error){
      
      console.error(error);
    }
  };
  
  return (
    <Button
      onClick={login}
      disabled={isLoading}
      size="lg"
      className="w-full h-12 rounded-xl text-base font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
    >
      <SiGithub className="mr-2 h-5 w-5" />

      {isLoading ? "Connecting..." : "Continue with GitHub"}
    </Button>
  );
}