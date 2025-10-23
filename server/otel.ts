import type { ResolveConfigFn } from '@microlabs/otel-cf-workers';

export const config: ResolveConfigFn = (_env: Cloudflare.Env, _trigger) => {
  return {
    exporter: {
      url: 'http://localhost:4318/v1/traces',
      headers: {},
    },
    service: {
      name: 'test-better-auth',
    },
  };
};
