import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addCharacter } from "../../store/slices/starwarSlice"; 
import "./AddUser.css";
import userIllustration from "../../assets/user-illustration.png"; 

const AddUser: React.FC = () => {
  const dispatch = useDispatch();

  const initialValues = {
    id: Date.now(),
    name: "",
    address: "",
  };

  const validate = (values: typeof initialValues) => {
    const errors: Partial<typeof initialValues> = {};
    if (!values.name) errors.name = "User name is required";
    if (!values.address) errors.address = "Address is required";
    return errors;
  };

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    const newUser = { id: Date.now(), ...values }; 
    dispatch(addCharacter(newUser)); 
    resetForm();
  };
  
  

  return (
    <div className="add-user-container">
    
      <div className="form-section">
        <h2>Add User</h2>
        <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="user-form">
              <div className="form-group">
                <Field type="text" name="name" placeholder="User Name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="form-group">
                <Field type="text" name="address" placeholder="Address" />
                <ErrorMessage name="address" component="div" className="error" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>

     
      <div className="image-section">
        <img src={userIllustration} alt="User Illustration" className="user-image" />
      </div>
    </div>
  );
};

export default AddUser;

