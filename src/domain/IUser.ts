import { IAddress, ICompany } from './module';

export interface IUser {
  id: number;
  name: string,
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}
