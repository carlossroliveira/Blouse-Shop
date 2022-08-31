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

import { ContainerSC } from './blousesStyles';

export const Blouses = () => {
  const { data } = useFetch<IBProps[]>('http://localhost:5000/posts');

  return (
    <ContainerSC>
      <ul>
        {data?.map((post: IBProps) => (
          <>
            {console.log(post.foto?.map((item) => item.titulo))}
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.marca}</Link>

              <div>{post.foto?.map((item) => item.titulo)}</div>

              <img src={`${post.foto?.map((item) => item.src)}`} alt="aa" />

              <div>{post.marca}</div>
              <div>{post.preco}</div>
              <div>{post.tamanho}</div>
              <div>{post.tecido}</div>
              <div>{post.descricao}</div>
            </li>
          </>
        ))}
      </ul>
    </ContainerSC>
  );
};
