//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  env: {
    COFFEE_SHOP_STORAGE_URL: process.env.COFFEE_SHOP_STORAGE_URL ?? 'COFFEE_SHOP_STORAGE_URL',
    COFFEE_SHOP_WEB_GQL_URL: process.env.COFFEE_SHOP_WEB_GQL_URL ?? 'http://localhost:3333/graphql'
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          process.env.COFFEE_SHOP_STORAGE_ENDPOINT || 'coffee-shop.fra1.cdn.digitaloceanspaces.com'
      }
    ]
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx
];

module.exports = composePlugins(...plugins)(nextConfig);
