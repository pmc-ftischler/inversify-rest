import { injectable } from 'inversify';
import { RESTController } from '../model/rest-controller';
import { MitarbeiterController } from './mitarbeiter.controller';

@injectable()
export class MainController implements RESTController {
    constructor(private mitarbeiterController: MitarbeiterController) { }

    initRoutes(): void {
        this.mitarbeiterController.initRoutes();
    }
}
