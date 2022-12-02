import React, { useRef } from "react";
import "./../../styles/Forms/fileUploader.css";

const FileUploader = ({ onFileSelectError, onFileSelectSuccess }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    console.log(file.size);
    if (file.size > 300000)
      onFileSelectError({ error: "Choose a lighter image" });
    else onFileSelectSuccess(file);
  };

  return (
    <div className="fileUploader">
      <input type="file" onChange={handleFileInput} ref={fileInput} />
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      >
        Upload a profile picture
      </button>
    </div>
  );
};

export default FileUploader;
