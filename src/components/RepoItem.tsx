interface RepoItemData {
  name: string;
}

export default function RepoItem({ name }: RepoItemData) {
  return (
    <div className="flex h-20 shadow rounded-2xl p-2 items-center my-2 hover:bg-gray-200 hover:cursor-pointer">
      <p>{name}</p>
    </div>
  );
}
