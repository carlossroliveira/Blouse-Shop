// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import { useFetch } from '../../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ButtonSC,
  ContainerSC,
  customStyles,
  DivCodeZipButtonSC,
  MainSC,
  DivContentOneSC,
  DivContentSubSC,
  DivContentTwoSC,
  DivInfoSC,
  DivInfoTwoSC,
  DivInputSC,
  DivOneSC,
  DivTwoSC,
  ImgSC,
  ParagraphInfoSC,
  ParagraphSC,
  TitleSC,
} from './modalStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IBProps } from '../../utils/types';

export const ModalComponent = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data } = useFetch<IBProps>(`http://localhost:5000/posts/${id}`);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const [generator, setGenerator] = useState<string>('');

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const handleFinish = () => {
    try {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'success',
        title: 'Compra feita com sucesso!',
      });

      setTimeout(() => {
        navigate('/posts');
      }, 3000);
    } catch (err) {
      err;
    }
  };

  const handleGenerator = () =>
    setGenerator(`receba até ${Math.floor(Math.random() * 30)} de setembro`);

  return (
    <>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <ContainerSC>
          <DivOneSC>
            <TitleSC>minha cesta</TitleSC>

            <DivInfoSC>
              <ParagraphInfoSC>produto</ParagraphInfoSC>
              <ParagraphInfoSC>entrega</ParagraphInfoSC>
            </DivInfoSC>

            <DivInfoTwoSC>
              <ParagraphInfoSC>
                <ImgSC
                  src={`${data?.foto?.map((item) => item.src)}`}
                  alt="Imagem da camisa"
                />

                <h4>{data?.foto?.map((item) => item.titulo)}</h4>
              </ParagraphInfoSC>

              <ParagraphInfoSC> {generator ? generator : '-'} </ParagraphInfoSC>
            </DivInfoTwoSC>
          </DivOneSC>

          <DivTwoSC>
            <TitleSC>resumo do pedido</TitleSC>

            <DivContentOneSC>
              <DivContentSubSC>
                <ParagraphSC>1 produto</ParagraphSC>

                <ParagraphSC>
                  {data?.preco?.map((item) => (
                    <>R$ {item.valorInicial}</>
                  ))}
                </ParagraphSC>
              </DivContentSubSC>

              <ParagraphSC>frete {generator && ': gratis'}</ParagraphSC>
            </DivContentOneSC>

            <div>
              <DivContentSubSC>
                <h4>total</h4>
                <h3>
                  {data?.preco?.map((item) => (
                    <>R$ {item.valorInicial}</>
                  ))}
                </h3>
              </DivContentSubSC>

              <DivContentTwoSC>
                <ParagraphSC>em até 1x sem juros</ParagraphSC>

                <ParagraphSC>
                  {data?.preco?.map((item) => (
                    <>R$ {item.valorInicial}</>
                  ))}{' '}
                  no boleto
                </ParagraphSC>

                <ParagraphSC>
                  {data?.preco?.map((item) => (
                    <>R$ {item.valorInicial}</>
                  ))}
                  em 1x no cartão de crédito ame
                </ParagraphSC>

                <ParagraphSC>
                  {data?.preco?.map((item) => (
                    <>R$ {item.valorInicial}</>
                  ))}{' '}
                  no pix
                </ParagraphSC>
              </DivContentTwoSC>
            </div>

            <h4>calcule frete e prazo</h4>

            <MainSC>
              <DivInputSC type="text" placeholder="Ex: 41900-000" />

              <DivCodeZipButtonSC onClick={handleGenerator}>
                ok
              </DivCodeZipButtonSC>
            </MainSC>

            <ButtonSC onClick={handleFinish}>Finalizar</ButtonSC>
          </DivTwoSC>
        </ContainerSC>
      </Modal>
    </>
  );
};
