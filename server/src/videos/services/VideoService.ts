import { inject, injectable } from 'inversify';
import { VideoApi } from './../apis/VideoApi';
import { Video } from './../models/Video';


@injectable()
export class VideoService {
  constructor(private videoApi: VideoApi) {
  }

  public async getAllVideos(): Promise<Video[]> {
    setTimeout(() => {
      console.log('simulate db transaction');
    }, 10000);
    const videos = await this.videoApi.getVideos();
    // business logic
    return videos;
  }

  public async getVideoById(id: string): Promise<Video> {
    setTimeout(() => {
      console.log('simulate db transaction');
    }, 10000);
    console.log('id = ', id);
    const video = await this.videoApi.getVideoById(id);
    // business logic
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