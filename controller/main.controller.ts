import { injectable } from 'inversify';
import { RESTController } from '../model/rest-controller';
import { MitarbeiterController } from './mitarbeiter.controller';
import { app } from '../app';

@injectable()
export class MainController implements RESTController {
    constructor(private mitarbeiterController: MitarbeiterController) {
    }

    initRoutes(): void {
        this.mitarbeiterController.initRoutes();
        app.get('/', this.getRunningState);
    }

    public getRunningState(req?, res?, next?) {
        res.send('Server is running');
    }
}
