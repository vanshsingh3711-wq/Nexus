import Image from "next/image";

export function LoginHeader() {
  return (
    <div className="flex flex-col items-center text-center space-y-5">
      {/* Logo */}
      <Image
        src="/assets/logo.svg"
        alt="Nexus Logo"
        width={90}
        height={90}
        priority
      />

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          AI Workspace for Developers
        </h1>

        <p className="text-sm leading-6 text-muted-foreground max-w-sm">
          Connect your GitHub account to understand repositories,
          explore architecture, and contribute to open source
          with confidence.
        </p>
      </div>
    </div>
  );
}