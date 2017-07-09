import { injectable } from 'inversify';
import { RESTController } from '../model/rest-controller';
import { MitarbeiterController } from './mitarbeiter.controller';
import { app } from '../index';

/**
 * Controller for main routes
 * @class MainController
 * @implements RESTController
 */
@injectable()
export class MainController implements RESTController {

    /**
     * Constructor for MainController
     * @param mitarbeiterController
     */
    constructor(private mitarbeiterController: MitarbeiterController) {
    }

    /**
     * Init for routes of this controller
     */
    initRoutes(): void {
        this.mitarbeiterController.initRoutes();
        app.get('/', this.getRunningState);
    }

    /**
     * Route middleware for checking the running state
     * @param req
     * @param res
     * @param next
     */
    public getRunningState(req?, res?, next?) {
        res.send('Server is running');
    }
}
