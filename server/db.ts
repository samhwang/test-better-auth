import dotenv from '@dotenvx/dotenvx';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

dotenv.config({ path: '../.dev.vars' }); // or .env.local

export function getDbClient(connectionString: string) {
  const sql = neon(connectionString);
  const db = drizzle({ client: sql });

  return db;
}
