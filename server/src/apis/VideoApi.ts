import { Video } from '../models/Video';
import { videoStorage } from './../index';

export class VideoApi {

  public async getVideos(): Promise<Video[]> {

    const result = [] as Video[];

    // simulate db transaction
    videoStorage.forEach(obj => result.push(obj));
    return result;
  }

  public async getVideoById(id: number): Promise<Video> {
    let result: Video;

    // simulate db transaction
    [result] = videoStorage.filter((obj: Video) => obj.id === id);

    return result;
  }

  public async saveVideo(video: Video): Promise<Video> {
    // simulate db transaction and save entity with primary key
    const id = videoStorage.length + 1;
    video = { ...video, id } as Video;

    videoStorage.push(video);

    return video;
  }

}