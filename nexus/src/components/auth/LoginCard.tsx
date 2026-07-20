import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";


interface LoginCardProps {
  children: React.ReactNode;
  className?: string;
}

export function LoginCard({
  children,
  className,
}: LoginCardProps) {
  return (
    <Card
      className={cn(
        "w-full max-w-md rounded-2xl border border-border/60 bg-background/80 shadow-2xl backdrop-blur-xl",
        className
      )}
    >
      <CardContent className="flex flex-col gap-6 p-8">
        {children}
      </CardContent>
    </Card>
  );
}