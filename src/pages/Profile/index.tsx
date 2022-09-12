// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { FormEvent } from 'react';
import Swal from 'sweetalert2';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// -------------------------------------------------
// Hooks
// -------------------------------------------------
import { useAuth } from '../../hooks/useAuth';
// -------------------------------------------------
// Component
// -------------------------------------------------
import { Title } from '../../components/Title';
import { Footer } from '../../components/Footer';
import { NamePage } from '../../components/NamePage';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ButtonSC,
  ContainerSC,
  DivFooter,
  DivMain,
  HeaderSC,
  NavSC,
} from './profileStyles';

export const Profile = () => {
  const auth = useAuth();
  const path = useLocation();
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
      <NamePage title="Perfil" />

      <HeaderSC>
        {path.pathname === '/posts' ? (
          <Title title={'Blouse Shop'} />
        ) : (
          <Title title={'Blouse'} />
        )}

        <NavSC>
          <ul>
            <li>
              <ButtonSC
                disabled={path.pathname === '/posts' ? true : false}
                onClick={() => navigate('/posts')}
              >
                Lista
              </ButtonSC>
            </li>

            <li>
              <ButtonSC onClick={handleClose}>Sair</ButtonSC>
            </li>
          </ul>
        </NavSC>
      </HeaderSC>

      <DivMain>
        <Outlet />
      </DivMain>

      <DivFooter>
        <Footer color="black" />
      </DivFooter>
    </ContainerSC>
  );
};
