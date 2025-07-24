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
