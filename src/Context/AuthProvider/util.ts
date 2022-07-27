// -------------------------------------------------
// Services
// -------------------------------------------------
import { Api } from '../../services/api';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IUser } from './types';

export const setUserLocalStorage = (user: IUser | null) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserLocalStorage = () => {
  const myJson = localStorage.getItem('user');

  if (!myJson) {
    return null;
  }

  const user = JSON.parse(myJson);

  return user ?? null;
};

export const LoginRequest = async (email: string, password: string) => {
  try {
    const response = await Api.post('login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return null;
  }
};
