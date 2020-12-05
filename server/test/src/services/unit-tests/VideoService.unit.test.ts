import 'reflect-metadata';
import * as assert from 'assert';
import { VideoApi } from './../../../../src/videos/apis/VideoApi';
import { VideoService } from '../../../../src/videos/services/VideoService';
import { videos } from './../../../fixtures/videos';


describe('VideoService unit test', () => {
  let instance: VideoService;
  let api: VideoApi;

  beforeEach(async () => {
    api = Object.create(VideoApi.prototype);
    instance = new VideoService(api);
  });

  it('should get all videos', async () => {
    const keys = ['1', '2', '3'];
    const expect = videos;

    Object.keys = (arg: Object) => {
      return keys;
    };

    api.getVideos = async () => {
      return videos;
    };

    const result = await instance.getAllVideos();
    console.log('resule = ', result);
    assert.deepStrictEqual(result, expect, 'should be an array of videos');

  });
});