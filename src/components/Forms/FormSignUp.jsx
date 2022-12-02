import "./../../styles/Forms/signup.css";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import FileUploader from "./FileUploader";

const FormSignUp = () => {
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
    fd.append("email", values.name);
    fd.append("image", selectedFile);
    fd.append("password", values.password);

    apiHandler
      .signup(values)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };
  return (
    <>
      <div className="FormSignUp">
        {error && <h3 className="error">{error.message}</h3>}
        <form onSubmit={handleSubmit}>
          <h2>Create your account</h2>
          <p>
            Already have an accout? <Link to="/">Log in</Link>
          </p>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={values.name}
            type="text"
            id="name"
            name="name"
          />
          <label htmlFor="birth">Birthdate</label>
          <input
            onChange={handleChange}
            value={values.birth}
            type="date"
            id="birth"
            name="birth"
            max={current}
          />
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
          <label htmlFor="image">Upload a profile picture</label>
          <FileUploader
            onFileSelectSuccess={(file) => setSelectedFile(file)}
            onFileSelectError={({ error }) => alert(error)}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default FormSignUp;
