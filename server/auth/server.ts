import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import type { getDbClient } from '../db';

export function createAuth(db: ReturnType<typeof getDbClient>) {
  return betterAuth({
    database: prismaAdapter(db, {
      provider: 'postgresql',
    }),
    emailAndPassword: {
      enabled: true,
    },
    trustedOrigins: ['http://localhost:5173'],
  });
}
