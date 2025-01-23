import dotenv from '@dotenvx/dotenvx';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import type { Env } from './context';

dotenv.config({ path: '../.dev.vars' }); // or .env.local

export function getDbClient(connectionString: string) {
  const sql = neon(connectionString);
  const db = drizzle({ client: sql });

  return db;
}

export function buildConnectionString({ DB_USER: user, DB_PASSWORD: password, DB_HOST: host, DB_PORT: port, DB_NAME: dbName }: Env): string {
  return `postgresql://${user}:${password}@${host}:${port}/${dbName}?sslmode=require`;
}
