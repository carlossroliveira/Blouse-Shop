import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const auth = useAuth();
  navigate('/profile');

  const handleSubmita = async (event: FormEvent) => {
    event.preventDefault();

    console.log(email);
    console.log(password);
    try {
      await auth.authenticate(email, password);
    } catch (err) {
      alert(err);
    }
  };

  return (
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
  );
};
