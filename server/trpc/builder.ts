import { initTRPC } from '@trpc/server';
import type { HonoContext } from '../context';

const t = initTRPC.context<HonoContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
