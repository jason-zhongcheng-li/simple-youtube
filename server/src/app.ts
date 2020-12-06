import * as express from 'express';
import Controller from './controllers/Controller';
import * as cors from 'cors';

class ShootstaApp {

  public exp: express.Application;

  constructor(controllers: Controller[]) {
    this.exp = express();
    this.initControllers(controllers);
    this.initApp();
  }

  private initControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.exp.use('/', controller.router);
    });
  }

  private initApp() {
    this.exp.use(cors({
      credentials: false,
      origin: 'http://localhost:3000'
    }));
  }
}
export default ShootstaApp;