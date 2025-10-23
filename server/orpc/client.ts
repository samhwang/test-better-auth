import { createORPCClient, onError } from '@orpc/client';
import { RPCLink } from '@orpc/client/fetch';
import type { RouterClient } from '@orpc/server';
import type { appRouter } from './router';

const link = new RPCLink({
  url: '/api/rpc',
  interceptors: [
    onError((error) => {
      console.error('RPC error:', error);
    }),
  ],
});

export const client: RouterClient<typeof appRouter> = createORPCClient(link);
