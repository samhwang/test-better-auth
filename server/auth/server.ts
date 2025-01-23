import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import type { drizzle } from 'drizzle-orm/neon-http';
import { account, session, user, verification } from '../drizzle/schemas/auth-schema';

export function createAuth(db: ReturnType<typeof drizzle>) {
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: 'pg',
      schema: {
        user,
        session,
        account,
        verification,
      },
    }),
    emailAndPassword: {
      enabled: true,
    },
    trustedOrigins: ['http://localhost:5173'],
  });
}
