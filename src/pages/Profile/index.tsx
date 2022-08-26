import React, { FormEvent } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { BlouseStore } from '../blouseStore';

export const Profile = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmita = async (event: FormEvent) => {
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
      alert(err);
    }
  };

  return (
    <div>
      <>
        <h1>Logado</h1>

        <BlouseStore />

        <button onClick={handleSubmita}>Sair</button>
      </>
    </div>
  );
};
