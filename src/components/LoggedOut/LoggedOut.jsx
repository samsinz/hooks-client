import React from "react";
import useAuth from "../../auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import "../../styles/loading.css";

const LoggedOut = () => {
  const { isLoggedIn, isLoading } = useAuth();
  if (isLoading)
    return (
      <div className="Loading">
        <div className="icon">
          <div className="circle icon circle-animation"> </div>
        </div>
      </div>
    );
  if (isLoggedIn) return <Navigate to="/dashboard" />;
  else return <Outlet />;
};

export default LoggedOut;
