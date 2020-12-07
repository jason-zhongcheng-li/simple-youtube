import { resolverPath } from './../src/index';
import { graphql, GraphQLSchema } from 'graphql';

import { buildSchema } from 'type-graphql';
import { Maybe } from 'graphql/jsutils/Maybe';

interface Options {
  source: string;
  variableValues?: Maybe<{
    [key: string]: any;
  }>;
}



export const graphQlCall = async ({ source, variableValues }: Options) => {

  const schema: GraphQLSchema = await buildSchema({
    resolvers: [resolverPath],
    validate: false
  });

  return graphql({
    schema,
    source,
    variableValues
  });
};
