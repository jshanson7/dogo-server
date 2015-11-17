import { writeFileSync } from 'fs';
import { resolve, join } from 'path';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';

const dbDir = resolve(__dirname, '../../src/db');
const graphqlDir = resolve(__dirname, '../../src/graphql');
const getSchema = () => require(resolve(graphqlDir, 'schema'));
const closeConnections = () => require(dbDir).close();

export default async () => {
  const schema = getSchema();
  // Save JSON of full schema introspection for Babel Relay Plugin to use
  var result = await graphql(schema, introspectionQuery);
  if (result.errors) {
    throw new Error(`Error introspecting schema: ${JSON.stringify(result.errors, null, 2)}`);

  } else {

    writeFileSync(
      join(graphqlDir, './schema.json'),
      JSON.stringify(result, null, 2)
    );

    // Save user readable type system shorthand of schema
    writeFileSync(
      join(graphqlDir, './schema.graphql'),
      printSchema(schema)
    );
  }

  return await closeConnections();
};
