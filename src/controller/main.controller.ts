import { injectable } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import { ROUTES } from '../config/routes.config';

@injectable()
@controller(ROUTES.api)
export class MainController {
    @httpGet('/test')
    public getRunningState() {
        return 'Server is running';
    }
}
