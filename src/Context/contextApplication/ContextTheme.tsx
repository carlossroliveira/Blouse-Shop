// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { createContext, useContext } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IContextApplication, IContextApplicationProvider } from './types';

const Context = createContext({} as IContextApplication);

export const ThemeProviderApplication = ({
  children,
}: IContextApplicationProvider): JSX.Element => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export const useMyHookApplication = (): IContextApplication =>
  useContext(Context);
