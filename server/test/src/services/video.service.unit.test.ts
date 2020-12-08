import { videoPath } from './../../../src/index';
import { createWriteStream } from 'fs';
import { dummyVideos } from './../../fixtures/videos';
import { VideoService } from './../../../src/services/VideoService';
import * as assert from 'assert';
import { VideoApi } from '../../../src/apis/VideoApi';
import { UploadResult } from '../../../src/types/UploadResult';
import { Readable } from 'stream';



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

  // Set timeout in this particular function test to void 2000ms timeout for an async function call
  it('should upload a video file', async function () {
    // tslint:disable-next-line: no-invalid-this
    this.timeout(3000);
    let createWriteStream: any;
    const fullPath = videoPath + 'testVideoUpload.txt';
    const uploadResult: UploadResult = { success: false, message: '' };

    const expect = { success: true, message: 'Video has been uploaded successfully.' };

    createWriteStream = () => {
      const stream = new Readable({ objectMode: true });

      stream._read = () => {
        stream.push('abc123');
        stream.push(null);
      };

      return stream;
    };

    const result = await instance.uploadVideo(createWriteStream, fullPath, uploadResult);
    assert.deepStrictEqual(result, expect, 'should be uploading result');
  });
});