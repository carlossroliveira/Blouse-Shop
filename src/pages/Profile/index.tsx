// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { FormEvent } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useAuth } from '../../hooks/useAuth';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { BlouseStore } from '../blouseStore';

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleClose = async (event: FormEvent) => {
    event.preventDefault();

    try {
      auth.logout();
      navigate('/');

      setTimeout(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Deslogado com sucesso!',
        });
      }, 1000);
    } catch (err) {
      err;
    }
  };

  return (
    <>
      <h1>Logado</h1>

      <BlouseStore />

      <button onClick={handleClose}>Sair</button>
    </>
  );
};
