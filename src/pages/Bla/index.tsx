import React from 'react';
import { useParams } from 'react-router-dom';

export const Bla = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Bla bla {id}</h1>
    </>
  );
};
