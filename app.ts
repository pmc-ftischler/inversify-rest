import * as express from 'express';
import 'reflect-metadata';
import { appContainer } from './config/inversify.config';
import { MainController } from './controller/main.controller';

export const app = express();
const port = process.env.PORT || 3000;

const mainController = appContainer.get<MainController>(MainController);

mainController.initRoutes();

app.listen(port, () => {
    console.log(`App is listening on port ${port}!`);
});
