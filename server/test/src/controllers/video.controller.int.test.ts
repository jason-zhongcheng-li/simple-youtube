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

  it('should play video', async () => {

    const fullPath = path.join(__dirname, '../../../../test/assets/test.mp4');
    const id = 1;
    let [video] = dummyVideos.filter(video => video.id === id);
    video = { ...video, fullPath };

    videoApi.getVideoById = async id => {
      assert.strictEqual(id, 1, 'should be id');
      return video;
    };

    const test = request(app)
      .get(`/video/${id}/play`)
      .expect(200)
      .end(function (err: any, res: any) {
        if (err) { throw err; }
      });
  });

  it('should get thumbnail png file for a video', async () => {

    const fullPath = path.join(__dirname, '../../../../test/assets/test.mp4');
    const id = 1;
    let [video] = dummyVideos.filter(video => video.id === id);
    video = { ...video, fullPath };

    videoApi.getVideoById = async id => {
      assert.strictEqual(id, 1, 'should be id');
      return video;
    };

    const test = request(app)
      .get(`/video/${id}/poster`)
      .expect(200)
      .end(function (err: any, res: any) {
        if (err) { throw err; }
      });
  });
});