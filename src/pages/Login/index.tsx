// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useAuth } from '../../hooks/useAuth';
// -------------------------------------------------
// Component
// -------------------------------------------------
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmits = async (event: FormEvent) => {
    event.preventDefault();

    console.log(email);
    console.log(password);

    try {
      await auth.authenticate(email, password);

      navigate('/profile');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <ContainerSC>
      <DivMainSC>
        <DivOneSC>
          <DivSecondSC>
            <TitleSC>Faça seu login</TitleSC>

            <form onSubmit={handleSubmits}>
              <Input
                name="name"
                text="Name"
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
              <ButtonSocial text="Google" icon={<FcGoogle />} />
              <ButtonSocial text="Github" icon={<BsGithub />} />
            </DivSocialSC>

            <Footer />
          </DivSecondSC>
        </DivOneSC>

        <DivTwoSC>
          <ImgSC src={photo} alt="Background image" />
        </DivTwoSC>
      </DivMainSC>
    </ContainerSC>
  );
};
