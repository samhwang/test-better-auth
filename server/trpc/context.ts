interface Env {
  DATABASE_URL: string;
}

export interface HonoContext {
  env: Env;
}
