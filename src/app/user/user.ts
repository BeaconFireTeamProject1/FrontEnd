export interface User {
  ID: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  preferredName: string | null;
  avatar: string;
  DOB: string;
  gender: string;
  ssn: string;
  driverLicense: string;
  driverLicense_ExpirationDate: string;
  addresses: Address[];
  email: string;
  cellphone: string;
  alternatePhone: string;
  employment: Employment;
  contact: Contact[];
  documents: Documents[];
}
interface Address {
  ID: number;
  addressline1: string;
  addressline2: string;
  city: string;
  state: string;
  zipcode: string;
}

interface Employment {
  workAuthorization: string;
  authorizationStartDate: string;
  authorizationEndDate: string;
  employmentStartDate: string;
  employmentEndDate: string;
  title: string;
}
interface Contact {
  ID: number;
  FirstName: string;
  LastName: string;
  cellphone: string;
  email: string;
  address: Address;
  relationship: string;
  emergency: boolean;
}

interface Documents {
  name: string;
  icon: string;
}