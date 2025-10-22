import dotenv from '@dotenvx/dotenvx';
import { defineConfig } from 'drizzle-kit';

dotenv.config();

export default defineConfig({
  dialect: 'postgresql',
  out: './server/drizzle/migrations',
  schema: './server/drizzle/schemas',
  dbCredentials: {
    host: process.env.POSTGRES_HOST || '',
    port: Number.parseInt(process.env.POSTGRES_PORT || '', 10),
    user: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASSWORD || '',
    database: process.env.POSTGRES_NAME || '',
    ssl: process.env.ENV === 'development' ? false : 'require',
  },
  verbose: true,
  strict: true,
});
