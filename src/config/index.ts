const config = {};

export enum Envs {
  development = 'development',
  staging = 'staging',
  production = 'production',
}

export const getEnv = (): Envs => {
  return process.env.NODE_ENV as Envs;
};

const envConfig = {
  [Envs.development]: {
    API_URL: 'http://loclahost:4000',
  },
  [Envs.staging]: {
    API_URL: 'http://loclahost:4000',
  },
  [Envs.production]: {
    API_URL: 'http://loclahost:4000',
  },
};

const configuration = {
  ...config,
  ...envConfig[getEnv()],
};

export default configuration;
