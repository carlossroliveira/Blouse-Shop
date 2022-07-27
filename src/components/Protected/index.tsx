// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useAuth } from '../../hooks/useAuth';

export const Protected = ({
  children: children,
}: {
  children: JSX.Element;
}) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>Você não tem acesso!</h1>;
  }

  return children;
};
