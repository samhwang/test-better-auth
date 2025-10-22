import dotenv from '@dotenvx/dotenvx';
import { defineConfig } from 'drizzle-kit';

dotenv.config();

export default defineConfig({
  dialect: 'postgresql',
  out: './server/drizzle/migrations',
  schema: './server/drizzle/schemas',
  dbCredentials: {
    host: process.env.DB_HOST || '',
    port: Number.parseInt(process.env.DB_PORT || '', 10),
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
  },
  verbose: true,
  strict: true,
});
