import "./../../styles/Forms/editProfile.css";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import FileUploader from "./FileUploader";
import useAuth from "../../auth/useAuth";

const FormEditProfile = ({ closeModal }) => {
  const { currentUser, authenticateUser } = useAuth();

  const [values, handleChange] = useForm({
    name: currentUser.name,
    birth: currentUser.birth,
    image: currentUser.image,
  });
  const [selectedFile, setSelectedFile] = useState("");
  const current = new Date().toISOString().split("T")[0];
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", values.name);
    fd.append("email", values.email);
    fd.append("image", selectedFile);

    apiHandler
      .patch("/api/auth/me", fd)
      .then(async () => {
        await authenticateUser();
        closeModal();
      })
      .catch((error) => {
        console.log(error);
        // setError(error.response.data);
      });
  };
  return (
    <>
      <div className="FormEditProfile">
        <span onClick={closeModal} className="svgButton">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.13184 2.13184L10.2636 10.2636M10.2636 10.2636L18.3953 18.3953M10.2636 10.2636L2.13184 18.3953M10.2636 10.2636L18.3953 2.13184"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>

        {error && <h3 className="error">{error.message}</h3>}

        <form onSubmit={handleSubmit}>
          <h2>Edit your account</h2>

          <div className="sameLine">
            <div className="left">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                value={values.name}
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="right">
              <label htmlFor="birth">Birthdate</label>
              <input
                onChange={handleChange}
                value={values.birth}
                type="date"
                id="birth"
                name="birth"
                max={current}
              />
            </div>
          </div>

          <FileUploader
            onFileSelectSuccess={(file) => setSelectedFile(file)}
            onFileSelectError={({ error }) => alert(error)}
          />

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
        </form>
      </div>
    </>
  );
};

export default FormEditProfile;
