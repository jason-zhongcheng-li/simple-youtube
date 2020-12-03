import { inject } from 'inversify';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Video } from '../models/Video';
import { VideoService } from './../services/VideoService';


@Resolver()
export class VideoResolver {

  constructor(private service: VideoService) {
  }

  @Query(() => String)
  public helloYoutube() {
    return 'Hellow Youtube!';
  }

  @Query(() => [Video])
  public async videos(): Promise<Video[]> {
    const videos = await this.service.getAllVideos();
    /*
      ...
      presentation layer logic
      ...
    */
    return videos;
  }

  @Query(() => Video)
  public async video(@Arg('id') id: String): Promise<Video> {
    const video = await this.service.getVideoById(id.toString());
    /*
      ...
      presentation layer logic
      ...
    */
    return video;
  }

  // @Mutation(() => Boolean)
  // public async updateUser(
  //   @Arg('path') path: String
  // ): Promise<Boolean> {

  //   console.log('user in resolver = ', path);
  //   const result = await this.service.saveVideo(path.toString());
  //   console.log('result in resolver = ', result);
  //   return true;
  // }
}