import '../index.scss';
import { Header } from '../components/header/header';
import Footer from '../components/footer/footer';
import AccountPage from './profile';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <AccountPage/>
      <Footer/>
    </>
  );
};
