var getBabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../db/graphql/schema.json');

module.exports = getBabelRelayPlugin(schema.data);