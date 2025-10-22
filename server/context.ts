export interface Env {
  // DB
  POSTGRES_HOST: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_NAME: string;
  POSTGRES_PORT: string;
  DATABASE_URL: string;
}

export interface HonoContext {
  env: Env;
}
