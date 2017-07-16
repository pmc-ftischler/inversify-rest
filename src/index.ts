import 'reflect-metadata';
import { appContainer } from './config/inversify.config';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as bodyParser from 'body-parser';

const port = process.env.PORT || 3000;

const server = new InversifyExpressServer(appContainer);

server.setConfig(app => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.listen(port);
});

server.build();
console.log(`Server is listening on port ${port}`);
