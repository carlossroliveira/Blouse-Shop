// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { Outlet } from 'react-router-dom';
// -------------------------------------------------
// Hooks
// -------------------------------------------------
import { useAuth } from '../../hooks/useAuth';
// -------------------------------------------------
// Component
// -------------------------------------------------
import { Login } from '../../pages/Login';

export const Protected = () => {
  const auth = useAuth();

  return <>{!auth.disconnected ? <Login /> : <Outlet />}</>;
};
