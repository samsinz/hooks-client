import React from "react";
import FileUploader from "../FileUploader";
import "./../../../styles/Forms/addhook.css";

const Part3 = ({ values, handleChange }) => {
  return (
    <div className="addhook">
      <label htmlFor="comment">Comments</label>
      <input
        onChange={handleChange}
        value={values.comment}
        type="textarea"
        id="comment"
        name="comment"
      />

      <FileUploader onFileSelectSuccess={(file) => setSelectedFile(file)} />

      <button type="submit" className="svgButton arrowButton">
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3177 20L11.6771 18.3807L18.4314 11.6264H0.938477V9.28267H18.4314L11.6771 2.54972L13.3177 0.909091L22.8632 10.4545L13.3177 20Z"
            fill="#11161B"
          />
        </svg>
      </button>
    </div>
  );
};

export default Part3;
