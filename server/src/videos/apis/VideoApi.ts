import { injectable } from 'inversify';
import { Video } from '../models/Video';


@injectable()
export class VideoApi {

  public async getVideos(): Promise<Video[]> {
    const videos = [] as Video[];
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      const obj = JSON.parse(localStorage.getItem(key) as string) as Video;
      videos.push(obj);
    });
    return videos;
  }

  public async getVideoById(id: string): Promise<Video> {
    return JSON.parse(localStorage.getItem(id) as string) as Video;
  }

}