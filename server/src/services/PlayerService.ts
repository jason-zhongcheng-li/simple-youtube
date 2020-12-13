import * as fs from 'fs';
import { NextFunction } from 'express';
import { VideoApi } from '../apis';
const thumbsupply = require('thumbsupply');

export class PlayerService {

  constructor(private videoApi: VideoApi) {
    this.videoApi = videoApi;
  }

  /**
   * @param  {any} req
   * @param  {any} res
   * @param  {NextFunction} next
   */
  public async playVideo(req: any, res: any, next: NextFunction): Promise<void> {
    const video = await this.videoApi.getVideoById(+req.params.id);

    if (!video) {
      // TODO
    }

    const stat = fs.statSync(video.fullPath);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1]
        ? parseInt(parts[1], 10)
        : fileSize - 1;
      const chunksize = (end - start) + 1;
      const file = fs.createReadStream(video.fullPath, { start, end });
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4'
      };
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4'
      };
      res.writeHead(200, head);
      fs.createReadStream(video.fullPath).pipe(res);
    }
  }

  /**
   * Generate thumbnail for the video.
   * A png file will be kept in local cache.
   * @param  {any} req
   * @param  {any} res
   */
  public async generateThumbnail(req: any, res: any): Promise<void> {
    const video = await this.videoApi.getVideoById(+req.params.id);

    await thumbsupply.generateThumbnail(video.fullPath)
      .then((thumb: any) => res.sendFile(thumb));
  }
}