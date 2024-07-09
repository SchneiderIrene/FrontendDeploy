import { FC } from 'react';
import { ModalProps } from './types';
import { ModalOverlay, ModalContent} from './styles';

const Modal: FC<ModalProps> = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;