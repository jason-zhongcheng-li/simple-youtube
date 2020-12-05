import { FileUpload } from 'graphql-upload';
import 'reflect-metadata'; // to enable Decorator Metadata
import * as express from 'express';
import * as cors from 'cors';
import { buildSchema } from 'type-graphql';
import { ApolloServer, gql } from 'apollo-server-express';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import path = require('path');
// import { typeDefs, resolvers } from './apollo';

const files = [] as any[];

const typeDefs = gql`
  type Query {
    files: [String]
  }

  type Mutation {
    uploadFile(file: Upload!): Boolean
  }
`;

let resolvers = {
  Query: {
    files: () => files
  },
  Mutation: {
    uploadFile: async (_: any, { file }: any) => {
      const { createReadStream, filename } = await file as FileUpload;

      await new Promise(res =>
        createReadStream()
          .pipe(createWriteStream(path.join(__dirname, '../assets', filename)))
          .on('close', res)
      );

      files.push(filename);

      return true;
    }
  }
};

const startServer = async () => {
  // await createConnection();
  const schema = await buildSchema({
    resolvers: [__dirname + '/**/resolvers/*.js'],
    validate: false
  });

  console.log('schema = ', schema);
  // resolvers = { ...schema, ...resolvers };

  const server = new ApolloServer({
    schema
    // typeDefs,
    // resolvers
  });

  if (!existsSync(path.join(__dirname, '../assets'))) {
    mkdirSync(path.join(__dirname, '../assets'));
  }


  const app = express();
  app.use(cors({
    credentials: false,
    origin: 'http://localhost:3000'
  }));

  server.applyMiddleware({ app });

  app.use('/images', express.static(path.join(__dirname, '../assets')));

  app.listen({ port: 4000 }, () => console.info(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();

// export default app;