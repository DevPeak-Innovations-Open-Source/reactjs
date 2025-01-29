import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateEmail, validateContact } from "./utils/validation";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Formik Form</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          contact: "",
          gender: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Name is required";
          }

          const emailError = validateEmail(values.email);
          if (emailError) {
            errors.email = emailError;
          }

          const contactError = validateContact(values.contact);
          if (contactError) {
            errors.contact = contactError;
          }

          if (!values.gender) {
            errors.gender = "Gender is required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form Submitted:", values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label htmlFor="contact">Contact</label>
              <Field type="text" id="contact" name="contact" />
              <ErrorMessage
                name="contact"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label>Gender</label>

              <div className="gender-options">
                <label>
                  <Field type="radio" name="gender" value="male" />
                  Male
                </label>
                <label>
                  <Field type="radio" name="gender" value="female" />
                  Female
                </label>
                <label>
                  <Field type="radio" name="gender" value="other" />
                  Other
                </label>
              </div>
              <ErrorMessage
                name="gender"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
