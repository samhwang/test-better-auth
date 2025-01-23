import { trpcServer } from '@hono/trpc-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { createAuth } from './auth/server';
import type { Env } from './context';
import { getDbClient } from './db';
import { appRouter } from './trpc/router';

const app = new Hono<{ Bindings: Env }>().basePath('/api');

app.use('/', cors());

app.use(
  '/trpc/*',
  trpcServer({
    endpoint: '/api/trpc',
    router: appRouter,
  })
);

app.on(['POST', 'GET'], '/auth/**', (c) => {
  const db = getDbClient(c.env.DATABASE_URL);
  const auth = createAuth(db);
  return auth.handler(c.req.raw);
});

export default app;
