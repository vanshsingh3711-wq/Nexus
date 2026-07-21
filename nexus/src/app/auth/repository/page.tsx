"use client";

import { useState } from "react";
import { Search,  Lock, Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const repositories = [
  {
    id: "1",
    name: "Nexus",
    description: "AI Developer Platform",
    private: true,
    updated: "2 hours ago",
  },
  {
    id: "2",
    name: "Portfolio",
    description: "Personal Portfolio Website",
    private: false,
    updated: "Yesterday",
  },
  {
    id: "3",
    name: "CRM",
    description: "Roofing CRM",
    private: true,
    updated: "3 days ago",
  },
];

export default function RepositoryPage() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggleRepo(id: string) {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((repo) => repo !== id)
        : [...prev, id]
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Import GitHub Repositories</h1>
          <p className="text-muted-foreground mt-2">
            Select the repositories you want Nexus to understand.
          </p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-10"
            placeholder="Search repositories..."
          />
        </div>

        <div className="space-y-4">
          {repositories.map((repo) => (
            <Card
              key={repo.id}
              className="flex items-center justify-between p-5"
            >
              <div className="flex items-center gap-4">
                <Checkbox
                  checked={selected.includes(repo.id)}
                  onCheckedChange={() => toggleRepo(repo.id)}
                />

                <SiGithub className="h-6 w-6" />

                <div>
                  <h3 className="font-semibold">{repo.name}</h3>

                  <p className="text-sm text-muted-foreground">
                    {repo.description}
                  </p>

                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    {repo.private ? (
                      <>
                        <Lock className="h-3 w-3" />
                        Private
                      </>
                    ) : (
                      <>
                        <Globe className="h-3 w-3" />
                        Public
                      </>
                    )}

                    <span>•</span>

                    <span>Updated {repo.updated}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-muted-foreground">
            {selected.length} repositories selected
          </p>

          <Button disabled={selected.length === 0}>
            Import Selected
          </Button>
        </div>
      </div>
    </main>
  );
}