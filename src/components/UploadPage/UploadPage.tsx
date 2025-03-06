import React, { useRef, useState, useCallback } from "react";
import "./UploadPage.css";
import { upload, star, file, frame } from "../../assets";

// Define types
interface UploadedFile {
  name: string;
  size: string;
  progress: number;
}

const MAX_FILES = 2; 
const MAX_FILE_SIZE_MB = 50; 

const UploadPage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Format file size
  const formatFileSize = (size: number): string => {
    return size > 1024 * 1024
      ? (size / (1024 * 1024)).toFixed(2) + " MB"
      : (size / 1024).toFixed(2) + " KB";
  };

  // Add new files while preventing duplicates & exceeding the limit
  const addFiles = useCallback((newFiles: File[]) => {
    setFiles((prevFiles) => {
      const uniqueFiles = newFiles.filter(
        (file) => !prevFiles.some((f) => f.name === file.name)
      );

      if (uniqueFiles.length < newFiles.length) {
        alert("Some files were duplicates and were not added.");
      }

      if (prevFiles.length + uniqueFiles.length > MAX_FILES) {
        alert(`You can only upload a maximum of ${MAX_FILES} files.`);
        return prevFiles;
      }

      return [...prevFiles, ...uniqueFiles.map((file) => ({
        name: file.name,
        size: formatFileSize(file.size),
        progress: 100,
      }))];
    });
  }, []);

  // Handle file input change
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const selectedFiles = Array.from(event.target.files)
      .filter((file) => file.size <= MAX_FILE_SIZE_MB * 1024 * 1024);
    addFiles(selectedFiles);
  };

  // Handle drag & drop upload
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(event.dataTransfer.files)
      .filter((file) => file.size <= MAX_FILE_SIZE_MB * 1024 * 1024);
    addFiles(droppedFiles);
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

      {/* Drag & Drop Upload Box */}
      <div
        className={`upload-box ${isDragging ? "dragging" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDrop={handleDrop}
        onDragLeave={() => setIsDragging(false)}
      >
        <div className="image-container">
          <img src={upload} alt="upload" className="absolute-image" />
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
          <span className="click-upload" onClick={() => fileInputRef.current?.click()}>
            Click to upload
          </span>{" "}
          or drag and drop files below
        </p>
        <p>Maximum file size {MAX_FILE_SIZE_MB} MB</p>
      </div>

      {/* Uploaded File List */}
      <div className="upload-progress">
        {files.map((file, index) => (
          <div className="file" key={file.name}>
            <div className="file-left">
              <img src={frame} alt="File Thumbnail" className="file-thumbnail" />
            </div>
            <div className="file-info">
              <span className="file-name">{file.name}</span>
              <span className="file-size">{file.size}</span>
            </div>
            <div className="progress-container">
              <div
                className={`progress-bar ${file.progress === 100 ? "full" : "partial"}`}
                style={{ width: `${file.progress}%` }}
              ></div>
              <span className="progress-percentage">{file.progress}%</span>
            </div>
            <button className="close-btn" onClick={() => setFiles((prev) => prev.filter((_, i) => i !== index))}>
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button className="cancel-btn" onClick={() => setFiles([])}>
          Cancel
        </button>
        <button className="attach-btn" onClick={() => fileInputRef.current?.click()}>
          Attach files
        </button>
      </div>
    </div>
  );
};

export default UploadPage;
