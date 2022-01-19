import { Person } from "./Person";
import { VisaStatus } from "./VisaStatus";

export interface Employee {
  PersonID: number;
  title?: string;
  managerID: number;
  startDate: string;
  endDate: string;
  avatar: string;
  car: string;
  visaStatusID: string;
  visaStartDate: string;
  visaEndDate: string;
  driverLicense: string;
  driverLicense_ExpirationDate: string;
  person: Person;
  visaStatus: VisaStatus;
  ID: number;
}