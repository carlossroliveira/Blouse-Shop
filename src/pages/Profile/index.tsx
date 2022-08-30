// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useAuth } from '../../hooks/useAuth';
// -------------------------------------------------
// Component
// -------------------------------------------------
import { Footer } from '../../components/Footer';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, DivFooter, DivHeader, DivMain } from './profileStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ProfileProps } from './types';
import { NamePage } from '../../components/NamePage';

export const Profile = (props: ProfileProps) => {
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
        <NamePage title="Camisas" />
        <h1>Logado</h1>
        <button onClick={handleClose}>Sair</button>
      </DivHeader>

      <DivMain>{props.children}</DivMain>

      <DivFooter>
        <Footer />
      </DivFooter>
    </ContainerSC>
  );
};
