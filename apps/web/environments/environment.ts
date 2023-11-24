import * as process from 'node:process';

export const webEnv: IWebEnv = {
  isProd: process.env.COFFEE_SHOP_ENV === 'production',
  api: {
    gqlUrl: process.env.COFFEE_SHOP_WEB_GQL_URL!
  },
  storage: {
    url: process.env.COFFEE_SHOP_STORAGE_URL!,
    endpoint: process.env.COFFEE_SHOP_STORAGE_ENDPOINT!
  }
};

export interface IWebEnv {
  isProd: boolean;
  api: {
    gqlUrl: string;
  };
  storage: {
    url: string;
    endpoint: string;
  };
}
