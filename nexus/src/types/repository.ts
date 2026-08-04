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
export type RepositoryStatus =
  | 'CONNECTED'
  | 'INDEXING'
  | 'READY'
  | 'FAILED'
  | 'DELETED';

// Frontend-specific extension to handle the UI data we need for the cards
export type DashboardRepository = GithubRepository & {
  status: RepositoryStatus;
  language?: string;
  lastIndexedAt?: string;

  // Indexing Progress
  progress?: number;
  progressMessage?: string;
};