// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useParams } from 'react-router-dom';
import { FaShippingFast } from 'react-icons/fa';
// -------------------------------------------------
// Hooks
// -------------------------------------------------
import { useFetch } from '../../hooks/useFetch';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { NamePage } from '../../components/NamePage';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IBProps } from '../../utils/types';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  DivFourSC,
  DivSC,
  DivThreeSC,
  DivTwoSC,
  ImgSC,
  ParagraphSC,
  SizeSC,
} from './buyBlouseStyles';

export const BuyBlouse = () => {
  const { id } = useParams();
  const { data } = useFetch<IBProps>(`http://localhost:5000/posts/${id}`);

  return (
    <ContainerSC>
      <NamePage title="Camisas" />

      <DivSC>
        <ImgSC
          src={`${data?.foto?.map((item) => item.src)}`}
          alt="Camisa de time"
        />

        <DivTwoSC>
          {data?.info && (
            <ParagraphSC Info>
              <FaShippingFast /> {data?.info}
            </ParagraphSC>
          )}

          <ParagraphSC Title>
            {data?.foto?.map((item) => item.titulo)}
          </ParagraphSC>

          <DivFourSC>
            {data?.preco?.map((item, index) => (
              <>
                <ParagraphSC Inactive key={index}>
                  R$ {item.valorInativo}
                </ParagraphSC>

                <ParagraphSC Installments>R$ {item.valorInicial}</ParagraphSC>

                <ParagraphSC InstallmentsTwo>
                  Ou {item.valorIniParcelado}x de R$ {item.valorInaParcelado}{' '}
                  sem juros
                </ParagraphSC>
              </>
            ))}
          </DivFourSC>

          <DivThreeSC>
            <ParagraphSC>
              <span>Tamanho:</span>
              <SizeSC>{data?.tamanho?.slice(0, 1)}</SizeSC>
              <SizeSC>{data?.tamanho?.slice(2, 4)}</SizeSC>
            </ParagraphSC>
            <ParagraphSC>
              <span>Tercido:</span> {data?.tecido}
            </ParagraphSC>
            <ParagraphSC>
              <span>Marca:</span> {data?.marca}
            </ParagraphSC>
            <ParagraphSC>
              <span>Descrição:</span> {data?.descricao}
            </ParagraphSC>
          </DivThreeSC>
        </DivTwoSC>
      </DivSC>
    </ContainerSC>
  );
};
