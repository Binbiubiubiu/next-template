const env = process.env.NODE_ENV;

const fs = require("fs");
const dotenv = require("dotenv");

const dotEnvResult = dotenv.config();
const parsedVariables = dotenv.config().parsed || {};

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}

if (fs.existsSync(`.env.${env}`)) {
  const envConfig = dotenv.parse(fs.readFileSync(`.env.${env}`));
  for (const k in envConfig) {
    parsedVariables[k] = envConfig[k];
  }
}

module.exports = parsedVariables;
