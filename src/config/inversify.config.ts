import { Container } from 'inversify';
import { interfaces, TYPE } from 'inversify-express-utils';
import { MitarbeiterController } from '../controller/mitarbeiter.controller';
import { MitarbeiterService } from '../services/mitarbeiter.service';
import { MainController } from '../controller/main.controller';

export const appContainer = new Container();
appContainer.bind<interfaces.Controller>(TYPE.Controller).to(MainController)
    .whenTargetNamed('MainController');
appContainer.bind<interfaces.Controller>(TYPE.Controller).to(MitarbeiterController)
    .whenTargetNamed('MitarbeiterController');
appContainer.bind<MitarbeiterService>(MitarbeiterService).toSelf();
