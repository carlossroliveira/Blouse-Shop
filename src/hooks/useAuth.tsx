// -------------------------------------------------
// Packages
// -------------------------------------------------
import { useContext } from 'react';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { AuthContext } from '../context/AuthProvider';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IContext } from '../context/AuthProvider/types';

export const useAuth = (): IContext => {
  const context = useContext(AuthContext);

  return context;
};
