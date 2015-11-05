import fs from 'fs';
import path from 'path';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';
import Schema from './schema';

export default async () => {
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
};
