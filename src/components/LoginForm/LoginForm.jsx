import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./LoginForm.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = values => {
  console.log("form data", values);
};

const validate = values => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email format";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const LoginForm = () => {
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {() => (
          <Form className="form-container">
            <div>
              <label htmlFor="name">Name:</label> <br/>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="email">Email:</label><br/>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="password">Password:</label><br/>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button className="btn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
