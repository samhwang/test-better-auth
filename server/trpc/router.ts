import { publicProcedure, router } from './builder';

export const appRouter = router({
  greeting: publicProcedure.query(() => 'Hello World'),
});

export type AppRouter = typeof appRouter;
