import { VideoService } from './../../../src/services/VideoService';
import { VideoResolver } from './../../../src/resolvers/VideoResolver';
import * as assert from 'assert';
import { graphQlCall } from '../../graphQlCall';

const videosQuery = `{
  videos {
    id
    name
  }
}
`;

describe.only('VideoService unit test', () => {
  // let instance: VideoResolver;
  // let service: VideoService;

  // beforeEach(async () => {
  //   service = Object.create(VideoService.prototype);
  //   instance = new VideoResolver(service);
  // });

  it('should save a video', async () => {
    const response = await graphQlCall({
      source: videosQuery
    });

    console.log(response);
  });

  it('should get all videos', async () => {
    const response = await graphQlCall({
      source: videosQuery
    });

    console.log(response);
  });
});