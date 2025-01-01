import { Hono } from 'hono';

const app = new Hono().basePath('/api');

const route = app.get((c) => {
  return c.json({
    test: true,
  });
});

export type AppType = typeof route;

export default app;
