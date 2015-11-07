import fs from 'fs';
import { resolve, join } from 'path';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';

const dbDir = resolve(__dirname, '../../src/db');
const graphqlDir = resolve(dbDir, 'graphql');
const getSchema = () => require(resolve(graphqlDir, 'schema'));
const closeConnections = () => require(resolve(dbDir, 'bookshelf')).close();

export default async () => {
  const Schema = getSchema();
  // Save JSON of full schema introspection for Babel Relay Plugin to use
  var result = await graphql(Schema, introspectionQuery);
  if (result.errors) {
    throw new Error(`Error introspecting schema: ${JSON.stringify(result.errors, null, 2)}`);

  } else {

    fs.writeFileSync(
      join(graphqlDir, './schema.json'),
      JSON.stringify(result, null, 2)
    );

    // Save user readable type system shorthand of schema
    fs.writeFileSync(
      join(graphqlDir, './schema.graphql'),
      printSchema(Schema)
    );
  }

  return await closeConnections();
};
