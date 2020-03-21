const envVars = require('./env');

const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

const r = (...args) => path.resolve(__dirname, ...args);

module.exports = {
  env: {
    ...envVars,
    TEST: process.env.TEST,
    BACKEND_URL: isProd ? 'https://api.example.com' : 'https://localhost:8080',
  },
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: '[local]___[hash:base64:5]',
  // },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  styleResourcesLoaderOptions: {
    patterns: [r('client/styles/index.less')],
  },
  // assetPrefix: isProd ? "https://cdn.mydomain.com" : "",
  target: 'serverless', // serverless（推荐）, server
  compress: false,
  distDir: '.next',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    config.resolve.alias['@'] = r('..', 'client');

    config.module.rules.map((rule) => {
      if (rule.test && rule.test.source.includes('less')) {
        rule.use.push({
          loader: 'style-resources-loader',
          options: {
            patterns: [r('..', 'client/styles/index.less')],
          },
        });
      }
    });
    config.node = {
      fs: 'empty',
    };
    return config;
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  exportTrailingSlash: false,
};
