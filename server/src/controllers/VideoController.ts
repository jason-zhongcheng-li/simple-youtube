import { dest, videoStorage } from './../index';
import { NextFunction, Router } from 'express';
import * as fs from 'fs';
import Controller from './Controller';

const thumbsupply = require('thumbsupply');

class VideoController implements Controller {
  public path = '/video';
  public router = Router();

  constructor() {
    this.router.get(`${this.path}/:id/play`, this.getVideoById);
    this.router.get(`${this.path}/:id/poster`, this.getThumbnail);
  }

  private getVideoById = async (req: any, res: any, next: NextFunction) => {
    const id = +`${req.params.id}`;
    const path = this.getFullPath(id);

    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1]
        ? parseInt(parts[1], 10)
        : fileSize - 1;
      const chunksize = (end - start) + 1;
      const file = fs.createReadStream(path, { start, end });
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
      fs.createReadStream(path).pipe(res);
    }
  }

  private getThumbnail = async (req: any, res: any) => {

    const id = +`${req.params.id}`;
    const path = this.getFullPath(id);

    await thumbsupply.generateThumbnail(path)
      .then((thumb: any) => res.sendFile(thumb));
  }

  private getFullPath = (id: number): string => {
    const video = videoStorage.filter(video => video.id === id);
    if (!video || video.length === 0) {
      return null;
    }
    return dest.concat(video[0].name);
  }

}

export default VideoController;