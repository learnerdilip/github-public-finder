import { useEffect, useState } from "react";
import type { RepoItemData } from "../types/dataTypes";

export default function RepoItem({
  name,
  stargazers_count,
  language,
  description,
}: RepoItemData) {
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    return console.log("NIKAL RAAH HU");
  }, []);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="flex flex-col rounded-2xl p-2 m-2  my-2 hover:bg-gray-200 hover:cursor-pointer"
    >
      <p className="font-bold">{name}</p>
      {expanded ? (
        <div className="flex flex-col">
          <p className="">{`Description- ${description}`}</p>
          <div className="flex justify-around">
            <p>{`Stars: ${stargazers_count}`}</p>
            <p>{`Language: ${language}`}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
