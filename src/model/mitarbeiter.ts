import { Abteilung } from './abteilung';

export interface Mitarbeiter {
    _id: string;
    name: string;
    email: string;
    abteilung: Abteilung;
}
