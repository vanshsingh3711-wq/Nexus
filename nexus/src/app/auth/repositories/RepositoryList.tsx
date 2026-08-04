"use client";

import { useState } from "react";
import { Search, Lock, Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { GithubRepository } from "@/types/repository";
import { useRouter } from "next/navigation";



export default function RepositoryList(
  { repositories }: {
    repositories:  GithubRepository[]
  }
  
) {

  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState<number[]>([]);
  const [query, setQuery] = useState("");
  const router = useRouter();
  async function saveRepositories() {
    try {
      setLoading(true);

      const response = await fetch("/api/repositories/import", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          repositories: repositories.filter(repo =>
            selected.includes(repo.githubRepositoryId)
          )
        })
      });

      const data = await response.json()

      if (!response.ok) {
        throw new Error("Failed to import repositories");
      }

      router.push("/dashboard");

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  function toggleRepo(id: number) {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((repo) => repo !== id)
        : [...prev, id]
    );
  }

  const filteredRepositories = repositories.filter((repo) => {
    const search = query.toLowerCase();

    return (
      repo.name.toLowerCase().includes(search) ||
      repo.description?.toLowerCase().includes(search)
    );
  });


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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="space-y-4 ">
          {filteredRepositories?.map((repo) => (
            <Card
              key={repo.githubRepositoryId}
              className="flex  justify-between p-5"
            >
              <div className=" flex items-center  gap-4 ">
                <Checkbox
                  checked={selected.includes(repo.githubRepositoryId)}
                  onCheckedChange={() => toggleRepo(repo.githubRepositoryId)}
                />

                <SiGithub className="h-6 w-6" />

                <div>
                  <h3 className="font-semibold">{repo.name}</h3>

                  <p className="text-sm text-muted-foreground">
                    {repo.description}
                  </p>

                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    {repo.visibility === "PRIVATE" ? (
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

                    <span>Updated {new Date(repo.updatedAt).toLocaleDateString("en-US")}</span>
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

          <Button disabled={selected.length === 0 || loading} onClick={saveRepositories}>
            {loading ? "Importing..." : "Import Selected"}
          </Button>
        </div>
      </div>
    </main>
  );
}