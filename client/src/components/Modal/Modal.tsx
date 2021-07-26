import Dialog from '@material-ui/core/Dialog';
import { ButtonTypes } from '../Header/Header';
import { SignUpForm } from '../SignUpForm/SignUpForm';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: ButtonTypes;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, modalType }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      {modalType === 'signup' ? <SignUpForm setModal={onClose} /> : null}
    </Dialog>
  );
};
