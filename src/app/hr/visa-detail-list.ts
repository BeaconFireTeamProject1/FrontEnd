export interface VisaDetailList {
  name: string;
  visaType: string;
  startDate: string;
  endDate: string;
  documentList: Docs[];
  type: string;
}

interface Docs {
  id: number;
  path: string;
  title: string;
  comment: string;
  employeeID: number;
}