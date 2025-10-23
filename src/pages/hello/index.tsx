import { useQuery } from '@tanstack/react-query';
import { orpc } from '../../orpc';

function useGreeting() {
  return useQuery(orpc.greeting.queryOptions());
}

function Greeting() {
  const { data, isLoading, error } = useGreeting();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <>
        <h1>Error loading from orpc</h1>
        <p>{error.message}</p>
      </>
    );
  }

  return (
    <>
      <h1>Result loaded from orpc</h1>
      <p>{data}</p>
    </>
  );
}

export default Greeting;
