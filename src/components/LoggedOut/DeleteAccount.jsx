import React from "react";
import useAuth from "../../auth/useAuth";
import { useRef, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import "../../styles/Forms/editProfile.css";

const DeleteAccount = ({ closeDelete }) => {
  const { removeUser } = useAuth();

  const deleteUser = () => {
    apiHandler
      .delete("/api/auth/me")
      .then(async () => {
        removeUser();
        console.log("hello");
      })
      .catch((error) => {
        console.log(error);
        // setError(error.response.data);
      });
  };

  return (
    <div className="deleteModal">
      <span onClick={closeDelete} className="svgButton">
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

      <h2>Be careful, this action is irreversible !</h2>

      <p className="delete" onClick={deleteUser}>
        Yes, I want to delete my account.
      </p>
    </div>
  );
};

export default DeleteAccount;
