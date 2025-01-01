import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

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

export function buildConnectionString(user: string, password: string, host: string, port: number, dbName: string): string {
  return `postgresql://${user}:${password}@${host}:${port}/${dbName}?sslmode=require`;
}
