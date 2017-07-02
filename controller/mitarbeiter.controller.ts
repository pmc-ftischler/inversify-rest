import * as fs from 'fs';
import { injectable } from 'inversify';
import * as path from 'path';
import { app } from '../app';
import { Mitarbeiter } from '../model/mitarbeiter';
import { RESTController } from '../model/rest-controller';

/**
 * Controller for mitarbeiter routes
 * @class MitarbeiterController
 * @implements RESTController
 */
@injectable()
export class MitarbeiterController implements RESTController {
    private static mitarbeiterListe: Mitarbeiter[] = [];

    /**
     * Constructor for MitarbeiterController
     */
    constructor() {
        try {
            const fileBuffer = fs.readFileSync(path.join(__dirname, '..', 'data', 'mitarbeiter.json'));
            MitarbeiterController.mitarbeiterListe = JSON.parse(fileBuffer.toString());
        } catch (e) {
            console.warn('File could not be loaded');
        }
    }

    /**
     * Init for routes of this controller
     */
    initRoutes() {
        app.get('/api/mitarbeiter', this.getAllMitarbeiter);
        app.get('/api/mitarbeiter/:id', this.getMitarbeiter);
    }

    /**
     * Route middleware for getting all employees
     * @param req
     * @param res
     * @param next
     */
    private getAllMitarbeiter(req?, res?, next?) {
        res.json(MitarbeiterController.mitarbeiterListe);
    }

    /**
     * Route middlerware for getting a specific employee by ID
     * @param req
     * @param res
     * @param next
     */
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
