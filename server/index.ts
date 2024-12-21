import { Hono } from 'hono';
import type { EventContext } from 'hono/cloudflare-pages';

type Bindings = {
  DATABASE_URL: string;
  eventContext: EventContext;
};

export const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c) => c.text('Hello World!'));

export default app;
