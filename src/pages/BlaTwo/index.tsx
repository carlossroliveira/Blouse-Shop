import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

export const BlaTwo = () => {
  const { id } = useParams();

  const { data } = useFetch<any>(`http://localhost:5000/posts/${id}`);

  return (
    <>
      <h2 className="cartao__titulo">{data?.marca}</h2>
      <h2 className="cartao__titulo">{data?.descricao}</h2>
    </>
  );
};
