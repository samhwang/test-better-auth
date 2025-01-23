import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import type { drizzle } from 'drizzle-orm/neon-http';

export function createAuth(db: ReturnType<typeof drizzle>) {
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: 'pg',
    }),
    emailAndPassword: {
      enabled: true,
    },
    trustedOrigins: ['http://localhost:5173'],
  });
}
