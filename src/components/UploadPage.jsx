import React, { useEffect, useRef } from "react";
import "./upload.css";
import { uploadIcon, star, file, frame } from ".";

const UploadPage = () => {
  const fileInputRef = useRef(null);
  const divRef = useRef(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    if (divRef.current) {
      console.log("Div Element:", divRef.current);
      console.log("Child Elements:", divRef.current.children);
    }
  }, []);

  return (
    <div ref={divRef} className="upload-container">
      <div className="upload-header">
        <div className="header-left">
          <h4>Upload and Attach Files</h4>
          <h6>Upload and attach files to its project</h6>
        </div>
        <div className="header-right">
          <img src={star} alt="Upload Icon" />
        </div>
      </div>

      <div className="upload-box">
        <div className="image-container">
          <img src={uploadIcon} alt="upload" className="absolute-image" />
          <img src={file} alt="upload" className="relative-image" />
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => console.log(e.target.files)}
        />
        <p>
          <span className="click-upload" onClick={handleFileUpload}>
            Click to upload
          </span>{" "}
          or drag and drop
        </p>
        <p>Maximum file size 50 MB</p>
      </div>

      <div className="upload-progress">
        <div className="file">
          <div className="file-left">
            <img src={frame} alt="File Thumbnail" className="file-thumbnail" />
          </div>
          <div className="file-info">
            <span className="file-name">Prototype recording 01.mp4</span>
            <span className="file-size">20 MB</span>
          </div>
          <div className="progress-container">
            <div className="progress-bar full"></div>
            <span className="progress-percentage">100%</span>
          </div>
          <button className="close-btn">✕</button>
        </div>

        <div className="file">
          <div className="file-left">
            <img src={frame} alt="File Thumbnail" className="file-thumbnail" />
          </div>
          <div className="file-info">
            <span className="file-name">Prototype recording 02.mp4</span>
            <span className="file-size">16 MB</span>
          </div>
          <div className="progress-container">
            <div className="progress-bar partial"></div>
            <span className="progress-percentage">40%</span>
          </div>
          <button className="close-btn">✕</button>
        </div>
      </div>

      <div className="button-group">
        <button className="cancel-btn">Cancel</button>
        <button className="attach-btn" onClick={handleFileUpload}>
          Attach files
        </button>
      </div>
    </div>
  );
};

export default UploadPage;
