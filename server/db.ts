import dotenv from '@dotenvx/dotenvx';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

dotenv.config({ path: '../.dev.vars' }); // or .env.local

const sql = neon(process.env.DATABASE_URL || '');
export const db = drizzle({ client: sql });
