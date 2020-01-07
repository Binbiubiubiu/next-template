const isProd = process.env.NODE_ENV === "production";
const path = require("path");

const r = p => path.resolve(__dirname, p);

let config = {
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: {} // make your antd custom effective
  },
  env: {
    customKey: "my-value"
  },
  pageExtensions: ["jsx", "js", "ts", "tsx"],
  // assetPrefix: isProd ? "https://cdn.mydomain.com" : "",
  target: "serverless", // serverless（推荐）, server
  compress: false,
  distDir: ".next",
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    config.resolve.alias["@"] = r("src");
    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  exportTrailingSlash: false
};

config = require("@zeit/next-less")(config);

module.exports = config;
