import * as process from 'node:process';

export const apiEnv: IApiEnv = {
  isProd: process.env.COFFEE_SHOP_ENV === 'production',
  cookie: {
    cookie_expires: Number(process.env.COFFEE_SHOP_JWT_EXPIRES_SECONDS),
    cookie_secret: process.env.COFFEE_SHOP_COOKIE_SECRET
  },
  web: {
    host: process.env.COFFEE_SHOP_WEB_HOST
  },
  api: {
    port: Number(process.env.COFFEE_SHOP_API_PORT)
  },
  db: {
    url: process.env.DATABASE_URL
  }
};

export interface IApiEnv {
  isProd: boolean;
  cookie: {
    cookie_expires: number;
    cookie_secret: string;
  };
  web: {
    host: string;
  };
  api: {
    port: number;
  };
  db: {
    url: string;
  };
}
