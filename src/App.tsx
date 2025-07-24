import { useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";

function App() {
  const [username, setUsername] = useState("");

  return (
    <>
      <SearchInput
        username={username}
        setUsername={setUsername}
        onSearch={() => console.log("search now")}
      />
    </>
  );
}

export default App;
