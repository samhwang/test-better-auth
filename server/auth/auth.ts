import dotenv from '@dotenvx/dotenvx';
import { getDbClient } from '../db';
import { createAuth } from './server';

dotenv.config({ path: '../../.env' });

const db = getDbClient(process.env.DATABASE_URL || '');
export const auth = createAuth(db);
