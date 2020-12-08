import * as assert from 'assert';
import { dummyVideos } from './../../fixtures/videos';
import { VideoService } from './../../../src/services/VideoService';
import { VideoApi } from '../../../src/apis/VideoApi';
import { VideoResolver } from '../../../src/resolvers/VideoResolver';
import { Video } from '../../../src/models/Video';



describe('VideoResolver unit test', () => {
  let instance: VideoResolver;
  let service: VideoService;

  beforeEach(async () => {
    service = Object.create(VideoApi.prototype);
    instance = new VideoResolver(service);
  });

  it('should get all videos', async () => {
    const expect = dummyVideos;


    service.getAllVideos = async () => {
      return dummyVideos;
    };

    const result = await instance.videos();
    assert.deepStrictEqual(result, expect, 'should be an array of videos');
  });

  it('should get video by id', async () => {
    const id = 1;
    const [expect] = dummyVideos.filter((obj: Video) => obj.id === id);


    service.getVideoById = async (id: number) => {
      assert.strictEqual(id, 1, 'should be the id argument');
      return expect;
    };

    const result = await instance.video(id);
    assert.deepStrictEqual(result, expect, 'should be a video');
  });
});