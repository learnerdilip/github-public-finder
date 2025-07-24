export default function ErrorText({ text }: { text: string }) {
  return (
    <div className="absolute bottom-3 bg-orange-200 border-2 border-orange-600 p-3 rounded-xl">{`Error: ${text}`}</div>
  );
}
