import * as process from 'node:process';

export const webEnv: IWebEnv = {
  isProd: process.env.COFFEE_SHOP_ENV === 'production',
  api: {
    gqlUrl: process.env.COFFEE_SHOP_WEB_GQL_URL!,
  },
 
};

export interface IWebEnv {
  isProd: boolean;
  api: {
    gqlUrl: string;
  };
 
}