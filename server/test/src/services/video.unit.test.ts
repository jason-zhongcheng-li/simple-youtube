import { dummyVideos } from './../../fixtures/videos';
import { VideoService } from './../../../src/services/VideoService';
import * as assert from 'assert';
import { VideoApi } from '../../../src/apis/VideoApi';



describe('VideoService unit test', () => {
  let instance: VideoService;
  let api: VideoApi;

  beforeEach(async () => {
    api = Object.create(VideoApi.prototype);
    instance = new VideoService(api);
  });

  it('should get all videos', async () => {
    const keys = ['1', '2', '3'];
    const expect = dummyVideos;

    Object.keys = (arg: Object) => {
      return keys;
    };

    api.getVideos = async () => {
      return dummyVideos;
    };

    const result = await instance.getAllVideos();
    assert.deepStrictEqual(result, expect, 'should be an array of videos');
  });
});