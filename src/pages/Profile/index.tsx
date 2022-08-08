import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { BlouseStore } from '../blouseStore';

export const Profile = () => {
  const NAVIGATION = useNavigate();
  const auth = useAuth();

  const handleSubmita = async (event: FormEvent) => {
    event.preventDefault();

    try {
      auth.logout();
      NAVIGATION('/');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <>
        <h1>Logado</h1>

        <BlouseStore />

        <button onClick={handleSubmita}>Sair</button>
      </>
    </div>
  );
};