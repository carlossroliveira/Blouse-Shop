// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
// -------------------------------------------------
// Hooks
// -------------------------------------------------
import { useAuth } from '../../hooks/useAuth';
// -------------------------------------------------
// Component
// -------------------------------------------------
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { NamePage } from '../../components/NamePage';
import { ButtonSocial } from '../../components/ButtonSocial';
// -------------------------------------------------
// Images
// -------------------------------------------------
import photo from './cr7.png';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  DivMainSC,
  DivOneSC,
  DivSecondSC,
  DivSocialSC,
  DivTwoSC,
  ImgSC,
  TitleSC,
} from './loginStyles';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.disconnected) {
    try {
      navigate('/posts');

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
          title: 'Login feito com sucesso!',
        });
      }, 1000);
    } catch (err) {
      err;
    }
  }

  return (
    <ContainerSC>
      <NamePage title="Login" />
      <DivMainSC>
        <DivOneSC>
          <DivSecondSC>
            <TitleSC>Faça seu login</TitleSC>

            <form onSubmit={(event) => auth.loginEmail(event, email, password)}>
              <Input
                name="email"
                text="Email"
                variant="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <Input
                name="senha"
                text="Senha"
                variant="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <Button type="submit" text="Entra" />
            </form>

            <DivSocialSC>
              <ButtonSocial
                text="Google"
                icon={<FcGoogle />}
                onClick={() => auth.loginGoogle()}
              />

              <ButtonSocial
                text="Github"
                icon={<BsGithub />}
                onClick={() => auth.loginGithub()}
              />
            </DivSocialSC>

            <Footer color="white" />
          </DivSecondSC>
        </DivOneSC>

        <DivTwoSC>
          <ImgSC src={photo} alt="Background image" />
        </DivTwoSC>
      </DivMainSC>
    </ContainerSC>
  );
};
