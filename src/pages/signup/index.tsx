import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { authClient } from '../../../server/auth/client';

const signupSchema = z
  .object({
    name: z.string(),
    username: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((value) => value.password === value.confirmPassword);

function SignUp() {
  const form = useForm({
    defaultValues: {
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    validators: {
      onSubmit: signupSchema,
    },
    onSubmit: async ({ value }) => {
      console.log({ value });
      await authClient.signUp.email({
        name: value.name,
        email: value.username,
        password: value.password,
      });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Field name="name">
        {(field) => (
          <label htmlFor={field.name}>
            {field.name}:
            <input
              name={field.name}
              id={field.name}
              type="text"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </label>
        )}
      </form.Field>
      <form.Field name="username">
        {(field) => (
          <label htmlFor={field.name}>
            {field.name}:
            <input
              name={field.name}
              id={field.name}
              type="email"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </label>
        )}
      </form.Field>
      <form.Field name="password">
        {(field) => (
          <label htmlFor={field.name}>
            {field.name}:
            <input
              name={field.name}
              id={field.name}
              type="password"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </label>
        )}
      </form.Field>
      <form.Field name="confirmPassword">
        {(field) => (
          <label htmlFor={field.name}>
            {field.name}:
            <input
              name={field.name}
              id={field.name}
              type="password"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </label>
        )}
      </form.Field>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SignUp;
