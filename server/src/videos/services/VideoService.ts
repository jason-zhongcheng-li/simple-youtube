import { videos } from './../../../test/fixtures/videos';
import { injectable } from 'inversify';
import { VideoApi } from './../apis/VideoApi';
import { Video } from './../models/Video';


@injectable()
export class VideoService {
  constructor(private videoApi: VideoApi) {
  }

  public async getAllVideos(): Promise<Video[]> {
    const videos = await this.videoApi.getVideos() as Video[];

    /*
        ...
        business logic
        ...
      */
    return videos;
  }

  public async getVideoById(id: string): Promise<Video> {
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

  // public async saveVideo(path: string): Promise<Boolean> {
  //   setTimeout(() => {
  //     console.log('simulate db transaction');
  //   }, 10000);
  //   console.log('path = ', path);
  //   // localStorage.setItem(video.id.toString(), JSON.stringify(video));
  //   return true;
  // }
}