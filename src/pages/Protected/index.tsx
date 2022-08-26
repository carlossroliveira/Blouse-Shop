// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useAuth } from '../../hooks/useAuth';
// -------------------------------------------------
// Component
// -------------------------------------------------
import { Login } from '../../pages/Login';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ProtectedProps } from './types';

export const Protected = (props: ProtectedProps) => {
  const auth = useAuth();

  return <>{!auth.disconnected ? <Login /> : props.children}</>;
};
