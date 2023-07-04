import '../index.scss';
import { Header } from '../components/header/header';
import Footer from '../components/footer/footer';
import AuthModal from '../components/modals/auth-modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { setIsAuthModal } from '../redux/actions/appActions';
import AccountPage from './account-page';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthModal, authType } = useSelector(({ app }: RootState) => app);

  const onCloseAuthModal = () => {
    dispatch(setIsAuthModal(!isAuthModal));
  }
  return (
    <>
      <Header />
      <AccountPage/>
      <Footer/>
      <AuthModal isOpen={isAuthModal} onClose={onCloseAuthModal} authType={authType}/>
    </>
  );
};
