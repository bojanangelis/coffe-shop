import * as yup from 'yup';

export const CreateAccountYupSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup
      .string()
      .email()
      .matches(/^(?!.*@[^,]*,)/),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  })
  .required();
export type CreateAccountInterface = yup.InferType<typeof CreateAccountYupSchema>;
