var getBabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../../src/graphql/schema.json');

module.exports = getBabelRelayPlugin(schema.data);
