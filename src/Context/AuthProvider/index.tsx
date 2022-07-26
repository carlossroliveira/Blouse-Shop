// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { createContext, useContext, useState } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IAuthProvider, IContext, IUser } from './types';
// -------------------------------------------------
// Util
// -------------------------------------------------
import { LoginRequest } from './util';

const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider): JSX.Element => {
  const [user, setUser] = useState<IUser | null>();

  const authenticate = async (email: string, password: string) => {
    const response = await LoginRequest(email, password);

    const payload = { token: response.token, email };

    setUser(payload);
  };

  const logout = (): void => {};

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/* export const useMyHookApplication = (): IContextApplication =>
  useContext(AuthContext); */
