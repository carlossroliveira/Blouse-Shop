// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useState } from 'react';
import Modal from 'react-modal';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC } from './modalStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------

/* const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}; */

export const ModalComponent = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <ContainerSC>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        /* style={customStyles} */
        contentLabel="Example Modal"
      >
        aaaaaaaaaaaaaa
      </Modal>
    </ContainerSC>
  );
};
