import { Address } from './Address';
import { Contact } from './Contact';
import { Employee } from './Employee';

export interface GetEmployeeDetail {
  employee: Employee;
  contact: Contact;
  addresses: Address[];
}