// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useEffect, useState } from 'react';
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
import { ButtonLink } from '../../components/ButtonLink';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IBProps } from '../../utils/types';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  DivBuySC,
  DivFourSC,
  DivOneSC,
  DivSC,
  DivShieldSC,
  DivSizeSC,
  DivThreeSC,
  DivTwoSC,
  ImgSC,
  ImgShieldSC,
  ParagraphSC,
  SizeButtonSC,
} from './buyBlouseStyles';

export const BuyBlouse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [size, setSize] = useState<string | undefined>('');
  const [count, setCount] = useState<number>(Number(id) + 1);

  const { data } = useFetch<IBProps>(`http://localhost:5000/posts/${id}`);

  const verifyIsSelected = (selected: string) => size === selected;

  const leftFunction = () => count >= 1 && setCount(count - 1);

  const rightFunction = () => count <= 9 && setCount(count + 1);

  useEffect(() => {
    setSize('');
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
          <DivFourSC>
            {data?.info && (
              <ParagraphSC Info>
                <FaShippingFast /> {data?.info}
              </ParagraphSC>
            )}

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

          <DivShieldSC>
            {data?.foto?.map((item) => (
              <ImgShieldSC
                key={item.titulo}
                src={item.shield}
                alt="Escudo do time"
              />
            ))}
          </DivShieldSC>

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

            <DivBuySC>
              <ParagraphSC>
                <span>Descrição:</span> {data?.descricao}
              </ParagraphSC>

              <ButtonLink
                text="Comprar"
                onClick={() => alert('Comprar')}
                color="black"
              />

              <button onClick={() => alert('Comprar')}>aaaaaaaa</button>
            </DivBuySC>
          </DivThreeSC>
        </DivTwoSC>
      </DivSC>
    </ContainerSC>
  );
};

/* 

position: absolute;
    width: 30rem;
    right: -1rem;
    top: 7rem; 
    
    */
