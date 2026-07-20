import { Lock, ShieldCheck } from "lucide-react";

export function SecurityNotice() {
  return (
    <div className="space-y-4 rounded-xl border border-border/50 bg-muted/30 p-4">
      <div className="flex items-start gap-3">
        <Lock className="mt-0.5 h-5 w-5 text-primary" />

        <div>
          <p className="text-sm font-medium">
            Secure GitHub Authentication
          </p>

          <p className="text-sm text-muted-foreground">
            Nexus only requests access to repositories you choose.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 text-primary" />

        <div>
          <p className="text-sm font-medium">
            Your Code Stays Safe
          </p>

          <p className="text-sm text-muted-foreground">
            Nexus never modifies your repositories without your permission.
          </p>
        </div>
      </div>
    </div>
  );
}