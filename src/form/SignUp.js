import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const vaidate = values => {
  let errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
const initialValue = { email: '', password: '' };

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};
const SignUp = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik initialValues={initialValue} validate={vaidate} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field type='email' name='email' />
          <ErrorMessage name='email' component='div' />
          <Field type='password' name='password' />
          <ErrorMessage name='password' component='div' />
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignUp;
