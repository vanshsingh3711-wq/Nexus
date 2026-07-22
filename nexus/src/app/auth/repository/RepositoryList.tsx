"use client";

import { useState } from "react";
import { Search,  Lock, Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";



type Githubrepositories = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  visibility: string;
  url: string;
  updatedAt: string;
};

export default function RepositoryList(
  {repositories}:{repositories :Githubrepositories[]

  }
) {
  const [selected, setSelected] = useState<number[]>([]);

  function toggleRepo(id: number) {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((repo) => repo !== id)
        : [...prev, id]
    );
  }
console.log(repositories);
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

        <div className="space-y-4 ">
          {repositories?.map((repo) => (
            <Card
              key={repo.id}
              className="flex  justify-between p-5"
            >
              <div className=" flex items-center  gap-4 ">
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
                    {repo.visibility === 'Private' ? (
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

                    <span>Updated {repo.updatedAt}</span>
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