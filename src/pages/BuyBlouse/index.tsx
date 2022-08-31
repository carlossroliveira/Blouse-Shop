import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

import { IBProps } from '../../utils/types';
import { NamePage } from '../../components/NamePage';

export const BuyBlouse = () => {
  const { id } = useParams();

  const { data } = useFetch<IBProps>(`http://localhost:5000/posts/${id}`);

  return (
    <>
      <NamePage title="Camisas" />
      <h2>{data?.marca}</h2>
      <h2>{data?.descricao}</h2>
    </>
  );
};
