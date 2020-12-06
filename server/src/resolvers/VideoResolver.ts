import { dest } from './../index';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { VideoService } from './../services/VideoService';
import { SUCCESS_FILE_UPLOADED, ERR_FILE_UPLOADED, ERR_FILE_NOT_FOUND, ERR_FILE_RECORD_SAVED } from '../messages';
import { VideoApi } from '../apis/VideoApi';
import { Video } from '../models/Video';
import { UploadResult } from '../types/UploadResult';


@Resolver()
export class VideoResolver {

  constructor(private service: VideoService) {
    this.service = new VideoService(new VideoApi());
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
    const video = await this.service.getVideoById(+id);
    /*
      ...
      presentation layer logic
      ...
    */
    return video;
  }

  @Mutation(() => UploadResult)
  public async uploadFile(
    @Arg('file', () => GraphQLUpload) {
      createReadStream,
      filename
    }: FileUpload, @Arg('size') size: number, @Arg('timestamp') timestamp: number): Promise<UploadResult> {

    const uploadResult: UploadResult = { success: false, message: '' };

    const result = await this.service.saveVideo(filename, timestamp, size);

    if (!result) {
      // TODO: more front end test
      return Promise.resolve({ ...uploadResult, message: ERR_FILE_UPLOADED });
    }

    return new Promise(async (resolve, reject) => {
      try {
        setTimeout(() => {
          createReadStream()
            .pipe(createWriteStream(dest.concat(`/${filename}`)))
            .on('finish', () => resolve({ ...uploadResult, success: true, message: SUCCESS_FILE_UPLOADED }))
            .on('error', () => reject({ ...uploadResult, message: ERR_FILE_UPLOADED }));
        }, 2000);
      } catch (err) {
        console.error(err);
      }
    });
  }
}