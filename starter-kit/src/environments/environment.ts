import { env } from './.env';

export const environment = {
  production: false,
  hmr: true,
  version: env.npm_package_version + '-dev',
  gitHubUrl: 'https://api.github.com',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
};
