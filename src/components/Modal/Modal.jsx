import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Button,
  ModalWrapper,
  ModalOverlay,
  CloseModalIcon,
} from './Modal.styled';
import { ModalCard } from 'components/ModalCard/ModalCard';

const loaderModal = document.querySelector('#loadermodal-root');

export const Modal = ({ isOpen, onClose, car }) => {
  useEffect(() => {
    const close = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('keydown', close);
    };
  }, [onClose]);

  return createPortal(
    <>
      {isOpen && (
        <>
          <ModalOverlay onClick={onClose} />
          <ModalWrapper onClick={e => e.stopPropagation()}>
            <CloseModalIcon onClick={onClose} />
            <ModalCard car={car} />
            <Button type="button" onClick={() => {}}>
              Rental car
            </Button>
          </ModalWrapper>
        </>
      )}
    </>,
    loaderModal
  );
};
