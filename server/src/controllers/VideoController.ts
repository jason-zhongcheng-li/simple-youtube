import { PlayerService } from './../services/PlayerService';
import { NextFunction, Router } from 'express';
import Controller from './Controller';
import { VideoApi } from '../apis/VideoApi';


class VideoController implements Controller {
  public path = '/video';
  public router = Router();

  constructor(private service: PlayerService) {
    // I use inversify for IoC but have no time to setup in this demo project
    if (service) {
      // this approache is used for unit testing only
      this.service = service;
    } else {
      this.service = new PlayerService(new VideoApi());
    }

    this.router.get(`${this.path}/:id/play`, this.playVideo);
    this.router.get(`${this.path}/:id/poster`, this.getThumbnail);
  }


  /**
   * @param  {any} req
   * @param  {any} res
   * @param  {NextFunction} next
   */
  private playVideo = async (req: any, res: any, next: NextFunction) => {
    await this.service.playVideo(req, res, next);
  }

  /**
   * @param  {any} req
   * @param  {any} res
   */
  private getThumbnail = async (req: any, res: any) => {
    await this.service.generateThumbnail(req, res);
  }

}

export default VideoController;