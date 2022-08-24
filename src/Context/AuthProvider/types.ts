/* eslint-disable no-unused-vars */
// -------------------------------------------------
// Packages
// -------------------------------------------------
import { ReactNode } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------

export interface IUser {
  email?: string;
  token?: string;
}

export interface IContext extends IUser {
  logout: () => void;
  authenticate: (email: string, password: string) => Promise<void>;
}

export interface IAuthProvider {
  children: ReactNode | JSX.Element;
}
