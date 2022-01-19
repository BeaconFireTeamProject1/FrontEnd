import { Person } from "./Person";

export interface VisaStatus {
  visaType: string;
  active: boolean;
  createUser: number;
  person: Person;
  ID: number;
}