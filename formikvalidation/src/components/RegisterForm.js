import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {
  const check = [
    { key: 'option 1', value: 'One' },
    { key: 'option2', value: 'Two' },
  ];

  const initial = {
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    color: '',
    checked: [],
    radio: '',
  };

  const number = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  const validation = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    mobile: Yup.string()
      .matches(number, 'Number is not valid')
      .max(10)
      .min(10)
      .required('required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    color: Yup.string().required('Choose any color'),
    checked: Yup.array().required('required'),
    radio: Yup.string().required('required'),
  });
  return (
    <Formik
      initialValues={initial}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <h1 className="text-center">Registration form</h1>
        <div className="container">
          <div className="mb-4 mt-5">
            <label htmlFor="firstName">First Name</label>
            <div>
              <Field name="firstName" type="text" className="form-control" />
              <div className="text-danger">
                <ErrorMessage name="firstName" />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div>
              {' '}
              <label htmlFor="lastName">Last Name</label>
            </div>

            <Field name="lastName" type="text" className="form-control" />
            <div className="text-danger">
              <ErrorMessage name="lastName" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              {' '}
              <label htmlFor="lastName">Mobile:</label>
            </div>

            <Field name="mobile" type="text" className="form-control" />
            <div className="text-danger">
              <ErrorMessage name="mobile" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="email">Email Address</label>{' '}
            </div>
            <Field name="email" type="email" className="form-control" />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label>Color:</label>
            </div>
            <Field name="color" as="select" className="form-control">
              <option value="">Choose any</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <div className="text-danger">
              <ErrorMessage name="color" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label> Value :</label>
            </div>
            <Field type="checkbox" name="checked" value="One" options={check} />
            One
            <Field type="checkbox" name="checked" value="Two" options={check} />
            Two
            <div className="text-danger">
              <ErrorMessage name="checked"></ErrorMessage>
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label> Gender :</label>
            </div>
            <Field type="radio" name="radio" value="female" />
            Female
            <Field type="radio" name="radio" value="male" />
            Male
            <div className="text-danger">
              <ErrorMessage name="radio"></ErrorMessage>
            </div>
          </div>

          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
