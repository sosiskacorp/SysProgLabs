import React from 'react';
import { Form, Field } from 'react-final-form';

const FinalFormExample = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords must match';
    }
    return errors;
  };

  return (
    <Form onSubmit={onSubmit} validate={validate}>
      {({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username">
            {({ input, meta }) => (
              <div>
                <label>Username</label>
                <input {...input} />
                {meta.error && meta.touched && <div>{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="password" type="password">
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} />
                {meta.error && meta.touched && <div>{meta.error}</div>}
              </div>
            )}
          </Field>
          <Field name="confirmPassword" type="password">
            {({ input, meta }) => (
              <div>
                <label>Confirm Password</label>
                <input {...input} />
                {meta.error && meta.touched && <div>{meta.error}</div>}
              </div>
            )}
          </Field>
          <button type="submit" disabled={submitting || pristine}>
            Submit
          </button>
          <button type="button" onClick={form.reset} disabled={submitting || pristine}>
            Reset
          </button>
        </form>
      )}
    </Form>
  );
};

export default FinalFormExample;