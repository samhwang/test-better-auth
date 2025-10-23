import { createTanstackQueryUtils } from '@orpc/tanstack-query';
import { client } from '../server/orpc/client';

export const orpc = createTanstackQueryUtils(client);
