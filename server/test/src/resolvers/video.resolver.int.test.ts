import * as assert from 'assert';
import { videoStorage } from '../../../src';
import { loadFixtures } from '../../fixtures';
import { dummyVideos } from '../../fixtures/videos';
import { graphQlCall } from '../../graphQlCall';


const videosQueryName = `{
  videos {
    name
  }
}
`;

const videosQuerySize = `{
  videos {
    size
  }
}
`;

describe('VideoResolver integration test', () => {

  beforeEach(() => {
    // loading dumy data from db
    loadFixtures();
  });

  afterEach(() => {
    // empty db
    while (videoStorage.length > 0) {
      videoStorage.pop();
    }
  });

  it('should get all videos with name only', async () => {

    const expect = dummyVideos.map(video => ({ name: video.name }));
    const response = await graphQlCall({
      source: videosQueryName
    });

    const result = response.data.videos;

    assert.deepStrictEqual(JSON.parse(JSON.stringify(result)), expect);
  });

  it('should get all videos with size field only', async () => {

    const expect = dummyVideos.map(video => ({ size: video.size }));
    const response = await graphQlCall({
      source: videosQuerySize
    });

    const result = response.data.videos;

    assert.deepStrictEqual(JSON.parse(JSON.stringify(result)), expect);
  });
});