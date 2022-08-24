// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useMemo } from 'react';
import Swal from 'sweetalert2';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useAuth } from '../../hooks/useAuth';
// -------------------------------------------------
// Component
// -------------------------------------------------
import { Login } from '../Login';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ProtectedProps } from './types';

export const Protected = (props: ProtectedProps) => {
  const auth = useAuth();

  const handleSwal = useMemo(() => {
    Swal.fire({
      title: 'Acesso Negado',
      text: 'Você não tem acesso a essa rota!',
      icon: 'warning',
      showCancelButton: false,
    });
  }, []);

  return (
    <>
      {!auth.email ? (
        <>
          <Login />
          {handleSwal}
        </>
      ) : (
        props.children
      )}
    </>
  );
};
