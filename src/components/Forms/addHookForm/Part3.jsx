import React from "react";
import FileUploader from "../FileUploader";
import "./../../../styles/Forms/addhook.css";

const Part3 = ({ values, handleChange, setSelectedFile, setStep }) => {
  return (
    <div className="part3">
      <h2>Optional fields</h2>
      {!values._id ? (
        <div>
          <label htmlFor="comment">Partner characteristics</label>
          <input onChange={handleChange} value={values.comment} type="textarea" id="comment" name="comment" placeholder="eg. tall girl from berlin"/>
        </div>
      ) : (
        true
      )}
      <label htmlFor="notes">Add notes</label>
      <input onChange={handleChange} value={values.notes} type="textarea" id="notes" name="notes"  placeholder="eg. after jack's party" />
      {!values._id ? <FileUploader onFileSelectSuccess={(file) => setSelectedFile(file)} />:true}
      <button type="submit" className="arrowButton hover">
        <svg width="30" height="30" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.3177 20L11.6771 18.3807L18.4314 11.6264H0.938477V9.28267H18.4314L11.6771 2.54972L13.3177 0.909091L22.8632 10.4545L13.3177 20Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Part3;
