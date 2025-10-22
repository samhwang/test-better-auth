import dotenv from '@dotenvx/dotenvx';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaPg } from '@prisma/adapter-pg';
import type { Env } from './context';
import { PrismaClient } from './generated/prisma/client';

dotenv.config({ path: '../.dev.vars' }); // or .env.local

export function getDbClient(connectionString: string): PrismaClient {
  const adapter = process.env.ENV === 'development' ? new PrismaPg({ connectionString }) : new PrismaNeon({ connectionString });
  const db = new PrismaClient({ adapter });

  return db;
}

export function buildConnectionString({
  POSTGRES_USER: user,
  POSTGRES_PASSWORD: password,
  POSTGRES_HOST: host,
  POSTGRES_PORT: port,
  POSTGRES_NAME: dbName,
}: Env): string {
  return `postgresql://${user}:${password}@${host}:${port}/${dbName}?sslmode=require`;
}
