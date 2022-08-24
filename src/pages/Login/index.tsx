// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useAuth } from '../../hooks/useAuth';
// -------------------------------------------------
// Component
// -------------------------------------------------
import { Input } from '../../components/Input';
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
  DivTwoSC,
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
              <div>
                <Input
                  name="name"
                  text="Name"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div>
                <Input
                  name="senha"
                  text="Senha"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <button>Entra</button>
            </form>

            <div>
              <button>Continue com Google</button>
              <button>Continue com Github</button>
            </div>
          </DivSecondSC>
        </DivOneSC>

        <DivTwoSC>
          <img src={photo} alt="Background image" />
        </DivTwoSC>
      </DivMainSC>
    </ContainerSC>
  );
};
