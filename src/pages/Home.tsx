import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: () => api.get("https://jsonplaceholder.typicode.com/posts/1"),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-xl mb-3">Home</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
