import "reflect-metadata"; // to enable Decorator Metadata
import { VideoResolver } from './resolvers/VideoResolver';
import * as express from 'express';
import { buildSchema } from "type-graphql";
import { ApolloServer } from 'apollo-server-express';

const startServer = async () => {
  // await createConnection();

  const schema = await buildSchema({
    resolvers: [VideoResolver]
  });

  const server = new ApolloServer({
    schema
  });

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();