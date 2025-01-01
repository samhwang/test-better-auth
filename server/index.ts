import { trpcServer } from '@hono/trpc-server';
import { Hono } from 'hono';
import { appRouter } from './trpc/router';

const app = new Hono().basePath('/api');

app.use(
  '/trpc/*',
  trpcServer({
    endpoint: '/api/trpc',
    router: appRouter,
    createContext: (opts, c) => {
      return {};
    },
  })
);

export default app;
