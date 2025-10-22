import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/react-router';
import { httpBatchLink } from '@trpc/client';
import { lazy, useState } from 'react';
import { trpc } from '../server/trpc/client';
import { appRouter } from './router';

const TanstackRouterDevtools = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import('@tanstack/router-devtools').then((res) => {
        return { default: res.TanStackRouterDevtools };
      })
    );

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => {
    return trpc.createClient({
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
    });
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={appRouter} />
        <TanstackRouterDevtools router={appRouter} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
