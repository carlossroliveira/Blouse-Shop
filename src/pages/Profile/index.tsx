// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { FormEvent } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// -------------------------------------------------
// Hooks
// -------------------------------------------------
import { useAuth } from '../../hooks/useAuth';
// -------------------------------------------------
// Component
// -------------------------------------------------
import { Footer } from '../../components/Footer';
import { NamePage } from '../../components/NamePage';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, DivFooter, DivHeader, DivMain } from './profileStyles';

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
    <ContainerSC>
      <DivHeader>
        <NamePage title="Perfil" />

        <h1>Logado</h1>

        <button onClick={handleClose}>Sair</button>
      </DivHeader>

      <DivMain>
        <Outlet />
      </DivMain>

      <DivFooter>
        <Footer />
      </DivFooter>
    </ContainerSC>
  );
};
