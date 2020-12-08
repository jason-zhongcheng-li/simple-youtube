import 'reflect-metadata'; // to enable Decorator Metadata
import * as express from 'express';
import * as cors from 'cors';
import { buildSchema } from 'type-graphql';
import { ApolloServer, gql } from 'apollo-server-express';
import { existsSync, mkdirSync } from 'fs';
import path = require('path');
import VideoController from './controllers/VideoController';
import { Video } from './models/Video';

// simulate database
export const videoStorage: Video[] = [];

export const videoPath = path.join(__dirname, '../videos/');
export const resolverPath = path.join(__dirname, '/**/resolvers/*.js');

const startServer = async () => {

  const videoController = new VideoController(undefined);

  const schema = await buildSchema({
    resolvers: [resolverPath],
    validate: false
  });

  const server = new ApolloServer({
    schema
  });

  if (!existsSync(videoPath)) {
    mkdirSync(videoPath);
  }

  const app = express();
  app.use(cors({
    credentials: false,
    origin: 'http://localhost:3000'
  }));
  app.use('/', videoController.router);

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.info(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

startServer();

// export default app;