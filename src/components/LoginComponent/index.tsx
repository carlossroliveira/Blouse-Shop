import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const NAVIGATION = useNavigate();
  const auth = useAuth();

  const handleSubmita = async (event: FormEvent) => {
    event.preventDefault();

    console.log(email);
    console.log(password);
    try {
      await auth.authenticate(email, password);

      NAVIGATION('/profile');
    } catch (err) {
      alert(err);
    }
  };

  /*  async function onFinish(event: any, email: string, password: string) {
    event.preventDefault();
    try {
      await auth.authenticate(email, password);

      NAVIGATION('/profile');
    } catch (err) {
      alert(err);
    }
  } */

  return (
    <>
      <form onSubmit={handleSubmita}>
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
    </>
  );
};
