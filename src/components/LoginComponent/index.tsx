import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const LoginComponent = () => {
  const NAVIGATION = useNavigate();
  const auth = useAuth();

  async function onFinish(values: { email: string; password: string }) {
    try {
      await auth.authenticate(values.email, values.password);

      NAVIGATION('/profile');
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <form onSubmit={onFinish}>
        <div>
          <input type="text" placeholder="email" />
        </div>
        <div>
          <input type="text" placeholder="Senha" />
        </div>
        <button type="submit">Logar</button>
      </form>
    </>
  );
};
