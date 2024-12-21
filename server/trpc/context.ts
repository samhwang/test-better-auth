import type { FetchCreateContextWithCloudflareEnvFnOptions } from 'cloudflare-pages-plugin-trpc';

export interface Env {
  DATABASE_URL: string;
}

export const createContext = ({ req: _req, env }: FetchCreateContextWithCloudflareEnvFnOptions<Env>) => {
  return {
    DATABASE_URL: env.DATABASE_URL,
  };
};
