import React from "react";
import { frame } from "../../assets";

interface FileItemProps {
  file: { name: string; size: string; progress: number };
  onRemove: () => void;
}

const FileItem: React.FC<FileItemProps> = ({ file, onRemove }) => {
  return (
    <div className="file">
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
      <button className="close-btn" onClick={onRemove}>✕</button>
    </div>
  );
};

export default FileItem;
