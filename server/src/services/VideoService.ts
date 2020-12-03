import { Video } from './../models/Video';

const videos = [

] as Video[];

export class VideoService {

  public async getAllVideos(): Promise<Video[]> {
    setTimeout(() => {
      console.log('simulate db transaction');
    }, 10000);
    const videos = [] as Video[];
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      const obj = JSON.parse(localStorage.getItem(key) as string) as Video;
      videos.push(obj);
    });
    return videos;
  }

  public async getVideoById(id: string): Promise<Video> {
    setTimeout(() => {
      console.log('simulate db transaction');
    }, 10000);
    console.log('id = ', id);
    const video = JSON.parse(localStorage.getItem(id) as string) as Video;
    return video;
  }

  public async saveVideo(path: string): Promise<Boolean> {
    setTimeout(() => {
      console.log('simulate db transaction');
    }, 10000);
    console.log('path = ', path);
    // localStorage.setItem(video.id.toString(), JSON.stringify(video));
    return true;
  }
}