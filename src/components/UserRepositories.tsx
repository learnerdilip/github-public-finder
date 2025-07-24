import { useEffect, useState } from "react";

import RepoItem from "./RepoItem";
import Loading from "../components/common/Loading";
import ErrorText from "../components/common/ErrorText";
import type { RepoItemData } from "../types/dataTypes";

export default function UserRepositories({ repoUrl }: { repoUrl: string }) {
  const [repos, setRepos] = useState<RepoItemData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const getRepoList = async () => {
    setLoading(true);
    setError("");

    try {
      const response: Response = await fetch(repoUrl);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const repoList = await response.json();
      setRepos(repoList);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`${err.message}`);
        console.error(err.message);
      } else {
        setError(`Error while fetching repo list for the user`);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRepoList();
  }, [repoUrl]);

  if (!repoUrl || repos.length <= 0) {
    return null;
  }

  return loading ? (
    <Loading />
  ) : error ? (
    <ErrorText text={error} />
  ) : (
    <>
      <h2 className="text-3xl font-extrabold py-3">User repositories</h2>

      <div className="h-full overflow-scroll w-full">
        <div className="w-full">
          {repos.map((repo: RepoItemData) => (
            <RepoItem key={repo.id} {...repo} />
          ))}
        </div>
      </div>
    </>
  );
}
