import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

import { IBProps } from '../../utils/types';
import { NamePage } from '../../components/NamePage';
import { ContainerSC, DivSC } from './buyBlouseStyles';

export const BuyBlouse = () => {
  const { id } = useParams();

  const { data } = useFetch<IBProps>(`http://localhost:5000/posts/${id}`);

  return (
    <ContainerSC>
      <NamePage title="Camisas" />

      <DivSC>
        <img
          src={`${data?.foto?.map((item) => item.src)}`}
          alt="Camisa de time"
        />

        <p>{data?.foto?.map((item) => item.titulo)}</p>

        <p>{data?.marca}</p>
        <p>{data?.preco}</p>

        <p>{data?.tamanho}</p>
        <p>{data?.tecido}</p>

        <p>{data?.descricao}</p>
      </DivSC>
    </ContainerSC>
  );
};
