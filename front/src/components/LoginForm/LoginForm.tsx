import { Form } from 'react-final-form';

interface FormTypes {
  firstName?: string;
  lastname?: string;
  username?: string;
  email: string;
  city?: string;
  password: string;
}

export const LoginForm = () => {
  const onSubmit = () => {

  }

  return <Form<FormTypes> onSubmit={onSubmit}></Form>;
};
