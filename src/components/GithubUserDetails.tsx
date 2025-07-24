import UserRepositories from "../components/UserRepositories";
import type { GithubUserDetailsProps } from "../types/dataTypes";

export default function GithubUserDetails({
  userData,
}: GithubUserDetailsProps) {
  if (!userData) {
    return null;
  }

  return (
    <>
      <div className="flex border-2 p-2 rounded-2xl ">
        <img
          src={userData.avatar_url}
          alt={"avatar image"}
          className="w-40 h-40"
        />

        <div className="flex flex-col pl-2">
          <div>
            <p className="text-gray-900">{userData.name || userData.login}</p>
            <p className="text-gray-900">
              {" "}
              <i> {userData.bio}</i>
            </p>
          </div>

          <div className="flex gap-3">
            <p className="text-gray-900">Followers: {userData.followers}</p>
            <p className="text-gray-900">Following: {userData.following}</p>
            <p className="text-gray-900">Repo count: {userData.public_repos}</p>
          </div>
        </div>
      </div>

      <UserRepositories repoUrl={userData.repos_url} />
    </>
  );
}
