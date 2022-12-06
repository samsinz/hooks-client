import React from "react";
import FileUploader from "../FileUploader";

const Part3 = () => {
  return (
    <div>
      <label htmlFor="nationality">Nationality</label>
      <input
        onChange={handleChange}
        value={values.nationality}
        type="search"
        id="nationality"
        name="nationality"
      />

      <label htmlFor="comment">Comments</label>
      <input
        onChange={handleChange}
        value={values.comment}
        type="textarea"
        id="comment"
        name="comment"
      />

      <FileUploader onFileSelectSuccess={(file) => setSelectedFile(file)} />
    </div>
  );
};

export default Part3;
