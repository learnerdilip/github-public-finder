import { useEffect, useState } from "react";
import RepoItem from "./RepoItem";

export default function UserRepositories({ repoUrl }: { repoUrl: string }) {
  const [repos, setRepos] = useState<any>([]);
  console.log(repoUrl);

  useEffect(() => {
    const getRepoList = async () => {
      const response = await fetch(repoUrl);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const repoList = await response.json();
      console.log("repoList:", repoList);

      setRepos(repoList);
    };

    getRepoList();
  }, [repoUrl]);

  if (!repoUrl || repos.length <= 0) {
    return null;
  }

  return (
    <>
      <h2 className="text-3xl font-extrabold py-3">User repositories</h2>

      {repos.map((repo: { name: string }) => (
        <RepoItem {...repo} />
      ))}
    </>
  );
}
