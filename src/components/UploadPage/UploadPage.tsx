import React, { useState, useRef } from "react";
import "./UploadPage.css";
import { star } from "../../assets";
import DragDropUpload from "./DragDropUpload";
import FileItem from "./FileItem";
import { MAX_FILES, MAX_FILE_SIZE_MB } from "../../utils";

interface UploadedFile {
  name: string;
  size: string;
  progress: number;
}

const formatFileSize = (size: number): string => {
  return size > 1024 * 1024
    ? (size / (1024 * 1024)).toFixed(2) + " MB"
    : (size / 1024).toFixed(2) + " KB";
};

const UploadPage: React.FC = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const addFiles = (newFiles: File[]) => {
    setFiles((prevFiles) => {
      const existingNames = new Set(prevFiles.map((file) => file.name));
      
      const filteredFiles = newFiles.filter((file) => !existingNames.has(file.name));
      
      return prevFiles.length + filteredFiles.length > MAX_FILES
        ? prevFiles
        : [...prevFiles, ...filteredFiles.map((file) => ({
            name: file.name,
            size: formatFileSize(file.size),
            progress: 100,
          }))];
    });
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

      <DragDropUpload onFilesAdded={addFiles} maxSizeMB={MAX_FILE_SIZE_MB} />

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        multiple
        onChange={(e) => e.target.files && addFiles(Array.from(e.target.files))}
      />

      <div className="upload-progress">
        {files.length > 0 ? (
          files.map((file: UploadedFile, index: number) => (
            <FileItem
              key={file.name}
              file={file}
              onRemove={() =>
                setFiles((prev) => prev.filter((_, i) => i !== index))
              }
            />
          ))
        ) : (
          <p className="no-files">No files uploaded.</p>
        )}
      </div>

      <div className="button-group">
        <button className="cancel-btn" onClick={() => setFiles([])}>Cancel</button>
        <button className="attach-btn" onClick={() => fileInputRef.current?.click()}>
          Attach files
        </button>
      </div>
    </div>
  );
};

export default UploadPage;
