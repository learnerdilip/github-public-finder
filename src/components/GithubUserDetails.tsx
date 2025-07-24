type GithubUserDetailsProps = {
  userData: any;
};

export default function GithubUserDetails({
  userData,
}: GithubUserDetailsProps) {
  console.log("- - -", userData);

  return (
    <div className="flex border p-2">
      <img
        src={userData.avatar_url}
        alt={"avatar image"}
        className="w-40 h-40"
      />
      <div className="pl-2">
        <p className="text-gray-900">Followers: {userData.followers}</p>
        <p className="text-gray-900">Following: {userData.following}</p>
        <p className="text-gray-900">Repo count: {userData.public_repos}</p>
      </div>
    </div>
  );
}
