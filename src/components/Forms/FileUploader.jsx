import React, { useEffect, useRef, useState } from "react";
import "./../../styles/Forms/fileUploader.css";

const FileUploader = ({ onFileSelectSuccess, setImageProfile }) => {
  const fileInput = useRef(null);
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(false)
  },[])

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    setImageProfile ? setImageProfile(URL.createObjectURL(file)) : true;
    onFileSelectSuccess(file);
    setState(true);
    // setTimeout(() => {
    //   setState(false);
    // }, 8000);
  };

  return (
    <div className="fileUploader">
      <input type="file" onChange={handleFileInput} ref={fileInput} />
      <div
        className="btn btn-primary"
        onClick={(e) => {
          fileInput.current && fileInput.current.click();
        }}
      >
        <p>Upload a picture {state ? "  ✓" : ""}</p>
      </div>
    </div>
  );
};

export default FileUploader;
