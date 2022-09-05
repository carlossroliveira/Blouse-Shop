// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';
// -------------------------------------------------
// Hooks
// -------------------------------------------------
import { useFetch } from '../../hooks/useFetch';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IBProps } from '../../utils/types';

import { ContainerSC, ImgSC, ParagraphSC, TituloSC } from './blousesStyles';

export const Blouses = () => {
  const { data } = useFetch<IBProps[]>('http://localhost:5000/posts');

  return (
    <ContainerSC>
      <ul>
        {data?.map((post: IBProps) => (
          <>
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <ImgSC
                  src={`${post.foto?.map((item) => item.src)}`}
                  alt="Camisa de time"
                />
              </Link>

              <TituloSC>{post.foto?.map((item) => item.titulo)}</TituloSC>

              <ParagraphSC>{post.marca}</ParagraphSC>
              <ParagraphSC>{post.preco}</ParagraphSC>
            </li>
          </>
        ))}
      </ul>
    </ContainerSC>
  );
};
