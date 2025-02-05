import React, { useState } from "react";
import "./stepform.css";
import { bg } from "../../assets";
import ProjectDetailsForm from "../ProjectDetailsForm/ProjectDetailsForm";
import PublicationForm from "../PublicationForm/PublicationForm";

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const guidelines = [
    { number: "1", text: "Pitch to Publish Guidelines" },
    { number: "2", text: "Brand and Design Guidelines", icon: true },
    { number: "3", text: "Co-Publishing Guidelines" },
    { number: "4", text: "Editorial Guidelines Checklist", icon2: true },
  ];

  const stepsData = [
    {
      id: 1,
      title: "Review & Understand Editorial Guidelines",
      content: (
        <div className="step-1-content">
          <h2 className="editorial-heading">Editorial Guidelines</h2>
          <div className="step-image-container">
            <p className="text-above-boxes">
              Please ensure that you have read and understood the following
              guidelines before starting.
            </p>
            <img src={bg} alt="Guidelines" className="blurred-image" />
            <div className="boxes">
              {guidelines.map((guideline, index) => (
                <div className="box" key={index}>
                  {/* {guideline.icon && (
                    <svg
                      width="20%"
                      height="20%"
                      viewBox="0 0 41 40"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect x="0.760742" width="39.447" height="40" fill="url(#pattern87)" />
                      <defs>
                        <pattern id="pattern87" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlinkHref="#image0_400_2001" transform="matrix(0.01 0 0 0.00986176 0 0.00691195)" />
                        </pattern>
                        <image
                          id="image0_400_2001"
                          width="100"
                          height="100"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGVUl..."
                        />
                      </defs>
                    </svg>
                    
                  )} */}
                  {/* {guideline.icon2 && (
                    <svg width="50%" height="50%" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.12915" y="0.320435" width="39.447" height="40" fill="url(#pattern67)" />
                    <defs>
                        <pattern id="pattern67" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_400_2015" transform="matrix(0.01 0 0 0.00986176 0 0.00691195)" />
                        </pattern>
                        <image id="image0_400_2015" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVU..." />
                    </defs>
                </svg>
                  )} */}
                  <span className="box-number">{guideline.number}</span>{" "}
                  {guideline.text}
                </div>
              ))}
            </div>
            <p className="green-line"></p>
            <p className="note">
              Note: It is the author team’s responsibility to ensure you have
              read and understood these guidelines before proceeding.
            </p>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="step-1-checkbox"
                onChange={() => setCurrentStep(2)}
              />
              <label htmlFor="step-1-checkbox">
                I confirm that I have read and understood the above guidelines
                before proceeding.
              </label>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Project Details",
      content: (
        <>
          <ProjectDetailsForm setCurrentStep={setCurrentStep} />
        </>
      ),
    },
    {
      id: 3,
      title: "Develop Your Publication Outline",
      content: (
        <>
          <PublicationForm setCurrentStep={setCurrentStep} />
        </>
      ),
    },
  ];

  return (
    <div className="step-form">
      <div className="steps-container">
        {stepsData.map((step, index) => (
          <div key={step.id} className="step-wrapper">
            <div className={`step ${currentStep === step.id ? "active" : ""}`}>
              <div className="step-number">{step.id}</div>
              <div
                className={`step-title ${
                  currentStep === step.id ? "active" : ""
                }`}
              >
                {step.title}
              </div>
            </div>

            {index < stepsData.length - 1 && step.id < 2 && (
              <div className="step-connector"></div>
            )}
            {currentStep === step.id && (
              <div className="step-box active-step">{step.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepForm;
