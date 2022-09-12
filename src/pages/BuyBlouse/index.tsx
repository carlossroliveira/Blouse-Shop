// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useCallback, useState } from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
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
  DivOneSC,
  DivSC,
  DivSizeSC,
  DivThreeSC,
  DivTwoSC,
  ImgSC,
  ParagraphSC,
  SizeButtonSC,
} from './buyBlouseStyles';

export const BuyBlouse = () => {
  const { id } = useParams();
  const { data } = useFetch<IBProps>(`http://localhost:5000/posts/${id}`);

  const [size, setSize] = useState<string | undefined>('');

  const verifyIsSelected = useCallback(
    (selected: string) => {
      return size === selected;
    },
    [size],
  );

  const navigate = useNavigate();

  const [count, setCount] = useState<number>(Number(id) + 1);

  const leftFunction = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const rightFunction = () => {
    if (count <= 9) {
      setCount(count + 1);
    }
  };

  React.useEffect(() => {
    navigate(`/posts/0${count}`);
  }, [count, navigate]);

  return (
    <ContainerSC>
      <NamePage title="Camisas" />

      <DivSC>
        <DivOneSC>
          <button
            disabled={Number(id) === 1 ? true : false}
            onClick={leftFunction}
          >
            <BsArrowLeftCircle />
          </button>
          <ImgSC
            src={`${data?.foto?.map((item) => item.src)}`}
            alt="Camisa de time"
          />
          <button
            disabled={Number(id) === 9 ? true : false}
            onClick={rightFunction}
          >
            <BsArrowRightCircle />
          </button>
        </DivOneSC>

        <DivTwoSC>
          {data?.info && (
            <ParagraphSC Info>
              <FaShippingFast /> {data?.info}
            </ParagraphSC>
          )}

          <DivFourSC>
            <ParagraphSC Title>
              {data?.foto?.map((item) => item.titulo)}
            </ParagraphSC>

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
              <span>Tamanho: {size}</span>

              <DivSizeSC>
                {data?.tamanho?.slice(0, 1) && (
                  <SizeButtonSC
                    Background={verifyIsSelected(data?.tamanho?.slice(0, 1))}
                    onClick={() => setSize(data?.tamanho?.slice(0, 1))}
                  >
                    {data?.tamanho?.slice(0, 1)}
                  </SizeButtonSC>
                )}

                {data?.tamanho?.slice(3, 4) && (
                  <SizeButtonSC
                    Background={verifyIsSelected(data?.tamanho?.slice(3, 4))}
                    onClick={() => setSize(data?.tamanho?.slice(3, 4))}
                  >
                    {data?.tamanho?.slice(3, 4)}
                  </SizeButtonSC>
                )}

                {data?.tamanho?.slice(6, 7) && (
                  <SizeButtonSC
                    Background={verifyIsSelected(data?.tamanho?.slice(6, 7))}
                    onClick={() => setSize(data?.tamanho?.slice(6, 7))}
                  >
                    {data?.tamanho?.slice(6, 7)}
                  </SizeButtonSC>
                )}

                {data?.tamanho?.slice(9, 11) && (
                  <SizeButtonSC
                    Background={verifyIsSelected(data?.tamanho?.slice(9, 11))}
                    onClick={() => setSize(data?.tamanho?.slice(9, 11))}
                  >
                    {data?.tamanho?.slice(9, 11)}
                  </SizeButtonSC>
                )}

                {data?.tamanho?.slice(13, 16) && (
                  <SizeButtonSC
                    Background={verifyIsSelected(data?.tamanho?.slice(13, 16))}
                    onClick={() => setSize(data?.tamanho?.slice(13, 16))}
                  >
                    {data?.tamanho?.slice(13, 16)}
                  </SizeButtonSC>
                )}

                {data?.tamanho?.slice(18, 22) && (
                  <SizeButtonSC
                    Background={verifyIsSelected(data?.tamanho?.slice(18, 22))}
                    onClick={() => setSize(data?.tamanho?.slice(18, 22))}
                  >
                    {data?.tamanho?.slice(18, 22)}
                  </SizeButtonSC>
                )}
              </DivSizeSC>
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
