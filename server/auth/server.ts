import type { PrismaClient } from '@prisma/client';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';

let auth: ReturnType<typeof betterAuth> | undefined = undefined;

export function getAuth(dbClient: PrismaClient) {
  if (!auth) {
    auth = betterAuth({
      database: prismaAdapter(dbClient, {
        provider: 'postgresql',
      }),
      emailAndPassword: {
        enabled: true,
      },
      trustedOrigins: ['http://localhost:5173'],
    });
  }

  return auth;
}
