import { Container } from 'inversify';
import { MainController } from '../controller/main.controller';
import { MitarbeiterController } from '../controller/mitarbeiter.controller';

export const appContainer = new Container();
appContainer.bind<MainController>(MainController).toSelf();
appContainer.bind<MitarbeiterController>(MitarbeiterController).toSelf();
