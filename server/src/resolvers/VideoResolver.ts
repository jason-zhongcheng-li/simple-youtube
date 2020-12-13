import { videoPath } from './../index';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { VideoService } from '../services';
import { VideoApi } from '../apis';
import { Video } from '../models';
import { UploadResult } from '../types';

@Resolver()
export class VideoResolver {

  constructor(private service: VideoService) {
    // I use inversify for IoC but have no time to setup in this demo project
    if (service) {
      // this approache is used for unit testing only
      this.service = service;
    } else {
      this.service = new VideoService(new VideoApi());
    }
  }

  /**
   * @param  {Video} --> result type of grapql query
   */
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

  /**
   * @param  {Video}  --> result type of grapql query
   * @param  {number} id --> variable in useQuery hook
   */
  @Query(() => Video)
  public async video(@Arg('id') id: number): Promise<Video> {
    const video = await this.service.getVideoById(id);
    /*
      ...
      presentation layer logic
      ...
    */
    return video;
  }

  /**
   * @param  {UploadResult} --> result type of grapql query
   * @param  {GraphQLUpload} --> variable type from useMutation hook
   * @param  {createReadStream}  --> destructured property from variable
   * @param  {filename}  --> destructured property from variable
   * @param  {number} size --> file size
   * @param  {number} timestamp --> last modified timestamp of uploaded file
   */
  @Mutation(() => UploadResult)
  public async uploadVideo(
    @Arg('video', () => GraphQLUpload) {
      createReadStream,
      filename
    }: FileUpload, @Arg('size') size: number, @Arg('timestamp') timestamp: number): Promise<UploadResult> {
    const uploadResult: UploadResult = { success: false, message: '' };
    const fullPath = videoPath.concat(`/${filename}`);

    await this.service.saveVideo(timestamp, size, fullPath);

    return await this.service.uploadVideo(createReadStream, fullPath, uploadResult);
  }
}