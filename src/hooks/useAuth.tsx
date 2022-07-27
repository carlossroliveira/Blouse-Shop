// -------------------------------------------------
// Packages
// -------------------------------------------------
import { useContext } from 'react';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { AuthContext } from '../context/AuthProvider';

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
