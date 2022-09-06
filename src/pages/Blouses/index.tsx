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
// Components
// -------------------------------------------------
import { Button } from '../../components/Button';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IBProps } from '../../utils/types';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  DivSC,
  ImgSC,
  ParagraphSC,
  TituloSC,
} from './blousesStyles';

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

              <ParagraphSC info>{post.info}</ParagraphSC>

              {post.preco?.map((item, index) => (
                <>
                  <ParagraphSC Inactive key={index}>
                    R$ {item.valorInativo}
                  </ParagraphSC>

                  <ParagraphSC installments>R$ {item.valorInicial}</ParagraphSC>

                  <ParagraphSC>
                    Ou {item.valorIniParcelado}x de R$ {item.valorInaParcelado}
                  </ParagraphSC>
                </>
              ))}

              <DivSC>
                <Link to={`/posts/${post.id}`}>
                  <Button text="Conferir" />
                </Link>
              </DivSC>
            </li>
          </>
        ))}
      </ul>
    </ContainerSC>
  );
};
