const config = require('./scripts/config');
const withMiddewares = require('./scripts/middleware');

module.exports = withMiddewares(config);
