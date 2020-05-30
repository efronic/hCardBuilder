import { Avatar } from './avatar';

export interface HCard {
  givenName: string;
  surname: string;
  email: string;
  phone: string;
  houseno: string;
  street: string;
  suburb: string;
  state: string;
  postcode: number;
  country: string;
  avatar: Avatar;
}
