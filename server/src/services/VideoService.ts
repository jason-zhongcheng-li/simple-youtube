import { createWriteStream } from 'fs';
import { basename } from 'path';
import { ERR_FILE_UPLOADED, SUCCESS_FILE_UPLOADED } from '../messages';
import { Video } from '../models/Video';
import { UploadResult } from '../types/UploadResult';
import { VideoApi } from './../apis/VideoApi';

export class VideoService {

  constructor(private videoApi: VideoApi) {
    this.videoApi = videoApi;
  }

  public async getAllVideos(): Promise<Video[]> {
    const videos = await this.videoApi.getVideos();
    /*
        ...
        business logic
        ...
      */
    return videos;
  }

  public async getVideoById(id: number): Promise<Video> {
    let video: Video;
    setTimeout(async () => {
      video = await this.videoApi.getVideoById(id);
    }, 10000);
    /*
     ...
     business logic
     ...
   */
    return video;
  }

  public async saveVideo(timestamp: number, size: number, fullPath: string): Promise<Video | boolean> {

    const lastModifiedDate = new Date(timestamp);
    const sizeMB = (Math.round(size / 1024 / 1024 * 100) / 100).toString();

    const video: Video = { name: basename(fullPath, '.mp4'), size: sizeMB, lastModified: lastModifiedDate.toLocaleDateString(), fullPath };

    const result = await this.videoApi.saveVideo(video);

    if (!result) {
      return null;
    }
    return result;
  }

  public async uploadVideo(createReadStream: any, fullPath: string, uploadResult: UploadResult): Promise<UploadResult> {
    return new Promise(async (resolve, reject) => {
      try {
        setTimeout(() => {
          // A readable stream to be piped into the destination
          createReadStream()
            .pipe(createWriteStream(fullPath))
            .on('finish', () => resolve({ ...uploadResult, success: true, message: SUCCESS_FILE_UPLOADED }))
            .on('error', () => reject({ ...uploadResult, message: ERR_FILE_UPLOADED }));
        }, 1000);
      } catch (err) {
        console.error(err);
      }
    });
  }
}