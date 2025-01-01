export interface Env {
  // DB
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  DB_PORT: string;
  DATABASE_URL: string;
}

export interface HonoContext {
  env: Env;
}
