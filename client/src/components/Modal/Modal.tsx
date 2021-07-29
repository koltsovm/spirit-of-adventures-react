import Dialog from '@material-ui/core/Dialog';
import {  } from '../Header/Header';
import { LoginForm } from '../LoginForm/LoginForm';
import { SignUpForm } from '../SignUpForm/SignUpForm';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoginButton: boolean;
  isSignUpButton: boolean;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, isLoginButton, isSignUpButton }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      {isSignUpButton ? <SignUpForm setModal={onClose} /> : null}
      {isLoginButton ? <LoginForm setModal={onClose} /> : null}
    </Dialog>
  );
};
