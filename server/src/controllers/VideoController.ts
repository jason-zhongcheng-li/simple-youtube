import { PlayerService } from './../services/PlayerService';
import { videoPath, videoStorage } from './../index';
import { NextFunction, Router } from 'express';
import Controller from './Controller';
import { VideoApi } from '../apis/VideoApi';


class VideoController implements Controller {
  public path = '/video';
  public router = Router();

  private playerService: PlayerService;

  constructor() {
    this.playerService = new PlayerService(new VideoApi());
    this.router.get(`${this.path}/:id/play`, this.playVideo);
    this.router.get(`${this.path}/:id/poster`, this.getThumbnail);
  }

  private playVideo = async (req: any, res: any, next: NextFunction) => {
    await this.playerService.playVideo(req, res, next);
  }

  private getThumbnail = async (req: any, res: any) => {
    await this.playerService.generateThumbnail(req, res);
  }

}

export default VideoController;