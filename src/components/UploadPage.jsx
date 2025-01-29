import React, { useEffect, useRef, useState } from "react";
import "./upload.css";
import { uploadIcon, star, file, frame } from ".";

const UploadPage = () => {
  const fileInputRef = useRef(null);
  const uploadBoxRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (event) => {
    const selectedFiles = Array.from(event.target.files).map((file) => ({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      progress: 100,
    }));

    const newFiles = selectedFiles.filter(
      (file) => !files.some((f) => f.name === file.name)
    );

    if (newFiles.length < selectedFiles.length) {
      alert("Some files are duplicates and were not added.");
    }

    const updatedFiles = [...files, ...newFiles];

    if (updatedFiles.length > 2) {
      alert("You can only upload a maximum of 2 files.");
    } else {
      setFiles(updatedFiles);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
    
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(event.dataTransfer.files).map((file) => ({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      progress: 100,
    }));

    const newFiles = droppedFiles.filter(
      (file) => !files.some((f) => f.name === file.name)
    );

    if (newFiles.length < droppedFiles.length) {
      alert("Files are duplicates please add another one.");
    }

    const updatedFiles = [...files, ...newFiles];

    if (updatedFiles.length > 2) {
      alert("You can only upload a maximum of 2 files.");
    } else {
      setFiles(updatedFiles);
    }
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="upload-container">
      <div className="upload-header">
        <div className="header-left">
          <h4>Upload and Attach Files</h4>
          <h6>Upload and attach files to its project</h6>
        </div>
        <div className="header-right">
          <img src={star} alt="Upload Icon" />
        </div>
      </div>

      
      <div
        ref={uploadBoxRef}
        className={`upload-box ${isDragging ? "dragging" : ""}`}
        onDragOver={(event) => handleDragOver(event)}
        onDrop={(event) => handleDrop(event)}
        onDragLeave={handleDragLeave}
      >
        <div className="image-container">
          <img src={uploadIcon} alt="upload" className="absolute-image" />
          <img src={file} alt="upload" className="relative-image" />
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          multiple
          onChange={handleFileUpload}
        />
        <p>
          <span
            className="click-upload"
            onClick={() => fileInputRef.current.click()}
          >
            Click to upload
          </span>{" "}
          or drag and drop files below
        </p>
        <p>Maximum file size 50 MB</p>
      </div>

      <div className="upload-progress">
        {files.map((file, index) => (
          <div className="file" key={index}>
            <div className="file-left">
              <img
                src={frame}
                alt="File Thumbnail"
                className="file-thumbnail"
              />
            </div>
            <div className="file-info">
              <span className="file-name">{file.name}</span>
              <span className="file-size">{file.size}</span>
            </div>
            <div className="progress-container">
              <div
                className={`progress-bar ${
                  file.progress === 100 ? "full" : "partial"
                }`}
                style={{ width: `${file.progress}%` }}
              ></div>
              <span className="progress-percentage">{file.progress}%</span>
            </div>
            <button
              className="close-btn"
              onClick={() => setFiles(files.filter((_, i) => i !== index))}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="cancel-btn" onClick={() => setFiles([])}>
          Cancel
        </button>
        <button
          className="attach-btn"
          onClick={() => fileInputRef.current.click()}
        >
          Attach files
        </button>
      </div>
    </div>
  );
};

export default UploadPage;
