import { injectable } from 'inversify';
import { Mitarbeiter } from '../model/mitarbeiter';
import * as fs from 'fs';
import * as path from 'path';

@injectable()
export class MitarbeiterService {
    private mitarbeiterListe: Mitarbeiter[];

    constructor() {
        const fileBuffer = fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'mitarbeiter.json'));
        this.mitarbeiterListe = JSON.parse(fileBuffer.toString());
    }

    public getMitarbeiterListe(): Mitarbeiter[] {
        return this.mitarbeiterListe;
    }
}
