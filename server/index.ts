import { Hono } from 'hono';

type Bindings = {
  DATABASE_URL: string;
};

export const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c) => c.text('Hello World!'));

export default app;
