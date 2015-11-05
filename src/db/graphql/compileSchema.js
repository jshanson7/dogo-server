import fs from 'fs';
import path from 'path';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';

const getSchema = () => require('./schema');
const closeConnections = () => require('../bookshelf').close();

export default async () => {
  const Schema = getSchema();
  // Save JSON of full schema introspection for Babel Relay Plugin to use
  var result = await graphql(Schema, introspectionQuery);
  if (result.errors) {
    throw new Error(`Error introspecting schema: ${JSON.stringify(result.errors, null, 2)}`);

  } else {

    fs.writeFileSync(
      path.join(__dirname, './schema.json'),
      JSON.stringify(result, null, 2)
    );

    // Save user readable type system shorthand of schema
    fs.writeFileSync(
      path.join(__dirname, './schema.graphql'),
      printSchema(Schema)
    );
  }

  return await closeConnections();
};
