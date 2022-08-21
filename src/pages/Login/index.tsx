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
import { ContainerSC, DivOneSC, DivTwoSC } from './loginStyles';

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
      <DivOneSC>IMG</DivOneSC>

      <DivTwoSC>
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
      </DivTwoSC>
    </ContainerSC>
  );
};
