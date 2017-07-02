import * as fs from 'fs';
import { injectable } from 'inversify';
import * as path from 'path';
import { app } from '../app';
import { Mitarbeiter } from '../model/mitarbeiter';
import { RESTController } from '../model/rest-controller';

@injectable()
export class MitarbeiterController implements RESTController {
    private static mitarbeiterListe: Mitarbeiter[] = [];

    constructor() {
        try {
            const fileBuffer = fs.readFileSync(path.join(__dirname, '..', 'data', 'mitarbeiter.json'));
            MitarbeiterController.mitarbeiterListe = JSON.parse(fileBuffer.toString());
        } catch (e) {
            console.warn('File could not be loaded');
        }
    }

    initRoutes() {
        app.get('/api/mitarbeiter', this.getAllMitarbeiter);
        app.get('/api/mitarbeiter/:id', this.getMitarbeiter);
    }

    private getAllMitarbeiter(req?, res?, next?) {
        res.json(MitarbeiterController.mitarbeiterListe);
    }

    private getMitarbeiter(req?, res?, next?) {
        const mitarbeiter = MitarbeiterController.mitarbeiterListe
            .find(ma => ma._id === req.params.id);
        if (mitarbeiter) {
            res.json(mitarbeiter);
        } else {
            res.sendStatus(404);
        }
    }
}
