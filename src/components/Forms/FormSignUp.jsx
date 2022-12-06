import "./../../styles/Forms/signup.css";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import FileUploader from "./FileUploader";

const FormSignUp = ({ closeSignup, showLogin }) => {
  const [values, handleChange] = useForm({
    name: "",
    birth: "",
    email: "",
    password: "",
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
    fd.append("birth", values.birth);
    fd.append("image", selectedFile);
    fd.append("password", values.password);

    apiHandler
      .signup(fd)
      .then(() => {
        closeSignup();
        showLogin();
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };
  return (
    <>
      <div className="FormSignUp">
        <span onClick={closeSignup} className="svgButton">
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

        <form onSubmit={handleSubmit}>
          <div className="titleArea">
            <h2>Create your account</h2>
            <div className="toFlex">
              <p> Already have an accout? </p>
              <p className="toLink" onClick={showLogin}>
                Log in
              </p>
            </div>
          </div>

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
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={values.email}
            type="email"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={values.password}
            type="password"
            id="password"
            name="password"
          />
          <FileUploader onFileSelectSuccess={(file) => setSelectedFile(file)} />

          {error && <h3 className="error">{error.message}</h3>}

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

export default FormSignUp;
