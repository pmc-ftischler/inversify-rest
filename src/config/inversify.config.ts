import { Container } from 'inversify';
import { interfaces, TYPE } from 'inversify-express-utils';
import { MitarbeiterController } from '../controller/mitarbeiter.controller';
import { MitarbeiterService } from '../services/mitarbeiter.service';
import { MainController } from '../controller/main.controller';
import { TAGS } from '../constant/tags';

export const appContainer = new Container();
appContainer.bind<interfaces.Controller>(TYPE.Controller).to(MainController)
    .whenTargetNamed(TAGS.MainController);
appContainer.bind<interfaces.Controller>(TYPE.Controller).to(MitarbeiterController)
    .whenTargetNamed(TAGS.MitarbeiterController);
appContainer.bind<MainController>(MainController).toSelf().inSingletonScope();
appContainer.bind<MitarbeiterService>(MitarbeiterService).toSelf().inSingletonScope();
