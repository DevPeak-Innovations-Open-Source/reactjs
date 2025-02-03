import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/validation";
import "./Login.css";
import { google, facebook, board } from "../../assets";

const Login = () => {
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
      setStatus({ message: "Form submitted successfully!" });
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
      <div className="auth-right1">
        <div className="login-box1">
          <h2>Login User</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, status }) => (
              <Form className="auth-form1">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  validate={validateEmail}
                />
                <ErrorMessage name="email" component="p" className="error" />

                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  validate={validatePassword}
                />
                <ErrorMessage name="password" component="p" className="error" />
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
                  Login
                </button>
              </Form>
            )}
          </Formik>
          <p className="sign">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
          <div className="social-button">
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
    </div>
  );
};
export default Login;
