// -------------------------------------------------
// Types
// -------------------------------------------------
import { IUser } from './types';

export const setUserLocalStorage = (user: IUser | null) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserLocalStorage = () => {
  const myUser = localStorage.getItem('user');

  if (!myUser) return null;

  return JSON.parse(myUser) ?? null;
};
