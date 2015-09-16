'use strict';

const getBabelRelayPlugin = require('babel-relay-plugin');
const fromRoot = require('./fromRoot');
const schemaPath = require(fromRoot('./config')).graphql.schemaJSON;
const schema = require(fromRoot(schemaPath));

module.exports = getBabelRelayPlugin(schema.data);