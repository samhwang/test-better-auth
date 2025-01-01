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
  const user = c.env.DB_USER;
  const password = c.env.DB_PASSWORD;
  const host = c.env.DB_HOST;
  const port = c.env.DB_PORT;
  const dbName = c.env.DB_NAME;
  const connectionString = buildConnectionString(user, password, host, port, dbName);
  const dbClient = getPrismaClient(connectionString);
  const auth = getAuth(dbClient);
  return auth.handler(c.req.raw);
});

export default app;
