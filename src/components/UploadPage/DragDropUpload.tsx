import React, { useRef, useState } from "react";
import { upload, file } from "../../assets";

interface DragDropUploadProps {
  onFilesAdded: (files: File[]) => void;
  maxSizeMB: number;
}

const DragDropUpload: React.FC<DragDropUploadProps> = ({ onFilesAdded, maxSizeMB }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const selectedFiles = Array.from(event.target.files).filter(
      (file) => file.size <= maxSizeMB * 1024 * 1024
    );
    onFilesAdded(selectedFiles);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(event.dataTransfer.files).filter(
      (file) => file.size <= maxSizeMB * 1024 * 1024
    );
    onFilesAdded(droppedFiles);
  };

  return (
    <div
      className={`upload-box ${isDragging ? "dragging" : ""}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
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
      <p>Maximum file size {maxSizeMB} MB</p>
    </div>
  );
};

export default DragDropUpload;
