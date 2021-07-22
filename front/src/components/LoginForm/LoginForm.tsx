import { Field, Form } from 'react-final-form';
import { ButtonTypes } from '../Header/Header';

interface LoginProps {
  setModal: (buttonType: ButtonTypes) => void;
}

interface FormTypes {
  firstName?: string;
  lastname?: string;
  username?: string;
  email: string;
  city?: string;
  password: string;
}

export const LoginForm = ({setModal}: LoginProps) => {
  const onSubmit = () => {}; // TODO onSubmit func
  return (
    <Form<FormTypes>
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form">
            <span>Вход</span>
            <Field name="username">
              <div>
                <label>Никнейм</label>
                <input type="text" placeholder="Никнейм" />
              </div>
            </Field>
            <Field name="password">
              <div>
                <label>Пароль</label>
                <input type="text" placeholder="Пароль" />
              </div>
            </Field>
          </div>
          <button type="submit">Войти</button>
        </form>
      )}
    />
  );
};
