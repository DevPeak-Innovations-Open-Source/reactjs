import React, { useRef, useState } from "react";
import "./Uploadpage.css";
import { assets } from "../../assets/assets";

const Uploadpage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileDetails, setFileDetails] = useState([]);

  const ref = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault(); // if you are not this preventdefault() selected fill will be open new tab
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // Handle drop event
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer.files; // Get dropped files
    if (files && files.length > 0) {
      const fileDetails = Array.from(files).map((file) => ({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        type: file.type,
      }));
      setFileDetails(fileDetails); // Update file details
    }
  };

  // Handle file selection through input

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileDetails = Array.from(files).map((file) => ({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        type: file.type,
      }));

      setFileDetails(fileDetails);
    }
  };

  const renderUploadList = (item, index) => {
    return (
      <div className="box-2" key={index}>
        <div className="box-21">
          <img src={assets.Repo} className="repo-img" alt="Repo" />
          <p>
            {item.name}
            <br />
            {item.size} {item.type}
          </p>
        </div>
        <div className="black-div">
          <div className="black-box"></div>
          <span>100%</span>
        </div>
      </div>
    );
  };

  return (
    <div className={`upload-container ${isDragging ? "dragging" : ""}`}>
      <div className="upload-box">
        <div className="upload-top">
          <div className="top-content">
            <h2 className="content-1">Upload and Attach files</h2>
            <p className="content-2">Upload and attach files to its Project</p>
          </div>
          <div>
            <img src={assets.Group} className="group-img" alt="Group" />
          </div>
        </div>
        <div className="box-container">
          <div className="box-1"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <img src={assets.imgfold} className="img-fold" alt="Folder" />
            <span
              className="upload"
              onClick={() => {
                ref.current?.click();
              }}
            >
              <u>
                <b>Click to upload</b>
              </u>
              <span> or drag and drop</span>
            </span>
            <input
              type="file"
              ref={ref}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <br />
            <span className="content-3">Maximum file size 50MB</span>
          </div>
        </div>
        {fileDetails.map(renderUploadList)}
        <div className="btn-box">
          <button className="btn-1">Cancel</button>
          <button className="btn-2">Attach files</button>
        </div>
      </div>
    </div>
  );
};

export default Uploadpage;
