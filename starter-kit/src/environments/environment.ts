import { env } from './.env';

export const environment = {
  production: true,
  hmr: false,
  version: env.npm_package_version + '-dev',
  gitHubUrl: 'http://localhost:3000',
  chuckNorrisServerUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'en-US',
  supportedLanguages: ['pt-BR', 'en-US', 'fr-FR'],
};
