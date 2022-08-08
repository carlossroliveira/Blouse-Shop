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
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: ReactNode | JSX.Element;
}