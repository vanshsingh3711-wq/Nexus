export type GitHubApiRepository = {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  default_branch: string;
  private: boolean;
  description: string | null;
  updated_at: string;
};