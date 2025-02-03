import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/validation";
import "./Signup.css";
import { google, facebook, board } from "../../assets";

const Signup = () => {
  const apiUrl =
    "https://expressjs-backend-6h6x.onrender.com/post-contact-details";

  const handleSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    console.log("Form submitted with values:", values);

    try {
      const emailError = validateEmail(values.email);
      const passwordError = validatePassword(values.password);
      console.log("Email validation:", emailError);
      console.log("Password validation:", passwordError);

      if (emailError || passwordError) {
        console.log("Validation failed");
        setStatus({ message: "Validation failed. Please check your inputs." });
        return;
      }

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log("API Response Status:", response.status);
      if (!response.ok) {
        throw new Error("Failed to submit form, please try again later.");
      }

      const data = await response.json();
      console.log("API Response Data:", data);

      resetForm();
      setSubmitting(false);
      setStatus({ message: "Account created successfully! Please login." });
    } catch (error) {
      console.error("Error during submission:", error);
      setErrors({ submit: error.message });
      setSubmitting(false);
      setStatus({ message: error.message });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>
          <span>Stay on top of</span>
          <br />
          time tracking
        </h1>
        <img src={board} alt="Time Tracking Illustration" />
      </div>
      <div className="auth-right">
        <h2>Create Account</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, status }) => (
            <Form className="auth-form">
              <div className="name-container">
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
                <ErrorMessage
                  name="firstName"
                  component="p"
                  className="error1"
                />

                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
                <ErrorMessage name="lastName" component="p" className="error1" />
              </div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                validate={validateEmail}
              />
              <ErrorMessage name="email" component="p" className="error1" />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                validate={validatePassword}
              />
              <ErrorMessage name="password" component="p" className="error1" />
              {status && status.message && (
                <p
                  className={
                    status.message.includes("successfully")
                      ? "success"
                      : "error"
                  }
                >
                  {status.message}
                </p>
              )}

              <button type="submit" disabled={isSubmitting}>
                Create Account
              </button>
            </Form>
          )}
        </Formik>
        <p className="sign1">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <div className="social-buttons">
          <button className="google-btn">
            <img src={google} alt="Google" />
            Sign up with Google
          </button>
          <button className="facebook-btn">
            <img src={facebook} alt="Facebook" />
            Sign up with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signup;
