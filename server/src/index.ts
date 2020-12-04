import 'reflect-metadata'; // to enable Decorator Metadata
import * as express from 'express';
import * as cors from 'cors';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';


const startServer = async () => {
  // await createConnection();
  const schema = await buildSchema({
    resolvers: [__dirname + '/**/resolvers/*.js'],
    validate: false
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({
      req,
      res
    })
  });


  const app = express();
  app.use(cors({
    credentials: false,
    origin: 'http://localhost:3000'
  }));

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.info(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();

// export default app;