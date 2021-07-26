import { Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import { TextField, GridSize } from '@material-ui/core';
import { ReactNode, useEffect } from 'react';
import { Form } from 'react-final-form';
import { ButtonTypes } from '../Header/Header';

interface SignUpProps {
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
  }
}));

export const SignUpForm = ({ setModal }: SignUpProps) => {
  const classes = useStyles();
  const onSubmit = () => {}; // TODO onSubmit func

  useEffect(() => {
    console.log('FORM');
    
  }, [])

  const formFields: FormField[] = [
    {
      size: 12,
      field: (
        <TextField
          type="text"
          label="Имя"
          name="firstName"
          margin="none"
          required={true}
        />
      ),
    },
    {
      size: 12,
      field: (
        <TextField
          type="text"
          label="Фамилия"
          name="lastname"
          margin="none"
          required={false}
        />
      ),
    },
    {
      size: 12,
      field: (
        <TextField
          type="text"
          label="Никнейм"
          name="username"
          margin="none"
          required={true}
        />
      ),
    },
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
          type="text"
          label="Город"
          name="city"
          margin="none"
          required={false}
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
            <Paper>
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
              </Grid>
              <Grid>
                <button type="submit">Войти</button>
              </Grid>
            </Paper>
          </div>
        </form>
      )}
    />
  );
};
