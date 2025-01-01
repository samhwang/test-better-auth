import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';
import type { Env } from './context';

neonConfig.webSocketConstructor = ws;

let pool: Pool | undefined = undefined;
let adapter: PrismaNeon | undefined = undefined;
let prisma: PrismaClient | undefined = undefined;

export function getPrismaClient(connectionString: string) {
  if (!pool) {
    pool = new Pool({ connectionString });
  }

  adapter = new PrismaNeon(pool);

  if (!prisma) {
    prisma = new PrismaClient({ adapter });
  }

  return prisma;
}

export function buildConnectionString({ DB_USER: user, DB_PASSWORD: password, DB_HOST: host, DB_PORT: port, DB_NAME: dbName }: Env): string {
  return `postgresql://${user}:${password}@${host}:${port}/${dbName}?sslmode=require`;
}
