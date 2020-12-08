import { PlayerService } from './../../../src/services/PlayerService';
import VideoController from '../../../src/controllers/VideoController';
import express = require('express');
const request = require('supertest');

describe('VideoController unit test', () => {

  let app: any;
  let controller: VideoController;
  let playService: PlayerService;

  beforeEach(async () => {
    playService = Object.create(PlayerService.prototype);
    controller = new VideoController(playService);

    app = express();
    app.use('/', controller.router);
    app.use(controller.router);
  });

  it('should call get request', async () => {

    playService.generateThumbnail = async (req: any, res: any) => {
      res.send('/temp/test.png');
    };

    const test = request(app)
      .get('/video/1/poster');
    test
      .expect(200, '/temp/test.png')
      .end(function (err: any, res: any) {
        if (err) { throw err; }
      });
  });


});