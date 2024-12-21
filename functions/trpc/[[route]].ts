import type { PagesFunction } from '@cloudflare/workers-types';
import TRPCPlugin from 'cloudflare-pages-plugin-trpc';
import { appRouter } from '../../server/trpc/router';

export const onRequest: PagesFunction = TRPCPlugin({ router: appRouter, endpoint: '/trpc' });
