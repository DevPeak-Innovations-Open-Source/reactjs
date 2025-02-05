import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./PublicationForm.css";
import { cloudimage } from "../../assets";

const PublicationForm = ({ onSubmit, setCurrentStep }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const formFields = [
    { name: "issue", label: "What is the specific issue you are addressing?" },
    { name: "importance", label: "Why is this issue important and to whom?" },
    {
      name: "advice",
      label: "What is the actionable advice you will be delivering?",
    },
    {
      name: "evidence",
      label: "What is the evidence to support your findings?",
    },
  ];

  const formik = useFormik({
    initialValues: {
      issue: "",
      importance: "",
      advice: "",
      evidence: "",
    },
    validationSchema: Yup.object({
      issue: Yup.string().required("Required"),
      importance: Yup.string().required("Required"),
      advice: Yup.string().required("Required"),
      evidence: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
      onSubmit(values);
    },
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setUploadedFile(file);
  };
  const handleSubmit = () => {
    console.log("Submitted successfully");
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="publication-container">
      <h3>
        For your publication to be considered, please fill out as best as
        possible,your answer to the following questions:
      </h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-section">
          {formFields.map((field, index) => (
            <div key={field.name} className="form-group">
              <label htmlFor={field.name}>{field.label}</label>
              <textarea
                id={field.name}
                name={field.name}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Please provide as much detail as possible."
              />
              {formik.touched[field.name] && formik.errors[field.name] && (
                <div className="error">{formik.errors[field.name]}</div>
              )}
            </div>
          ))}
        </div>

        <div className="upload-section">
          <h4>Provide your Publication Outline and Supporting Information</h4>
          <p className="outlined-paragraph">
            Upload your outline (required). You can find an{" "}
            <span className="highlight">outline</span> template to work from
            here. If applicable, include supporting decks and/or other
            materials. Do not submit without a completed outline that explains
            the issue, why it is important, and the actionable advice you will
            be delivering. No project can begin without an outline.
          </p>
          <div
            className="upload-box"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              id="fileUpload"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
            <img
              src={cloudimage}
              alt="Upload Icon"
              className="upload-icon"
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            />
            <p>
              Drag and drop, or
              <label htmlFor="fileUpload" className="browse-files">
                browse your files
              </label>
              <input
                type="file"
                id="fileUpload"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </p>
            {uploadedFile && <p>Uploaded: {uploadedFile.name}</p>}
          </div>
        </div>

        <div className="button-group">
          <button
            type="back"
            className="back-btn"
            onClick={() => setCurrentStep(2)}
          >
            Back
          </button>
          <button type="save" className="save-btn">
            Save As Draft
          </button>
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PublicationForm;
