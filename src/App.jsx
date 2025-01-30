import React from "react";
import { Formik, Form, Field } from "formik";
import { validateEmail, validateContact } from "./utils/validation";
import "./App.css";

const MyForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="form-heading">Formik</h2>

      <Formik
        initialValues={{ username: "", email: "", contact: "" }}
        validate={(values) => {
          const errors = {};

          const emailError = validateEmail(values.email);
          if (emailError) {
            errors.email = emailError;
          }

          const contactError = validateContact(values.contact);
          if (contactError) {
            errors.contact = contactError;
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const requestData = {
            title: `Name:${values.username}`,
            body: `Email: ${values.email}, Contact: ${values.contact}`,
            userId: 1,
          };

          fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(requestData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => {
              console.log("Response from API:", json);
              alert("Form submitted successfully!");
              resetForm();
            })
            .catch((error) => {
              console.error("Error submitting form:", error);
              alert("Failed to submit the form. Try again.");
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form className="form-container">
            <label className="label">Username:</label>
            <Field
              name="username"
              className="input"
              onChange={(e) => {
                const usernameValue = e.target.value;
                setFieldValue("username", usernameValue.toUpperCase());
                setFieldValue("email", usernameValue ? `${usernameValue.replace(/\s+/g, '').toLowerCase()}@gmail.com` : "");
              }}
            />

            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" className="input" />

            <label htmlFor="contact">Contact</label>
            <Field type="text" id="contact" name="contact" className="input" />

            <button type="submit" className="button" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
