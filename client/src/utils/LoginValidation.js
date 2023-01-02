import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  firstName: yup.string(),
  lastname: yup.string(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  city: yup.string(),
  password: yup.string().min(4).max(16).required(),
})
