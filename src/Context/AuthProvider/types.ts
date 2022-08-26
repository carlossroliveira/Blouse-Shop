/* eslint-disable no-unused-vars */
// -------------------------------------------------
// Packages
// -------------------------------------------------
import { FormEvent, ReactNode } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------

export interface IUser {
  email?: string | null;
  token?: string | undefined;
}

export interface IContext extends IUser {
  disconnected: boolean;
  logout: () => void;
  loginGithub: () => void;
  loginGoogle: () => void;
  loginEmail: (event: FormEvent, email: string, password: string) => void;
}

export interface IAuthProvider {
  children: ReactNode | JSX.Element;
}
