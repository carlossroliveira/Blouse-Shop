// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
/* import Swal from 'sweetalert2'; */
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useAuth } from '../../hooks/useAuth';
// -------------------------------------------------
// Component
// -------------------------------------------------
/* import { Login } from '../../pages/Login'; */
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ProtectedProps } from './types';

export const Protected = (props: ProtectedProps) => {
  const auth = useAuth();

  /* const handleSwal = useMemo(() => {
    Swal.fire({
      title: 'Acesso Negado',
      text: 'Você não tem acesso a essa rota!',
      icon: 'warning',
      showCancelButton: false,
    });
  }, []); */

  return (
    <>
      {!auth.disconnected ? (
        <>
          <h1>ERRRO!!!</h1>
        </>
      ) : (
        props.children
      )}
    </>
  );
};
