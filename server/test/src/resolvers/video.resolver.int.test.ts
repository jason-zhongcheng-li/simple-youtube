import * as assert from 'assert';
import { FileUpload } from 'graphql-upload';
import { Readable } from 'stream';
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

const videoById = `
query getVideoById($id: Float!){
    video(id: $id){
      id,
      name,
      size,
      fullPath
    }
  }
`;

const UPLOAD_VIDEO = `
  mutation UploadVido($video: Upload!, $size: Float!, $timestamp: Float!) {
    uploadVideo(video: $video, size: $size, timestamp: $timestamp){
      success,
      message
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

  it('should get video by id', async () => {

    const [video] = dummyVideos.filter(video => video.id === 1);

    // result will be in JSON format, so all data type is string
    const expect = { ...video, id: video.id.toString() };

    const response = await graphQlCall({
      source: videoById,
      variableValues: { id: 1 }
    });

    const result = response.data.video;

    assert.deepStrictEqual(JSON.parse(JSON.stringify(result)), expect);
  });

  it('should upload video file', async () => {

    const expect = {
      success: true,
      message: 'Video has been uploaded successfully.'
    };

    const createReadStream = () => {
      const stream = new Readable({ objectMode: true });

      stream._read = () => {
        stream.push('abc123');
        stream.push(null);
      };

      return stream;
    };

    const fileArg = { createReadStream, filename: 'test-video.mp4' } as FileUpload;

    assert.strictEqual(videoStorage.length, 3, 'should be 3 videos before upload');

    const response = await graphQlCall({
      source: UPLOAD_VIDEO,
      variableValues: { video: fileArg, size: 33554432, timestamp: 1606816548750 }
    });

    const result = response.data.uploadVideo;

    assert.deepStrictEqual(JSON.parse(JSON.stringify(result)), expect);
    assert.strictEqual(videoStorage.length, 4, 'should be 4 videos before upload');
  });
});