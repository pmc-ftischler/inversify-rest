import { injectable } from 'inversify';
import { MitarbeiterService } from '../services/mitarbeiter.service';
import { Request } from 'express';
import { controller, httpGet } from 'inversify-express-utils';
import { ROUTES } from '../config/routes.config';

@injectable()
@controller(ROUTES.mitarbeiter)
export class MitarbeiterController {
    constructor(private mitarbeiterService: MitarbeiterService) {
    }

    @httpGet('/')
    private getAllMitarbeiter() {
        return this.mitarbeiterService.getMitarbeiterListe();
    }

    @httpGet('/:id')
    private getMitarbeiter(req: Request) {
        const mitarbeiter = this.mitarbeiterService.getMitarbeiterListe()
            .find(ma => ma._id === req.params.id);
        return mitarbeiter;
    }
}
