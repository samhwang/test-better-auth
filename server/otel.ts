import type { ExporterConfig, ResolveConfigFn } from '@microlabs/otel-cf-workers';

export const config: ResolveConfigFn = (env: Cloudflare.Env, _trigger) => {
  const exporter: ExporterConfig =
    env.ENV === 'development'
      ? {
          url: 'http://localhost:4318/v1/traces',
        }
      : {
          url: 'https://api.axiom.co/v1/traces',
          headers: {
            Authorization: `Bearer ${env.AXIOM_TOKEN}`,
            'X-Axiom-Dataset': 'test-better-auth',
          },
        };

  return {
    exporter,
    service: {
      name: 'test-better-auth',
    },
  };
};
