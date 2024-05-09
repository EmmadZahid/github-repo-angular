export interface Repo {
  id: number;
  name: string;
  full_name: string;
  owner: RepoOwner;
  created_at: Date;
}

interface RepoOwner {
  id: number;
  avatar_url: string;
}
