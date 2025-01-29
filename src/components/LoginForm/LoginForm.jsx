import React, { useState } from "react";
import "./LoginForm.css";
import { useFormik } from "formik";



const LoginForm = () => {


    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          password: "",
        },
      
        onSubmit : values =>{
            console.log("form data", values)
        }

      });



    //   console.log("Form Data",formik.values);

  return (
    <div className="container">
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <span>Name :-</span>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <span>Email :-</span>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <span>Password :-</span>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
