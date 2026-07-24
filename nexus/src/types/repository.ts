export type Repository = {
  githubRepositoryId: number;
  name: string;
  owner: string;
  defaultBranch: string;
  visibility: "PUBLIC" | "PRIVATE";
};

export type GithubRepository = Repository & {
  description: string | null;
  updatedAt: string;
};

export type ImportRepository = Repository;

export type ImportRepositoriesRequest = {
  repositories: ImportRepository[];
};