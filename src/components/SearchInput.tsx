import type { ChangeEvent } from "react";
import type React from "react";

interface SearchInputProps {
  username: string;
  setUsername: (text: string) => void;
  onSearch: (text: string) => void;
}

export default function SearchInput({
  username,
  setUsername,
  onSearch,
}: SearchInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter github username"
      />
      <button type="submit">Search</button>
    </form>
  );
}
