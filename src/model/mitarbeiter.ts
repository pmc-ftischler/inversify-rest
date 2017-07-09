import { Abteilung } from './abteilung';

/**
 * Interface for employees
 * @interface Mitarbeiter
 */
export interface Mitarbeiter {
    _id: string;
    name: string;
    email: string;
    abteilung: Abteilung;
}
