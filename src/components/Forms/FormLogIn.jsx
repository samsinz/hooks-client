import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import useAuth from "../../auth/useAuth";
import { Link, useNavigate } from "react-router-dom";

const FormLogIn = ({ closeLogin, showSignup }) => {
  const [{ email, password }, handleChange] = useForm({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    apiHandler
      .login({ email, password })
      .then((res) => {
        console.log(res);
        storeToken(res.authToken);
        authenticateUser();
        navigate("/");
        closeLogin();
      })
      .catch((e) => {
        setError(e.response.data);
      });
  };

  return (
    <>
      <div className="FormEditProfile">
        <span onClick={closeLogin} className="svgButton">
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
          <h2>Login</h2>
          <p>Don't have an account yet?</p>
          <p onClick={showSignup}>Signup</p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="accountEmail"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="accountPassword"
            name="password"
            onChange={handleChange}
            value={password}
          />
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

export default FormLogIn;

// const token = localStorage.getItem('authToken')

// axios.get("http://localhost:8080/api/private", {
// 	headers: {
// 		Authorization: `Bearer ${token}` ,
// 	},
// })
