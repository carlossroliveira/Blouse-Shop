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
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  DivMainSC,
  DivOneSC,
  DivSecondSC,
  DivTwoSC,
  Tes,
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
            <form onSubmit={handleSubmits}>
              <div>
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Senha"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button type="submit">Logar</button>
            </form>

            <button>google</button>
            <button>github</button>
          </DivSecondSC>
        </DivOneSC>

        <Tes>
          <img
            src="https://img.wallpapic-br.com/i8281-813-87/medium/futebol-desenhos-animados-jogador-de-design-grafico-imagem-de-fundo.jpg"
            alt=""
          />
        </Tes>

        <DivTwoSC>aa</DivTwoSC>
      </DivMainSC>
    </ContainerSC>
  );
};
