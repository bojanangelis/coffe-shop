import * as yup from 'yup';

export const CreateAccountYupSchema = yup
  .object({
    firstName: yup.string().required('First name is required*'),
    lastName: yup.string().required('Last name is required*'),
    email: yup
      .string()
      .email()
      .matches(/^(?!.*@[^,]*,)/)
      .required('Email Address is required'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[A-Za-z]/, 'Password can only contain Latin letters.')
  })
  .required();
export type CreateAccountInterface = yup.InferType<typeof CreateAccountYupSchema>;

export const SignInAccountYupSchema = yup
  .object({
    email: yup
      .string()
      .email()
      .matches(/^(?!.*@[^,]*,)/)
      .required('Email Address is required'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[A-Za-z]/, 'Password can only contain Latin letters.')
  })
  .required();
export type SignInAccountInterface = yup.InferType<typeof SignInAccountYupSchema>;
