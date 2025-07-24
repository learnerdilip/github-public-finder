import { useState } from "react";
import "./App.css";

import SearchInput from "./components/SearchInput";
import GithubUserDetails from "./components/GithubUserDetails";
import { GITHUB_USER_API_URL } from "./constants";
import { type GithubUserData } from "./types/dataTypes";
import Loading from "./components/common/Loading";
import ErrorText from "./components/common/ErrorText";

function App() {
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<GithubUserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (text: string) => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await fetch(`${GITHUB_USER_API_URL}${text}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("user not found");
        }
        throw new Error(
          ` ${response.statusText} with status code ${response.status}`
        );
      }

      const user = await response.json();
      setUserData(user);
    } catch (err: unknown) {
      let message = err instanceof Error ? err.message : "Unknown error";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center h-full">
      <div className="bg-orange-50 flex flex-col items-center min-w-[700px] w-[80%] rounded-4xl">
        <header className="w-full my-2 text-center">
          <h1 className="text-4xl font-bold">Github profile finder </h1>
          <p className="text-lg">
            Search for github users and explore their public repositories
          </p>
        </header>

        <SearchInput
          username={username}
          setUsername={setUsername}
          onSearch={handleSearch}
        />

        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorText text={error} />
        ) : (
          <GithubUserDetails userData={userData} />
        )}
      </div>
    </div>
  );
}

export default App;
