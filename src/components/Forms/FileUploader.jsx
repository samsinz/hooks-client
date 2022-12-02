import React, { useRef } from "react";
import "./../../styles/Forms/fileUploader.css";

const FileUploader = ({ onFileSelectError, onFileSelectSuccess }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    if (file.size > 100000)
      onFileSelectError({ error: "Your image is too heavy" });
    else onFileSelectSuccess(file);
  };

  return (
    <div className="fileUploader">
      <input type="file" onChange={handleFileInput} ref={fileInput} />
      <p
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      >
        Upload a profile picture
      </p>
    </div>
  );
};

export default FileUploader;
