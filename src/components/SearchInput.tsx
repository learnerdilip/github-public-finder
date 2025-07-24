import type { ChangeEvent } from "react";
import type { SearchInputProps } from "../types/dataTypes";

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

    if (username) {
      onSearch(username);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full p-4 gap-2 justify-center"
    >
      <input
        className="h-10 w-100 pl-2 border-2 border-orange-200 rounded-xl"
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter github username"
      />
      <button
        type="submit"
        className="bg-orange-300 p-2 rounded-2xl font-bold cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
