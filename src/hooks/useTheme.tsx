// -------------------------------------------------
// Packages
// -------------------------------------------------
import { useContext } from 'react';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { ContextProvider } from '../context/themes/ContextTheme';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IContextProvider } from '../context/themes/types';

export const useTheme = (): IContextProvider => {
  const context = useContext(ContextProvider);

  return context;
};
