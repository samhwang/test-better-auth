import { trpcServer } from '@hono/trpc-server';
import { Hono } from 'hono';
import { getAuth } from './auth/server';
import type { Env } from './context';
import { buildConnectionString, getPrismaClient } from './prisma';
import { appRouter } from './trpc/router';

const app = new Hono<{ Bindings: Env }>().basePath('/api');

app.use(
  '/trpc/*',
  trpcServer({
    endpoint: '/api/trpc',
    router: appRouter,
  })
);

app.on(['POST', 'GET'], '/auth/**', (c) => {
  const connectionString = buildConnectionString(c.env);
  const dbClient = getPrismaClient(connectionString);
  const auth = getAuth(dbClient);
  return auth.handler(c.req.raw);
});

export default app;
