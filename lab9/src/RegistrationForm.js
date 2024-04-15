import React from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Login:
        <input
          type="text"
          {...register('login', {
            required: 'Login is required',
            minLength: {
              value: 6,
              message: 'Login must be at least 6 characters long',
            },
            maxLength: {
              value: 20,
              message: 'Login must be at most 20 characters long',
            },
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: 'Login can only contain letters and numbers',
            },
          })}
        />
        {errors.login && <p>{errors.login.message}</p>}
      </label>
      <label>
        Password:
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Confirm password is required',
            validate: (value) =>
              value === watch('password') || 'Passwords do not match',
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;