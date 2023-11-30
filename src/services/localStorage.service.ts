import { UserModel } from '@app/domain/UserModel';
const avatarImg = 'https://artofproblemsolving.com/assets/images/logos/icon-ba.svg';

const testUser = {
  id: 1,
  firstName: 'Prashant',
  lastName: 'Patil',
  imgUrl: avatarImg,
  userName: '@john1989',
  email: {
    name: 'prinostaged@gmail.com',
    verified: true,
  },
  phone: {
    number: '+91 xxxxx xxxxx',
    verified: false,
  },
  sex: 'male',
  birthday: '01/20/2001',
  lang: 'en',
  country: 'IN',
  city: 'Hyderabad',
  address1: 'GAC',
  zipcode: 500032,
  website: 'potatoe.com',
  socials: {
    twitter: '@altence_team',
    linkedin: 'https://linkedin.com/company/Thoughtspot',
  },
};

export const persistToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

export const readToken = (): string => {
  return localStorage.getItem('accessToken') || 'bearerToken';
};

export const persistUser = (user: UserModel): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
  const userStr = localStorage.getItem('user');

  return userStr ? JSON.parse(userStr) : testUser;
};

export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');
