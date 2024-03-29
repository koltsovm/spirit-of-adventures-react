import { Button, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import { TextField, GridSize } from '@material-ui/core';
import { ReactNode } from 'react';
import { Form } from 'react-final-form';
import { ButtonTypes } from '../header/header';
import { useDispatch } from 'react-redux';
import { setIsAuthModal } from '../../redux/actions/appActions';

interface SignInProps {
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

interface FormField {
  size: GridSize;
  field: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  formWrapper: {
    margin: '1vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
  },
  formTitle: {
    textAlign: 'center',
    margin: '10px',
  },
}));

export const LoginForm = ({ setModal }: SignInProps) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const onSubmit = () => {
    dispatch(setIsAuthModal(false));
  }; // TODO onSubmit func

  const formFields: FormField[] = [
    {
      size: 12,
      field: (
        <TextField
          type="email"
          label="E-mail"
          name="email"
          margin="none"
          required={true}
        />
      ),
    },
    {
      size: 12,
      field: (
        <TextField
          type="password"
          label="Пароль"
          name="city"
          margin="none"
          required={true}
        />
      ),
    },
  ];

  return (
    <Form<FormTypes>
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <div className={classes.formWrapper}>
            <span className={classes.formTitle}>Вход</span>
            <Paper elevation={0}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                {formFields.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
                <Grid
                  item
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                >
                  <Button variant="outlined" type="submit">
                    Войти
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </form>
      )}
    />
  );
};
