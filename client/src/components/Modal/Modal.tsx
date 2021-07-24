import Dialog from '@material-ui/core/Dialog';
import { ButtonTypes } from '../Header/Header';
import { LoginForm } from '../LoginForm/LoginForm';

interface ModalProps {
  isOpen: boolean;
  onClose: (buttonType: ButtonTypes) => void;
  modalType: ButtonTypes;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, modalType }) => {
  return (
    <Dialog open={isOpen} onClose={() => onClose}>
      {modalType === 'login' ? <LoginForm setModal={onClose} /> : null}
    </Dialog>
  );
};
