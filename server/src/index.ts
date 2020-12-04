import 'reflect-metadata'; // to enable Decorator Metadata
import * as express from 'express';
import * as cors from 'cors';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';

const app = express();
const startServer = async () => {
  // await createConnection();
  const schema = await buildSchema({
    resolvers: [__dirname + '/**/resolvers/*.js']
  });

  const server = new ApolloServer({
    schema
  });



  app.use(cors());

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.info(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();

export default app;