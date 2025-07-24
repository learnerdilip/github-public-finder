import { useState } from "react";
import "./App.css";

import SearchInput from "./components/SearchInput";
import GithubUserDetails from "./components/GithubUserDetails";

const GITHUB_USER_API_URL = "https://api.github.com/users/";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async (text: string) => {
    const response = await fetch(`${GITHUB_USER_API_URL}${text}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const user = await response.json();
    console.log("- - - -", user);
    setUserData(user);
  };

  return (
    <>
      <header className="w-full my-2 text-center">
        <h1 className="text-4xl font-bold">Github username finder </h1>
        <p className="text-lg">
          Search for github users and check their public repositories
        </p>
      </header>

      <SearchInput
        username={username}
        setUsername={setUsername}
        onSearch={handleSearch}
      />

      {userData && <GithubUserDetails userData={userData} />}
    </>
  );
}

export default App;
