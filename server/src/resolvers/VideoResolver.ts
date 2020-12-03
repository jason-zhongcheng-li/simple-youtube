import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Video } from '../models/Video';
import { VideoService } from './../services/VideoService';


@Resolver()
export class VideoResolver {

  constructor(private service: VideoService) {
    this.service = new VideoService();
  }

  @Query(() => String)
  helloYoutube() {
    return 'Hellow Youtube!';
  }

  @Query(() => [Video])
  async videos(): Promise<Video[]> {
    return await this.service.getAllVideos();
  }

  @Query(() => Video)
  async video(@Arg("id") id: String): Promise<Video | undefined> {
    return await this.service.getVideoById(id.toString());
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg("path") path: String
  ): Promise<Boolean> {

    console.log('user in resolver = ', path);
    const result = await this.service.saveVideo(path.toString());
    console.log('result in resolver = ', result);
    return true;
  }
}