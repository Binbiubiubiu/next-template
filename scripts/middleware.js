const withLess = require('@zeit/next-less');

const withCss = require('@zeit/next-css');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const compose = (middlewares) => (config) => middlewares.reduce((config, cb) => cb(config), config);

module.exports = compose([withLess, withCss, withBundleAnalyzer]);
