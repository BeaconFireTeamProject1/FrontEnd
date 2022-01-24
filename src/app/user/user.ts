export interface User {
  firstName: string;
  lastName: string;
  middleName: string;
  avatar: string;
  gender: string;
  driverLicense: string;
  driverLicenseExpirationDate: string;
  email: string;
  cellPhone: string;
  alternatePhone: string;
  employment: Employment;
  contact: Contact[];
  addressList: Address[];
  documents: Documents[];
  id: string;
  dob: string;
  ssn: string;
}
interface Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipcode: string;
  personId: number;
  id: number;
}

interface Employment {
  visaType: string;
  startDate: string;
  endDate: string;
  visaStartDate: string;
  visaEndDate: string;
  title: string;
}
interface Contact {
  personId: number;
  name: string;
  phone: string;
  address: string;
  relationship: string;
  title: string;
  id: number;
  isReferrence: boolean;
  isEmergency: boolean;
}

interface Documents {
  title: string;
  path: string;
  comment: string;
}