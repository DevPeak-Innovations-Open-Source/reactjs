import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateEmail, validateContact } from "./utils/validation";
import "./App.css";

const MyForm = () => {
  const [submittedData, setSubmittedData] = useState(null); 

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
            username: values.username,
            email: values.email,
            contact: values.contact,
          };

          console.log("Sending data:", requestData);

          fetch(
            "https://expressjs-backend-6h6x.onrender.com/post-contact-details",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(requestData),
            }
          )
            .then((response) => {
              console.log("Response Status:", response.status);
              if (!response.ok) {
                throw new Error(
                  "Failed to submit form: " + response.statusText
                );
              }
              return response.json();
            })
            .then((data) => {
              console.log("Success:", data);
              alert("Form submitted successfully!");
              setSubmittedData(requestData); 
              resetForm();
            })
            .catch((error) => {
              console.error("Error:", error);
              alert("Failed to submit the form. Please try again.");
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
                setFieldValue(
                  "email",
                  usernameValue
                    ? `${usernameValue
                        .replace(/\s+/g, "")
                        .toLowerCase()}@gmail.com`
                    : ""
                );
              }}
            />

            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" className="input" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />

            <label htmlFor="contact">Contact</label>
            <Field type="text" id="contact" name="contact" className="input" />
            <ErrorMessage
              name="contact"
              component="div"
              className="error-message"
            />

            <button type="submit" className="button" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Details</h3>
          <p>
            <strong>Username:</strong> {submittedData.username}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Contact:</strong> {submittedData.contact}
          </p>
        </div>
      )}
    </div>
  );
};

export default MyForm;
