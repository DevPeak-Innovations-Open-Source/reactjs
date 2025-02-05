import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./ProjectDetailsForm.css";

const ProjectDetailsForm = ({ setCurrentStep }) => {
  const initialValues = {
    authors: "",
    fipaSector: "",
    geography: "",
    projectTitle: "",
    caseCode: "",
    primarySponsor: "",
    secondarySponsor: "",
    topicArea: "",
    externalCoSponsor: false,
    deadline: "",
    references: [],
    targetClients: [],
  };

  const validationSchema = Yup.object({
    authors: Yup.string().required("Required"),
    fipaSector: Yup.string().required("Required"),
    geography: Yup.string().required("Required"),
    projectTitle: Yup.string().required("Required"),
    primarySponsor: Yup.string().required("Required"),
    targetClients: Yup.array()
      .min(1, "Select at least one")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("Form data:", values);
    setCurrentStep((prev) => prev + 1);
  };

  const sectors = ["Technology", "Finance", "Healthcare"];
  const geographies = ["Asia", "Europe", "North America"];
  const sponsors = ["Corporate", "Government", "Non-Profit Organization"];
  const secondarySponsors = [
    "Intellectual Property",
    "Litigation",
    "Tax Law",
    "Employment Law",
    "Real Estate",
  ];
  const topics = [
    "Data Privacy",
    "Cybersecurity",
    "Corporate Governance",
    "Environmental Law",
    "Intellectual Property",
  ];
  const references = [
    "China",
    "Hong Kong",
    "Taiwan",
    "Macao",
    "Russia",
    "Middle East",
    "Israel",
    "Gaza",
  ];
  const clients = [
    "Enterprise",
    "Small Business",
    "Startups",
    "Government Agencies",
    "Educational Institutions",
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue, isValid }) => (
        <Form className="form">
          <div className="form-group">
            <h2>Requestor Information</h2>
            <label>
              Please list all the authors on this publication before starting.
              <span>*</span>
              <small>
                (to select the lead author of this paper click on the name of
                the person below)
              </small>
            </label>
            <Field
              name="authors"
              type="text"
              placeholder="Search authors..."
              className="form-input"
            />
            {touched.authors && errors.authors && (
              <div className="error">{errors.authors}</div>
            )}
          </div>

          <div
            className="form-row"
            style={{
              gap: "15px",
            }}
          >
            {[
              ["fipaSector", "FIPA Sector", sectors],
              ["geography", "Geography", geographies],
            ].map(([name, label, options]) => (
              <div className="form-group" key={name}>
                <label>{label}</label>
                <Field as="select" name={name} className="form-input">
                  <option value="">Select {label}</option>
                  {options.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </Field>
              </div>
            ))}
            <div className="form-group">
              <label>Project Title</label>
              <Field
                name="projectTitle"
                type="text"
                placeholder="Enter title"
                className="form-input"
              />
              {touched.projectTitle && errors.projectTitle && (
                <div className="error">{errors.projectTitle}</div>
              )}
            </div>
          </div>

          <h3>Practice Areas & Sponsorship Details</h3>
          <div
            className="form-row"
            style={{
              width: "98%",
              gap: "40px",
            }}
          >
            {[
              ["caseCode", "Case Code"],
              ["primarySponsor", "Primary Sponsor", sponsors],
              ["deadline", "Deadline"],
            ].map(([name, label, options]) => (
              <div
                className="form-group"
                key={name}
                style={{
                  marginLeft: name === "deadline" ? "-20px" : "0px",
                  minWidth: name === "deadline" ? "380px" : "200px",
                  minWidth: name === "primarySponsor" ? "380px" : "200px",
                }}
              >
                <label>
                  {label}
                  <span>*</span>
                </label>
                {options ? (
                  <Field as="select" name={name} className="form-input">
                    <option value="">Select {label}</option>
                    {options.map((option) => (
                      <option key={option} value={option.toLowerCase()}>
                        {option}
                      </option>
                    ))}
                  </Field>
                ) : (
                  <Field
                    name={name}
                    type={name === "deadline" ? "date" : "text"}
                    className="form-input"
                  />
                )}

                {name === "caseCode" && (
                  <small className="small-text">
                    (To select the lead author of this paper, click on the name
                    of the person below)
                  </small>
                )}
              </div>
            ))}
          </div>

          <div className="form-row">
            {[
              [
                "secondarySponsor",
                "Secondary PA Co-sponsor(s)",
                secondarySponsors,
              ],
              ["topicArea", "Topic Area", topics],
            ].map(([name, label, options]) => (
              <div className="form-group" key={name}>
                <label>{label}</label>
                <Field as="select" name={name} className="form-input">
                  <option value="">Select {label}</option>
                  {options.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </Field>
              </div>
            ))}
            <div className="form-group">
              <label>References to Countries</label>
              <div className="checkbox-group">
                {references.map((ref) => (
                  <label key={ref}>
                    <Field type="checkbox" name="references" value={ref} />{" "}
                    {ref}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Is there an external Co-Sponsor?</label>
            <div className="switch-container">
              <label className="switch">
                <Field
                  type="checkbox"
                  name="externalCoSponsor"
                  className="switch-input"
                />
                <span className="slider"> </span>
              </label>
              <small className="info-text">
                Read the Co-publishing Guidelines
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-text"
                >
                  &nbsp;here
                </a>
              </small>
            </div>
          </div>

          <h3>Target Audience</h3>
          <div className="form-group">
            <label>
              Target Clients <span>*</span>
              <small className="notee">(Minimum 1 to be selected)</small>
            </label>
            <Field
              as="select"
              name="targetClients"
              className="form-input"
              onChange={(e) => {
                setFieldValue("targetClients", [e.target.value]);
              }}
            >
              <option value="">Select the clients</option>
              {clients.map((client) => (
                <option key={client} value={client}>
                  {client}
                </option>
              ))}
            </Field>
            {touched.targetClients && errors.targetClients && (
              <div className="error">{errors.targetClients}</div>
            )}
          </div>

          <div className="form-actions">
            {["Cancel", "Save as Draft", "Next"].map((label, index) => (
              <button
                key={label}
                type={index === 2 ? "submit" : "button"}
                className={`btn ${
                  index === 2
                    ? "primary"
                    : index === 1
                    ? "outline"
                    : "secondary"
                }`}
                disabled={index === 2 && !isValid}
              >
                {label}
              </button>
            ))}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProjectDetailsForm;
