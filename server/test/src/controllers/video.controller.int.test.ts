import * as assert from 'assert';
import { dummyVideos } from './../../fixtures/videos';
import { VideoApi } from './../../../src/apis/VideoApi';
import { PlayerService } from './../../../src/services/PlayerService';
import VideoController from '../../../src/controllers/VideoController';
import express = require('express');
const request = require('supertest');
import path = require('path');

describe('VideoController integration test', () => {

  let app: any;
  let controller: VideoController;
  let playService: PlayerService;
  let videoApi: VideoApi;

  beforeEach(async () => {
    videoApi = Object.create(VideoApi.prototype);
    playService = new PlayerService(videoApi);
    controller = new VideoController(playService);

    app = express();
    app.use('/', controller.router);
    app.use(controller.router);
  });

  it.only('should get thumbnail png file for a video', async () => {

    const id = 1;
    const [video] = dummyVideos.filter(video => video.id === id);

    videoApi.getVideoById = async id => {
      assert.strictEqual(id, 1, 'should be id');
      return video;
    };

    console.log(path.join(__dirname, '../../../../test/fixtures/'));

    // const test = request(app)
    //   .get(`/video/${id}/poster`);
    // console.log('test = ', test);
    // test.expect(200, '/temp/test.png')
    //   .end(function (err: any, res: any) {
    //     if (err) { throw err; }
    //   });
  });


});