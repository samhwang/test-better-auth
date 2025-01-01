import { trpcServer } from '@hono/trpc-server';
import { Hono } from 'hono';
import { auth } from './auth/server';
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

app.on(['POST', 'GET'], '/auth/**', (c) => {
  return auth.handler(c.req.raw);
});

export default app;
