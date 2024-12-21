import { initTRPC } from '@trpc/server';
import type { createContext } from './context';

const t = initTRPC.context<typeof createContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;