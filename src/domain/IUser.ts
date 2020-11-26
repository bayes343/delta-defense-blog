import { IAddress } from './module';

export interface IUser {
  id: number;
  name: string,
  username: string;
  email: string;
  address: IAddress;
}
