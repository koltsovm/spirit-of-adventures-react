import Dialog from '@material-ui/core/Dialog';
import {} from '../header/header';
import { LoginForm } from '../forms/login-form';
import { SignInForm } from '../forms/sign-up-form';
import { AuthType } from '../../redux/reducers/appReducer';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  authType: AuthType;
}

const AuthModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  authType,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      {authType === 'signIn' ? <SignInForm setModal={onClose} /> : null}
      {authType === 'login' ? <LoginForm setModal={onClose} /> : null}
    </Dialog>
  );
};

export default AuthModal;
