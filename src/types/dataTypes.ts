export type GithubUserData = {
  avatar_url: string;
  name: string;
  login: string;
  followers: string;
  following: string;
  public_repos: string;
  repos_url: string;
  bio: string;
};

export type SearchInputProps = {
  username: string;
  setUsername: (text: string) => void;
  onSearch: (text: string) => void;
};

export type RepoItemData = {
  id: string;
  name: string;
  description: string;
  stargazers_count: string;
  language: string;
};

export type GithubUserDetailsProps = {
  userData: GithubUserData | null;
};
