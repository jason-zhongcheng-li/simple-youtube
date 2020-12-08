import express = require('express');
import VideoController from '../src/controllers/VideoController';

let app: any;

export function createExressServer(constroller: VideoController) {
  app = express();
  app.use(constroller.router);
  app.use('/', constroller.router);

  app.listen({ port: 2000 }, () => {
    console.info(`🚀 Server ready at http://localhost:2000`);
  });
}

export function shutdownExpressServer() {
  // app.off();
}