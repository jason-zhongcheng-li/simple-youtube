import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
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

  @Mutation(() => Boolean)
  public async uploadFile(
    @Arg('file', () => GraphQLUpload) {
      createReadStream,
      mimetype,
      filename
    }: FileUpload): Promise<boolean> {

    console.log('filename from resolver = ', filename);
    console.log('mimetype from resolver = ', mimetype);

    const dirArr = __dirname.split('/');
    const dest = dirArr.slice(0, dirArr.length - 3).join('/').concat('/videos/');

    return new Promise(async (resolve, reject) => {
      try {
        setTimeout(() => {
          createReadStream()
            .pipe(createWriteStream(dest + `${filename}`))
            .on('finish', () => resolve(true))
            .on('error', () => reject(false));
        }, 5000);
      } catch (err) {
        console.error(err);
      }
    });



  }
}