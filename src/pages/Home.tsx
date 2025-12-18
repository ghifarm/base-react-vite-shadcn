import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client';

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['post'],
    queryFn: () => api.get('https://jsonplaceholder.typicode.com/posts/1'),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="h-[1000px] p-4">
      <h1 className="mb-3 text-xl">Home</h1>
      {/* <div>{JSON.stringify(data, null, 2)}</div> */}
    </div>
  );
}
